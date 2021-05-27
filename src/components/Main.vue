<template>
    <div id="main_area">
        <div class="mb-3">
            <h2>実行したテスト内容</h2>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="20" placeholder="例) 数量欄に0を入力してからカートに入れるボタンを押した。" v-model="content"></textarea>
            <p class="parallel_buttons">
                <button class="btn btn-primary" @click="post()">テスト内容を送信</button>
                <button v-if="this.$store.state.user_id != null && this.$store.state.name != null" class="btn btn-secondary" @click="save">ログとして保存</button>
            </p>
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
            axios.get(`http://localhost:8000/new-test?content=${content}`)
            .then((res) => this.similar_words = res.data.similar_words)
            .catch((err) => alert(err));
        }, 

        save() {
            axios.post("http://localhost:8000/logs", {user_id: this.$store.state.user_id, log_id: Math.random().toString(32).substring(2), content: this.content})
            .then((res) => alert(JSON.stringify(res)))
            .catch((err) => alert(err));
        }

    }

}

</script>