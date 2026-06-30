"""
Generate PDF: OKKI vs 网易外贸通 深度对比分析
Uses fpdf2 for reliable Chinese text rendering.
"""
from fpdf import FPDF
from fpdf.enums import XPos, YPos, Align
import os

OUTPUT = r"C:\Users\19481\Desktop\OKKI_vs_网易外贸通_深度对比分析.pdf"
FONT_PATH = "C:/Windows/Fonts/simhei.ttf"

class PDF(FPDF):
    def __init__(self):
        super().__init__('P', 'mm', 'A4')
        self.add_font('CN', '', FONT_PATH)
        self.set_auto_page_break(True, 18)
        self._in_title = False

    def header(self):
        if self.page_no() > 1:
            self.set_font('CN', '', 7)
            self.set_text_color(150, 150, 150)
            self.cell(0, 6, 'OKKI vs 网易外贸通 深度对比分析  |  RESIONE 丽森科技',
                      new_x=XPos.LMARGIN, new_y=YPos.NEXT, align=Align.C)

    def footer(self):
        self.set_y(-15)
        self.set_font('CN', '', 7)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f'第 {self.page_no()} 页', align=Align.C)

    def title1(self, text):
        self.ln(4)
        self.set_font('CN', '', 18)
        self.set_text_color(26, 26, 46)
        self.cell(0, 10, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_draw_color(15, 118, 110)
        self.set_line_width(0.6)
        self.line(self.l_margin, self.get_y()+1, self.w - self.r_margin, self.get_y()+1)
        self.ln(5)

    def title2(self, text):
        self.ln(2)
        self.set_font('CN', '', 13)
        self.set_text_color(22, 33, 62)
        self.cell(0, 8, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)

    def title3(self, text):
        self.ln(1)
        self.set_font('CN', '', 11)
        self.set_text_color(26, 26, 46)
        self.cell(0, 7, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(1)

    def body(self, text):
        self.set_font('CN', '', 9)
        self.set_text_color(51, 51, 51)
        self.multi_cell(0, 5.5, text, align=Align.J)
        self.ln(1)

    def bullet(self, text):
        self.set_font('CN', '', 9)
        self.set_text_color(51, 51, 51)
        x0 = self.l_margin
        self.set_x(x0 + 5)
        self.multi_cell(self.w - self.l_margin - self.r_margin - 5, 5.5, '> ' + text, align=Align.J)

    def key_text(self, text, color=(15, 118, 110)):
        self.set_font('CN', '', 9)
        self.set_text_color(*color)
        self.multi_cell(0, 5.5, text, align=Align.J)
        self.set_text_color(51, 51, 51)
        self.ln(1)

    def spacer(self, h=3):
        self.ln(h)

    def make_table(self, headers, rows, col_widths=None, header_color=(22, 33, 62)):
        """Draw a styled table"""
        if col_widths is None:
            col_widths = [self.w / len(headers)] * len(headers)
        total_w = sum(col_widths)
        if total_w > self.w - self.l_margin - self.r_margin:
            scale = (self.w - self.l_margin - self.r_margin) / total_w
            col_widths = [w * scale for w in col_widths]

        # Header
        self.set_fill_color(*header_color)
        self.set_text_color(255, 255, 255)
        self.set_font('CN', '', 8.5)
        self.set_draw_color(200, 200, 200)
        for i, (h, w) in enumerate(zip(headers, col_widths)):
            self.cell(w, 8, h, border=1, fill=True,
                      new_x=XPos.RIGHT, new_y=YPos.TOP)
        self.ln()

        # Rows
        for row_idx, row in enumerate(rows):
            if row_idx % 2 == 0:
                self.set_fill_color(245, 245, 250)
            else:
                self.set_fill_color(255, 255, 255)
            self.set_text_color(60, 60, 60)
            self.set_font('CN', '', 8)

            # Calculate max height needed
            max_lines = 1
            for cell_text, w in zip(row, col_widths):
                lines = self.multi_cell(w - 2, 5, cell_text, dry_run=True, output="LINES")
                if lines:
                    max_lines = max(max_lines, len(lines))
            row_h = max(7, max_lines * 5 + 3)

            # Check page break
            if self.get_y() + row_h > self.h - 25:
                self.add_page()

            y_before = self.get_y()
            x_start = self.get_x()

            # Draw cells
            x_pos = x_start
            max_y = y_before
            for cell_text, w in zip(row, col_widths):
                self.set_xy(x_pos, y_before)
                self.multi_cell(w - 1, 5, cell_text, border='LR', fill=True)
                max_y = max(max_y, self.get_y())
                x_pos += w

            # Draw bottom border and move to next row
            self.set_y(y_before)
            self.set_x(x_start)
            for w in col_widths:
                self.cell(w, 0, '', new_x=XPos.RIGHT, new_y=YPos.TOP)
            # Draw horizontal line
            self.set_draw_color(210, 210, 215)
            self.line(x_start, max_y, x_start + total_w, max_y)
            self.set_y(max_y)
            self.set_x(x_start)


pdf = PDF()

# ===== COVER PAGE =====
pdf.add_page()
pdf.ln(55)
pdf.set_font('CN', '', 28)
pdf.set_text_color(26, 26, 46)
pdf.cell(0, 14, 'OKKI vs 网易外贸通', align=Align.C,
         new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font('CN', '', 16)
pdf.set_text_color(107, 114, 128)
pdf.cell(0, 10, '深度对比分析报告', align=Align.C,
         new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(8)
pdf.set_draw_color(15, 118, 110)
pdf.set_line_width(1.2)
pdf.line(65, pdf.get_y(), 145, pdf.get_y())
pdf.ln(10)
pdf.set_font('CN', '', 11)
pdf.set_text_color(107, 114, 128)
pdf.cell(0, 8, 'RESIONE · 丽森科技', align=Align.C,
         new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.cell(0, 8, '2026年6月17日', align=Align.C,
         new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(10)
pdf.set_font('CN', '', 9)
pdf.set_text_color(150, 150, 150)
pdf.cell(0, 7, '内部参考 · 不构成任何商业决策建议', align=Align.C)

# ===== SECTION 1: 产品基因 =====
pdf.add_page()
pdf.title1('一、产品基因对比')
pdf.body('理解两个产品的本质差异，必须从它们的出身和基因出发。OKKI 和网易外贸通虽然都被归类为"外贸 SaaS"，但它们在产品架构、技术内核和商业逻辑上是完全不同的东西。')

pdf.make_table(
    ['维度', 'OKKI（小满科技）', '网易外贸通'],
    [
        ['母公司', '阿里巴巴（收购）', '网易（自研）'],
        ['产品基因', '平台型 CRM — 管理驱动', '邮件营销工具 — 获客驱动'],
        ['技术内核', 'AI 商机智能 + 阿里生态数据', '29年邮件技术 + 海关数据引擎'],
        ['核心目标', '帮国际站商家多下单、少丢单', '帮外贸企业用邮件找到更多客户'],
        ['成立时间', '2013年（小满），2019年被阿里收购', '2021年（杭州竹邮科技）'],
        ['市场地位', '国内外贸CRM市占率第一，25万+用户', '快速增长期，产品成熟度待验证'],
    ],
    [34, 63, 63]
)

pdf.spacer(4)
pdf.key_text('关键判断：OKKI 是"管理工具"，网易外贸通是"获客工具"。这个基因差异决定了它们所有优劣势的分化。')

# ===== SECTION 2: OKKI 优势 =====
pdf.title1('二、OKKI — 优势分析')

pdf.title2('1. 阿里国际站原生数据同步（不可替代）')
pdf.body('OKKI 与阿里国际站是底层数据打通的。询盘、信保订单、RFQ 自动流入 CRM，无需人工导入。任何第三方 CRM 都无法做到这一点——阿里不会把底层 API 开放给竞品。如果 RESIONE 的客户主要来自阿里国际站，这是决定性的优势。')

pdf.title2('2. AI 商机管理（行业落地最好）')
pdf.body('OKKI 的 AI 不仅是"自动提醒跟进"。它能够自动识别邮件和 WhatsApp 内容判断商机是否在推进、检测卡点原因（价格？交期？竞品？）、输单后自动归因分析、基于历史采购周期预测近期可能复购的客户。2026年Q2已接入 DeepSeek R1 做深度分析，是目前外贸 CRM 里 AI 商机能力最成熟的。')

pdf.title2('3. 客户画像自动化')
pdf.body('收到询盘后1-2分钟内自动生成结构化客户画像，包含工商信息、海关采购记录、LinkedIn决策人、官网社媒信息。替代了原来人工背调1-2小时的工作量。')

pdf.title2('4. 团队管控能力（老板视角最完善）')
pdf.body('权限分层（业务员/主管/老板）、客户公私海机制（跟进不及时自动回流公海）、离职一键交接（客户+记录+商机全部转移）、AI月度效能报告（投入产出比+行业对标）。对于业务团队超过3人的公司，管控能力直接影响客户资产安全。')

# ===== SECTION 3: OKKI 劣势 =====
pdf.title1('三、OKKI — 劣势分析')

pdf.make_table(
    ['劣势', '详细说明', '对RESIONE的影响'],
    [
        ['阿里依赖症', '非阿里渠道获客支持很弱。展会、LinkedIn、Google独立站、老客户介绍来的客户，OKKI只是一个普通CRM', '如果国际站不是主要获客渠道，OKKI优势大打折扣'],
        ['海关数据不是强项', '虽有10亿+数据，但质量和更新频率不如网易。买家联系方式空号率和过时率较高', '主动开发新客户时搜到的联系方式不够准'],
        ['主动获客能力弱', '本质是"被动工具"——等询盘进来然后管好。不是主动出击找客户的工具', '不能帮你找到还没见过的客户'],
        ['按人头收费', '约2,400元/年/人，管理员也计费。10人团队年费2.4万+', '团队越大成本越高'],
        ['定制化程度低', '字段、流程、报表灵活度不如老牌通用CRM。商机阶段固定', '样品→测试→下单的长流程需要适应'],
        ['售后响应一般', '部分用户反馈售后响应速度慢，问题解决周期长', '遇到技术问题可能需要等待'],
    ],
    [34, 70, 56]
)

# ===== SECTION 4: 网易外贸通 优势 =====
pdf.add_page()
pdf.title1('四、网易外贸通 — 优势分析')

pdf.title2('1. 邮件能力（29年网易技术壁垒）')
pdf.body('这是网易外贸通最硬的技术壁垒。全球矩阵式邮件服务器（非第三方代发），送达率在同类产品中最高，AI多轮自动跟进序列（根据打开/未打开/点击/未回复等不同行为自动触发不同内容），垃圾邮件规避算法成熟。对外贸来说，邮件到达率差5%，转化率可能差50%。')

pdf.title2('2. 海关数据质量（更新频率优于OKKI）')
pdf.body('60亿+海关数据，关键优势是更新频率高。多个对比评测反映，网易外贸通在买家联系方式的"有效率"上优于OKKI。数据量和更新频率直接决定搜出来的联系方式能不能用。')

pdf.title2('3. AI全链路自动化获客（自动化程度最高）')
pdf.body('输入产品词→AI扩展多语种长尾词→匹配全球买家→AI背调→一键建档→AI生成开发信→多轮自动跟进→客户回复后转人工。这个链条是目前外贸SaaS里自动化程度最高的。')

pdf.title2('4. 独立站+社媒+邮件三合一')
pdf.body('带AI建站功能，可以快速搭建外贸独立站作为邮件营销着陆页。社媒营销模块覆盖LinkedIn、WhatsApp。对没有独立站的团队有额外价值。')

# ===== SECTION 5: 网易外贸通 劣势 =====
pdf.title1('五、网易外贸通 — 劣势分析')

pdf.make_table(
    ['劣势', '详细说明', '风险等级'],
    [
        ['产品成熟度差', '黑猫投诉多起正式投诉："花了46000完全是个半成品""后台数据全是0""更新后数据全部丢失无法恢复""虚假宣传效果严重不符"。功能多但每个都不深', '高'],
        ['CRM能力弱', '客户管理基本停留在"通讯录+标签"水平。销售漏斗、商机阶段、团队协作都很初级。管100+客户就会乱', '高'],
        ['AI质量参差不齐', 'AI开发信质量一般，经常生成模板化、缺乏针对性的内容。不人工润色直接发，回复率不会高', '中'],
        ['无阿里国际站同步', '对依赖阿里国际站的商家是致命伤。询盘需手动导入或用第三方工具', '取决于国际站占比'],
        ['售后口碑差', '投诉集中在"承诺不兑现""售后不解决问题""退款难"。销售承诺很满，产品和售后跟不上', '高'],
        ['产品迭代不稳定', '数据丢失、系统崩溃等重大bug的投诉说明产品稳定性存在隐患', '高'],
    ],
    [38, 96, 26]
)

# ===== SECTION 6: 核心维度对比 =====
pdf.add_page()
pdf.title1('六、核心维度直接对比')

pdf.make_table(
    ['评估维度', 'OKKI', '网易外贸通', '优胜'],
    [
        ['客户管理深度', '★★★★★', '★★☆☆☆', 'OKKI'],
        ['团队管控能力', '★★★★★', '★★☆☆☆', 'OKKI'],
        ['AI商机智能', '★★★★★', '★★☆☆☆', 'OKKI'],
        ['阿里国际站绑定', '★★★★★ 原生同步', '不支持', 'OKKI'],
        ['海关数据质量', '★★★☆☆', '★★★★☆', '网易'],
        ['邮件送达率', '★★★☆☆', '★★★★★', '网易'],
        ['主动获客能力', '★★☆☆☆', '★★★★☆', '网易'],
        ['EDM自动化营销', '★★☆☆☆', '★★★★☆', '网易'],
        ['产品稳定性', '★★★★☆', '★★☆☆☆', 'OKKI'],
        ['售后体验', '★★★☆☆', '★★☆☆☆', 'OKKI'],
        ['性价比', '~2,400/人/年', '~8,000+/年起', '打平'],
        ['学习成本', '较高', '较低', '网易'],
        ['定制化灵活度', '★★☆☆☆', '★★★☆☆', '网易'],
    ],
    [44, 48, 42, 26]
)

# ===== SECTION 7: RESIONE适配性 =====
pdf.title1('七、RESIONE 适配性分析')

pdf.body('RESIONE（丽森科技）的业务特征：工业级3D打印树脂B2B，客单价高、决策链长、产品技术性强、需要样品寄送→测试→反馈→下单的长周期跟踪。客户来源多样（阿里国际站+展会+老客户介绍+独立站）。')

pdf.make_table(
    ['RESIONE最需要的', '谁更强', '原因'],
    [
        ['长周期商机精细化管理', 'OKKI', '工业品转化周期长，AI商机阶段追踪是刚需'],
        ['样品→测试→下单流程跟踪', 'OKKI', '商机阶段管理能适配长链条'],
        ['老客户返单预测和维护', 'OKKI', '返单预测+AI客户动态监测是OKKI强项'],
        ['团队协作和客户资产保护', 'OKKI', '多人团队必须有权责分明和离职交接机制'],
        ['阿里国际站询盘无缝管理', 'OKKI', '原生同步是其他任何CRM替代不了的'],
        ['开发全新的海外3D打印客户', '网易', '海关数据+AI开发信，主动获客能力更强'],
        ['批量邮件营销触达潜在客户', '网易', '29年网易邮件技术，送达率和自动化最好'],
    ],
    [56, 24, 80]
)

pdf.spacer(3)
pdf.key_text('核心矛盾：RESIONE最需要的是OKKI的管理能力来驾驭长周期B2B销售流程，但公司现阶段可能更缺新客户来源。这决定了两个工具都要用，但角色不同。')

# ===== SECTION 8: 最终建议 =====
pdf.add_page()
pdf.title1('八、最终建议：双工具联动方案')

pdf.title2('核心原则')
pdf.key_text('OKKI 当底座，网易当触角。各用所长，互不越界。', (15, 118, 110))

pdf.spacer(2)
pdf.title3('角色分工')
pdf.make_table(
    ['用 OKKI 做', '用网易外贸通做', '不要做的'],
    [
        ['管理已有客户的跟进和商机', '海关数据搜索海外3D打印/树脂买家', '不要用网易管客户'],
        ['团队日报/周报/业绩看板', 'AI生成开发信→EDM批量触达', '不要用OKKI批量群发'],
        ['WhatsApp和邮件一对一深度沟通', '多轮自动营销（未回复自动再触达）', '不要两个都建商机（以OKKI为准）'],
        ['订单流程和返单预警', 'LinkedIn社媒拓客', '不要手动在两个系统间倒数据'],
        ['阿里国际站询盘沉淀', 'AI建站+独立站着陆页', '——'],
        ['客户公私海和离职交接', '新客户AI背调+自动建档', '——'],
    ],
    [56, 56, 48]
)

pdf.spacer(3)
pdf.title3('串联工作流')
pdf.make_table(
    ['步骤', '工具', '动作'],
    [
        ['1 找客户', '网易外贸通', '海关数据搜索→AI背调→确认目标客户'],
        ['2 触达', '网易外贸通', 'AI写开发信→多轮自动跟进序列'],
        ['3 客户回复', '切换到OKKI', '立刻从自动化序列摘出，不再批量群发'],
        ['4 建档', 'OKKI', '在OKKI中创建客户档案和商机'],
        ['5 深度跟进', 'OKKI', '一对一沟通→AI商机阶段管理→卡点分析'],
        ['6 成交/复盘', 'OKKI', '输单归因/返单预测/团队效能分析'],
    ],
    [30, 36, 94]
)

pdf.spacer(3)
pdf.title3('第一个月优先级')
pdf.bullet('第1周：OKKI — 绑定邮箱 + 导入历史客户 + 熟悉界面')
pdf.bullet('第2周：网易外贸通 — 设置产品词库 + 海关数据搜50个目标客户')
pdf.bullet('第3周：网易外贸通 — AI开发信触达 + 对回复客户转入OKKI建商机')
pdf.bullet('第4周：OKKI — 复盘商机转化漏斗 + 调整客户开发策略')

# ===== SECTION 9: 费用估算 =====
pdf.title1('九、费用估算')

pdf.body('以下为两个工具同时使用的大致年费估算，实际价格以官方报价为准：')

pdf.make_table(
    ['配置方案', 'OKKI', '网易外贸通', '合计/年'],
    [
        ['经济型（3-5人，基础获客）', '7,200-12,000', '标准版 ~3,400', '1.1-1.5万'],
        ['标准型（3-5人，完整获客）推荐', '7,200-12,000', 'AI尊享版 ~20,000', '2.7-3.2万'],
        ['顶配型（10人+，大规模营销）', '~24,000', 'AI尊享+百万邮件 ~41,000', '~6.5万'],
    ],
    [64, 42, 54, 30]  # Adjusted total width
)

pdf.spacer(3)
pdf.key_text('RESIONE现阶段推荐标准型，合计约3.2万/年（~2,700/月）。一个海外客户回本。')

# ===== SECTION 10: 风险评估 =====
pdf.title1('十、风险评估')

pdf.make_table(
    ['风险', '可能性', '应对'],
    [
        ['网易外贸通产品不稳定导致数据丢失', '中', '重要客户数据一律在OKKI中留底，不依赖网易存储'],
        ['两个系统数据不同步造成混乱', '高', '以OKKI为客户主数据库，网易只做获客不做管理'],
        ['网易外贸通开发信效果不达预期', '中高', '前两周小批量测试，验证回复率后再加大投入'],
        ['团队学习两个系统负担过重', '中', '第一周只学OKKI，第二周再加网易，不要同时上手'],
        ['售后问题无法及时解决', '中', '保留销售联系方式，重大问题直接投诉至12315或黑猫'],
    ],
    [52, 22, 86]
)

# Output
pdf.output(OUTPUT)
print(f'PDF generated: {OUTPUT}')
print(f'Size: {os.path.getsize(OUTPUT)/1024:.0f} KB')
