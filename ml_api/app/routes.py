from .predictions import Test,PredictText,PredictFile


def initialize_routes(api):
    api.add_resource(Test, '/test')
    api.add_resource(PredictText, '/predict/text')
    api.add_resource(PredictFile, '/predict/pdf')