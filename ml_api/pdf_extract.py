import PyPDF2
path = ''

pdf_file = open(path, 'rb')
pdf_reader = PyPDF2.PdfFileReader(pdf_file)

extracted_text = ''

for page_num in range(pdf_reader.numPages):
    page = pdf_reader.getPage(page_num)
    extracted_text += page.extractText()

pdf_file.close()

print(extracted_text)
