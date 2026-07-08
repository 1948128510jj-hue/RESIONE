---
name: use-tencent-eyes
description: "Always use tencent-eyes skill (Tencent Hunyuan Vision) for image/PDF scanning, only fall back to deepseek-eyes if tencent API quota runs out"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 22ade84b-7c5d-4d5a-b060-c3fdab1e5ea0
---

## 视觉模型优先级

**规则：** 凡是需要图像识别/扫描的任务，默认使用腾讯混元视觉（tencent-eyes），豆包视觉（doubao-eyes）作为备选，两者都用完才回退到 deepseek-eyes（阿里云百炼）。

**Why:** 用户明确要求优先使用腾讯视觉模型。另已配置豆包/火山引擎 ARK 作为第二选择。三者额度互补。

**How to apply:**
- 首选：`~/.claude/skills/tencent-eyes/eyes.py` — 腾讯混元，静态图片默认 `hy-vision-2.0-instruct`，视频用 `youtu-vita`
- 备选：`~/.claude/skills/doubao-eyes/eyes.py` — 豆包视觉，默认模型 `doubao-1-5-vision-pro-32k-250115`，API Key: `DOUBAO_API_KEY`
- 兜底：`deepseek-eyes`（阿里云百炼）
- 调用时加 `PYTHONIOENCODING=utf-8` 避免 Windows GBK 编码报错
- 对于复杂表格/密集数据 → 视觉模型可能不可靠，优先用 pdfplumber 等程序化提取

**Related memories:** [[deepseek-eyes]]
