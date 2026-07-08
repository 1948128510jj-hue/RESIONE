---
name: windows-shortcut-icon
description: "Windows shortcut icon creation must use COM Dispatch, not VBScript"
metadata: 
  node_type: memory
  type: project
  originSessionId: a2b37155-afd6-4615-9894-30af1c8ef4ba
---

## Windows Shortcut Icon — Correct Method

**VBScript `CreateShortcut` is unreliable for custom icons.** The icon often shows as default despite correct `IconLocation`.

**Correct approach: Python `win32com.client.Dispatch('WScript.Shell')`**

```python
from win32com.client import Dispatch
shell = Dispatch('WScript.Shell')
desktop = shell.SpecialFolders('Desktop')
shortcut = shell.CreateShortcut(os.path.join(desktop, 'NAME.lnk'))
shortcut.TargetPath = r'C:\path\to\target.bat'
shortcut.WorkingDirectory = r'C:\path\to'
shortcut.IconLocation = r'C:\path\to\logo.ico,0'
shortcut.Save()
```

Also:
- ICO file must be proper multi-resolution format (PIL `img.save(path, format='ICO', sizes=[(256,256),(128,128),...])`)
- After creating shortcut, run `ie4uinit.exe -ClearIconCache` and `ie4uinit.exe -show` to refresh
- Clean up old shortcuts with same name before recreating
- Keep bat filename simple (ASCII preferred) to avoid encoding issues in shortcut target

**Why:** VBS `CreateShortcut` sets the property but Windows Shell doesn't always apply it. COM Dispatch goes through the proper Windows API and reliably sets the icon.

**How to apply:** Whenever user asks to change/set a shortcut icon, use win32com Dispatch. Never use VBScript alone.
