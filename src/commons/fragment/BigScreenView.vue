<template>
  <div class="big-main-container">
    <nav-bar></nav-bar>
    <big-main></big-main>
  </div>
</template>

<script>
import NavBar from "../bigscreen/Navbar.vue";
import BigMain from "../bigscreen/BigMain.vue";

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
  background-image: url(../../assets/img/bg_sky.jpg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>