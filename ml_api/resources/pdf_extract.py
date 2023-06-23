import PyPDF2


def extract_pdf(file):
    """
    This function extracts the text from the uploaded PDF file.
    
    Parameters
    ----------
    file : file
        The uploaded PDF file.
    """
    pdf_reader = PyPDF2.PdfReader(file)

    extracted_text = ''

    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        extracted_text += page.extract_text()

    return extracted_text

