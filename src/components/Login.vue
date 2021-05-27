<template>
    <div>
        <input type="text" v-model="mail">
        <input type="text" v-model="password">
        <button class="btn btn-primary" @click="signup">送信</button>
        <!-- main.jsでルーターを読み込んでいるので、コンポーネントごとにインポートしなくて良い。 -->
        <button class="btn btn-secondary" @click="this.$router.push('/')">入力画面に戻る</button>
    </div>
</template>

<script>

export default {

    data() {
        return {
            mail: "",
            password: ""
        }
    },

    methods: {

        signup() {
            if (this.mail.match(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/) == null) {
                alert("1");
            } else if (this.password.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/) == null) {
                alert("2");
            } else {
                /* vuexのstoreに値を設定 */
                this.$router.push("/");
            }
        }

    }

}

</script>