const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
        ShadingType, PageNumber, PageBreak, PageOrientation } = require('docx');
const fs = require('fs');

// ── Colors ──
const DARK = "1a1a2e";
const ACCENT = "16213e";
const GREEN = "0f766e";
const RED = "b91c1c";
const GRAY = "6b7280";
const LIGHT_BG = "f1f5f9";
const OKKI_BG = "dbeafe";  // blue tint
const WY_BG = "fef3c7";    // yellow tint
const BOX_BG = "ecfdf5";   // green tint for summary
const BOX_BORDER = "10b981";
const WHITE = "ffffff";
const PLACEHOLDER_BG = "f8fafc";

// ── Borders ──
const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: "cbd5e1" };
const cellBorders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const noBorders = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };

function headerCell(text, width) {
  return new TableCell({
    borders: cellBorders, width: { size: width, type: WidthType.DXA },
    shading: { fill: ACCENT, type: ShadingType.CLEAR },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({ alignment: AlignmentType.CENTER,
      children: [new TextRun({ text, bold: true, color: WHITE, font: "Arial", size: 22 })] })]
  });
}

function screenshotCell(text, desc, width, isLeft) {
  const bg = isLeft ? OKKI_BG : WY_BG;
  const label = isLeft ? "OKKI（小满）" : "网易外贸通";
  return new TableCell({
    borders: cellBorders, width: { size: width, type: WidthType.DXA },
    shading: { fill: PLACEHOLDER_BG, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
        children: [new TextRun({ text: label, bold: true, font: "Arial", size: 20, color: DARK })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
        children: [new TextRun({ text: "[ 截图 ]", font: "Arial", size: 26, color: GRAY })] }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: desc, font: "Arial", size: 18, color: GRAY })] }),
    ]
  });
}

function summaryBox(text) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [new TableRow({
      children: [new TableCell({
        borders: { top: { style: BorderStyle.SINGLE, size: 6, color: BOX_BORDER },
                   bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
        width: { size: 9360, type: WidthType.DXA },
        shading: { fill: BOX_BG, type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 160, right: 160 },
        children: [new Paragraph({
          children: [new TextRun({ text: "总结：", bold: true, font: "Arial", size: 20, color: GREEN }),
                     new TextRun({ text, font: "Arial", size: 20, color: DARK })] })]
      })]
    })]
  });
}

function sectionTitle(text) {
  return new Paragraph({
    spacing: { before: 0, after: 160 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 32, color: ACCENT })]
  });
}

function spacer(h) {
  return new Paragraph({ spacing: { after: h }, children: [] });
}

function comparisonTable(leftDesc, rightDesc) {
  const colW = 4600;
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [colW, 160, colW],
    rows: [
      new TableRow({
        children: [
          headerCell("OKKI（小满）", colW),
          new TableCell({
            borders: noBorders, width: { size: 160, type: WidthType.DXA },
            children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "vs", font: "Arial", size: 18, color: GRAY, italics: true })] })]
          }),
          headerCell("网易外贸通", colW),
        ]
      }),
      new TableRow({
        children: [
          screenshotCell("[截图]", leftDesc, colW, true),
          new TableCell({ borders: noBorders, width: { size: 160, type: WidthType.DXA }, children: [] }),
          screenshotCell("[截图]", rightDesc, colW, false),
        ]
      }),
    ]
  });
}

// ── Build sections ──

function buildSection(num, title, leftDesc, rightDesc, summary, extraNote) {
  const children = [
    new Paragraph({ children: [new PageBreak()] }),
    sectionTitle(`${num}. ${title}`),
    spacer(80),
    comparisonTable(leftDesc, rightDesc),
    spacer(80),
    summaryBox(summary),
  ];
  if (extraNote) {
    children.push(spacer(40));
    children.push(new Paragraph({
      children: [new TextRun({ text: extraNote, font: "Arial", size: 18, color: RED, italics: true })]
    }));
  }
  return children;
}

// ── Cover ──
const cover = [
  spacer(300),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 },
    children: [new TextRun({ text: "OKKI vs 网易外贸通", bold: true, font: "Arial", size: 56, color: DARK })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 },
    children: [new TextRun({ text: "对比分析框架", font: "Arial", size: 36, color: GRAY })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [new TextRun({ text: "海关数据 + 核心功能逐项对比", font: "Arial", size: 24, color: GRAY })] }),
  spacer(200),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [new TextRun({ text: "截图位置已预留，直接粘贴即可", font: "Arial", size: 20, color: RED })] }),
  spacer(300),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [new TextRun({ text: "RESIONE · 神说科技", font: "Arial", size: 24, color: DARK })] }),
  new Paragraph({ alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "2026年6月30日", font: "Arial", size: 20, color: GRAY })] }),
];

// ── Section 1-8: 海关数据 ──
const s1 = buildSection(1, "数据覆盖范围",
  "可查国家/地区列表 >",
  "230+ 国家覆盖地图 + 60亿条数据标识 >",
  "对比覆盖国家数 vs 数据总量 — 网易60亿条/1.2亿企业，OKKI有阿里真实交易数据",
  null);

const s2 = buildSection(2, "搜索筛选面板",
  "HS编码 / 产品词 / 国家 / 时间范围 >",
  "产品词 / HS编码 / 进出口方向 / 贸易条件 / 运输方式 / 日期 >",
  "筛选项越多，找客户越精准。网易多了「进出口方向」和「贸易条件」，对找代理商更实用",
  null);

const s3 = buildSection(3, "搜索结果列表",
  "公司名 / 采购量 / 金额 / 日期 >",
  "公司名 / 进出口商 / 重量 / 金额 / 频次 / 最近交易 >",
  "公司名 + 采购量 + 频次 + 金额 — 四个字段缺一不可，缺了没法判断客户质量",
  null);

const s4 = buildSection(4, "买家详情页 ⭐ 最重要",
  "交易记录 / 产品明细 / 供应商列表 >",
  "交易记录 + 官网信息 + LinkedIn + 供应链关系图谱 >",
  "能不能看出这个买家从哪个竞品进货？供应链图谱能直接显示供应商关系",
  "※ 这一页截图最关键，决策依据就在这");

const s5 = buildSection(5, "竞品追踪",
  "输入竞品名 → 出口记录列表 >",
  "输入竞品名 → 出口目的地 + 客户清单 + 供应链关系图 >",
  "能不能拉出竞品的客户名单？网易供应链图直接标注竞品的下游买家，截胡靠这个",
  null);

const s6 = buildSection(6, "供应链关系图谱 🔥 网易独家",
  "❌ 无此功能",
  "上下游供应链可视化关系图 — 供应商 ← 本公司 → 客户 >",
  "知道代理商从谁手里进货，截胡才有方向。这是网易外贸通海关数据最大的杀手锏",
  "※ 这一页只截网易的就够，OKKI那边标注「无此功能」");

const s7 = buildSection(7, "数据更新频率",
  "数据更新时间标注（实时/每日） >",
  "数据更新周期说明（每周） >",
  "OKKI有阿里实时交易数据加持，更新更快；网易数据量大但更新是每周",
  null);

const s8 = buildSection(8, "数据下载/导出",
  "导出按钮 + 格式选项（Excel/CSV） >",
  "导出按钮 + 单次导出数量上限 >",
  "一次能导多少条、能不能批量导出来做线下分析，对建客户数据库很关键",
  null);

// ── Section 9-11: 其他维度 ──
const s9 = buildSection(9, "AI开发信",
  "AI开发信界面 + WhatsApp话术 >",
  "多语种开发信 + A/B测试 + 邮件送达率报告 >",
  "OKKI有WhatsApp原生集成（加分项），网易29年邮件技术送达率>95%，开发信不进垃圾箱",
  null);

const s10 = buildSection(10, "客户管理",
  "商机漏斗 + 销售阶段 + 团队看板 >",
  "客户列表 + 公海池 + 标签管理 >",
  "OKKI管客户深度远超网易 — 商机阶段、漏斗、离职交接都是OKKI强项；网易CRM偏基础通讯录水平",
  null);

const s11 = buildSection(11, "价格对比",
  "套餐价格页（入门~2万/年，主流~2.5-3万/年） >",
  "套餐价格页（入门13,440元/年，主流22,238元/年） >",
  "入门版 ¥13,440/年 vs ~¥20,000/年，主流版 ¥22,238/年 vs ~¥27,500/年 — 网易便宜30-40%",
  null);

// ── Section 12: 最终总结 ──
const finalTableData = [
  ["维度", "OKKI（小满）", "网易外贸通", "优胜"],
  ["海关数据量", "10亿+（阿里交易数据）", "60亿+ / 230国 / 1.2亿企业", "网易"],
  ["海关更新频率", "实时/每日", "每周", "OKKI"],
  ["供应链图谱", "无", "有（上下游可视化）", "网易"],
  ["竞品分析深度", "基础（出口记录）", "强（客户清单+关系图）", "网易"],
  ["AI开发信", "有 + WhatsApp话术", "多语种 + A/B测试", "打平"],
  ["邮件送达率", "一般", ">95%（网易邮箱）", "网易"],
  ["客户管理深度", "商机漏斗/公海/离职交接", "基础通讯录+标签", "OKKI"],
  ["阿里国际站对接", "原生同步", "不支持", "OKKI"],
  ["价格（入门）", "~20,000元/年", "13,440元/年", "网易"],
];

const finalRows = finalTableData.map((row, i) => {
  const bg = i === 0 ? ACCENT : (i % 2 === 0 ? LIGHT_BG : WHITE);
  const textColor = i === 0 ? WHITE : DARK;
  const isBold = i === 0;
  return new TableRow({
    children: row.map((cell, j) => {
      let color = textColor;
      if (i > 0 && j === 3) {
        color = cell === "OKKI" ? "2563eb" : cell === "网易" ? "d97706" : "0f766e";
      }
      return new TableCell({
        borders: cellBorders,
        width: { size: j === 0 ? 1800 : j === 3 ? 800 : 2380, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({
          alignment: j === 3 ? AlignmentType.CENTER : AlignmentType.LEFT,
          children: [new TextRun({ text: cell, bold: isBold || j === 3, font: "Arial", size: 18, color })] })]
      });
    })
  });
});

const s12 = [
  new Paragraph({ children: [new PageBreak()] }),
  sectionTitle("12. 总结与推荐"),
  spacer(100),
  new Paragraph({ spacing: { after: 80 },
    children: [new TextRun({ text: "核心结论", bold: true, font: "Arial", size: 26, color: ACCENT })] }),
  new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1800, 2380, 2380, 800],
    rows: finalRows,
  }),
  spacer(200),
  summaryBox("海关数据：网易数据量更大(60亿条/230国)、供应链图谱独有、竞品分析更强；OKKI更新更快"),
  spacer(60),
  summaryBox("AI开发信：网易邮件送达率>95%；OKKI有WhatsApp集成 — 打平"),
  spacer(60),
  summaryBox("客户管理：OKKI远超网易 — 商机漏斗/公海/离职交接是OKKI核心壁垒"),
  spacer(60),
  summaryBox("价格：网易便宜30-40%，3年套餐年均1.3万起"),
  spacer(160),
  new Paragraph({
    spacing: { before: 160, after: 40 },
    children: [new TextRun({ text: "对 RESIONE 的建议", bold: true, font: "Arial", size: 26, color: ACCENT })] }),
  new Paragraph({ spacing: { after: 40 },
    children: [new TextRun({ text: "RESIONE 不用阿里国际站 → OKKI 最大卖点（阿里询盘同步）对我们无效。", font: "Arial", size: 20, color: DARK })] }),
  new Paragraph({ spacing: { after: 40 },
    children: [new TextRun({ text: "网易外贸通的海关数据 + 邮件能力 + 价格优势，更匹配我们「主动找海外代理商」的需求。", font: "Arial", size: 20, color: DARK })] }),
  new Paragraph({
    children: [new TextRun({ text: "建议：申请网易外贸通免费试用，用真实产品词跑一遍海关数据，验证客户匹配度后再决策。", bold: true, font: "Arial", size: 20, color: GREEN })] }),
  spacer(100),
  new Paragraph({ alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "本框架由 RESIONE 整理 · 截图后直接粘贴使用 · 2026年6月30日", font: "Arial", size: 16, color: GRAY })] }),
];

// ── Assemble Document ──
const allChildren = [
  ...cover,
  ...s1, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7, ...s8,
  ...s9, ...s10, ...s11,
  ...s12,
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1134, right: 1440, bottom: 1134, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "OKKI vs 网易外贸通 — 对比分析框架", font: "Arial", size: 16, color: GRAY, italics: true })]
        })]
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "· ", font: "Arial", size: 16, color: GRAY }),
                     new TextRun({ children: [PageNumber.CURRENT] }),
                     new TextRun({ text: " ·", font: "Arial", size: 16, color: GRAY })]
        })]
      }),
    },
    children: allChildren,
  }],
});

// ── Output ──
const outPath = "D:/RESIONE/OKKI_vs_网易外贸通_对比框架_20260630.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.mkdirSync("D:/RESIONE", { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log(`Done: ${outPath}`);
  console.log(`Size: ${(buffer.length / 1024).toFixed(0)} KB`);
}).catch(err => {
  console.error("Error:", err.message);
  process.exit(1);
});
