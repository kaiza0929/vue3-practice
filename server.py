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


@app.route("/logs", methods=["GET", "POST", "DELETE"])
def use_logs():

    if request.method == "GET":
        query = request.args.get("user_id")
        #(要素, )で要素が1つだけのタプル
        cursor.execute("select logs.log_id, logs.content from logs where user_id = ?", (query, ))
        return Response(response = json.dumps({"logs": [{"log_id": row[0], "content": row[1]} for row in cursor.fetchall()]}), status = 200)
    elif request.method == "POST":
        body = json.loads(request.get_data().decode("utf-8"))
        cursor.execute("insert into logs (user_id, log_id, content) values (?, ?, ?)", (body["user_id"], body["log_id"], body["content"]))
        connect.commit()
        return Response(status = 200)
    elif request.method == "DELETE":
        cursor.execute("delete from logs where log_id = ?", (json.loads(request.get_data().decode("utf-8"))["log_id"], ))
        connect.commit()
        return Response(status = 200)
    else:
        return Response(status = 400) #メソッドが正しくない


@app.route("/new-test", methods=["GET"])
def get_new_test():

    query = request.args.get("content")
    tokens = [token.surface for token in t.tokenize(query) if token.part_of_speech.split(",")[0] in ["名詞", "動詞"]]
    similar_words = []

    for token in tokens:
        if token in model.wv.vocab:
            similar_words.append({"word": token, "similar_words": [result_tuple[0] for result_tuple in model.wv.most_similar(positive=[token])]})

    return jsonify({"similar_words": similar_words})

if __name__ == "__main__":
    app.run(port = 8000)
    