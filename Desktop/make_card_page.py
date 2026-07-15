from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from PyPDF2 import PdfReader, PdfWriter
import os

BROWN_DARK = colors.HexColor('#5D4037')
BROWN_MID = colors.HexColor('#8D6E63')
BROWN_LIGHT = colors.HexColor('#D7CCC8')
BROWN_BG = colors.HexColor('#FFF8F0')

styles = getSampleStyleSheet()

card_pdf = r'C:\Users\19481\card_page2.pdf'
doc = SimpleDocTemplate(card_pdf, pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm, topMargin=15*mm, bottomMargin=15*mm)

center = ParagraphStyle('C', parent=styles['Normal'],
    fontSize=10, alignment=TA_CENTER, fontName='Helvetica')

story = []

# Company header
story.append(Spacer(1, 20*mm))
story.append(Paragraph('RESIONE', ParagraphStyle('T', parent=center,
    fontSize=28, fontName='Helvetica-Bold', textColor=BROWN_DARK)))
story.append(Paragraph('Dental 3D Printing Resins', ParagraphStyle('S', parent=center,
    fontSize=13, textColor=BROWN_MID)))
story.append(Spacer(1, 12*mm))

# Card with warm frame
card_img = Image(r'C:\Users\19481\Desktop\Business-Card.png', width=115*mm, height=132*mm)
card_table = Table([[card_img]], colWidths=[125*mm])
card_table.setStyle(TableStyle([
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ('TOPPADDING', (0, 0), (-1, -1), 8),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ('BACKGROUND', (0, 0), (-1, -1), BROWN_BG),
    ('BOX', (0, 0), (-1, -1), 2, BROWN_LIGHT),
]))
story.append(card_table)

story.append(Spacer(1, 15*mm))
story.append(Paragraph('<i>Your Partner in Digital Dentistry</i>', ParagraphStyle('Tag', parent=center,
    fontSize=11, textColor=BROWN_MID)))

doc.build(card_pdf)
print('Card page created')

# Merge with catalog (pages 1-6)
catalog = r'C:\Users\19481\Desktop\RESIONE_Dental_Catalog.pdf'
reader_cat = PdfReader(catalog)
reader_card = PdfReader(card_pdf)

writer = PdfWriter()
for i in range(6):
    writer.add_page(reader_cat.pages[i])
writer.add_page(reader_card.pages[0])

output = r'C:\Users\19481\Desktop\RESIONE_Dental_Catalog.pdf'
with open(output, 'wb') as f:
    writer.write(f)

size_kb = os.path.getsize(output) / 1024
print(f'Done: {len(writer.pages)} pages, {size_kb:.0f} KB')
os.remove(card_pdf)
