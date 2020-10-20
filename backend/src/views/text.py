from flask import Blueprint, request
from flask_cors import CORS
from controllers.text import convert_music

text_blueprint = Blueprint('text', __name__)
CORS(text_blueprint)


@text_blueprint.route('/api/convert', methods=['POST'])
def convert_text():
    base_text = request.json

    if 'text' in base_text:
        response = convert_music(base_text['text'])

        return {'coded': response}, 200
    else:
        return {'Error': 'no text to convert'}, 400
