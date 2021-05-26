<template>
  <Header />
  <div id="content_area">
    <!-- 子が親のメソッドを呼び出せるようにする -->
    <!-- @"好きなイベント名"でカスタムイベントを作成 -->
    <Sidebar @parent-event="call_other_child_func" />
    <Main ref="child_main" />
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

div#content_area {
  display: flex;
}

</style>

<script>

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {

  components: {
    Header,
    Sidebar,
    Main,
  },

  methods: {
    call_other_child_func(content) {
      //this.$refs.child_main.post(content);
      /* vue3からはプロキシオブジェクトが返る*/
      this.$refs.child_main.post(content);
    }
  } 

}
</script>