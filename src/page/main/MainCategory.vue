<template>
  <el-row class="main-container">
    <el-col :span="24" class="one">
      <top-nav></top-nav>
    </el-col>
    <el-col :span="24" class="two">
      <MainMaps></MainMaps>
    </el-col>
  </el-row>
</template>

<script>
import topNav from "../../commons/nav/topNav.vue";
import MainMaps from "../../commons/maps/AllMaps.vue";

export default {
  components: {
    topNav,
    MainMaps,
  },
};
</script>

<style>
.main-container {
  width: 100%;
  display: block;
  height: 100%;
}
.main-container .one{
	height: 75px;
}

.main-container .two{
	height: 300px;
}



</style>
