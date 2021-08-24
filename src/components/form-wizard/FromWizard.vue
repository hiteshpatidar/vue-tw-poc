<template>
  <div>
    <b-button @click="modalShow = !modalShow">Open Modal</b-button>
    <b-modal
      dialog-class="wizard-modal"
      v-model="modalShow"
      size="lg"
      no-close-on-backdrop
    >
      <template #modal-title> {{ modalTitle }} </template>
      <template #default>
        <tabs v-model="tabIndex" :items="tabItems"></tabs>
        <!-- <b-tabs v-model="tabIndex" small card>
          <b-tab title="Test Command"><test-command></test-command></b-tab>
          <b-tab title="Edit profile">
            I'm the second tab
            <b-card>I'm the card in tab</b-card>
          </b-tab>
          <b-tab title="Premium Plan" disabled>Sibzamini!</b-tab>
          <b-tab title="Info">I'm the last tab</b-tab>
        </b-tabs> -->
      </template>
      <template #modal-footer>
        <div class="text-center">
          <b-button-group class="mt-2">
            <b-button @click="onNextPrevious('previous')">Previous</b-button>
            <b-button @click="onNextPrevious('next')">Next</b-button>
          </b-button-group>

          <div class="text-muted">Current Tab: {{ tabIndex }}</div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import TestCommand from "../commands-form/TestCommand.vue";
import Action from "../commands-form/Action.vue";
import Object from "../commands-form/Object.vue";
import Value from "../commands-form/Value.vue";
import Screenshot from "../commands-form/Screenshot.vue";

import Description from "../commands-form/Description.vue";

import Tabs from "./Tabs.vue";
export default {
  components: { Tabs },
  name: "FromWizard",
  data() {
    return {
      tabIndex: 0,
      modalTitle: "2. While start",
      modalShow: false,
      testCommand: TestCommand,
      action: Action,
      object: Object,
      value: Value,
      screenshot: Screenshot,
      description: Description,
      tabItems: []
    };
  },
  mounted() {
    this.tabItems = [
      {
        id: 1,
        title: "Test Command",
        component: this.testCommand,
        isDirty: false
      },
      { id: 2, title: "Action", component: this.action, isDirty: false },
      { id: 3, title: "Object", component: this.object, isDirty: false },
      { id: 4, title: "Value", component: this.value, isDirty: false },
      {
        id: 5,
        title: "Screenshot",
        component: this.screenshot,
        isDirty: false
      },
      {
        id: 6,
        title: "Description",
        component: this.description,
        isDirty: false
      }
    ];
  },
  methods: {
    onNextPrevious(type) {
      debugger;
      const isDirty = this.tabItems[this.tabIndex].isDirty;
      if (!isDirty) {
        type === "next" ? this.tabIndex++ : this.tabIndex--;
      }
    }
  }
};
</script>
<style lang="scss">
.wizard-modal .modal-body {
  padding: 0 !important;
}

.wizard-modal .modal-footer {
  justify-content: center !important;
}
</style>
