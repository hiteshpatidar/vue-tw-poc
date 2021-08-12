<template>
  <div>
    <b-container fluid>
      <b-row no-gutters>
        <b-col md="5">
          <b-card no-body class="overflow-auto">
            <b-row no-gutters>
              <b-col md="12">
                <b-card-body
                  title="Javascript Editor"
                  style="
    height: 500px;
"
                >
                  <div id="tw-code-editor">Editor</div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col md="2"></b-col>
        <b-col md="5">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="12">
                <b-card-body
                  title="Javascript display"
                  style="
    height: 500px;
"
                >
                  <b-card-text>
                    {{ code }}
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CodeFlask from "codeflask";
import Prism from "prismjs";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-python";

// const loadLanguages = require("prismjs/components/");

// flask.updateCode('const my_new_code_here = "Blabla"');

export default {
  name: "JavascriptEditor",
  data() {
    return {
      code: ""
    };
  },
  mounted() {
    const flask = new CodeFlask("#tw-code-editor", {
      language: "py",
      lineNumbers: true
    });
    flask.addLanguage("py", Prism.languages["py"]);
    flask.updateCode("def median(pool):");
    flask.onUpdate(code => {
      this.code = code;
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
