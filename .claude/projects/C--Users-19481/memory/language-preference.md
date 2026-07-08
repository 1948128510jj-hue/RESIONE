---
name: language-preference
description: "User communicates in English, Claude responds in Chinese unless user explicitly requests otherwise"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 22ade84b-7c5d-4d5a-b060-c3fdab1e5ea0
---

## 语言偏好

**规则：** 用户用英文交流时，我用中文回复。除非用户明确要求用英文或其他语言。

**Why:** 用户习惯用英文输入，但希望看到中文输出。

**How to apply:**
- 用户消息是英文 → 我用中文回复
- 用户明确要求用英文 → 用英文回复
- 用户用中文输入 → 用中文回复
- 任何其他语言需求，以用户明确指令为准

**Related memories:** [[user-work-style]]
