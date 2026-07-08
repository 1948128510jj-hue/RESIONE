---
name: session-summary-standard
description: 会话总结标准格式 — 每次会话结束时生成findings.md + progress.md + 桌面PDF
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 4c8c30b7-c5b1-4be6-9e5f-4930e61a2ebd
---

用户要求每次完成一段对话后，用 planning-with-files skill 的标准格式生成：
- `findings.md` — 关键决策、产品发现、市场线索、产出文件
- `progress.md` — 时间线、阶段完成状态、文件产出清单
- 桌面 PDF — A5 暖棕配色

文件存放于 `~/claude-config/sessions/YYYY-MM-DD/` 和桌面。

## 总结要点
1. 按话题板块分类，不按时间流
2. 突出决策和可行动线索
3. 文件产出要有明确路径
4. PDF 用暖棕配色（#8b7355），A5 尺寸
