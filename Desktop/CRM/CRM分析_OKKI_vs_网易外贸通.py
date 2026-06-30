"""
Generate PDF: OKKI vs 网易外贸通 深度对比分析
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                 TableStyle, PageBreak, HRFlowable)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus.flowables import KeepTogether
import os

# Use reportlab's built-in CJK font (UnicodeCIDFont) for Chinese text
# This is the only reliably-supported way for Chinese in Platypus (Paragraph, Table)
pdfmetrics.registerFont(UnicodeCIDFont('STSong-Light'))
CN_FONT = 'STSong-Light'
CN_BOLD = 'STSong-Light'

OUTPUT = r"C:\Users\19481\Desktop\OKKI_vs_网易外贸通_深度对比分析.pdf"

# Colors
DARK = HexColor('#1a1a2e')
ACCENT = HexColor('#16213e')
GREEN = HexColor('#0f766e')
RED = HexColor('#b91c1c')
BLUE = HexColor('#1e40af')
GRAY = HexColor('#6b7280')
LIGHT_BG = HexColor('#f1f5f9')
ORANGE = HexColor('#ea580c')
WHITE = white

# Styles
styles = getSampleStyleSheet()

body = ParagraphStyle('CNBody', fontName=CN_FONT, fontSize=10, leading=16,
                       spaceAfter=6, alignment=TA_JUSTIFY)
heading1 = ParagraphStyle('CNH1', fontName=CN_BOLD, fontSize=20, leading=28,
                          spaceAfter=12, textColor=DARK, alignment=TA_LEFT)
heading2 = ParagraphStyle('CNH2', fontName=CN_BOLD, fontSize=14, leading=20,
                          spaceBefore=18, spaceAfter=8, textColor=ACCENT)
heading3 = ParagraphStyle('CNH3', fontName=CN_BOLD, fontSize=11, leading=16,
                          spaceBefore=12, spaceAfter=4, textColor=DARK)
small = ParagraphStyle('CNSmall', fontName=CN_FONT, fontSize=8, leading=12,
                       textColor=GRAY, alignment=TA_CENTER)
bullet = ParagraphStyle('CNBullet', fontName=CN_FONT, fontSize=10, leading=16,
                        leftIndent=16, bulletIndent=6, spaceAfter=2)
green_text = ParagraphStyle('GreenText', fontName=CN_BOLD, fontSize=10, leading=16,
                            textColor=GREEN)
red_text = ParagraphStyle('RedText', fontName=CN_BOLD, fontSize=10, leading=16,
                          textColor=RED)

def h2(text):
    return Paragraph(text, heading2)

def h3(text):
    return Paragraph(text, heading3)

def p(text):
    return Paragraph(text, body)

def b(text):
    return Paragraph(text, bullet)

def hr():
    return HRFlowable(width="100%", thickness=0.5, color=HexColor('#e2e8f0'), spaceAfter=10)

def make_table(data, col_widths=None, header=True):
    """Create a styled table"""
    t = Table(data, colWidths=col_widths, repeatRows=1 if header else 0)
    style_cmds = [
        ('FONTNAME', (0, 0), (-1, -1), CN_FONT),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('LEADING', (0, 0), (-1, -1), 14),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cbd5e1')),
        ('LINEBELOW', (0, 0), (-1, 0), 1.5, ACCENT),
    ]
    if header:
        style_cmds.append(('FONTNAME', (0, 0), (-1, 0), CN_BOLD))
        style_cmds.append(('BACKGROUND', (0, 0), (-1, 0), ACCENT))
        style_cmds.append(('TEXTCOLOR', (0, 0), (-1, 0), WHITE))
        style_cmds.append(('FONTSIZE', (0, 0), (-1, 0), 10))
        style_cmds.append(('TOPPADDING', (0, 0), (-1, 0), 6))
        style_cmds.append(('BOTTOMPADDING', (0, 0), (-1, 0), 6))
    # Alternating rows
    for i in range(1, len(data)):
        if i % 2 == 0:
            style_cmds.append(('BACKGROUND', (0, i), (-1, i), LIGHT_BG))
    t.setStyle(TableStyle(style_cmds))
    return t

# ========== BUILD DOCUMENT ==========
doc = SimpleDocTemplate(OUTPUT, pagesize=A4,
                        leftMargin=22*mm, rightMargin=22*mm,
                        topMargin=20*mm, bottomMargin=20*mm,
                        title='OKKI vs 网易外贸通 深度对比分析',
                        author='RESIONE')

story = []

# Cover
story.append(Spacer(1, 40*mm))
story.append(Paragraph('OKKI vs 网易外贸通', ParagraphStyle('Cover', fontName=CN_BOLD,
                        fontSize=28, leading=36, textColor=DARK, alignment=TA_CENTER)))
story.append(Paragraph('深度对比分析报告', ParagraphStyle('CoverSub', fontName=CN_FONT,
                        fontSize=16, leading=24, textColor=GRAY, alignment=TA_CENTER)))
story.append(Spacer(1, 12*mm))
story.append(HRFlowable(width="40%", thickness=2, color=GREEN, spaceAfter=10))
story.append(Spacer(1, 8*mm))
story.append(Paragraph('RESIONE · 丽森科技', ParagraphStyle('Co', fontName=CN_FONT,
                        fontSize=12, leading=18, textColor=GRAY, alignment=TA_CENTER)))
story.append(Paragraph('2026年6月17日', ParagraphStyle('Date', fontName=CN_FONT,
                        fontSize=10, leading=14, textColor=GRAY, alignment=TA_CENTER)))
story.append(PageBreak())

# ===== SECTION 1: 产品基因 =====
story.append(h2('一、产品基因对比'))
story.append(p('理解两个产品的本质差异，必须从它们的出身和基因出发。OKKI 和网易外贸通虽然都被归类为"外贸 SaaS"，但它们在产品架构、技术内核和商业逻辑上是完全不同的东西。'))
story.append(Spacer(1, 4))

dna_data = [
    ['维度', 'OKKI（小满科技）', '网易外贸通'],
    ['母公司', '阿里巴巴（收购）', '网易（自研）'],
    ['产品基因', '平台型 CRM — 管理驱动', '邮件营销工具 — 获客驱动'],
    ['技术内核', 'AI 商机智能 + 阿里生态数据', '29年邮件技术 + 海关数据引擎'],
    ['核心目标', '帮阿里国际站商家多下单、少丢单', '帮外贸企业用邮件找到更多客户'],
    ['成立时间', '2013年（小满），2019年被阿里收购', '2021年（杭州竹邮科技）'],
    ['市场地位', '国内外贸 CRM 市占率第一，25万+用户', '快速增长期，产品成熟度待验证'],
]
story.append(make_table(dna_data, col_widths=[70, 200, 210]))
story.append(Spacer(1, 6))
story.append(p('<b>关键判断：</b>OKKI 是"管理工具"，网易外贸通是"获客工具"。这个基因差异决定了它们所有优劣势的分化。'))

# ===== SECTION 2: OKKI 深度分析 =====
story.append(PageBreak())
story.append(h2('二、OKKI — 优势分析'))
story.append(Spacer(1, 4))

story.append(h3('1. 阿里国际站原生数据同步（不可替代）'))
story.append(p('OKKI 与阿里国际站是底层数据打通的。询盘、信保订单、RFQ 自动流入 CRM，无需人工导入。任何第三方 CRM 都无法做到这一点——阿里不会把底层 API 开放给竞品。这是 OKKI 最核心的护城河。如果 RESIONE 的客户主要来自阿里国际站，这是决定性的优势。'))
story.append(Spacer(1, 3))

story.append(h3('2. AI 商机管理（行业落地最好）'))
story.append(p('OKKI 的 AI 不仅是"自动提醒跟进"。它能够：自动识别邮件和 WhatsApp 内容，判断商机是否在推进；检测卡点原因（价格？交期？竞品？）；输单后自动归因分析；基于历史采购周期预测近期可能复购的客户。2026 年 Q2 已接入 DeepSeek R1 做深度分析，是目前外贸 CRM 里 AI 商机能力最成熟的。'))
story.append(Spacer(1, 3))

story.append(h3('3. 客户画像自动化'))
story.append(p('收到询盘后 1-2 分钟内自动生成结构化客户画像，包含工商信息、海关采购记录、LinkedIn 决策人、官网、社媒信息。替代了原来人工背调 1-2 小时的工作量。'))
story.append(Spacer(1, 3))

story.append(h3('4. 团队管控能力（老板视角最完善）'))
story.append(p('权限分层（业务员/主管/老板）、客户公私海机制（跟进不及时自动回流）、离职一键交接（客户+记录+商机全部转移）、AI 月度效能报告（投入产出比+行业对标）。对于业务团队超过 3 人的公司，管控能力直接影响客户资产安全。'))

story.append(Spacer(1, 8))
story.append(h2('三、OKKI — 劣势分析'))
story.append(Spacer(1, 4))

okki_weakness = [
    ['劣势', '详细说明', '对 RESIONE 的影响'],
    ['阿里依赖症', '非阿里渠道获客支持很弱。展会、LinkedIn、Google 独立站、老客户介绍来的客户，OKKI 只是一个普通 CRM', '如果国际站不是主要获客渠道，OKKI 优势大打折扣'],
    ['海关数据不是强项', '虽有 10亿+ 数据，但质量和更新频率不如网易。买家联系方式空号率和过时率较高', '主动开发新客户时搜到的联系方式不够准'],
    ['主动获客能力弱', '本质是"被动工具"——等询盘进来然后管好。不是主动出击找客户的工具', '不能帮你找到你还没见过的客户'],
    ['按人头收费', '约 2400元/年/人，管理员也收费。10 人团队年费 2.4万+', '团队越大成本越高'],
    ['定制化程度低', '字段、流程、报表灵活度不如老牌通用 CRM。商机阶段固定，不一定匹配长转化周期的工业品业务', '样品→测试→下单的长流程适配需要适应'],
    ['售后响应一般', '部分用户反馈售后响应速度慢，问题解决周期长', '遇到技术问题可能需要等待'],
]
story.append(make_table(okki_weakness, col_widths=[70, 250, 160]))

# ===== SECTION 3: 网易外贸通 =====
story.append(PageBreak())
story.append(h2('四、网易外贸通 — 优势分析'))
story.append(Spacer(1, 4))

story.append(h3('1. 邮件能力（29年网易技术壁垒）'))
story.append(p('这是网易外贸通最硬的技术壁垒。全球矩阵式邮件服务器（非第三方代发），送达率在同类产品中最高，AI 多轮自动跟进序列（根据打开/未打开/点击/未回复等不同行为自动触发不同内容），垃圾邮件规避算法成熟。对外贸来说，邮件到达率差 5%，转化率可能差 50%。'))
story.append(Spacer(1, 3))

story.append(h3('2. 海关数据质量（更新频率优于 OKKI）'))
story.append(p('60亿+ 海关数据，关键优势是更新频率高。多个对比评测反映，网易外贸通在买家联系方式的"有效率"上优于 OKKI。数据量和更新频率直接决定搜出来的联系方式能不能用。'))
story.append(Spacer(1, 3))

story.append(h3('3. AI 全链路自动化获客（自动化程度最高）'))
story.append(p('输入产品词→AI 扩展多语种长尾词→匹配全球买家→AI 背调→一键建档→AI 生成开发信→多轮自动跟进→客户回复后转人工。这个链条是目前外贸 SaaS 里自动化程度最高的。'))
story.append(Spacer(1, 3))

story.append(h3('4. 独立站+社媒+邮件三合一'))
story.append(p('带 AI 建站功能，可以快速搭建外贸独立站作为邮件营销着陆页。社媒营销模块覆盖 LinkedIn、WhatsApp。对没有独立站的团队有额外价值。'))

story.append(Spacer(1, 8))
story.append(h2('五、网易外贸通 — 劣势分析'))
story.append(Spacer(1, 4))

wy_weakness = [
    ['劣势', '详细说明', '风险等级'],
    ['产品成熟度差', '黑猫投诉多起正式投诉："花了 46000 完全是个半成品""后台数据全是 0""更新后数据全部丢失无法恢复""虚假宣传效果严重不符"。功能多但每个都不深', '⚠️ 高'],
    ['CRM 能力弱', '客户管理基本停留在"通讯录+标签"水平。销售漏斗、商机阶段、团队协作都很初级。管 100+ 客户就会乱', '⚠️ 高'],
    ['AI 质量参差不齐', 'AI 开发信质量一般，经常生成模板化、缺乏针对性的内容。不人工润色直接发，回复率不会高', '⚠️ 中'],
    ['无阿里国际站同步', '对依赖阿里国际站的商家是致命伤。询盘需手动导入或用第三方工具', '⚠️ 中（取决于你们国际站占比）'],
    ['售后口碑差', '投诉集中在"承诺不兑现""售后不解决问题""退款难"。销售承诺很满，产品和售后跟不上', '⚠️ 高'],
    ['产品迭代不稳定', '数据丢失、系统崩溃等重大 bug 的投诉说明产品稳定性不足', '⚠️ 高'],
]
story.append(make_table(wy_weakness, col_widths=[80, 290, 110]))

# ===== SECTION 4: 核心维度对比 =====
story.append(PageBreak())
story.append(h2('六、核心维度直接对比'))
story.append(Spacer(1, 4))

compare_data = [
    ['评估维度', 'OKKI', '网易外贸通', '优胜'],
    ['客户管理深度', '⭐⭐⭐⭐⭐', '⭐⭐', 'OKKI'],
    ['团队管控能力', '⭐⭐⭐⭐⭐', '⭐⭐', 'OKKI'],
    ['AI 商机智能', '⭐⭐⭐⭐⭐', '⭐⭐', 'OKKI'],
    ['阿里国际站绑定', '⭐⭐⭐⭐⭐ 原生同步', '❌ 不支持', 'OKKI'],
    ['海关数据质量', '⭐⭐⭐', '⭐⭐⭐⭐', '网易'],
    ['邮件送达率', '⭐⭐⭐', '⭐⭐⭐⭐⭐', '网易'],
    ['主动获客能力', '⭐⭐', '⭐⭐⭐⭐', '网易'],
    ['EDM 自动化营销', '⭐⭐', '⭐⭐⭐⭐', '网易'],
    ['产品稳定性', '⭐⭐⭐⭐', '⭐⭐', 'OKKI'],
    ['售后体验', '⭐⭐⭐', '⭐⭐', 'OKKI'],
    ['性价比', '⭐⭐⭐ (~2400/人/年)', '⭐⭐⭐ (~8000+/年)', '打平'],
    ['学习成本', '较高', '较低', '网易'],
    ['定制化灵活度', '⭐⭐', '⭐⭐⭐', '网易'],
]
story.append(make_table(compare_data, col_widths=[90, 100, 120, 60]))

# ===== SECTION 5: RESIONE适配性 =====
story.append(Spacer(1, 12))
story.append(h2('七、RESIONE 适配性分析'))
story.append(Spacer(1, 4))

story.append(p('RESIONE（丽森科技）的业务特征：工业级 3D 打印树脂 B2B，客单价高、决策链长、产品技术性强、需要样品寄送→测试→反馈→下单的长周期跟踪。客户来源多样（阿里国际站+展会+老客户介绍+独立站）。'))
story.append(Spacer(1, 6))

fit_data = [
    ['RESIONE 最需要的', '谁更强', '原因'],
    ['长周期商机精细化管理', '🏆 OKKI', '工业品转化周期长，AI 商机阶段追踪是刚需'],
    ['样品→测试→下单流程跟踪', '🏆 OKKI', 'OKKI 的商机阶段管理能适配长链条'],
    ['老客户返单预测和维护', '🏆 OKKI', '返单预测 + AI 客户动态监测是 OKKI 强项'],
    ['团队协作和客户资产保护', '🏆 OKKI', '多人团队必须有权责分明和离职交接机制'],
    ['阿里国际站询盘无缝管理', '🏆 OKKI', '原生同步是其他任何 CRM 替代不了的'],
    ['开发全新的海外 3D 打印客户', '🏆 网易', '海关数据+AI开发信，主动获客能力更强'],
    ['批量邮件营销触达潜在客户', '🏆 网易', '29年网易邮件技术，送达率和自动化最好'],
]
story.append(make_table(fit_data, col_widths=[110, 80, 290]))
story.append(Spacer(1, 6))

story.append(p('<b>核心矛盾：</b>RESIONE 最需要的是 OKKI 的管理能力来驾驭长周期 B2B 销售流程，但公司现阶段可能更缺新客户来源。这决定了两个工具都要用，但角色不同。'))

# ===== SECTION 6: 最终建议 =====
story.append(PageBreak())
story.append(h2('八、最终建议：双工具联动方案'))
story.append(Spacer(1, 6))

story.append(h3('核心原则：OKKI 当底座，网易当触角。各用所长，互不越界。'))
story.append(Spacer(1, 6))

# Roles table
role_data = [
    ['用 OKKI 做', '用网易外贸通做', '❌ 不要做的'],
    ['管理已有客户的跟进和商机', '海关数据搜索海外 3D 打印/树脂买家', '❌ 不要用网易管客户'],
    ['团队日报/周报/业绩看板', 'AI 生成开发信 → EDM 批量触达', '❌ 不要用 OKKI 批量群发'],
    ['WhatsApp 和邮件的一对一深度沟通', '多轮自动营销（未回复自动再触达）', '❌ 不要两个都建商机（以 OKKI 为准）'],
    ['订单流程和返单预警', 'LinkedIn 社媒拓客', '❌ 不要手动在两个系统间倒数据'],
    ['阿里国际站询盘沉淀', 'AI 建站 + 独立站着陆页', '—'],
    ['客户公私海和离职交接', '新客户 AI 背调 + 自动建档', '—'],
]
story.append(make_table(role_data, col_widths=[180, 180, 120]))
story.append(Spacer(1, 8))

# Workflow
story.append(h3('串联工作流'))
story.append(Spacer(1, 3))
flow_data = [
    ['步骤', '工具', '动作'],
    ['① 找客户', '网易外贸通', '海关数据搜索 → AI 背调 → 确认目标客户'],
    ['② 触达', '网易外贸通', 'AI 写开发信 → 多轮自动跟进序列'],
    ['③ 客户回复', '⚠️ 切换', '立刻从自动化序列摘出，不再批量群发'],
    ['④ 建档', 'OKKI', '在 OKKI 中创建客户档案和商机'],
    ['⑤ 深度跟进', 'OKKI', '一对一沟通 → AI 商机阶段管理 → 卡点分析'],
    ['⑥ 成交/复盘', 'OKKI', '输单归因 / 返单预测 / 团队效能分析'],
]
story.append(make_table(flow_data, col_widths=[60, 70, 350]))
story.append(Spacer(1, 8))

story.append(h3('第一个月优先级'))
story.append(Spacer(1, 2))
story.append(b('<b>第 1 周：</b>OKKI — 绑定邮箱 + 导入历史客户 + 熟悉界面'))
story.append(b('<b>第 2 周：</b>网易外贸通 — 设置产品词库 + 海关数据搜 50 个目标客户'))
story.append(b('<b>第 3 周：</b>网易外贸通 — AI 开发信触达 + 对回复客户转入 OKKI 建商机'))
story.append(b('<b>第 4 周：</b>OKKI — 复盘商机转化漏斗 + 调整客户开发策略'))

story.append(Spacer(1, 12))
story.append(h2('九、风险评估'))
story.append(Spacer(1, 4))

risk_data = [
    ['风险', '可能性', '应对'],
    ['网易外贸通产品不稳定导致数据丢失', '中', '重要客户数据一律在 OKKI 中留底，不依赖网易存储'],
    ['两个系统数据不同步造成混乱', '高', '以 OKKI 为客户主数据库，网易只做获客不做管理'],
    ['网易外贸通开发信效果不达预期', '中高', '前两周小批量测试，验证回复率后再决定是否加大投入'],
    ['团队学习两个系统负担过重', '中', '第一周只学 OKKI，第二周再加网易，不要同时上手'],
    ['售后问题无法及时解决', '中', '保留销售联系方式，重大问题直接投诉到 12315 或黑猫'],
]
story.append(make_table(risk_data, col_widths=[150, 60, 270]))

# ===== Footer =====
story.append(Spacer(1, 20))
story.append(hr())
story.append(Paragraph('本报告基于 2026年6月公开信息、产品官网、用户评价及行业对比评测整理。', small))
story.append(Paragraph('RESIONE 丽森科技 · 内部参考 · 不构成任何商业决策建议', small))

# Build
doc.build(story)
print(f'PDF generated: {OUTPUT}')
print(f'Size: {os.path.getsize(OUTPUT)/1024:.0f} KB')
