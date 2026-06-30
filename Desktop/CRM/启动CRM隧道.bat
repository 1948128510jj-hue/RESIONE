@echo off
title RESIONE CRM Tunnel
echo Starting CRM server...
start "" /B "C:\Users\19481\AppData\Local\Programs\Python\Python312\python.exe" "C:\Users\19481\Desktop\CRM\crm_server.py"
timeout /t 2 /nobreak >nul
echo Starting Cloudflare Tunnel...
"C:\Users\19481\cloudflared.exe" tunnel run crm
pause
