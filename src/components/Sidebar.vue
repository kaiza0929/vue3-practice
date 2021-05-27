<template>
    <div id="sidebar_area">
        <div>
            <h2>テストログ</h2>
        </div>
        <div v-if="this.$store.state.user_id != null && this.$store.state.name != null && logs.length > 0">
            <div v-for="log in logs" v-bind:key="log.log_id" class="card">
                <div class="card-body">
                    <p>{{ log.content }}</p>
                    <button class="btn btn-primary" @click="use(log.content)">ログを送信</button>
                    <button class="btn btn-danger" @click="del(log.log_id)">ログを削除</button>
                </div>
            </div>
        </div>
        <div v-else-if="this.$store.state.user_id == null || this.$store.state.name == null">
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
    width: 600px; /* 幅固定 */
    margin-left: 2%;
    margin-right: 3%;
    padding: 2%;
    border: solid;
}

.card {
    margin-bottom: 2%;
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

import axios from "axios"

export default {

    data () {
        return {logs: []}
    },

    mounted() {},

    methods: {

        set() {
            axios.get(`http://localhost:8000/logs?user_id=${this.$store.state.user_id}`)
            .then((res) => this.logs = res.data.logs)
            .catch((err) => alert(err));
        },

        del(log_id) {
            axios.delete(`http://localhost:8000/logs`, {data: {log_id: log_id}})
            .then(() => this.logs = this.logs.filter((log) => log.log_id != log_id))
            .catch((err) => alert(err));
        },

        use(content) {
            /* 第一引数に親の関数を割り当てたカスタムイベント名 第二以降の引数に親の関数に渡す値 */
            this.$emit("parent-event", {key: "POSTCONTENT", payload: content});
        }

    }

}

</script>