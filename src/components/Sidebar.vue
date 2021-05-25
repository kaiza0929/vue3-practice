<template>
    <div id="sidebar_area">
        <div>
            <p>テストログ</p>
        </div>
        <div v-for="log in logs" v-bind:key="log.id">
            <p>{{ log.content }}</p>
            <button class="btn btn-danger" v-on:click="delete(log.id);">削除</button>
        </div>
    </div>
</template>

<style>

div#sidebar_area {
    display: flex;
    flex-flow: column;
}

</style>

<script>

//import axios from "axios"

export default {

    /* logs: []だとbeforeCreate()で取得したデータが消える */
    /* this.logs = logs -> logs: [](this.data.logs = []の意味)の順に実行されている? */
    data () {
        return {}
    },

    beforeCreate() {

        var logs = [
            {id: 1, content: "ユーザーIDもパスワードも入力せずにログインボタンを押した。"},
            {id: 2, content: "ユーザーIDは入力せずパスワードのみ入力してログインボタンを押した。"},
            {id: 3, content: "パスワードは入力せずユーザーIDのみ入力してログインボタンを押した。"},
            {id: 4, content: "ユーザーIDとパスワードを入力してからログインボタンを押した。"}
        ];

        this.logs = logs;

    },

    methods: {
        delete(id) {
            this.logs[id].content = "まんち！";
        }
    }

}

</script>