/**
 * HTTP Basic Authentication for Next.js middleware (Edge Runtime).
 *
 * Set env vars AUTH_USERNAME / AUTH_PASSWORD in Vercel dashboard.
 * Hardcoded defaults are used if env vars are not set.
 */

const AUTH_USERNAME = process.env.AUTH_USERNAME || 'Jenson';
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || 'huangjian66..';

function base64Decode(str: string): string {
  // Edge-compatible base64 decode (avoids atob which may not exist in some runtimes)
  try {
    return atob(str);
  } catch {
    // Fallback: manual decode
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    let i = 0;
    str = str.replace(/[^A-Za-z0-9+/=]/g, '');
    while (i < str.length) {
      const idx1 = chars.indexOf(str.charAt(i++));
      const idx2 = chars.indexOf(str.charAt(i++));
      const idx3 = chars.indexOf(str.charAt(i++));
      const idx4 = chars.indexOf(str.charAt(i++));
      const a = (idx1 << 2) | (idx2 >> 4);
      const b = ((idx2 & 15) << 4) | (idx3 >> 2);
      const c = ((idx3 & 3) << 6) | idx4;
      output += String.fromCharCode(a);
      if (idx3 !== 64) output += String.fromCharCode(b);
      if (idx4 !== 64) output += String.fromCharCode(c);
    }
    return output;
  }
}

export function isAuthenticated(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  if (!authHeader.startsWith('Basic ')) return false;
  try {
    const base64 = authHeader.slice(6);
    const decoded = base64Decode(base64);
    const colonIdx = decoded.indexOf(':');
    if (colonIdx === -1) return false;
    const username = decoded.substring(0, colonIdx);
    const password = decoded.substring(colonIdx + 1);
    return username === AUTH_USERNAME && password === AUTH_PASSWORD;
  } catch {
    return false;
  }
}

export function unauthorizedResponse(): Response {
  return new Response(UNAUTHORIZED_HTML, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="RESIONE Staff Only", charset="UTF-8"',
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

const UNAUTHORIZED_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>RESIONE — Access Restricted</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{
    font-family:system-ui,-apple-system,'Segoe UI',sans-serif;
    background:#0a0a0a;color:#e0e0e0;
    display:flex;justify-content:center;align-items:center;
    min-height:100vh
  }
  .card{
    background:#141414;border:1px solid #2a2a2a;border-radius:16px;
    padding:48px 40px;max-width:440px;width:90%;text-align:center
  }
  .icon{font-size:56px;margin-bottom:20px}
  h1{font-size:22px;font-weight:700;margin-bottom:8px;color:#fff}
  .sub{font-size:14px;color:#888;margin-bottom:28px;line-height:1.5}
  .tip{font-size:12px;color:#555;margin-top:20px}
</style>
</head>
<body>
<div class="card">
  <div class="icon">🔒</div>
  <h1>Access Restricted</h1>
  <p class="sub">This site is for internal use only.<br>A login dialog should appear — enter your credentials to continue.</p>
  <p class="tip">If no dialog appears, your browser may have blocked it.<br>Try refreshing or use a different browser.</p>
</div>
</body>
</html>`;
