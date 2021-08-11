<template>
  <div id="app">
    <split-pane
      :min-percent="20"
      :default-percent="30"
      max-percent="10"
      class="test"
      split="vertical"
      className="new"
    >
      <!-- <div class="new-demo"> -->
      <template slot="paneL">
        <the-sidebar className="testClassName"></the-sidebar
      ></template>
      <!-- </div> -->
      <template slot="paneR">
        <Content></Content>
        <!-- <split-pane split="horizontal">
          <template slot="paneL">B</template>
          <template slot="paneR">C</template>
        </split-pane> -->
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from "vue-splitpane";
import Content from "./components/Content.vue";
import TheSidebar from "./components/sidebar/TheSidebar.vue";
export default {
  name: "App",
  components: {
    splitPane,
    TheSidebar,
    Content
  }
};
</script>

<style>
#app {
  position: relative;
  height: 100vh;
}
.test {
  position: fixed;
}
</style>
