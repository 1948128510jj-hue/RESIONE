"""RESIONE CRM Server v4 — 带登录的独立网站"""
import json, os, sys, re, ssl, base64, subprocess, sqlite3, hashlib, secrets, datetime
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.request import Request, urlopen
from http.cookies import SimpleCookie

PORT = 8767
API_KEY = "sk-UcCS8N4YyMfj4ycnzaMf4Wfg6Q7PApFS3YX9PjVpr3ZcHnU9"
BASE_URL = "https://tokenhub.tencentmaas.com/v1"
SSL = ssl.create_default_context(); SSL.check_hostname=False; SSL.verify_mode=ssl.CERT_NONE
DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'crm_data.db')
CRM_HTML = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'RESIONE_CRM.html'),'r',encoding='utf-8').read()

# ─── Database ───
db = sqlite3.connect(DB_PATH, check_same_thread=False)
db.row_factory = sqlite3.Row
db.execute('''CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY, username TEXT UNIQUE, password_hash TEXT, created TEXT)''')
db.execute('''CREATE TABLE IF NOT EXISTS sessions(
    token TEXT PRIMARY KEY, user_id INTEGER, created TEXT)''')
db.execute('''CREATE TABLE IF NOT EXISTS data(
    id INTEGER PRIMARY KEY, user_id INTEGER, kind TEXT, key TEXT, value TEXT,
    UNIQUE(user_id, kind, key))''')
# Create default user if not exists
pw = hashlib.sha256('resione2026'.encode()).hexdigest()
db.execute('INSERT OR IGNORE INTO users(username,password_hash,created) VALUES(?,?,?)',
    ('admin', pw, str(datetime.date.today())))
db.commit()

# ─── Auth helpers ───
def get_user(request):
    cookie = request.headers.get('Cookie','')
    c = SimpleCookie(cookie)
    token = c.get('session')
    if not token: return None
    row = db.execute('SELECT u.* FROM sessions s JOIN users u ON s.user_id=u.id WHERE s.token=?',
        (token.value,)).fetchone()
    return dict(row) if row else None

def require_auth(handler):
    user = get_user(handler)
    if not user:
        handler.send_response(302)
        handler.send_header('Location','/login')
        handler.end_headers()
        return None
    return user

def login_user(username, password):
    h = hashlib.sha256(password.encode()).hexdigest()
    row = db.execute('SELECT * FROM users WHERE username=? AND password_hash=?',
        (username, h)).fetchone()
    if not row: return None
    token = secrets.token_hex(32)
    db.execute('INSERT INTO sessions(token,user_id,created) VALUES(?,?,?)',
        (token, row['id'], str(datetime.date.today())))
    db.commit()
    return token

# ─── Data helpers ───
def get_data(user_id, kind):
    rows = db.execute('SELECT key,value FROM data WHERE user_id=? AND kind=?',
        (user_id, kind)).fetchall()
    return {r['key']: json.loads(r['value']) for r in rows}

def set_data(user_id, kind, key, value):
    # value: dict/list (JSON-encoded), or None (delete)
    if value is None:
        db.execute('DELETE FROM data WHERE user_id=? AND kind=? AND key=?',
            (user_id, kind, key))
    else:
        db.execute('INSERT OR REPLACE INTO data(user_id,kind,key,value) VALUES(?,?,?,?)',
            (user_id, kind, key, json.dumps(value, ensure_ascii=False)))
    db.commit()

# ─── Scraper (same as before) ───
def fetch(url):
    if not url.startswith('http'): url='https://'+url
    req=Request(url,headers={'User-Agent':'Mozilla/5.0'})
    return urlopen(req,context=SSL,timeout=12).read().decode('utf-8',errors='replace')

def text(html):
    t=re.sub(r'<script[^>]*>.*?</script>','',html,flags=re.DOTALL|re.I)
    t=re.sub(r'<style[^>]*>.*?</style>','',t,flags=re.DOTALL|re.I)
    t=re.sub(r'<[^>]+>',' ',t)
    return re.sub(r'\s+',' ',t).strip()

def emails(raw,txt=''):
    es=set(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',raw))
    es.update(re.findall(r'mailto:([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})',raw))
    es.update(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',txt))
    bad={'example.com','domain.com','test.com','your-email'}
    return [e for e in es if not any(b in e.lower() for b in bad) and not e.lower().endswith(('.jpg','.png','.gif','.webp','.svg','.ico','.jpeg'))]

def phones(txt,raw=''):
    ps=set(re.findall(r'\+\d{1,3}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4}',txt))
    if raw: ps.update(re.findall(r'tel:([+\d\s-]+)',raw))
    return list(ps)[:3]

def country(txt):
    for c in ['Turkey','Turkiye','USA','Germany','Netherlands','France','Italy','Spain','UK','China','Japan','Brazil','Canada','Australia','India','UAE','Singapore']:
        if c.lower() in txt.lower(): return c
    return ''

def gstack(url):
    # Try multiple possible gstack browse binary locations
    candidates = [
        os.path.expanduser(r'~/.claude/skills/gstack/browse/dist/browse'),
        os.path.expanduser(r'~/.claude/skills/gstack/browse/dist/browse.exe'),
    ]
    # Also check git-root / codex / agents locations
    for marker in ['.codex', '.agents', '.claude']:
        candidates.append(os.path.expanduser(f'~/{marker}/skills/gstack/browse/dist/browse'))
    gb = None
    for c in candidates:
        if os.path.exists(c):
            gb = c
            break
    if not gb:
        return ''  # gstack browse binary not built — run `cd ~/.claude/skills/gstack && ./setup`
    try:
        env=os.environ.copy()
        env['GSTACK_HOME']=os.path.expanduser('~/.gstack')
        # Node.js path — check multiple locations
        for np in [os.path.expanduser('~/nodejs'), r'C:\Program Files\nodejs', r'C:\Program Files (x86)\nodejs']:
            if os.path.exists(np):
                env['PATH']=np+';'+env.get('PATH','')
                break
        r=subprocess.run([gb,'chain'],input=json.dumps([['goto',url],['js','document.documentElement.outerHTML']]),
            capture_output=True,text=True,timeout=45,env=env,cwd=os.path.expanduser('~'),encoding='utf-8',errors='replace')
        return r.stdout if r.stdout and len(r.stdout)>500 else ''
    except: return ''

def scrape(url):
    r={'company':'','contact':'','email':'','phone':'','country':'','city':'','type':'','description':''}
    html=''; txt=''
    try:
        html=fetch(url); txt=text(html)
        for s in ['/contact','/about','/en','/about-us']:
            try: html2=fetch(url.rstrip('/')+s); txt+=' '+text(html2); html+=html2
            except: pass
    except: pass
    if not emails(html,txt):
        gh=gstack(url)
        if gh: html=gh; txt=text(gh)
    if not txt: raise ValueError('Cannot access')
    r['email']=(emails(html,txt)+[''])[0]
    r['phone']=(phones(txt,html)+[''])[0]
    r['country']=country(txt)
    m=re.search(r'<title>([^<]+)</title>',html)
    if m: r['company']=re.sub(r'\s*[-|]\s*.+$','',m.group(1).strip())[:80]
    try:
        prompt='Return JSON: company, type(distributor/dental_lab/oem/end_user), description. email=%s, country=%s. JSON only.\n\n%s'%(r.get('email',''),r.get('country',''),txt[:4000])
        pl=json.dumps({'model':'youtu-vita','messages':[{'role':'user','content':[{'type':'text','text':prompt}]}]}).encode()
        rr=urlopen(Request(f'{BASE_URL}/chat/completions',data=pl,headers={'Authorization':f'Bearer {API_KEY}','Content-Type':'application/json'}),context=SSL,timeout=30)
        c=json.loads(rr.read())['choices'][0]['message']['content'].strip()
        if c.startswith('```'): c=re.sub(r'^```\w*\n?','',c).replace('```','').strip()
        ai=json.loads(c)
        for k in['type','description']:
            if ai.get(k) and not r.get(k): r[k]=ai[k]
    except: pass
    for k in r:
        if isinstance(r[k],str): r[k]=r[k].replace('&#160;','').replace('&nbsp;',' ').replace('&amp;','&').strip()
    return r

def ocr(data):
    b64=base64.b64encode(data).decode()
    pl=json.dumps({'model':'youtu-vita','messages':[{'role':'user','content':[{'type':'image_url','image_url':{'url':f'data:image/jpeg;base64,{b64}'}},{'type':'text','text':'名片提取JSON: company,contact,email,phone,country,city,type。只返回JSON。'}]}]}).encode()
    rr=urlopen(Request(f'{BASE_URL}/chat/completions',data=pl,headers={'Authorization':f'Bearer {API_KEY}','Content-Type':'application/json'}),context=SSL,timeout=45)
    c=json.loads(rr.read())['choices'][0]['message']['content'].strip()
    if c.startswith('```'): c=re.sub(r'^```\w*\n?','',c).replace('```','').strip()
    return json.loads(c)

# ─── HTTP Server ───
LOGIN_PAGE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>RESIONE CRM - Login</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#f5f0ea;display:flex;justify-content:center;align-items:center;height:100vh;font-family:system-ui,sans-serif}
.card{background:#fff;padding:40px;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);width:320px;text-align:center}
h1{color:#8b7355;font-size:22px;margin-bottom:6px}
p{color:#999;font-size:12px;margin-bottom:20px}
input{width:100%;padding:10px;border:1px solid #ddd;border-radius:6px;font-size:14px;margin-bottom:10px}
button{width:100%;padding:10px;background:#8b7355;color:#fff;border:none;border-radius:6px;font-size:14px;cursor:pointer}
button:hover{background:#6b5a3e}
.error{color:#d44;font-size:12px;margin-top:8px}
</style></head><body>
<div class="card">
<h1>RESIONE CRM</h1>
<p>登录后使用</p>
<form method="POST" action="/login">
<input name="username" placeholder="用户名" value="admin">
<input name="password" type="password" placeholder="密码">
<button type="submit">登录</button>
<div class="error" id="err"></div>
</form>
</div>
<script>
if(window.location.search.includes('error=1'))
    document.getElementById('err').textContent='用户名或密码错误';
</script>
</body></html>'''

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path=='/login':
            self._html(LOGIN_PAGE)
        elif self.path=='/' or self.path.startswith('/?'):
            user = get_user(self)
            if user:
                # Inject ALL server data into HTML for logged-in users
                cust = get_data(user['id'], 'customers')
                note = get_data(user['id'], 'notes')
                emails_d = get_data(user['id'], 'emails')
                samples_d = get_data(user['id'], 'samples')
                tasks_d = get_data(user['id'], 'tasks')
                inject = f'<script>window.__SERVER_DATA__={json.dumps({"customers":cust,"notes":note,"emails":emails_d,"samples":samples_d,"tasks":tasks_d},ensure_ascii=False)};</script>'
                html = CRM_HTML.replace('</body>', inject+'</body>')
                self._html(html)
            else:
                self._html(CRM_HTML)
        elif self.path=='/resione_logo.png':
            logo = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'resione_logo.png')
            if os.path.exists(logo):
                self.send_response(200)
                self.send_header('Content-Type','image/png')
                self.send_header('Cache-Control','max-age=86400')
                self.end_headers()
                self.wfile.write(open(logo,'rb').read())
            else:
                self.send_response(404); self.end_headers()
        elif self.path=='/logout':
            cookie = self.headers.get('Cookie','')
            c = SimpleCookie(cookie)
            token = c.get('session')
            if token: db.execute('DELETE FROM sessions WHERE token=?',(token.value,)); db.commit()
            self.send_response(302); self.send_header('Location','/login'); self.end_headers()
        else:
            self.send_response(404); self.end_headers()

    def do_POST(self):
        cl = int(self.headers.get('Content-Length',0))
        body = self.rfile.read(cl)

        if self.path=='/login':
            data = dict(p.split('=') for p in body.decode().split('&') if '=' in p)
            user = data.get('username',''); pw = data.get('password','')
            token = login_user(user, pw)
            if token:
                self.send_response(302)
                self.send_header('Set-Cookie',f'session={token}; Path=/; HttpOnly')
                self.send_header('Location','/')
                self.end_headers()
            else:
                self.send_response(302)
                self.send_header('Location','/login?error=1')
                self.end_headers()
            return

        try:
            # Auth check for all data/modify APIs
            _user = require_auth(self)
            if _user is None:
                return
            if self.path=='/scrape':
                data = json.loads(body)
                url = data.get('url','').strip()
                if not url: raise ValueError('No URL')
                self._json(scrape(url))
            elif self.path=='/ocr':
                self._json(ocr(body))
            elif self.path=='/api/data':
                # GET-like POST: {kind: 'customers'}
                data = json.loads(body)
                kind = data.get('kind','')
                self._json(get_data(_user['id'], kind))
            elif self.path=='/api/save':
                # {kind: 'customers', key: 'all', value: [...]}
                data = json.loads(body)
                set_data(_user['id'], data['kind'], data['key'], data['value'])
                self._json({'ok':True})
            else:
                self.send_response(404); self.end_headers()
        except Exception as e:
            self._json({'error':str(e)})

    def _html(self, content):
        self.send_response(200)
        self.send_header('Content-Type','text/html; charset=utf-8')
        self.send_header('Cache-Control','no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma','no-cache')
        self.send_header('Expires','0')
        self.end_headers()
        self.wfile.write(content.encode())

    def _json(self, data):
        self.send_response(200)
        self.send_header('Content-Type','application/json; charset=utf-8')
        self.send_header('Cache-Control','no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma','no-cache')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode())

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin','*')
        self.send_header('Access-Control-Allow-Methods','POST,OPTIONS,GET')
        self.send_header('Access-Control-Allow-Headers','Content-Type')
        self.end_headers()

    def log_message(self,*a): pass

if __name__=='__main__':
    import socket
    local_ip = socket.gethostbyname(socket.gethostname())
    print(f'RESIONE CRM: http://localhost:{PORT}')
    print(f'Other devices: http://{local_ip}:{PORT}')
    print(f'Default login: admin / resione2026')
    HTTPServer(('0.0.0.0',PORT), Handler).serve_forever()
