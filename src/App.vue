<template>
  <Header />
  <div id="content_area">
    <Sidebar />
    <Main />
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
  }
}
</script>