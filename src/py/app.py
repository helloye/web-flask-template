from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin()
def onGet():
    return jsonify('Hello World!')

@app.route('/', methods=['POST'])
def onPost():
    print(request.json)
    return jsonify('Post OK')