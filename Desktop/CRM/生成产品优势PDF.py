"""Generate PDF: RESIONE 全产品最强优势 & 粘度排名"""
from fpdf import FPDF
from fpdf.enums import XPos, YPos, Align
import os

OUTPUT = r"C:\Users\19481\Desktop\RESIONE_全产品优势与粘度排名.pdf"
FONT = "C:/Windows/Fonts/simhei.ttf"

class PDF(FPDF):
    def __init__(self):
        super().__init__('P', 'mm', 'A4')
        self.add_font('CN', '', FONT)
        self.set_auto_page_break(True, 16)

    def header(self):
        if self.page_no() > 1:
            self.set_font('CN', '', 7)
            self.set_text_color(150, 150, 150)
            self.cell(0, 6, 'RESIONE 全产品优势与粘度排名', new_x=XPos.LMARGIN, new_y=YPos.NEXT, align=Align.C)

    def footer(self):
        self.set_y(-15)
        self.set_font('CN', '', 7)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f'第 {self.page_no()} 页', align=Align.C)

    def title1(self, text):
        self.ln(3)
        self.set_font('CN', '', 16)
        self.set_text_color(26, 26, 46)
        self.cell(0, 9, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.set_draw_color(15, 118, 110)
        self.set_line_width(0.5)
        self.line(self.l_margin, self.get_y()+1, self.w - self.r_margin, self.get_y()+1)
        self.ln(4)

    def title2(self, text):
        self.ln(2)
        self.set_font('CN', '', 12)
        self.set_text_color(22, 33, 62)
        self.cell(0, 7, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.ln(2)

    def body(self, text):
        self.set_font('CN', '', 9)
        self.set_text_color(51, 51, 51)
        self.multi_cell(0, 5.5, text, align=Align.J)
        self.ln(1)

    def spacer(self, h=2):
        self.ln(h)

    def key_text(self, text, color=(15, 118, 110)):
        self.set_font('CN', '', 9)
        self.set_text_color(*color)
        self.multi_cell(0, 5.5, text, align=Align.J)
        self.set_text_color(51, 51, 51)
        self.ln(1)

    def make_table(self, headers, rows, col_widths=None, header_color=(22, 33, 62), font_size=8):
        if col_widths is None:
            col_widths = [(self.w - self.l_margin - self.r_margin) / len(headers)] * len(headers)

        # Header
        self.set_fill_color(*header_color)
        self.set_text_color(255, 255, 255)
        self.set_font('CN', '', font_size)
        self.set_draw_color(200, 200, 200)
        for h, w in zip(headers, col_widths):
            self.cell(w, 7, ' ' + h, border=1, fill=True, new_x=XPos.RIGHT, new_y=YPos.TOP)
        self.ln()

        # Rows
        for row_idx, row in enumerate(rows):
            if row_idx % 2 == 0:
                self.set_fill_color(245, 245, 250)
            else:
                self.set_fill_color(255, 255, 255)
            self.set_text_color(60, 60, 60)
            self.set_font('CN', '', font_size)

            # Calculate row height
            max_lines = 1
            for cell_text, w in zip(row, col_widths):
                lines = self.multi_cell(w - 2, 4.5, str(cell_text), dry_run=True, output="LINES")
                if lines:
                    max_lines = max(max_lines, len(lines))
            row_h = max(6, max_lines * 4.5 + 2.5)

            if self.get_y() + row_h > self.h - 22:
                self.add_page()

            y_before = self.get_y()
            x_start = self.get_x()

            x_pos = x_start
            max_y = y_before
            for cell_text, w in zip(row, col_widths):
                self.set_xy(x_pos, y_before)
                self.multi_cell(w - 1, 4.5, ' ' + str(cell_text), border='LR', fill=True)
                max_y = max(max_y, self.get_y())
                x_pos += w

            self.set_draw_color(210, 210, 215)
            self.line(x_start, max_y, x_start + sum(col_widths), max_y)
            self.set_y(max_y)
            self.set_x(x_start)


pdf = PDF()

# ===== COVER =====
pdf.add_page()
pdf.ln(50)
pdf.set_font('CN', '', 26)
pdf.set_text_color(26, 26, 46)
pdf.cell(0, 13, 'RESIONE 全产品', align=Align.C, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.cell(0, 13, '最强优势 & 粘度排名', align=Align.C, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.ln(6)
pdf.set_draw_color(15, 118, 110)
pdf.set_line_width(1.2)
pdf.line(65, pdf.get_y(), 145, pdf.get_y())
pdf.ln(8)
pdf.set_font('CN', '', 11)
pdf.set_text_color(107, 114, 128)
pdf.cell(0, 8, '数据来源：2026.3.13 中文产品册', align=Align.C, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.cell(0, 8, '2026年6月17日', align=Align.C, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

# ===== 目录 =====
pdf.add_page()
pdf.title1('目  录')
pdf.spacer(4)

pdf.set_font('CN', '', 11)
pdf.set_text_color(51, 51, 51)

toc_items = [
    ('一、', '高温树脂 & 标准树脂 & 水洗树脂', 'HT-Enduse / SP64 / M70 / WW123 / WW-ABS / TH-WW'),
    ('二、', '坚韧/ABS类树脂 (10款)', 'TH-BJD / Tough74 V2 / Tough74 / G217 / M58 / M68 / K / K+ / TH-HR / CL-TH'),
    ('三、', '抗冲击/尼龙类 & 柔性/弹性 & 牙科树脂', 'Anti-Impact / TH72 / TH-MINI / F69-F39-F39T / FX60 / ESD Flex / F80 / 终用弹性体 / 牙科'),
    ('四、', '粘度总排名（22款从高到低）', '1,785 mPa·s → 12 mPa·s 完整排名 + 分段使用建议'),
    ('五、', '产品分类速查索引', '按前缀命名规则快速定位任何产品'),
    ('六、', '打印性（Printability）', '五维度定义 + 18款三档分档 + HT-Enduse过曝原理'),
    ('七、', '全产品吸水率排名', '22款从 0.02% 到 16.7% 完整排名 + 分段判断'),
    ('八、', '三款水洗树脂深度对比', 'WW123 vs WW-ABS vs TH-WW 性能/手感/场景全覆盖'),
]

for num, title, desc in toc_items:
    pdf.set_font('CN', '', 11)
    pdf.set_text_color(15, 118, 110)
    pdf.cell(12, 8, num, new_x=XPos.RIGHT, new_y=YPos.TOP)
    pdf.set_text_color(26, 26, 46)
    pdf.cell(0, 8, title, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_x(pdf.l_margin + 12)
    pdf.set_font('CN', '', 8)
    pdf.set_text_color(148, 163, 184)
    pdf.cell(0, 5, desc, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.spacer(3)

# ===== 一、高温 + 标准 + 水洗 =====
pdf.add_page()
pdf.title1('一、高温树脂 & 标准树脂 & 水洗树脂')

pdf.title2('高温树脂 (1款)')
pdf.make_table(['产品', '最强优势', '粘度 (mPa·s)'], [
    ['HT-Enduse', '长期耐140°C高温 + 0.02%极低吸水率，高温模具/齿轮唯一选择', '1,785'],
], [40, 103, 37])

pdf.title2('标准树脂 (2款)')
pdf.make_table(['产品', '最强优势', '粘度 (mPa·s)'], [
    ['SP64', '哑光高级质感 + 低收缩变形，军模/微缩首选标准树脂', '495'],
    ['M70', '无机填料带来的黏土质感 + 高精度，BJD/GK翻模母模专用', '816'],
], [40, 103, 37])

pdf.title2('水洗树脂 (3款)')
pdf.make_table(['产品', '最强优势', '粘度 (mPa·s)'], [
    ['WW123', '粘度12 mPa·s，接近水一样流动，高速打印不挑机器，真正的"每日树脂"', '12'],
    ['WW-ABS', '打印件完全不脆，REACH合规，水洗里对初学者最友好的入门款', '864'],
    ['TH-WW', '水洗里的性能天花板——24.18%伸长+28.9J/m冲击，水洗也能打功能件', '~800'],
], [40, 103, 37])

# ===== 坚韧/ABS类 =====
pdf.add_page()
pdf.title1('二、坚韧/ABS类树脂 (10款)')
pdf.make_table(['产品', '最强优势', '粘度 (mPa·s)'], [
    ['TH-BJD', '不黄变 + 4色肤色系，BJD打印无可替代的首选', '~660'],
    ['Tough74 V2', '34%伸长+20-34J/m冲击，关节耐磨不松动，可动手办原型最强', '630'],
    ['Tough74', '跟V2同门但更亲民，手办原型性价比之选', '556'],
    ['G217', '透明+17.88%伸长+33-35J/m冲击，透明树脂里韧性最强，可钻孔攻丝', '556'],
    ['M58', '灰色刚韧兼具，22.55%伸长+22-42J/m冲击，功能零件+机甲模型通吃', '389'],
    ['M68', '纯白不发黄，建筑模型和灯具装饰的首选', '301'],
    ['K', '强光下不过曝，精密零件尺寸精准', '335'],
    ['K+', '注塑级纯黑外观+0.30%低吸水，短期户外和水下可用', '316'],
    ['TH-HR', '87D高硬度下还有19-21%伸长，超高解析度GK/头雕专用，细节第一', '768-821'],
    ['CL-TH', '9种颜色+19.7-28%伸长+可混合调色，潮玩机甲积木全场景通吃', '847'],
], [42, 105, 33])

# ===== 抗冲击 + 柔性 =====
pdf.add_page()
pdf.title1('三、抗冲击/尼龙类树脂 (3款)')
pdf.make_table(['产品', '最强优势', '粘度 (mPa·s)'], [
    ['Anti-Impact', '93-95%伸长+46-98J/m冲击，类尼龙的耐久性，无人机/RC/户外作业', '609-928'],
    ['TH72', '韧性能长期保持不衰退，30%伸长可维持数年，可作增韧剂混其他树脂', '450'],
    ['TH-MINI', '45.6%伸长+60-66J/m冲击+哑光质感，桌游战棋(Warhammer)专用', '516'],
], [44, 108, 28])

pdf.title2('柔性/弹性树脂 (6款)')
pdf.make_table(['产品', '最强优势', '粘度 (mPa·s)'], [
    ['F69/F39/F39T', '222%伸长+17.59kN/m撕裂强度，柔性树脂里抗撕裂最强', '1,145'],
    ['F39T', '同F69性能但全透明，透明柔性件唯一选择', '1,145'],
    ['FX60', '58-62A超软，LITLIQ子品牌，入门最便宜的柔性', '—'],
    ['ESD Flex', '防静电(表面电阻10^6-10^9)，电子元件接触安全', '1,145'],
    ['F80', '64A+155%伸长+耐寒，牙龈模型/轮胎/密封通用柔性', '—'],
], [44, 108, 28])

pdf.title2('终用弹性体 (6款)')
pdf.make_table(['产品', '硬度', '回弹率', '使用时长', '最强优势'], [
    ['EB80', '80A', '35-40%', '8h@25°C', '热处理型，日常通用'],
    ['EB60', '60A', '35-40%', '8h@25°C', '热处理型，偏软款'],
    ['EHP80', '80A', '38-43%', '15天', '最高回弹率，高压蒸汽处理'],
    ['EHP60', '60A', '38-43%', '15天', '最高回弹率，偏软款'],
    ['EL80', '80A', '30-35%', '15天', '热处理型，性价比最高'],
    ['EL60', '60A', '30-35%', '15天', '热处理型，偏软款'],
], [32, 24, 28, 28, 68])

# ===== 牙科 =====
pdf.title2('牙科树脂 (4款)')
pdf.make_table(['产品', '最强优势', '粘度 (mPa·s)'], [
    ['D01', '85-90D+低收缩，修复/种植/正畸模型通用', '—'],
    ['D01S', '92D超高硬度+无机填料，高精度间接模型，细节最锐', '—'],
    ['C01', '100mPa·s流动性+透明绿，铸造树脂(Ni-Cr/Co-Cr包埋铸造)', '~100'],
    ['GM01', '50A超软+83.5%伸长，牙龈软组织模拟唯一选择', '—'],
], [40, 110, 30])

# ===== 粘度总排名 =====
pdf.add_page()
pdf.title1('四、粘度总排名（从高到低）')
pdf.body('粘度过高的树脂（>800 mPa·s）建议在 25°C 以上环境使用或预热。粘度 < 400 的树脂适合高速打印。')

visc_data = [
    ['1', 'HT-Enduse', '1,785', '蜂蜜状，必须加热打印'],
    ['2', 'F69/F39/F39T/ESD Flex', '1,145', '浓糖浆，柔性体系'],
    ['3', 'Anti-Impact 白灰', '928', '稀蜂蜜'],
    ['4', 'WW-ABS', '864', '稀蜂蜜'],
    ['5', 'CL-TH', '847', '稀蜂蜜，9色可选'],
    ['6', 'TH-HR 红陶泥', '821', '稀蜂蜜'],
    ['7', 'M70', '816', '稀蜂蜜，含无机填料'],
    ['8', 'TH-WW', '~800', '水洗性能天花板'],
    ['9', 'TH-HR 白陶泥', '768', '中稠'],
    ['10', 'TH-BJD', '~660', '中稠，BJD专用'],
    ['11', 'Tough74 V2', '630', '中稠，关节耐磨'],
    ['12', 'Anti-Impact 黑色', '609', '中稠'],
    ['13', 'G217', '556', '中稠，透明韧性强'],
    ['14', 'Tough74', '556', '中稠，性价比款'],
    ['15', 'TH-MINI', '516', '中等，战棋专用'],
    ['16', 'SP64', '495', '中等，标准Pro'],
    ['17', 'TH72', '450', '中等，长期不脆'],
    ['18', 'M58', '389', '中稀，功能件通吃'],
    ['19', 'K', '335', '稀薄，精密零件'],
    ['20', 'K+', '316', '稀薄，注塑级外观'],
    ['21', 'M68', '301', '稀薄，纯白不发黄'],
    ['22', 'WW123', '12', '接近水，极限高速打印'],
]
pdf.make_table(['排名', '产品', '粘度 (mPa·s)', '手感/定位'], visc_data, [22, 78, 36, 44], font_size=7.5)

# ===== 粘度分段总结 =====
pdf.spacer(4)
pdf.title2('粘度分段使用建议')
pdf.make_table(['粘度区间', '代表产品', '使用建议'], [
    ['1,700+', 'HT-Enduse', '必须加热，室温几乎流不动'],
    ['800-1,200', 'F69/F39/F39T, CL-TH, WW-ABS, TH-HR, M70, Anti-Impact', '较稠，建议25°C+环境，需充分回流'],
    ['500-800', 'Tough74 V2, TH-BJD, TH-MINI, SP64, TH72', '中等，标准参数即可'],
    ['300-500', 'M58, K, K+, M68', '稀薄，适合高速打印'],
    ['12', 'WW123', '跟水一样，极限高速，注意防漏'],
], [38, 72, 70])

# ===== 产品分类速查 =====
pdf.add_page()
pdf.title1('五、产品分类速查索引')

pdf.title2('按系列命名规则')
pdf.make_table(['前缀', '含义', '包含产品'], [
    ['TH-', 'Tough & Hard 坚韧系列', 'TH-BJD, TH-WW, TH-HR, TH72, TH-MINI'],
    ['M', '单色坚韧', 'M58(灰), M68(白), M70(红蜡)'],
    ['K', '黑色坚韧', 'K(黑色), K+(纯黑)'],
    ['F', '柔性 Flexible', 'F69(黑), F39(白), F39T(透明), F80(粉/黑)'],
    ['WW', '水洗 Water Washable', 'WW123, WW-ABS'],
    ['D', '牙科 Dental', 'D01, D01S'],
    ['C', '铸造 Casting', 'C01(铸造树脂)'],
    ['G', '透明 Glass/General', 'G217(透明坚韧)'],
    ['EB/EHP/EL', '终用弹性体', 'EB80/60, EHP80/60, EL80/60'],
    ['SP', '标准Pro', 'SP64'],
    ['Anti-', '抗冲击', 'Anti-Impact'],
    ['HT-', '耐高温', 'HT-Enduse'],
    ['FX', '柔性入门', 'FX60(LITLIQ子品牌)'],
    ['ESD', '防静电', 'ESD Flex'],
    ['GM', '牙龈模型', 'GM01(牙龈软组织)'],
], [36, 56, 88])

# ===== 六、打印性 =====
pdf.add_page()
pdf.title1('六、打印性（Printability）')
pdf.body('打印性不是单一参数，而是五个维度的综合：流动性、曝光宽容度、附着力、收缩率、支撑友好度。它回答的核心问题是——这个材料好不好打？容不容易翻车？')
pdf.spacer(2)

pdf.title2('打印性分档')
pdf.make_table(['档次', '产品', '为什么'],
    [
        ['闭眼打', 'WW123', '12 mPa·s 流动性，标准参数直接用，高速打印不翻车'],
        ['闭眼打', 'WW-ABS', '打印成功率高，产品册原话："适合刚接触树脂3D打印的初学者"'],
        ['闭眼打', 'SP64', '标准Pro，稳定可靠，不挑环境'],
        ['正常打', 'CL-TH', '9色之间流动性有细微差异，换颜色微调一下曝光'],
        ['正常打', 'M58/M68/K/K+', '正常操作，没什么特别坑'],
        ['正常打', 'TH72/TH-MINI', '韧性树脂支撑别太细，0.5mm接触点起'],
        ['正常打', 'Tough74 V2', '韧性料拆支撑用点力就行'],
        ['正常打', 'TH-HR', '高解析度+高硬度，支撑接触点要细(0.3-0.4mm)'],
        ['正常打', 'TH-WW', '水洗体系+韧，烘干要彻底'],
        ['正常打', 'G217', '透明料容易过曝糊细节，曝光时间要比不透明的减一点'],
        ['正常打', 'TH-BJD', '肤色料曝光控制要求高，过曝颜色会偏'],
        ['需要经验', 'HT-Enduse', '1785 mPa·s 粘度，冷天必须加热，回流不均；过曝糊细节'],
        ['需要经验', 'F69/F39/F39T', '柔性树脂离型力大，支撑要够粗(0.8-1.0mm)，不然扯脱'],
        ['需要经验', 'FX60', '超软(58-62A)，离型力极大，慢打+粗支撑'],
        ['需要经验', 'Anti-Impact', '高韧性+高粘度(609-928)，支撑粗了难拆，细了拉不住'],
        ['需要经验', 'M70', '含无机填料容易沉淀，用前必须摇匀，打印中偶尔要搅'],
        ['需要经验', 'D01S', '92D超硬超脆，拆支撑手法不对就崩边'],
        ['需要经验', '弹性体EB/EHP/EL', '需要后处理(热处理/高压蒸汽)，光打印不够'],
    ], [36, 56, 88])

pdf.spacer(3)
pdf.title2('打印性五个维度')
pdf.make_table(['维度', '含义', '差的典型', '好的典型'],
    [
        ['流动性', '树脂在料槽里回流快不快', 'HT-Enduse跟蜂蜜一样，冷天几乎流不动', 'WW123跟水一样'],
        ['宽容度', '曝光多一秒少一秒会不会翻车', 'HT-Enduse过曝就糊细节', 'K强光下不过曝'],
        ['附着力', '底層能不能稳稳粘住平台', '柔性树脂容易扯脱', '刚性树脂天然好粘'],
        ['收缩率', '固化时收缩变形多少', '收缩大的薄壁件翘曲', 'TH-HR低收缩，精密配合'],
        ['支撑友好度', '拆支撑会不会崩表面', '高刚性树脂太脆一拆就崩', '韧性树脂拆支撑干净'],
    ], [40, 46, 50, 44])

pdf.spacer(3)
pdf.title2('为什么 HT-Enduse 过曝就糊细节')
pdf.body('根本原因：光散射 + 交联蔓延。HT-Enduse 要耐140°C，靠的是高交联密度+高官能度单体。UV光打到树脂里不是直上直下走，会散射——光子弹来弹去，触发更大范围的聚合反应。高官能度高活性单体一旦被触发，自由基刹不住，链式反应往外扩。三个因素叠加：1785 mPa·s高粘度（散射严重）、97D极高交联密度（扩散范围大）、高官能度（反应剧烈）。这是为了140°C耐温必须付出的代价——打HT-Enduse时曝光宁欠勿过。')

# ===== 七、吸水率排名 =====
pdf.add_page()
pdf.title1('七、全产品吸水率排名（从低到高）')
pdf.body('吸水率(24h)按 ASTM D570-22 标准测试。水洗树脂吸水率天然高，不是缺陷——洗后彻底烘干即可恢复。')

water_data = [
    ['1', 'HT-Enduse', '0.02%', '几乎不吸水，防水件天花板'],
    ['2', 'CL-TH', '0.29%', '极低，手机壳/户外件随便用'],
    ['3', 'K+', '0.30%', '短期户外/水下可用'],
    ['4', 'TH-MINI', '0.40%', '低'],
    ['5', 'Anti-Impact 黑色', '0.42%', '低'],
    ['6', 'Anti-Impact 白灰', '0.45%', '低'],
    ['7', 'M70', '0.53%', '低'],
    ['8', 'SP64', '0.61%', '低'],
    ['9', 'TH72', '0.69%', '低'],
    ['10', 'G217', '0.96%', '一般'],
    ['11', 'Tough74 V2', '0.96%', '一般'],
    ['12', 'Tough74', '0.96%', '一般'],
    ['13', 'K', '1.02%', '一般'],
    ['14', 'WW-ABS', '1.07%', '一般，水洗里吸水性控制最好'],
    ['15', 'TH-HR 红陶泥', '1.19%', '一般'],
    ['16', 'TH-HR 白陶泥', '1.22%', '一般'],
    ['17', 'M68', '~1.24%', '一般'],
    ['18', 'M58', '~1.25%', '一般'],
    ['19', 'TH-BJD', '~1.25%', '一般'],
    ['20', 'F69/F39/F39T', '1.74%', '偏高，柔性体系可接受'],
    ['21', 'WW123', '5.71%', '水洗体系，吸水高，烘干即可'],
    ['22', 'TH-WW', '16.7%', '水洗体系，吸水很高，必须彻底烘干'],
]
pdf.make_table(['排名', '产品', '吸水率(24h)', '水分耐受判断'], water_data, [22, 60, 38, 60], font_size=7.5)

pdf.spacer(4)
pdf.title2('吸水率分段总结')
pdf.make_table(['吸水率', '代表产品', '使用建议'], [
    ['0.02%', 'HT-Enduse', '泡水里几乎零吸水，防水件唯一选择'],
    ['0.3%', 'CL-TH / K+', '手机壳、户外件放心用'],
    ['0.4-0.7%', 'SP64 / TH72 / TH-MINI / M70 / Anti-Impact', '日常环境无忧'],
    ['~1%', 'G217 / Tough74 / K / M58 / M68 / TH-BJD / TH-HR', '别长时间泡水就没事'],
    ['1.7%', 'F69/F39/F39T', '偏高但柔性体系可接受'],
    ['5-17%', 'WW123 / TH-WW', '水洗树脂天然高，洗完彻底烘干即可'],
], [38, 72, 70])

# ===== 八、三款水洗对比 =====
pdf.add_page()
pdf.title1('八、三款水洗树脂深度对比')

pdf.title2('一句话定位')
pdf.make_table(['产品', '定位', '最适合人群'], [
    ['WW123', '懒人每日口粮——不挑机器不挑人', '量大、求快、不想动脑子的'],
    ['WW-ABS', '入门首选——打印件不脆，新手友好', '刚接触树脂打印的初学者'],
    ['TH-WW', '水洗天花板——能打功能件的水洗', '对韧性有要求的水洗用户'],
], [36, 84, 60])

pdf.spacer(3)
pdf.title2('性能对比')
pdf.make_table(['指标', 'WW123', 'WW-ABS', 'TH-WW'], [
    ['粘度 (mPa·s)', '12', '864', '~800'],
    ['邵氏硬度', '85D', '—', '70D'],
    ['拉伸强度 (MPa)', '35', '28.8', '—'],
    ['拉伸模量 (MPa)', '1,470', '700', '—'],
    ['断裂伸长率', '9%', '16%', '24.18%'],
    ['弯曲强度 (MPa)', '64.65', '35.8', '—'],
    ['弯曲模量 (MPa)', '2,007', '1,220', '—'],
    ['缺口冲击 (J/m)', '15-23.4', '17.6', '28.9'],
    ['吸水率', '5.71%', '1.07%', '16.7%'],
    ['颜色', '6色', '灰色', '灰色/火焰橙'],
], [44, 45, 45, 46])

pdf.spacer(3)
pdf.title2('打印体验对比')
pdf.make_table(['维度', 'WW123', 'WW-ABS', 'TH-WW'], [
    ['流动性', '跟水一样，极速回流', '正常', '正常'],
    ['高速打印', '天生适合', '可以', '可以'],
    ['清洗难度', '清水冲就行', '清水冲就行', '清水冲就行'],
    ['气味', '几乎无味', '低气味', '低气味'],
    ['固化后手感', '偏硬脆', '有韧性不脆', '明显韧'],
    ['打印成功率', '极高，不挑参数', '高，适合初学者', '中高'],
], [44, 45, 45, 46])

pdf.spacer(3)
pdf.title2('韧性排名')
pdf.body('伸长率：TH-WW(24.18%) > WW-ABS(16%) > WW123(9%)')
pdf.body('冲击强度：TH-WW(28.9) > WW-ABS(17.6) > WW123(15-23.4)')
pdf.body('硬度：WW123(85D，硬) > WW-ABS(—，中等) > TH-WW(70D，软韧)')
pdf.spacer(2)
pdf.key_text('TH-WW = 能打功能件 | WW-ABS = 日常够用 | WW123 = 摆件够用')

pdf.spacer(3)
pdf.title2('场景速选')
pdf.make_table(['场景', '选谁', '理由'], [
    ['每天大量打印，懒得调参数', 'WW123', '12 mPa·s，什么机器都能打'],
    ['教学/新手入门', 'WW123或WW-ABS', '易打印，成功率高'],
    ['微缩模型（日常把玩）', 'TH-WW', '韧，摔不坏'],
    ['静态摆件/原型手板', 'WW-ABS', '不脆，够用'],
    ['功能性零件', 'TH-WW', '水洗里唯一能打功能件的'],
    ['需要多种颜色', 'WW123', '6色可选'],
    ['对气味敏感', 'WW123', '几乎无味'],
], [52, 40, 88])

# ===== 九、颜色数量排名 =====
pdf.add_page()
pdf.title1('九、全产品颜色数量排名（从多到少）')
pdf.body('颜色数量直接影响产品的外观适用性。颜色越多，能覆盖的场景和审美偏好越广。CL-TH 和 WW123 是唯二可以"挑颜色"的产品线。')

color_data = [
    ['1', 'CL-TH', '9色', '红/橙/黄/绿/青/蓝/紫/粉/淡粉', '潮玩机甲积木全场景通吃'],
    ['2', 'WW123', '6色', '海水蓝/水晶透/水晶紫/湖水绿/火焰橙/冷灰', '水洗里颜色最丰富的'],
    ['3', 'TH-BJD', '4色', '特白/古铜/奶油白/奶油粉', 'BJD肤色系全覆盖'],
    ['4', 'SP64', '4色', '浅桃/黑/蓝灰/中灰', '标准树脂里选择最多的'],
    ['5', 'TH72', '3色', '白/哑灰/中灰', '柔韧系颜色最多的'],
    ['6', 'F80', '2色', '粉/黑', '柔性里的双色'],
    ['7', 'Anti-Impact', '2色', '白灰/黑', '抗冲击双色可选'],
    ['8', 'TH-WW', '2色', '灰/火焰橙', '水洗性能天花板，火焰橙有辨识度'],
    ['9', 'TH-HR', '2色', '红陶泥/白陶泥', '高解析度双色'],
    ['10', 'EB80/EB60', '2色x2', '80A+60A各一色', '弹性体入门双硬度'],
    ['11', 'EHP80/EHP60', '2色x2', '80A+60A各一色', '高回弹弹性体'],
    ['12', 'EL80/EL60', '2色x2', '80A+60A各一色', '长续航弹性体'],
    ['13', 'K+', '1色', '纯黑', '注塑级外观，一色封神'],
    ['14', 'K', '1色', '黑', '经典黑色坚韧'],
    ['15', 'M68', '1色', '纯白', '建筑/灯具专用白'],
    ['16', 'M58', '1色', '灰', '功能件通吃灰'],
    ['17', 'M70', '1色', '鲑鱼色', '红蜡质感独一档'],
    ['18', 'G217', '1色', '透明(微蓝)', '透明坚韧唯一'],
    ['19', 'Tough74 V2', '1色', '灰', '可动手办灰'],
    ['20', 'Tough74', '1色', '黑', '手办黑'],
    ['21', 'HT-Enduse', '1色', '灰', '高温灰'],
    ['22', 'TH-MINI', '1色', '灰', '战棋灰'],
    ['23', 'WW-ABS', '1色', '灰', '入门水洗灰'],
    ['24', 'F69', '1色', '黑', '柔性黑'],
    ['25', 'F39', '1色', '白', '柔性白'],
    ['26', 'F39T', '1色', '透明', '透明柔性唯一'],
    ['27', 'FX60', '1色', '黑', '入门柔性黑'],
    ['28', 'ESD Flex', '1色', '黑', '防静电黑'],
    ['29', 'D01', '1色', '黄橙色', '牙科模型专用'],
    ['30', 'D01S', '1色', '海贝色', '高精度牙科'],
    ['31', 'C01', '1色', '透明绿', '铸造树脂专用'],
    ['32', 'GM01', '1色', '牙龈粉', '牙龈软组织专用'],
]
pdf.make_table(['排名', '产品', '颜色数', '具体颜色', '备注'], color_data, [22, 44, 24, 55, 55], font_size=7)

pdf.spacer(4)
pdf.title2('颜色分布洞察')
pdf.body('仅 CL-TH (9色) 和 WW123 (6色) 提供超过 4 种颜色，其余产品均 ≤ 4 色')
pdf.body('12 款产品只有 1 种颜色——多数功能性/专用树脂不需要多色')
pdf.body('透明色系：G217(透明微蓝)、F39T(透明柔性)、C01(透明绿铸造)、WW123(水晶透)')
pdf.body('纯黑色系：K+(注塑黑)、K(黑)、F69(柔性黑)、ESD Flex(防静电黑)、Anti-Impact(黑)')
pdf.body('白色系：M68(纯白)、F39(柔性白)、TH72(白)、TH-BJD(特白/奶油白)')
pdf.body('肤色/暖色系仅 TH-BJD (特白/古铜/奶油白/奶油粉) 一家，BJD 护城河')
pdf.body('多色产品（CL-TH、WW123）打印性差异：换色可能需要微调曝光，颜色越深光吸收越快')

pdf.output(OUTPUT)
print(f'Done: {os.path.getsize(OUTPUT)/1024:.0f} KB')
