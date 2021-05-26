from flask import *
from flask_cors import CORS
import sqlite3
import json
from janome.tokenizer import Tokenizer
import gensim

app = Flask(__name__)
CORS(app)

connect = sqlite3.connect("database.db", check_same_thread = False)
cursor = connect.cursor()

t = Tokenizer()
model = gensim.models.Word2Vec.load("model/public/word2vec.gensim.model")

@app.route("/login", methods=["POST"])
def login():

    body = json.loads(request.get_data().decode("utf-8"))
    cursor.execute("select users.id, users.name from users where id = ? and password = ?", (body["user_id"], body["password"]))
    result = cursor.fetchall()

    if len(result) == 0:
        #認証に失敗した
        return Response(status = 401)
    elif len(result) == 1:
        return Response(response = json.dumps({"user_id": result[0][0], "name": result[0][1]}), status = 200)
    else:
        return Response(status = 500)

@app.route("/similar-words", methods=["POST"])
def get_new_test():

    body = request.get_data().decode("utf-8")
    tokens = [token.surface for token in t.tokenize(json.loads(body)["content"]) if token.part_of_speech.split(",")[0] == "名詞"]
    similar_words = []

    for token in tokens:
        if token in model.wv.vocab:
            similar_words.append({"word": token, "similar_words": [result_tuple[0] for result_tuple in model.wv.most_similar(positive=[token])]})

    return jsonify({"similar_words": similar_words})

if __name__ == "__main__":
    app.run(port = 8000)