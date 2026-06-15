/**
 * HTTP Basic Authentication for Next.js middleware.
 *
 * Set env vars AUTH_USERNAME / AUTH_PASSWORD in Vercel dashboard.
 * Defaults below are placeholders — CHANGE THEM before going live.
 */

const AUTH_USERNAME = process.env.AUTH_USERNAME || 'Jenson';
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || 'huangjian66..';

export function isAuthenticated(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) return false;
  const [user, pass] = atob(authHeader.slice(6)).split(':');
  return user === AUTH_USERNAME && pass === AUTH_PASSWORD;
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
