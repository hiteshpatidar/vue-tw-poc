import Vue from "vue";
import App from "./App.vue";
import "./plugins/bootstrap-vue";
import router from "./router";
import "../src/assets/style.css";
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import "../src/assets/vue-split-pane.esm.css";

import { Multipane, MultipaneResizer } from "vue-multipane";

Vue.component("vue-draggable-resizable", VueDraggableResizable);
Vue.component("multipane", Multipane);
Vue.component("multipane-resizer", MultipaneResizer);

import splitPane from "vue-splitpane";

Vue.component("split-pane", splitPane);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
