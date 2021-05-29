<template>
    <h2>テストログの追加</h2>
    <div>
        <input type="text" v-model="title" /> 
        <textarea v-model="content"></textarea>
        <textarea v-model="result"></textarea>
        <button class="btn btn-primary" @click="post">送信</button> 
    </div>
</template>

<script>

import axios from "axios"

export default {

    data() {
        return {
            title: "",
            content: "",
            result: ""
        }
    },

    methods: {

        post() {
            axios.post("http://localhost:8000/logs", {id: Math.random().toString(32).substring(2), title: this.title, content: this.content, result: this.result})
            .then(() => {
                alert("テストログを投稿しました");
                /* 状態の値を消すとフォームの値も消える */
                /* 双方向データバインディング?(Reactのような単方向だとrefを使わないと消せない) */
                this.title = "";
                this.content = "";
                this.result = "";
            })
            .catch((err) => alert(err));
            
        }

    }

}

</script>Textarea