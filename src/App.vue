<template>
  <div id="app">
    <javascript-editor></javascript-editor>
    <!-- <monaco-editor-demo></monaco-editor-demo> -->
    <!-- <new-editor></new-editor> -->
  </div>
</template>

<script>
// import NewEditor from "./components/NewEditor.vue";
// import MonacoEditorDemo from "./components/MonacoEditorDemo.vue";
import JavascriptEditor from "./components/JavascriptEditor.vue";

export default {
  name: "App",
  components: {
    // NewEditor
    // MonacoEditorDemo
    JavascriptEditor
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
