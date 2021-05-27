<template>
    <div id="header_area">
        <nav class="navbar navbar-dark bg-info">
            <div class="container-fluid">
                <h1 class="navbar-brand mb-0 h1" id="title">テスト提案ツール</h1>
                <div class="form-inline" v-if="this.$store.state.user_id == null || this.$store.state.name == null">
                    <label>ユーザーID</label>
                    <input type="text" class="form-control" v-model="user_id">
                    <label>パスワード</label>
                    <input type="password" class="form-control" v-model="password">
                    <button class="btn btn-primary" @click="login">ログイン</button>
                    <router-link to="/login">新規登録</router-link>
                </div>
                <div v-else>
                    <label>{{ this.$store.state.name + "さん" }}</label>
                    <button style="margin-right: 0" class="btn btn-danger" @click="this.$store.commit('logout')">ログアウト</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>

div#header_area {
    margin-bottom: 5%;
}

/*
.navbar-brand mb-0 h1 {
    margin-right: 0;
}
*/

span#title {
    font-size: 22px;
    font-color: white;
    font-weight: bold;
}

label {
    color: white;
}

</style>

<script>

import axios from "axios"

export default {

    data() {
        return {
            user_id: "",
            password: ""
        }
    },

    methods: {

        login() {
            axios.post("http://localhost:8000/login", {user_id: this.user_id, password: this.password})
            .then((res) => {
                this.$store.commit("login", res.data);
                this.$emit("parent-event", {key: "GETLOGS"});
            })
            /* 開発者がサーバーで設定した異常系ステータス(401)も、corsエラーなどと同様にエラーとして扱われる。 */
            .catch((err) => {
                alert("ログインに失敗");
                console.log(err);
            });
        }
    }

}

</script>