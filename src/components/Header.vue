<template>
    <div id="header_area">
        <nav class="navbar navbar-dark bg-info">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1" id="title">テスト提案ツール</span>
                <div v-if="this.$store.state.is_login == false">
                    <label>ユーザーID</label>
                    <input type="text" v-model="user_id">
                    <label>パスワード</label>
                    <input type="text" v-model="password">
                    <button @click="this.$store.commit('login')">ログイン</button>
                </div>
                <div v-else>
                    <button @click="this.$store.commit('logout')">ログアウト</button>
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

export default {

    data() {
        return {
            user_id: "",
            password: ""
        }
    },

    methods: {
        login() {
            alert(this.user_id, this.password);
        }
    }

}

</script>