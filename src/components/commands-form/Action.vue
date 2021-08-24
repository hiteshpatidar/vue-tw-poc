<template>
  <!-- <b-form inline>
    <b-form-select v-model="selected" :options="options"></b-form-select>
  </b-form> -->
  <div role="group">
    isDirty: {{ isDirty }} <br />
    nameState: {{ nameState }} <br />
    commandState: {{ commandState }}
    <b-form inline>
      <b-form-select
        :state="commandState"
        v-model="selected"
        :options="options"
      ></b-form-select>
    </b-form>
    <label for="input-live">Name:</label>
    <b-form-input
      id="input-live"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      Name is required
    </b-form-invalid-feedback>

    <!-- This is a form text block (formerly known as help block) -->
    <b-form-text id="input-live-help">Your full name.</b-form-text>
  </div>
</template>

<script>
export default {
  name: "Action",
  props: {
    prevent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDirty() {
      return !(this.nameState && this.commandState);
    },
    nameState() {
      return this.name !== "";
    },
    commandState() {
      return this.selected !== null;
    }
  },
  watch: {
    isDirty(value) {
      this.$emit("update:prevent", value);
    }
  },
  mounted() {
    this.$emit("update:prevent", this.isDirty);
  },
  data() {
    return {
      name: "",
      selected: null,
      options: [
        { value: null, text: "Please select command" },
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
  }
};
</script>

<style></style>
