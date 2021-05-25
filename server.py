from flask import *
from flask_cors import CORS
import json
from janome.tokenizer import Tokenizer
import gensim

t = Tokenizer()
model = gensim.models.Word2Vec.load("model/public/word2vec.gensim.model")

app = Flask(__name__)
CORS(app)

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