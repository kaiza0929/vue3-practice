<template>
    <div id="main_area">
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">実行したテスト内容</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="20" placeholder="例) 数量欄に0を入力してからカートに入れるボタンを押した。" v-model="content"></textarea>
            <button class="btn btn-primary" @click="post">テスト内容を送信</button>
        </div>
        <div>
            <div>
                <p>提案されたテスト観点</p>
            </div>
            <div>
                <p>関連しそうなキーワード</p>
                <p v-for="obj in similar_words" v-bind:key="obj.word">{{ obj.similar_words.join(" ") }}</p>
            </div>
        </div>
    </div>
</template>

<style>

div#main_area {
    width: 50%;
}

textarea {}

</style>

<script>

import axios from "axios"

export default {

    data() {
        return {
            content: "",
            similar_words: []
        }
    },

    methods: {
        /* 親からの呼び出しの際は引数あり 自身からの呼び出しの際は引数なし(自身が持つ値を使う) */
        post(content = this.content) {
            axios.post("http://localhost:8000/similar-words", {content: content})
            .then((res) => {
                this.similar_words = res.data.similar_words;
            })
            .catch((err) => alert(err));
        }
    }

}

</script>