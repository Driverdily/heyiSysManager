<template>
  <div class="app_id">
    <div class="data_bodey">
      <nav-bar class="data_top"></nav-bar>
      <big-main></big-main>
    </div>
  </div>
</template>

<script>
import NavBar from "../bigscreen/Navbar";
import BigMain from "../bigscreentwo/BigMainTwo";

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


<style lang="scss"  scoped>
.app_id {
  color: #fff;
  background: #00065b url("../../assets/img/bg_sky.jpg");
  background-size: 100% 100%;
  background-position: 0 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
}
.data_bodey {
  /* width: 100%;
  height: 100%;
  background-image: url("../../assets/img/bg_sky.jpg");
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0; */
  width: 100%;
  height: calc(100% - 10px);
  .data_top {
    height: 9%;
    width: 100%;
  }
}
</style>