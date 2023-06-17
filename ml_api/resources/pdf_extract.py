import PyPDF2


def extract_pdf(path):
    """
    This function extracts the text from the uploaded PDF file.
    
    Parameters
    ----------
    path : str
        The path to the uploaded PDF file.
    """
    pdf_file = open(path, 'rb')
    pdf_reader = PyPDF2.PdfReader(pdf_file)

    extracted_text = ''

    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        extracted_text += page.extract_text()

    pdf_file.close()

    return extracted_text

