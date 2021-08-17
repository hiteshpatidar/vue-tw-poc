<template>
  <div id="tw-code-editor" style="height:500px">
    <!-- <b-container fluid>
      <div id="tw-code-editor">Editor</div> -->
    <!-- <b-row no-gutters>
        <b-col md="10">
          <b-card no-body class="overflow-auto">
            <b-row no-gutters>
              <b-col md="12">
                <b-card-body title="Javascript Editor" style="height: 500px">
                  <div id="tw-code-editor">Editor</div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col md="2"></b-col> -->
    <!-- <b-col md="5">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="12">
                <b-card-body title="Javascript display" style="height: 500px">
                  <b-card-text>
                    {{ code }}
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col> -->
    <!-- </b-row> -->
    <!-- </b-container> -->
  </div>
</template>

<script>
import loader from "@monaco-editor/loader";

export default {
  name: "JavascriptEditor",
  data() {
    return {
      code: ""
    };
  },
  mounted() {
    loader.init().then(monaco => {
      monaco.editor.create(document.querySelector("#tw-code-editor"), {
        value: "// some comment",
        language: "python",
        theme: "vs-dark"
      });
    });
  }
};
</script>

<style>
.tw-editor {
  border-color: #000 !important;
  border: 1px solid #ccc !important;
  padding: 0.01em 16px;
  margin-top: 16px !important;
}
.card {
  border: 2px solid blueviolet !important;
}
</style>
