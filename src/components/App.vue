<!-- ルーティング制御用コンポーネント -->
<!-- ルーティングに応じてrouter-viewタグの中にpagesのコンポーネントのどれか1つが入る -->

<template>
    <Header />
    <router-view></router-view>
</template>

<style>

* {
    margin: 0;
    padding: 0;
}

body {
    background: #F2F2F2;
}

</style>

<script>

import Header from "./modules/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


export default {

    components: {
        Header
    }

}

</script>