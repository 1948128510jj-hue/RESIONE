---
name: resione-website-lessons
description: Critical development rules for the RESIONE B2B website (resione.top) — never repeat these mistakes
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 8c5bd968-754d-484b-a0a3-437714f88a80
---

## RESIONE 网站开发铁律

**Why:** 本次会话踩了大量坑，反复修复硬编码、翻译缺失、PDF乱码等问题。必须记住以绝后患。

**How to apply:** 每次改网站代码前先读这条记忆。

### 1. 禁止 JSX 硬编码文案
- ❌ `<h1>About Us</h1>` 
- ✅ `<h1>{t("title")}</h1>`
- 所有用户可见文字走 `useTranslations()` 或 `getTranslations()`
- 翻译键统一放在 `messages/{en,zh,ja}.json`

### 2. 三语 JSON 必须同步
- en.json 是基准，zh.json 和 ja.json 必须包含所有相同键
- 新增键时用 Python 脚本批量同步，不手动改 JSON
- 运行 `python -c "import json; ..."` 检查键值覆盖

### 3. PDF 生成 —— 永不用 xhtml2pdf
- xhtml2pdf 不支持中文，永远乱码
- weasyprint 在 Windows 上需要 GTK 库，装不上
- ✅ 只用 `reportlab` + 注册微软雅黑字体：
  ```python
  pdfmetrics.registerFont(TTFont('ZH', r'C:\WINDOWS\Fonts\msyh.ttc'))
  ```
- 桌面已有 `html2pdf_cn.py` 工具脚本可复用

### 4. next-intl 必须加 setRequestLocale
- Server Component 页面必须调用 `setRequestLocale(locale)` 再 `getTranslations()`
- Layout 中也要加，否则所有页面回退英文
- 语言切换用 `window.location.href` 直接跳转，不走路由

### 5. 产品数据源优先级
- 官方产品册（中英文 PDF）> 官网 > 第三方评测
- 所有数据需经 EYE skill 逐页 OCR 验证
- products-data.ts 是英文基准源，翻译放 messages JSON

### 6. EYE skill 用法
- 先 `pip install PyMuPDF`，用 `fitz` 将 PDF 转 PNG
- 再 `python ~/.claude/skills/deepseek-eyes/eyes.py <image> --model qwen3-vl-plus --high-res`
- 英文版和中文版分别扫一遍做交叉验证

### 7. 部署流程
- Git → Gitee（GitHub 被墙）
- `npx vercel --prod --yes` 直接部署到 resione.top
- 构建前先 `npx next build` 验证 TypeScript 通过

[[resin3d-b2b-website]]
