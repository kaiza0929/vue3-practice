<template>
  <!-- 子が親のメソッドを呼び出せるようにする -->
  <!-- @"好きなイベント名"でカスタムイベントを作成 -->
  <!-- 親を呼び出す子にカスタムイベント 親に呼び出される子にrefが必要 -->
  <Header @parent-event="call_other_child_func" />
  <div id="content_area">
    <!-- Mainのメソッドを呼び出し、またHeaderによって自身のメソッドが呼び出されるのでカスタムイベントとrefの両方を持つ。 -->
    <Sidebar ref="child_sidebar" @parent-event="call_other_child_func" />
    <!--Main ref="child_main" -->
    <router-view />
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}

body { 
  /*background: #F2F2F2; */
}

div#content_area {
  display: flex;
}

p {
  font-size: 18px;
}
/*
p.parallel_buttons {
  margin-left: 58%;
}
*/
/*
button {
  margin-right: 1.5%;
}
*/

h2 {
  margin-bottom: 6%;
}

</style>

<script>

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {

  components: {
    Header,
    Sidebar,
  },

  datas: {
    child_post_func: (content) => this.$refs.child_main.post(content)
  },

  methods: {

    /* 子が別の子のメソッドを呼び出すためのメソッド */
    call_other_child_func(data) {
      
      /* 全てbreak必要 */
      switch (data.key) {
        case "GETLOGS":
          this.$refs.child_sidebar.set();
          break
        case "POSTCONTENT":
          this.$refs.child_main.post(data.payload);
          break;
      }
    
    }

  } 

}
</script>