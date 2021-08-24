<template>
  <b-tabs v-model="tabIndex" small card @activate-tab="tabActivated">
    <b-tab v-for="(item, index) in items" :key="index" :title="item.title">
      tabs isDirty : {{ item.isDirty }}
      <component :is="item.component" :prevent.sync="item.isDirty"
    /></b-tab>
    <!-- <b-tab title="Edit profile">
      I'm the second tab
      <b-card>I'm the card in tab</b-card>
    </b-tab>
    <b-tab title="Premium Plan" disabled>Sibzamini!</b-tab>
    <b-tab title="Info">I'm the last tab</b-tab> -->
  </b-tabs>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    value: {
      type: Number,
      default: 0
    },
    // prevent: {
    //   type: Boolean,
    //   default: false
    // },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      //   tabIndex: 0
      prevent: false
    };
  },
  computed: {
    isDirty: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value || 0);
      }
    },
    tabIndex: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value || 0);
      }
    }
  },
  methods: {
    tabActivated(newTabIndex, oldTabIndex, event) {
      debugger;
      const isDirty = this.items[oldTabIndex].isDirty;
      if (isDirty) {
        event.preventDefault();
      }
    }
  }
};
</script>

<style></style>
