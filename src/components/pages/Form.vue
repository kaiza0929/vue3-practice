<template>
    <div style="background: white; margin: 2%; padding: 1.5%;">
        <h2>テストログの追加</h2>
        <div class="form-group">
            <label for="exampleFormControlInput1">タイトル</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="title"> 
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">実行したテスト内容</label>
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">テスト結果</label>
            <textarea v-model="resyult" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button style="margin-left: 94%;" class="btn btn-primary" @click="post">送信</button> 
    </div>
</template>

<style>

</style>

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