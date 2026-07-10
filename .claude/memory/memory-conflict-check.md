---
name: memory-conflict-check
description: "When adding or editing memories, always check for conflicts with existing memories first — resolve contradictions before saving"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: e802c7da-8d3b-4170-92d8-f4c6dfb4395c
---

When writing or editing a memory, always cross-check against all existing memories for contradictions. If a conflict is found, resolve it before saving — either by qualifying the new memory, revising the old one, or explicitly documenting the resolution rule.

**Why:** [[ask-before-acting]] was added without checking [[user-work-style]], creating a direct contradiction ("ask before acting" vs "just do it, don't ask"). The fix — qualifying when each rule applies — should have happened before saving.

**How to apply:**
1. Before writing a new memory, grep existing memories for potential conflicts
2. If found, reconcile in the new memory itself (add a conflict resolution table or cross-reference)
3. Document the relationship between both memories with `[[links]]`

**Related:** [[ask-before-acting]], [[user-work-style]]
