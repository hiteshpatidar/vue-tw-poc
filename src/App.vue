<template>
  <div id="app">
    <javascript-editor></javascript-editor>
    <!-- <write-json></write-json> -->
  </div>
</template>

<script>
import JavascriptEditor from "./components/JavascriptEditor.vue";
// import WriteJson from "./components/WriteJson.vue";

export default {
  name: "App",
  components: {
    JavascriptEditor
    // WriteJson
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
