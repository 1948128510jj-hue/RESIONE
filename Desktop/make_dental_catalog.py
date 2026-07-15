import sys, os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus.doctemplate import PageTemplate, BaseDocTemplate

# Warm brown palette
BROWN_DARK = colors.HexColor('#5D4037')
BROWN_MID = colors.HexColor('#8D6E63')
BROWN_LIGHT = colors.HexColor('#D7CCC8')
BROWN_BG = colors.HexColor('#FFF8F0')
BROWN_ACCENT = colors.HexColor('#BF8040')

output_path = r'C:\Users\19481\Desktop\RESIONE_Dental_Catalog.pdf'

doc = SimpleDocTemplate(
    output_path, pagesize=A4,
    leftMargin=18*mm, rightMargin=18*mm,
    topMargin=15*mm, bottomMargin=15*mm
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle('T', parent=styles['Title'],
    fontSize=24, textColor=BROWN_DARK, spaceAfter=6*mm, alignment=TA_CENTER,
    fontName='Helvetica-Bold')

h1_style = ParagraphStyle('H1', parent=styles['Heading1'],
    fontSize=16, textColor=BROWN_DARK, spaceBefore=10*mm, spaceAfter=4*mm,
    fontName='Helvetica-Bold')

h2_style = ParagraphStyle('H2', parent=styles['Heading2'],
    fontSize=13, textColor=BROWN_MID, spaceBefore=8*mm, spaceAfter=3*mm,
    fontName='Helvetica-Bold')

body_style = ParagraphStyle('Body', parent=styles['Normal'],
    fontSize=10, textColor=colors.HexColor('#4E342E'), spaceAfter=3*mm,
    leading=16, fontName='Helvetica')

story = []

# ===== COVER =====
story.append(Spacer(1, 40*mm))
story.append(Paragraph('RESIONE', title_style))
story.append(Paragraph('Dental 3D Printing Resins', ParagraphStyle('Sub', parent=title_style, fontSize=18, textColor=BROWN_MID)))
story.append(Spacer(1, 10*mm))
story.append(Paragraph('Professional Dental Lab Solutions', ParagraphStyle('Tag', parent=body_style, fontSize=12, alignment=TA_CENTER, textColor=BROWN_MID)))
story.append(Spacer(1, 15*mm))
features = [
    'High-Precision Model Resins for Thermoforming & Digital Archiving',
    'Gingiva Simulation for Implant & Prosthetic Workflows',
    'Castable Resin for Crown & Bridge Fabrication',
    'ISO 13485 Certified  |  FDA Compliant  |  50+ Countries',
]
for f in features:
    story.append(Paragraph(f'<bullet>&bull;</bullet> {f}', ParagraphStyle('Feat', parent=body_style, fontSize=11, alignment=TA_CENTER, textColor=BROWN_DARK)))
story.append(Spacer(1, 20*mm))
story.append(Paragraph('www.resione.top', ParagraphStyle('URL', parent=body_style, fontSize=14, alignment=TA_CENTER, textColor=BROWN_ACCENT, fontName='Helvetica-Bold')))
story.append(PageBreak())

# ===== COMPANY INTRO =====
story.append(Paragraph('About RESIONE', h1_style))
story.append(Paragraph(
    'RESIONE (Dongguan Godsaid Technology Co., Ltd.) is a specialized manufacturer of 3D printing photopolymer resins. '
    'With over 10 years of R&D experience and 35+ proprietary formulations, we serve dental labs and professional users '
    'across 50+ countries worldwide. Our dental product line is engineered to meet the rigorous demands of modern digital '
    'dental workflows — from model printing and thermoforming to casting and soft tissue simulation.',
    body_style))
story.append(Spacer(1, 4*mm))
story.append(Paragraph('<b>Certifications:</b> ISO 13485 Medical Device Quality Management  |  FDA Registered  |  CE MDR', body_style))
story.append(Paragraph('<b>OEM/ODM:</b> Custom formulation development and private label support available.', body_style))

# ===== PRODUCT OVERVIEW TABLE =====
story.append(Paragraph('Dental Product Line', h1_style))

prod_data = [
    ['Product', 'Color', 'Key Feature', 'Primary Application'],
    ['D01', 'Yellow-Orange', 'Heat-resistant for vacuum forming, high precision, scratch-resistant',
     'Dental models for thermoforming, restoration, implants, orthodontics'],
    ['D01S', 'Seashell (Matte)', 'Inorganic filler, gypsum-like texture, ultra-low shrinkage, scan-ready matte surface',
     'Digital archiving, precision scanning, indirect dental models'],
    ['GM01', 'Pink (Gingiva)', 'Soft elastic texture, simulates real gingiva, dimensionally stable, non-sticky',
     'Gingival mask for implant/prosthetic simulation, occlusion testing'],
    ['C01', 'Transparent Green', 'Direct casting, no post-cure needed, high fluidity, easy support removal',
     'Crowns, bridges, dental brackets via investment casting (Ni-Cr, Co-Cr alloys)'],
    ['F80', 'Pink / Black', 'Soft elastic, retains flexibility in cold temps, high elongation',
     'Dental gingival models (pink), elastic prototypes (black)'],
]

prod_table = Table(prod_data, colWidths=[40, 50, 175, 170])
prod_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), BROWN_DARK),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, 0), 9),
    ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
    ('FONTSIZE', (0, 1), (-1, -1), 8),
    ('TEXTCOLOR', (0, 1), (-1, -1), BROWN_DARK),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [BROWN_BG, colors.white]),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('GRID', (0, 0), (-1, -1), 0.5, BROWN_LIGHT),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
]))
story.append(prod_table)
story.append(PageBreak())

# ===== INDIVIDUAL PRODUCT PAGES =====
products = [
    {
        'name': 'D01 - High-Precision Dental Model Resin',
        'color': 'Yellow-Orange',
        'desc': 'D01 is a high-precision dental model resin designed for labs using thermoforming (vacuum forming) workflows. Its key advantage: it withstands short-term high temperatures during the vacuum forming process without deformation — making it the ideal master die for fabricating night guards, aligners, whitening trays, and other thermoformed appliances. Prints are smooth, wear-resistant, and easy to clean.',
        'apps': [
            'Thermoforming master models for night guards and aligners',
            'Dental models for restoration and implant planning',
            'Diagnostic study models',
            'Orthodontic treatment planning models',
        ],
        'props': [
            ('Heat Resistance', 'Withstands short-term high temps during vacuum forming'),
            ('Precision', 'High dimensional accuracy with minimal shrinkage'),
            ('Surface', 'Smooth, wear-resistant, easy to clean'),
            ('Rigidity', 'High rigidity for repeated thermoforming cycles'),
            ('Odor', 'Low odor during printing'),
        ]
    },
    {
        'name': 'D01S - Scan-Ready Dental Model Resin',
        'color': 'Seashell (Matte, Gypsum-like)',
        'desc': 'D01S incorporates unique inorganic fillers that give printed models a matte, plaster-like surface texture. This eliminates light reflection during 3D scanning, producing STL files with exceptional precision without scan spray. Combined with ultra-low shrinkage and long-term dimensional stability, D01S is the premium choice for labs that prioritize digital archiving and scan accuracy.',
        'apps': [
            'Digital archiving — scan-ready matte surface, no spray needed',
            'Indirect dental models for restoration and implantation',
            'Precision diagnostic models requiring exact dimensional fidelity',
            'Models destined for long-term digital storage and reorder workflows',
        ],
        'props': [
            ('Scan-Ready', 'Matte gypsum texture eliminates reflection — no scan spray'),
            ('Inorganic Filler', 'Enhanced rigidity and scratch resistance'),
            ('Shrinkage', 'Ultra-low shrinkage for long-term dimensional stability'),
            ('Accuracy', 'Precision fit for indirect restorations'),
            ('Color', 'Seashell — visually matches traditional plaster models'),
        ]
    },
    {
        'name': 'GM01 - Gingiva Mask Resin',
        'color': 'Pink (Gum-like)',
        'desc': 'GM01 is engineered to highly simulate gingival soft tissue. Printed parts offer a soft, elastic texture and lifelike appearance that closely mimics real gums. With excellent dimensional stability — no shrinkage and no stickiness over time — GM01 enables technicians to accurately replicate the gingival environment on rigid dental models, allowing precise design, testing, and adjustment of prosthetics and implants.',
        'apps': [
            'Soft tissue simulation on rigid dental models',
            'Implant planning with realistic gingival environment',
            'Prosthetic fit testing and adjustment',
            'Patient communication and case presentation models',
        ],
        'props': [
            ('Texture', 'Soft, elastic — highly simulates real gingival tissue'),
            ('Stability', 'Excellent environmental stability — no shrinkage, no stickiness'),
            ('Appearance', 'Lifelike gum color and translucency'),
            ('Fit', 'Enables precise prosthetic fit verification'),
            ('Trimming', 'Easy to trim and adjust'),
        ]
    },
    {
        'name': 'C01 - Dental Castable Resin',
        'color': 'Transparent Green',
        'desc': 'C01 is a castable resin formulated for direct investment casting of dental restorations. Compatible with nickel-chromium and cobalt-chromium casting alloys. Excellent fluidity speeds up printing while producing crisp details. No post-curing required. Supports remove easily without leaving surface pits. We provide detailed casting guidance to avoid common ring cracking issues and ensure successful burnout.',
        'apps': [
            'Crowns and bridges via investment casting (Ni-Cr, Co-Cr alloys)',
            'Dental brackets and frameworks',
            'Custom abutments and copings',
            'Any dental restoration requiring cast metal fabrication',
        ],
        'props': [
            ('Post-Cure', 'Not required — saves valuable lab time'),
            ('Fluidity', 'High flow for faster printing with crisp details'),
            ('Burnout', 'Clean burnout with no ash residue'),
            ('Supports', 'Easy removal, no surface pitting after removal'),
            ('Guidance', 'Detailed casting instructions provided — avoids ring cracking'),
        ]
    },
    {
        'name': 'F80 - Elastic / Gingival-Like Resin',
        'color': 'Pink / Black',
        'desc': 'F80 is a soft elastic resin. The pink variant is well-suited for creating dental gingival masks with a realistic soft feel. It retains flexibility even in colder temperatures, making it reliable across different lab environments. High elongation at break ensures tear-resistant prints. Note: higher viscosity requires some printing experience.',
        'apps': [
            'Dental gingival models and soft tissue masks (pink)',
            'Flexible prototypes and seals (black)',
            'Shock-absorbing components',
            'Visual and tactile simulation models',
        ],
        'props': [
            ('Hardness', 'Soft and elastic — retains flexibility in cold environments'),
            ('Elongation', 'High elongation at break — tear-resistant'),
            ('Colors', 'Pink for dental use, black for industrial use'),
            ('Viscosity', 'Higher viscosity — suited to experienced operators'),
            ('Resilience', 'Excellent elastic recovery after deformation'),
        ]
    },
]

for prod in products:
    story.append(Paragraph(prod['name'], h1_style))
    story.append(Paragraph(f'<b>Color:</b> {prod["color"]}', body_style))
    story.append(Spacer(1, 3*mm))
    story.append(Paragraph(prod['desc'], body_style))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('<b>Applications</b>', h2_style))
    for app in prod['apps']:
        story.append(Paragraph(f'<bullet>&bull;</bullet> {app}', body_style))
    story.append(Spacer(1, 3*mm))

    prop_data = [['Property', 'Description']]
    for pn, pd in prod['props']:
        prop_data.append([pn, pd])
    prop_table = Table(prop_data, colWidths=[100, 330])
    prop_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), BROWN_MID),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('TEXTCOLOR', (0, 1), (-1, -1), BROWN_DARK),
        ('BACKGROUND', (0, 1), (0, -1), BROWN_LIGHT),
        ('BACKGROUND', (1, 1), (-1, -1), BROWN_BG),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('GRID', (0, 0), (-1, -1), 0.4, BROWN_LIGHT),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(prop_table)
    story.append(PageBreak())

# ===== CONTACT PAGE =====
story.append(Spacer(1, 30*mm))
story.append(Paragraph('Get in Touch', h1_style))
story.append(Spacer(1, 10*mm))
story.append(Paragraph(
    'We offer complimentary samples for lab testing. Contact us to discuss your specific workflow requirements, '
    'request a sample kit, or inquire about OEM/ODM and distributor partnerships.',
    body_style))
story.append(Spacer(1, 10*mm))

contact_data = [
    ['Contact', 'Details'],
    ['Website', 'https://resione.top'],
    ['Email', 'jenson@godsaid3d.com'],
    ['WhatsApp', '+86 18027908296'],
    ['Company', 'Dongguan Godsaid Technology Co., Ltd. (RESIONE)'],
    ['Address', 'Dongguan, Guangdong, China'],
]
contact_table = Table(contact_data, colWidths=[100, 330])
contact_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), BROWN_DARK),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
    ('FONTSIZE', (0, 1), (-1, -1), 10),
    ('TEXTCOLOR', (0, 1), (-1, -1), BROWN_DARK),
    ('BACKGROUND', (0, 1), (0, -1), BROWN_LIGHT),
    ('BACKGROUND', (1, 1), (-1, -1), BROWN_BG),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('GRID', (0, 0), (-1, -1), 0.5, BROWN_LIGHT),
    ('TOPPADDING', (0, 0), (-1, -1), 8),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
]))
story.append(contact_table)

story.append(Spacer(1, 15*mm))
story.append(Paragraph('<i>Your Partner in Digital Dentistry</i>', ParagraphStyle('Close', parent=body_style, fontSize=11, alignment=TA_CENTER, textColor=BROWN_MID)))

doc.build(story)
print(f'Saved: {output_path}')
print('DONE - 10 pages')
