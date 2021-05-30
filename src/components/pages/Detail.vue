<template>
    <div style="margin: 2%; display: flex">
        <div class="card" style="height: 3%;">
            <div class="card_body">
                <h3 class="card-title">{{ title }}</h3>
                <p class="card-text">{{"[テスト内容]: " + content }}</p>
                <p class="card-text" style="margin-bottom: 5%;">{{"[結果]: " + result }}</p>
                <p style="display: flex; text-align: center;">
                    <button class="btn btn-primary" @click="use(content)">類似ケースを取得</button>
                    <button class="btn btn-danger" @click="del(log_id)">ログを削除</button>
                    <button class="btn btn-secondary" @click="this.$router.push('/')">ログ選択画面に戻る</button>
                </p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">提案されたテスト観点</h3>
                <h3>関連するキーワード</h3>
                <div class="card-title" v-for="obj in similar_words" v-bind:key="obj.word">
                    <p>{{ obj.similar_words.join(" ") }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style> 

.card {
    width: 40rem; 
    margin-right: 3%;
    padding: 3%;
}

button {
    margin-right: 1%;
}

</style>

<script>

import axios from "axios"

export default {

    data() {
        return {
            similar_words: null
        }
    },

    props: {
        log_id: String,
        title: String,
        content: String,
        result: String
    },

    methods: {

        /*{1: {word: "ID", similar_words: Array(10)}, 2: {word: "パスワード", similar_words: Array(10)}, 3: {word: "入力", similar_words: Array(10)} } */
        /* res.data.similar_wordsだと取得できない */
        use(content) {
            axios.get(`http://localhost:8000/new_test?content=${content}`)
            .then((res) => this.similar_words = res.data)
            .catch((err) => alert(err));
        },

        del(log_id) {
            axios.delete("http://localhost:8000/logs", {data: {log_id: log_id}})
            .then(() => {
                alert("ログを削除しました。ログ選択画面に戻ります。");
                this.$router.push("/");
            })
        }

    }

}

</script>