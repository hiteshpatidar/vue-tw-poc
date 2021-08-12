<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col md="12">
        <b-card no-body class="overflow-auto">
          <b-row no-gutters>
            <b-col md="12">
              <b-card-body
                title="Javascript Editor"
                style="
    height: 500px;
"
              >
                <div id="editor">Editor</div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import loader from "@monaco-editor/loader";

export default {
  name: "NewEditor",
  mounted() {
    loader.init().then(monaco => {
      monaco.editor.create(document.querySelector("#editor"), {
        value: "// some comment",
        language: "javascript"
      });
    });
  }
};
</script>

<style>
#editor {
  height: 100%;
}
</style>
