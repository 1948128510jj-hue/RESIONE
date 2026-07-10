---
name: product-analysis-workflow
description: RESIONE产品分析的标准流程——先用EYE扫产品册，再对比数据
metadata:
  type: feedback
---

## RESIONE 产品分析标准流程

当用户问及 RESIONE 产品线相关问题（选材推荐、参数对比、场景适配）时：

1. **首选 EYE 扫产品册**：桌面的 `公司相关的产品/(压缩)产品册 英文 2026.3.13(1).pdf` 和 `RESIONE性能数据解读指南_新版.pdf` 包含全系 Detail Sharpness 评分表、完整 TDS 数据。直接用 deepseek-eyes 把关键页面转图片提取，不要跟 pdftotext 残字较劲。

2. **产品册位置**：
   - `C:\Users\19481\Desktop\公司相关的产品\(压缩)产品册 英文 2026.3.13(1).pdf` — 全系 TDS + 性能评分表
   - `C:\Users\19481\Desktop\公司相关的产品\(压缩)产品册 中文 2026.3.13 .pdf` — 中文版
   - `C:\Users\19481\Desktop\RESIONE性能数据解读指南_新版.pdf` — 性能解读
   - `C:\Users\19481\Desktop\力学性能和打印特性的认识\RESIONE六大核心力学指标速查.pdf` — 极值速查

3. **深度对比用 deep-research**：多产品、多维度对比时，直接开 `/deep-research` 一次性拉全。

4. **不要绕弯路**：不搜网页（网上 TDS 不全）、不抠 pdftotext（数据表是图片格式）。

**Why:** SP64 vs TH-BJD vs M70 那次分析绕了三圈才到正确答案，用户明确指出应该一开始就用 EYE 扫产品册。

**How to apply:** 用户提 RESIONE 产品问题时，第一步就列产品册路径、用 EYE 提取关键页，再做对比。
