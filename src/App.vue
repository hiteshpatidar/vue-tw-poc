<template>
  <!-- <div id="app">
    <img
      alt="Vue logo"
      height="52px"
      width="260px"
      src="./assets/TestingWhiz-logo.png"
    />
    <HelloWorld msg="Welcome to Your TestingWhiz App" />
  </div> -->
  <div id="app">
    <div id="nav">
      <the-header></the-header>
    </div>
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import TheHeader from "./components/Header/TheHeader.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: { TheHeader }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
