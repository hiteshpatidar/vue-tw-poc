<template>
  <div id="app">
    <b-container>
      <!-- <img
        alt="Vue logo"
        height="52px"
        width="260px"
        src="./assets/TestingWhiz-logo.png"
      /> -->
      <from-wizard></from-wizard>
      <!-- <multiple-steps-form></multiple-steps-form> -->
      <!-- <HelloWorld msg="Welcome to Your TestingWhiz App" /> -->
    </b-container>
  </div>
</template>

<script>
import FromWizard from "./components/form-wizard/FromWizard.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import MultipleStepsForm from "./components/MultipleStepsForm.vue";

export default {
  name: "App",
  components: {
    FromWizard
    // HelloWorld,
    // MultipleStepsForm
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
