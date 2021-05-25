from flask import *
#import sqlite3

app = Flask(__name__)

@app.route("/")
def get_new_test():
    return jsonify({"message": "ok"})

if __name__ == "__main__":
    app.run(port = 8000)