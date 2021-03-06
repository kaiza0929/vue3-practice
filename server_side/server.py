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

@app.route("/logs", methods=["GET", "POST", "DELETE"])
def use_logs():

    if request.method == "GET":
        cursor.execute("select * from logs")
        return Response(response = json.dumps({"logs": [{"id": log[0], "title": log[1], "content": log[2], "result": log[3]} for log in cursor.fetchall()]}), status = 200)
    elif request.method == "POST":
        body = json.loads(request.get_data().decode("utf-8"))
        cursor.execute("insert into logs (id, title, content, result) values (?, ?, ?, ?)", (body["id"], body["title"], body["content"], body["result"]))
        connect.commit()
        return Response(status = 200)
    elif request.method == "DELETE":
        cursor.execute("delete from logs where id = ?", (json.loads(request.get_data().decode("utf-8"))["log_id"], ))
        connect.commit()
        return Response(status = 200)
    else:
        return Response(status = 400)

@app.route("/new_test", methods = ["GET"])
def use_vect():

    if request.method == "GET":
        content = request.args.get("content")
        tokens = [token.surface for token in t.tokenize(content) if token.part_of_speech.split(",")[0] == "名詞"]
        similar_words = [{"word": token, "similar_words": [result_tuple[0] for result_tuple in model.wv.most_similar(positive=[token])]} for token in tokens if token in model.wv.vocab]
        print(similar_words)
        return Response(response = json.dumps(similar_words), status = 200)
    else:
        return Response(status = 400)

if __name__ == "__main__":
    app.run(port = 8000)
    