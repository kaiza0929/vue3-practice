<template>
    <div style="margin: 2%;">
        <div class="card" style="width: 20rem; padding: 2%;">
            <div class="card_body">
                <h3 class="card-title">{{ title }}</h3>
                <p class="card-text">{{"[テスト内容]: " + content }}</p>
                <p class="card-text">{{"[結果]: " + result }}</p>
                <p style="display: flex;">
                    <button class="btn btn-primary" style="margin-right: 1%;" @click="use(log_id)">類似ケースを取得</button>
                    <button class="btn btn-danger" @click="del(log_id)">ログを削除</button>
                </p>
            </div>
        </div>
        <button class="btn btn-secondary" @click="this.$router.push('/')">ログ選択画面に戻る</button>
    </div>
</template>

<script>

import axios from "axios"

export default {

    props: {
        log_id: String,
        title: String,
        content: String,
        result: String
    },
 
    mounted() {},

    methods: {

        use(log_id) {
            alert(log_id);
            this.$router.push("/new");
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