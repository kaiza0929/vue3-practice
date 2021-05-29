<template>
    <div style="margin: 6%;">
        <div style="text-align: center;">
            <h2>テストログ</h2>
            <p><label style="margin-right: 1%">絞り込み検索</label><input type="text" v-model="keyword" /></p>
        </div>
        <div style="display: flex; flex-wrap: wrap;">
            <!-- v-forを記述したタグにflexの設定をしても効かない flexの設定をした別のタグで囲む -->
            <div v-for="log in logs" v-bind:key="log.id" style="margin: 1%">
                <div class="card" style="width: 35rem; padding: 2%;" v-if="log.title.indexOf(keyword) != -1 || log.content.indexOf(keyword) != -1">
                    <div class="card_body">
                        <h3 class="card-title">{{ log.title }}</h3>
                        <p class="card-text">{{ log.content.slice(0, 20) + ".."}}</p>
                        <!-- Detailコンポーネントのpropsに渡される --> 
                        <!-- オブジェクトを渡すと"[Object, Object]"となり使えなくなる -->
                        <router-link :to="{name: 'detail', params: {log_id: log.id, title: log.title, content: log.content, result: log.result}}">詳細を表示</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="logs.length == 0" style="text-align: center;">
            <p>ログが存在しません</p>
        </div>
    </div>
</template>

<style>

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

    data() {
        return {
            logs: [], 
            keyword: ""
        };
    },

    mounted() {
        axios.get("http://localhost:8000/logs")
        .then((res) => this.logs = res.data.logs)
        .catch((err) => alert(err));
    }

}

</script>