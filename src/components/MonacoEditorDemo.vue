<template>
  <div>
    <!-- <MonacoEditor
      width="800"
      height="500"
      theme="light"
      language="javascript"
      :options="options"
      @change="onChange"
    ></MonacoEditor> -->
    <MonacoEditor class="editor" v-model="code" language="javascript" />
  </div>
</template>

<script>
// import MonacoEditor from "monaco-editor-vue";
import MonacoEditor from "vue-monaco";
export default {
  name: "MonacoEditorDemo",
  components: {
    MonacoEditor
  },
  data() {
    return {
      code: "const noop = () => {}",
      options: {
        automaticLayout: true,
        lineNumbers: "on"
        //Monaco Editor Options
      }
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
/* .editor {
  width: 600px;
  height: 800px;
} */
</style>
