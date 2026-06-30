@echo off
title RESIONE CRM (Remote)
cd /d "%~dp0"
set PYTHONIOENCODING=utf-8
set "PYTHONPATH=C:\Users\19481\AppData\Local\Programs\Python\Python312"

echo ============================================
echo   RESIONE CRM - Starting with Cloudflare Tunnel
echo ============================================
echo.

echo [1/4] Stopping old instances...
taskkill /F /IM python.exe /FI "WINDOWTITLE eq RESIONE*" 2>nul
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8767"') do (
    taskkill /F /PID %%a 2>nul
)
timeout /t 2 /nobreak >nul

echo [2/4] Starting Cloudflare tunnel...
start "Cloudflare_Tunnel" /MIN "C:\Users\19481\cloudflared.exe" tunnel run crm
timeout /t 3 /nobreak >nul

echo [3/4] Starting CRM server...
start "RESIONE_CRM_Server" /MIN "%PYTHONPATH%\python.exe" "%~dp0crm_server.py"
timeout /t 3 /nobreak >nul

echo [4/4] Opening browser...
start https://crm.resione.top

echo.
echo ============================================
echo   Remote: https://crm.resione.top
echo   Local:  http://localhost:8767
echo   Auto-restart watchdog active
echo   Close this window to stop
echo ============================================

REM ── Watchdog: restart server if port 8767 goes dead ──
:watchdog
timeout /t 15 /nobreak >nul
netstat -ano | findstr ":8767.*LISTENING" >nul
if %errorlevel% neq 0 (
    echo [%date% %time%] CRM server down! Restarting...
    taskkill /F /IM python.exe /FI "WINDOWTITLE eq RESIONE*" 2>nul
    timeout /t 2 /nobreak >nul
    start "RESIONE_CRM_Server" /MIN "%PYTHONPATH%\python.exe" "%~dp0crm_server.py"
    echo [%date% %time%] Server restarted.
)
goto watchdog
