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

**Root cause:** Git for Windows bash.exe not discoverable by Claude Code.

**Current correct Git path (updated 2026-07-03):** `C:\Program Files\Git\bin\bash.exe` (default Git install location)

**Fix:**

1. **Set `CLAUDE_CODE_GIT_BASH_PATH`** (User env var) = actual bash.exe path. Run in PowerShell:
   ```
   [Environment]::SetEnvironmentVariable('CLAUDE_CODE_GIT_BASH_PATH', 'C:\Program Files\Git\bin\bash.exe', 'User')
   ```
2. **Node.js PATH** should already include `C:\Users\Administrator\AppData\Local\Programs\nodejs` (or wherever Node is installed for the current user)

**Note:** Environment variable changes require a new terminal window to take effect. After Windows update, Git reinstall, or env reset, re-apply step 1.
