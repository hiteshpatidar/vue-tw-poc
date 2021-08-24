<template>
  <div>
    <b-dropdown
      id="dropdown-left"
      :text="selectedItem.text"
      variant="primary"
      class="my-class m-2"
    >
      <b-dropdown-item
        v-for="(item, index) in items"
        :key="index"
        :active="item.isActive"
        @click="clickItem(item)"
        >{{ item.text }}</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "TabFirst",
  data() {
    return {
      file1: null,
      file2: null,
      selectedItem: { isActive: false, text: "TS_Click", value: "TS_Click" },
      items: [
        { isActive: false, text: "TS_Click", value: "TS_Click" },
        { isActive: false, text: "TS_Compare", value: "TS_Compare" },
        { isActive: false, text: "TS_CallMethod", value: "TS_CallMethod" },
        { isActive: false, text: "TS_Capture", value: "TS_Capture" },
        { isActive: false, text: "TS_Check", value: "" },
        { isActive: false, text: "TS_Click and wait", value: "" },
        { isActive: false, text: "TS_Click", value: "" },
        { isActive: false, text: "TS_Compare", value: "" },
        { isActive: false, text: "TS_CallMethod", value: "" },
        { isActive: false, text: "TS_Capture", value: "" },
        { isActive: false, text: "TS_Check", value: "" },
        { isActive: false, text: "TS_Click and wait", value: "" },
        { isActive: false, text: "TS_Click", value: "" },
        { isActive: false, text: "TS_Compare", value: "" },
        { isActive: false, text: "TS_CallMethod", value: "" },
        { isActive: false, text: "TS_Capture", value: "" },
        { isActive: false, text: "TS_Check", value: "" },
        { isActive: false, text: "TS_Click and wait", value: "" },
        { isActive: false, text: "TS_Click", value: "" },
        { isActive: false, text: "TS_Compare", value: "" },
        { isActive: false, text: "TS_CallMethod", value: "" },
        { isActive: false, text: "TS_Capture", value: "" },
        { isActive: false, text: "TS_Check", value: "" },
        { isActive: false, text: "TS_Click and wait", value: "" },
        { isActive: false, text: "TS_Click", value: "" },
        { isActive: false, text: "TS_Compare", value: "" },
        { isActive: false, text: "TS_CallMethod", value: "" },
        { isActive: false, text: "TS_Capture", value: "" },
        { isActive: false, text: "TS_Check", value: "" }
      ]
    };
  },
  watch: {
    file1(value) {
      console.log(value);
    }
  },
  methods: {
    clickItem(item) {
      // alert(item);
      // eslint-disable-next-line no-debugger
      debugger;
      // this.items = this.items.map(obj => ({
      //   ...obj,
      //   isActive: false
      // }));

      this.selectedItem.isActive = false;
      item.isActive = true;
      this.selectedItem = item;
    }
  }
};
</script>

<style scoped>
.my-class /deep/ .dropdown-menu {
  max-height: 200px;
  overflow-y: auto;
}
</style>
