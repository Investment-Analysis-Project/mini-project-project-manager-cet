from flask import Flask, request, jsonify
import os
from resources.pdf_extract import extract_pdf
from resources.tfidf import abstract_similarity
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/test",methods=["GET"])
def index():
    data={"msg":"Hello World!"}
    return jsonify(data)

@app.route("/predict/pdf", methods=["POST"])
def predict_pdf():
    """
    This function extracts the text from the uploaded PDF file and returns the top 5 most similar abstracts.
    """
    if request.method == "POST":
  
        if 'file' not in request.files:
            return "No file uploaded."

        file = request.files['file']
        if file.filename == '':
            return "No file selected."
        
        """
        Process the data and make prediction here
        """

        extracted_text = extract_pdf(file)
        abstracts = abstract_similarity(extracted_text)   

        response = jsonify(abstracts)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response
    

    return "Invalid request."

@app.route("/predict/text", methods=["POST"])
def predict_text():
    """
    This function extracts the text from the uploaded PDF file and returns the top 5 most similar abstracts.
    """
    if request.method == "POST":
  
        if 'text' not in request.form:
            return "No text uploaded."

        text = request.form['text']
        if text == '':
            return "No text selected."
        
        """
        Process the data and make prediction here
        """

        abstracts = abstract_similarity(text)   

        response = jsonify(abstracts)
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        return response
    

    return "Invalid request."

if __name__ == "__main__":
    app.run(debug=True)