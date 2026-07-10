---
name: user-file-output-preference
description: "User prefers text/output files saved to D drive, not Desktop; never use .md format for non-technical files"
metadata: 
  node_type: memory
  type: user
  originSessionId: a2b37155-afd6-4615-9894-30af1c8ef4ba
---

## User File Output Preferences

**Never** save readable text/report files as `.md` (Markdown) — the user cannot open `.md` files.

**Preferred file formats for user-facing documents:**
- `.pdf` — for reports, plans, reference documents
- `.docx` — for editable documents

**Preferred save location:** **Desktop** (`C:\Users\19481\Desktop\`) for PDF/DOCX files — user needs direct access.

**Why:** User has no Markdown viewer and needs files instantly accessible on Desktop.

**How to apply:** When generating any document for the user (plans, reports, scripts, guides), output to Desktop as `.pdf` or `.docx`. Never create `.md` files on Desktop.
