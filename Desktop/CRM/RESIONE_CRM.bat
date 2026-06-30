@echo off
title RESIONE CRM (Local)
cd /d "%~dp0"
set PYTHONIOENCODING=utf-8
set "PYTHONPATH=C:\Users\19481\AppData\Local\Programs\Python\Python312"

echo ============================================
echo   RESIONE CRM - Starting Local Server
echo ============================================
echo.
echo [1/3] Killing old server if any...
taskkill /F /IM python.exe /FI "WINDOWTITLE eq RESIONE*" 2>nul
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8767"') do (
    taskkill /F /PID %%a 2>nul
)

echo [2/3] Starting CRM server...
start "RESIONE_CRM_Server" /MIN "%PYTHONPATH%\python.exe" "%~dp0crm_server.py"
timeout /t 3 /nobreak >nul

echo [3/3] Opening browser...
start http://localhost:8767

echo.
echo ============================================
echo   CRM should now open in your browser
echo   If not, check: http://localhost:8767
echo   Close this window to stop CRM
echo ============================================
pause
