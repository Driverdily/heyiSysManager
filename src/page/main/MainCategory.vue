<template>
  <div class="main-container">
    <top-nav class="top"></top-nav>
    <router-view class="container"> </router-view>
    
    <bottom-nav class="bottom"></bottom-nav>
   
  </div>
</template>

<script>
import topNav from "../../commons/nav/topNav.vue";
import bottomNav from "../../commons/nav/bottomNav.vue";

export default {
  components: {
    topNav,
    bottomNav,
  },
};
</script>

<style >
.main-container {
  height: 100%;
  display: block;
  overflow: hidden;
}
.main-container .top {
  height: 72px;
  display: block;
  width: 100%;
}

.main-container .bottom {
  position: absolute;
  bottom: 0;
  height: 200px;
  width: 100%;
  z-index: 100;
}
.main-container .container {
  display: block;
  margin: 2px 0px 200px 0px;
  width: 100%;
  height: calc(100% - 272px);
  overflow: hidden;
}


</style>
