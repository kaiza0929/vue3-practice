<template>
    <div id="sidebar_area">
        <div>
            <p>テストログ</p>
        </div>
        <div v-if="logs.length > 0">
            <div v-for="log in logs" v-bind:key="log.id" class="card">
                <div class="card-body">
                    <p>{{ log.content }}</p>
                    <button class="btn btn-primary" @click="use(log.content)">検索</button>
                    <button class="btn btn-danger" @click="del(log.id)">削除</button>
                </div>
            </div>
        </div>
        <div v-else-if="logs.length == 0 && this.$store.state.is_login == false">
            <p>テストログを閲覧するにはログインしてください</p>
        </div>
        <div v-else>
            <p>テストログが存在しません</p>
        </div>
    </div>
</template>

<style>

div#sidebar_area {
    display: flex;
    flex-flow: column;
}

.card {
    margin-bottom: 1%;
}

/* マウスが乗った時 */
.card:hover {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 
              0 1px 6px rgba(0, 0, 0, 0.05), 
              0 8px 8px rgba(0, 0, 0, 0.1), 
              0 16px 16px rgba(0, 0, 0, 0.1), 
              8px 32px 32px rgba(0, 0, 0, 0.15), 
              8px 64px 64px rgba(0, 0, 0, 0.15);
}

</style>

<script>

//import axios from "axios"

export default {

    data () {
        return {logs: []}
    },

    mounted() {
        /*
        var logs = [
            {id: 1, content: "ユーザーIDもパスワードも入力せずにログインボタンを押した。"},
            {id: 2, content: "ユーザーIDは入力せずパスワードのみ入力してログインボタンを押した。"},
            {id: 3, content: "パスワードは入力せずユーザーIDのみ入力してログインボタンを押した。"},
            {id: 4, content: "ユーザーIDとパスワードを入力してからログインボタンを押した。"}
        ];

        this.logs = logs;
        */
    },

    methods: {

        del(id) {
            this.logs = this.logs.filter((log) => log.id != id);
        },

        use(content) {
            /* 第一引数に親の関数を割り当てたカスタムイベント名 第二以降の引数に親の関数に渡す値 */
            this.$emit("parent-event", content);
        }

    }

}

</script>