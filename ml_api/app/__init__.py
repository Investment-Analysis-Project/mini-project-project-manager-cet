from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from .routes import initialize_routes

def create_app():
    app = Flask(__name__)
    CORS(app)
    api = Api(app)

    initialize_routes(api)

    return app