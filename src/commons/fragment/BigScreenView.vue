<template>
  <div class="app-wrapper">
    <div class="big-main-container">
      <nav-bar></nav-bar>
      <big-main></big-main>
    </div>
  </div>
</template>

<script>
import NavBar from "../bigscreen/Navbar";
import BigMain from "../bigscreen/BigMain";

export default {
  components: {
    NavBar,
    BigMain,
  },
  data() {
    return {};
  },
};
</script>


<style scoped>
.big-main-container {
  background: #192b41;
  min-height: 100vh;
}
</style>