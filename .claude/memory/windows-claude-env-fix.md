---
name: windows-claude-env-fix
description: Fix for Claude Code requiring Git bash on Windows when Git is in non-default path
metadata: 
  node_type: memory
  type: reference
  originSessionId: d4d650f1-9f0f-41ca-a6e5-f9558d868793
---

## Windows Claude Code Environment Fix

**Problem:** Claude Code on Windows refuses to run, showing:
"Claude Code on Windows requires either Git for Windows (for bash) or PowerShell."

**Root cause:** Git for Windows installed at `C:\Git\` (non-default path). Only `C:\Git\cmd` is in PATH (provides `git.exe`), but `bash.exe` at `C:\Git\bin\` is not discoverable.

**Fix (two parts):**

1. **Set `CLAUDE_CODE_GIT_BASH_PATH`** (User env var) = `C:\Git\bin\bash.exe`
2. **Add Node.js to User PATH** = `C:\Users\Administrator\AppData\Local\Programs\nodejs`

**Note:** Environment variable changes require a new PowerShell window to take effect.

**After reinstall/restore of Windows or Git**, re-apply these settings.
