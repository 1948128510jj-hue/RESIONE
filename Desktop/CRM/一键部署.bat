@echo off
title RESIONE CRM Setup
echo === RESIONE CRM 一键部署 ===
echo.
echo 1. 安装 Python 依赖...
pip install pillow -q
echo.
echo 2. 创建桌面快捷方式...
echo Set ws = WScript.CreateObject("WScript.Shell") > "%TEMP%\crm_shortcut.vbs"
echo Set sc = ws.CreateShortcut("%USERPROFILE%\Desktop\RESIONE CRM.lnk") >> "%TEMP%\crm_shortcut.vbs"
echo sc.TargetPath = "%~dp0RESIONE_CRM.bat" >> "%TEMP%\crm_shortcut.vbs"
echo sc.WorkingDirectory = "%~dp0" >> "%TEMP%\crm_shortcut.vbs"
echo sc.Save() >> "%TEMP%\crm_shortcut.vbs"
cscript //nologo "%TEMP%\crm_shortcut.vbs"
echo.
echo 3. 启动 CRM...
start "" "%~dp0RESIONE_CRM.bat"
echo.
echo === 部署完成！===
echo 以后双击桌面 "RESIONE CRM" 即可启动
pause
