---
name: skill-routing-rules
description: "When to proactively suggest skills — trigger phrases and matching skills, always ask before doing"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 46cf42bb-6bb5-4cc2-a870-4200e6b6b85a
---

## 技能主动提醒规则

**Why:** 用户经常不知道什么时候该用 Skill，需要我主动提醒。之前多次忘记提醒。

**How to apply:** 每次收到用户请求时，先在心里跑一遍这个检查表。匹配到了就必须主动问"要不要开 XX 技能？"

### 触发词 → 技能

| 用户说了什么 | 主动问要不要用 | 因为 |
|------|------|------|
| "分析""讨论""你觉得""想法""策略""头脑风暴""帮我看看" | **office-hours** | 结构化头脑风暴，比随口聊深入 |
| "打开XX网站""看看这个网页""测试""截图" | **browse** | 无头浏览器，能看能点能截图 |
| "看看这个图""这张图""图片里" | **deepseek-eyes** | 我看不了图，必须走EYE |
| "转PDF""生成PDF""PDF文档" | **pdf** | 专业PDF生成 |
| "Word文档""做成Word""docx" | **docx** | 专业Word生成 |

### 铁律

1. **匹配到了必须问** — 不自己默默做
2. **不要因为"看起来简单"就跳过** — 用户可能不知道有更好的方式
3. **每次对话开始时回顾这条记忆** — 保证不忘记

### 当前启用的 Skill（精简后仅3个）

1. office-hours — 头脑风暴
2. browse (gstack) — 网页浏览
3. deepseek-eyes — 图片分析
