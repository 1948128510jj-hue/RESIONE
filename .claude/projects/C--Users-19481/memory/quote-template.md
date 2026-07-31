---
name: quote-template
description: RESIONE 经销商报价单标准模板 — 格式、条款、产品定价速查
metadata: 
  node_type: memory
  type: reference
  date: 2026-07-31
  originSessionId: ec84e30f-ebe3-4f76-8bbf-83839ea25dc7
---

## RESIONE 经销商报价单模板

### 报价单结构

**Header Table（左/右分栏）:**
- 左：RESIONE | Dongguan Godsaid Technology Co., Ltd. | www.resione.com | jenson@godsaid3d.com | Dongguan, China
- 右：DEALER QUOTATION | Quote No.: RES-QT-2026-XXX | Date: YYYY-MM-DD | Valid Until: YYYY-MM-DD (15 days) | Currency: USD | Trade Term: EXW Dongguan, China

**Bill To:**
- Company: [Name]
- Attn: [Name] | Tel: [Phone] | Email: [Email]

**Price List Title:**
- Dealer Price List | MOQ: 96kg per order | F-Class Pricing

**Product Table Columns (7列):**
1. No.
2. Image（产品图 2.5cm宽）
3. Item / Model
4. Color
5. Specifications（硬度|拉伸强度|伸长率|冲击强度|应用场景，换行分两段）
6. Dealer Price (USD) F-Class, ≥96kg（加粗）
7. Unit: Bottle (1kg) 或 Bottle (500g)

**Terms & Conditions（标准条款）:**
1. Trade Term: EXW Dongguan, China
2. Payment: T/T 100% in advance
3. Delivery: 10 working days after payment received
4. Price Validity: 15 days from quotation date
5. MOQ: 96kg per order (F-Class dealer pricing). Standard packing: 1kg/bottle, 16 bottles/carton.

**Signature:**
- RESIONE | Dongguan Godsaid Technology Co., Ltd.
- Signature: ___Jenson___    Date: ___YYYY-MM-DD___

### 常用产品报价速查（美日俄F级）

| 产品 | 价格 | 包装 |
|------|:--:|------|
| D01S | $27 | Bottle (1kg) |
| D01 | $23 | Bottle (1kg) |
| F80 黑 | $31 | Bottle (1kg) |
| F80 牙龈粉 | $20 | Bottle (500g) |
| GM01 | $23 | Bottle (500g) |
| Anti-Impact | $28 | Bottle (1kg) |
| C01 | $37 | Bottle (1kg) |
| WW-ABS | $17 | Bottle (1kg) |
| K+ | $24 | Bottle (1kg) |
| G217 | $26 | Bottle (1kg) |
| TH72 | $18-19 | Bottle (1kg) |

### 产品参数速查

| 产品 | 硬度 | 拉伸强度 | 伸长率 | 冲击强度 | 一句话 |
|------|:--:|:--:|:--:|:--:|------|
| D01S | 92D | 43MPa | 5% | 18.4 J/m | 高精度牙科模型，哑光仿石膏 |
| F80 | 64A | 2.7MPa | 155% | 11.6kN/m撕裂 | 柔性，牙龈模型/轮胎/密封 |
| Anti-Impact白灰 | 79D | 27MPa | 93% | 46-98 J/m | 类尼龙，无人机/RC |
| Anti-Impact黑 | 73D | 26.8MPa | 94.7% | 67-75 J/m | 类尼龙，无人机/RC |
| C01 | 78D | 19MPa | 4% | 13.6 J/m | 铸造树脂，Ni-Cr/Co-Cr，低灰分 |

### 报价单制作流程

1. 从 `01_客户开发/报价_3DB素材/` 取模板 DOCX
2. 改公司名、联系人、日期、Quote No.
3. 根据客户需求选品、填参数
4. 从客户网站扒产品图，转 JPG 插入（WebP 不支持）
5. 签名 + 日期
6. 导出 PDF（Word COM: `SaveAs(pdf, FileFormat=17)`）
7. 先给老板确认再发

Related: [[resione-product-database]] [[email-signature-standard]]
