from flask import Flask
from flask_cors import CORS
from views.text import text_blueprint

app = Flask(__name__)
app.register_blueprint(text_blueprint)

CORS(app, automatic_options=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3333, debug=True)
