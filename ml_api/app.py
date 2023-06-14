from flask import Flask, request
import os
from resources.pdf_extract import extract_pdf

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/predict/pdf", methods=["POST"])
def predict_pdf():
    if request.method == "POST":
        file_path = "temp_upload/uploaded_file.pdf"
        if 'file' not in request.files:
            return "No file uploaded."

        file = request.files['file']
        if file.filename == '':
            return "No file selected."

        # Save the file to a desired location
        file.save(file_path)
        print("File saved successfully.")
        """
        Process the data and make prediction here
        """
        extracted_text = extract_pdf(file_path)     

        os.remove(file_path)

        return "File uploaded successfully."
    return "Invalid request."

if __name__ == "__main__":
    app.run(debug=True)