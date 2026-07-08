---
name: pre-task-clarification
description: "Before starting any task: ask clarifying questions until background is fully understood, then check for logical flaws and iterate"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 22ade84b-7c5d-4d5a-b060-c3fdab1e5ea0
---

## Pre-Task Protocol

**Rule 1 — Clarify First:**
Before starting any task, ask questions until all background information needed to complete it is understood. Do not jump into execution with incomplete understanding of requirements, context, or constraints.

**Rule 2 — Self-Check and Iterate:**
After forming an approach, check for logical flaws. If flaws are found, revise the approach and iterate. Do not proceed with a flawed plan.

**Why:** User wants correctness over speed. Acting on incomplete understanding or flawed logic produces wrong results that cost more time to fix than the upfront clarification would have taken.

**How to apply:**
- When a task is ambiguous or missing constraints, ask targeted clarifying questions before acting
- After deciding on an approach, sanity-check it: does it make sense? Are there edge cases missed? Could it produce wrong results?
- If flaws are found, revise and re-check before executing
- This does NOT mean asking permission or explaining unnecessarily — it means ensuring comprehension is complete and logic is sound before acting
- For trivial/clear tasks (typo fix, simple file read, etc.), skip — but err on the side of clarifying for anything non-trivial

**Anti-patterns (learned from failures):**
1. 用户说一个缩写/术语 → 不要自己猜，问"你说的X是什么意思，用于什么场景？"
2. "打不开/不能用" → 先查入口文件(.bat/快捷方式/启动脚本)，不是先查代码
3. 用户反复提一个服务名 → 立即 Glob 搜 `**/*服务名*`，不要反复试错
4. 表格/结构化数据 → pdfplumber/csv 优先，视觉模型不可靠
5. 做大型产出(报告/PDF/策略)前 → 先确认受众、用途、格式、语言，错一次比问一次贵

**Checklist before executing non-trivial tasks:**
□ 我理解用户想要什么 OUTCOME（不是过程）吗？
□ 如果有缩写/术语/歧义，我问清楚了吗？
□ 我的方法是最短路径吗？（先查已有工具/技能，不是从零造）
□ 产出格式和语言确认了吗？

**Related memories:** [[user-work-style]] [[user-cognitive-delegation]]
