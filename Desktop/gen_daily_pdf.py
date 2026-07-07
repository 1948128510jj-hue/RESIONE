from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus.flowables import HRFlowable
from reportlab.platypus.tableofcontents import TableOfContents
import markdown
from io import StringIO

# ---------- fonts ----------
pdfmetrics.registerFont(TTFont('ZH', r'C:\WINDOWS\Fonts\msyh.ttc'))
pdfmetrics.registerFont(TTFont('ZHBold', r'C:\WINDOWS\Fonts\msyhbd.ttc'))

# ---------- colors (same as gen_param_pdf.py) ----------
DARK   = HexColor('#3C2415')
MID    = HexColor('#5C3D2E')
LIGHT  = HexColor('#8B7355')
BG     = HexColor('#F5F0EB')
ACCENT = HexColor('#C4A882')
WHITE  = HexColor('#FFFFFF')

out = r'C:\Users\19481\Desktop\每日总结\2026-07-07.pdf'
doc = SimpleDocTemplate(out, pagesize=A4,
    leftMargin=22*mm, rightMargin=22*mm,
    topMargin=18*mm, bottomMargin=18*mm)

styles = getSampleStyleSheet()

title_style   = ParagraphStyle('T',  parent=styles['Title'],    fontName='ZHBold', fontSize=22, textColor=DARK, spaceAfter=6*mm)
h1_style      = ParagraphStyle('H1', parent=styles['Heading1'], fontName='ZHBold', fontSize=16, textColor=DARK, spaceBefore=10*mm, spaceAfter=4*mm)
h2_style      = ParagraphStyle('H2', parent=styles['Heading2'], fontName='ZHBold', fontSize=13, textColor=DARK, spaceBefore=7*mm, spaceAfter=3*mm)
h3_style      = ParagraphStyle('H3', parent=styles['Heading3'], fontName='ZHBold', fontSize=11, textColor=MID,  spaceBefore=5*mm, spaceAfter=2*mm)
body_style    = ParagraphStyle('B',  parent=styles['Normal'],   fontName='ZH',     fontSize=10, textColor=MID,  leading=18, spaceAfter=2*mm)
bullet_style  = ParagraphStyle('BU', parent=styles['Normal'],   fontName='ZH',     fontSize=10, textColor=MID,  leading=16, leftIndent=12*mm, spaceAfter=1*mm)
small_style   = ParagraphStyle('S',  parent=styles['Normal'],   fontName='ZH',     fontSize=8,  textColor=LIGHT)
code_style    = ParagraphStyle('C',  parent=styles['Normal'],   fontName='ZH',     fontSize=9,  textColor=MID,  leading=14, leftIndent=8*mm, spaceAfter=2*mm, backColor=BG)
table_head    = ParagraphStyle('TH', parent=styles['Normal'],   fontName='ZHBold', fontSize=9,  textColor=DARK)
table_cell    = ParagraphStyle('TD', parent=styles['Normal'],   fontName='ZH',     fontSize=9,  textColor=MID,  leading=14)

story = []

# ============================================
# Title
# ============================================
story.append(Paragraph('2026年7月7日 每日总结', title_style))
story.append(Paragraph('RESIONE · 外贸部 · 王宇', small_style))
story.append(Spacer(1, 3*mm))
story.append(Paragraph('穿戴甲新项目调研 & 商业模式搭建 & 客户开发方法论', body_style))
story.append(HRFlowable(width='100%', thickness=0.5, color=ACCENT))
story.append(Spacer(1, 5*mm))

# ============================================
# 1. 客户开发
# ============================================
story.append(Paragraph('一、客户开发', h1_style))

story.append(Paragraph('Jahanzaib Mushtaq（巴基斯坦经销商）', h2_style))
story.append(Paragraph('• 发送公司介绍视频，跟进 WhatsApp 话术', bullet_style))
story.append(Paragraph('• 传达核心信息：工贸一体 / Resione品牌有海外知名度 / 亚马逊独立站有销量 / 厂家直供价 / 供货稳定', bullet_style))
story.append(Paragraph('• 待跟进：确认是否选好产品', bullet_style))

# ============================================
# 2. 穿戴甲项目调研
# ============================================
story.append(Paragraph('二、穿戴甲新项目调研', h1_style))
story.append(Paragraph('核心定位：3D打印穿戴甲作为 Resione 新业务线，做"整包方案商"——不只卖树脂，卖整条产线。', body_style))

# 先例
story.append(Paragraph('2.1 行业先例盘点', h2_style))
header = [['公司', '做什么', '与我们的差异']]
rows = [
    ['广东创新科学技术', 'C端门店+AI定制+故宫文创IP', '我们做B端整包'],
    ['Xianxing Beauty', 'OEM注塑日产30万片', '我们走3D打印柔性路线'],
    ['Senboma', '年产能1.5亿片注塑', '我们做中高端定制'],
    ['Fyne Body（澳洲）', 'UV打印定制甲片', '我们供产线，不卖成品'],
    ['NewNails（新加坡）', '扫描+AI+光固化定制', '学院项目，未商业化'],
    ['富甲天下（天津）', '穿戴甲批量打印托专利', '做设备端'],
]
data = header + rows
t = Table(data, colWidths=[120, 170, 170])
t.setStyle(TableStyle([
    ('FONTNAME', (0,0), (-1,-1), 'ZH'),
    ('FONTSIZE', (0,1), (-1,-1), 9),
    ('FONTNAME', (0,0), (-1,0), 'ZHBold'),
    ('TEXTCOLOR', (0,0), (-1,0), DARK),
    ('TEXTCOLOR', (0,1), (-1,-1), MID),
    ('BACKGROUND', (0,0), (-1,0), ACCENT),
    ('BACKGROUND', (0,1), (-1,-1), BG),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('GRID', (0,0), (-1,-1), 0.5, ACCENT),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
]))
story.append(t)
story.append(Paragraph('<b>核心判断：</b>市场空白——没人做"穿戴甲生产整包方案商"。大家都在卖甲片，我们在卖"造甲片的能力"。', body_style))

# 生产流程
story.append(Paragraph('2.2 生产流程（7大环节）', h2_style))
story.append(Paragraph('数据采集 → 建模设计 → 3D打印 → 后处理 → 上色装饰 → 质检 → 包装出货', bullet_style))

story.append(Paragraph('2.3 后处理是关键', h3_style))
story.append(Paragraph('清洗 → UV二次固化（必须完全固化！）→ 去支撑 → 修边 → 打磨 → 上色 → 封层 → 贴果冻胶', bullet_style))
story.append(Paragraph('<b>80%的问题出在后处理，不是打印。漏一步 = 退货/过敏。</b>', body_style))

story.append(Paragraph('2.4 三种量产方案', h3_style))
header2 = [['方案', '打印负责', '上色负责', '适用场景']]
rows2 = [
    ['A 纯打印', '打白模', '全手工绘制', '高端定制'],
    ['B 打印+UV喷印', '打白模', 'UV平板机喷图案+手工封层', '量产首选'],
    ['C 全打印', '一体打印含浮雕纹理', '手工润色', '重工款式'],
]
data2 = header2 + rows2
t2 = Table(data2, colWidths=[90, 110, 150, 110])
t2.setStyle(TableStyle([
    ('FONTNAME', (0,0), (-1,-1), 'ZH'),
    ('FONTNAME', (0,0), (-1,0), 'ZHBold'),
    ('TEXTCOLOR', (0,0), (-1,0), DARK),
    ('TEXTCOLOR', (0,1), (-1,-1), MID),
    ('BACKGROUND', (0,0), (-1,0), ACCENT),
    ('BACKGROUND', (0,1), (-1,-1), BG),
    ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('GRID', (0,0), (-1,-1), 0.5, ACCENT),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
]))
story.append(t2)

story.append(Paragraph('2.5 材料安全（底线！）', h2_style))
story.append(Paragraph('• 普通光固化树脂 ≠ 皮肤安全 → 必须用 ISO 10993 认证的皮肤安全级树脂', bullet_style))
story.append(Paragraph('• 未完全固化 = 残留单体 = 永久性过敏风险', bullet_style))
story.append(Paragraph('• 必须二次固化 + 封层胶完全隔绝', bullet_style))

story.append(Paragraph('2.6 镜面效果科普', h3_style))
story.append(Paragraph('• 原理：镜面粉（铬粉）微米金属颗粒 + 极致光滑表面 = 镜面反光', bullet_style))
story.append(Paragraph('• 流程：黑底胶 → 半干免洗封层 → 擦镜面粉 → 再封层', bullet_style))
story.append(Paragraph('• 3D打印甲片能做，底子越光滑效果越好', bullet_style))

# ============================================
# 3. 商业模式
# ============================================
story.append(Paragraph('三、商业模式升级', h1_style))
story.append(Paragraph('3.1 不单卖树脂，卖整包', h2_style))
header3 = [['收入线', '内容', '频率']]
rows3 = [
    ['树脂', '穿戴甲专用树脂', '每月复购'],
    ['设备', '打印机+固化箱+清洗机', '一次性'],
    ['耗材包', 'FEP膜+手套+IPA+打磨工具', '每月复购'],
    ['辅料包', '果冻胶+包装卡纸+吸塑托盘', '每月复购'],
    ['方案增值', '设备选型+参数调试+培训', '一次性/年费'],
]
data3 = header3 + rows3
t3 = Table(data3, colWidths=[90, 200, 100])
t3.setStyle(TableStyle([
    ('FONTNAME', (0,0), (-1,-1), 'ZH'),
    ('FONTNAME', (0,0), (-1,0), 'ZHBold'),
    ('TEXTCOLOR', (0,0), (-1,0), DARK),
    ('TEXTCOLOR', (0,1), (-1,-1), MID),
    ('BACKGROUND', (0,0), (-1,0), ACCENT),
    ('BACKGROUND', (0,1), (-1,-1), BG),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('GRID', (0,0), (-1,-1), 0.5, ACCENT),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
]))
story.append(t3)

story.append(Paragraph('3.2 三种套餐', h3_style))
story.append(Paragraph('<b>A 新手启动包：</b>完全没开始的 → 设备+首批树脂+耗材包+调试支持', bullet_style))
story.append(Paragraph('<b>B 扩产包：</b>有设备想加量 → 批量树脂+耗材月包+辅料月包', bullet_style))
story.append(Paragraph('<b>C 降本包：</b>已量产想提效 → 大桶装+长寿命耗材+废液回收方案', bullet_style))

# ============================================
# 4. 方法论
# ============================================
story.append(Paragraph('四、方法论搭建', h1_style))

story.append(Paragraph('4.1 客户信息采集 SOP（5层挖需求法）', h2_style))
header4 = [['层级', '挖什么', '锁定什么']]
rows4 = [
    ['1 渠道规模', '卖哪？卖多少？卖多少钱？', '报价区间'],
    ['2 生产现状', '什么设备？谁家树脂？几个人？', '设备+耗材机会'],
    ['3 痛点', '哪里不满意？哪里费人工？', '方案切入点'],
    ['4 扩张计划', '明年多少？新款？品牌？', '长期绑定'],
    ['5 人脉', '同行？转介绍？行业群？', '裂变拉新'],
]
data4 = header4 + rows4
t4 = Table(data4, colWidths=[80, 190, 120])
t4.setStyle(TableStyle([
    ('FONTNAME', (0,0), (-1,-1), 'ZH'),
    ('FONTNAME', (0,0), (-1,0), 'ZHBold'),
    ('TEXTCOLOR', (0,0), (-1,0), DARK),
    ('TEXTCOLOR', (0,1), (-1,-1), MID),
    ('BACKGROUND', (0,0), (-1,0), ACCENT),
    ('BACKGROUND', (0,1), (-1,-1), BG),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('GRID', (0,0), (-1,-1), 0.5, ACCENT),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
]))
story.append(t4)

story.append(Paragraph('4.2 客户分级', h3_style))
story.append(Paragraph('<b>A级：</b>在做、有量、想扩 → 寄样→报价→签单', bullet_style))
story.append(Paragraph('<b>B级：</b>准备上、设备还没买 → 推启动包', bullet_style))
story.append(Paragraph('<b>C级：</b>还在看、没时间表 → 发案例+每月跟', bullet_style))

story.append(Paragraph('4.3 话术库', h3_style))
story.append(Paragraph('• 中文/英文双版本：第一次聊 / 挖需求 / 推整包 / 报价后 / 催回复 / 长期维护', bullet_style))
story.append(Paragraph('• 文件：Desktop/CRM/穿戴甲客户信息采集模板.md（已同步Git）', bullet_style))

# ============================================
# 5. 产品知识
# ============================================
story.append(Paragraph('五、产品知识', h1_style))

story.append(Paragraph('5.1 TH-HR 红陶泥', h2_style))
story.append(Paragraph('• 从300张图中精选9张用于LinkedIn发帖', bullet_style))
story.append(Paragraph('• 白陶泥已停产，全部选用红陶泥', bullet_style))
story.append(Paragraph('• 9张图已拷贝至 Desktop/LinkedIn_TH-HR_9pics/', bullet_style))

story.append(Paragraph('5.2 树脂知识', h2_style))
story.append(Paragraph('• F69（~69A）= 太软，不适合做手机壳主体；F80（~80A）= 甜点硬度', bullet_style))
story.append(Paragraph('• Resione树脂 405nm波段，LCD/DLP通用', bullet_style))
story.append(Paragraph('• 后固化机：入门¥800-1,100 / 中端¥1,800-2,500 / 大尺寸¥2,500-3,500', bullet_style))

story.append(Paragraph('5.3 ABS vs 光固化树脂（穿戴甲）', h3_style))
story.append(Paragraph('• ABS是传统注塑路线（一副成本2-5元），走量拼价格', bullet_style))
story.append(Paragraph('• 光固化树脂是差异化路线（柔韧/贴合/质感/定制化），利润更高', bullet_style))
story.append(Paragraph('• 不要跟ABS拼价格，拼的是利润更高的那端', bullet_style))

# ============================================
# 6. 背调
# ============================================
story.append(Paragraph('六、公司背景', h1_style))
story.append(Paragraph('上海极侦智能科技有限公司', h2_style))
header5 = [['项目', '信息']]
rows5 = [
    ['法定代表人', '洪涛'],
    ['注册资本', '50万'],
    ['成立日期', '2020年1月'],
    ['参保人数', '2人'],
    ['经营范围', '智能科技/自动化/光电设备/机械设备'],
    ['状态', '存续'],
]
data5 = header5 + rows5
t5 = Table(data5, colWidths=[90, 200])
t5.setStyle(TableStyle([
    ('FONTNAME', (0,0), (-1,-1), 'ZH'),
    ('TEXTCOLOR', (0,0), (-1,-1), MID),
    ('BACKGROUND', (0,0), (-1,0), ACCENT),
    ('BACKGROUND', (0,1), (-1,-1), BG),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('GRID', (0,0), (-1,-1), 0.5, ACCENT),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
]))
story.append(t5)
story.append(Paragraph('新项目穿戴甲暂时用极侦主体走，新公司注册完再切过去。', body_style))

# ============================================
# 7. 明日计划
# ============================================
story.append(Paragraph('七、明日计划', h1_style))
story.append(Paragraph('1. Jahanzaib 跟进：催选品，发产品册', bullet_style))
story.append(Paragraph('2. 新公司注册推进：核对经营范围关键词', bullet_style))
story.append(Paragraph('3. 穿戴甲：整理"起步试产 Checklist"', bullet_style))
story.append(Paragraph('4. 国内客户开发：找第一个穿戴甲意向客户', bullet_style))
story.append(Paragraph('5. 外贸单词：用场景词库开始每天背一个分区', bullet_style))

# ============================================
# Footer
# ============================================
story.append(Spacer(1, 10*mm))
story.append(HRFlowable(width='100%', thickness=0.5, color=ACCENT))
story.append(Spacer(1, 3*mm))
story.append(Paragraph('RESIONE · 每日总结 · 2026.07.07 · 王宇', small_style))

doc.build(story)
print('Done:', out)
