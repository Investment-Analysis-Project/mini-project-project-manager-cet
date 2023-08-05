from flask import jsonify, request
from flask_restful import Resource,reqparse
from resources.pdf_extract import extract_pdf
from resources.tfidf import abstract_similarity

text_parser = reqparse.RequestParser()
text_parser.add_argument('text', type=str, required=True, help="Text cannot be blank!")

# file_parser = reqparse.RequestParser()
# file_parser.add_argument('file', type=File, required=True, help="File cannot be blank!")

class Test(Resource):
    def get(self):
        data={"msg":"Hello World!"}
        return data, 200

class PredictText(Resource):
    def post(self):
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

class PredictFile(Resource):
    def post(self):
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