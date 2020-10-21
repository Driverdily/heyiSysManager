<template>
  <div class="main-container">
    <el-row>
      <el-col :span="24" class="top">
        <top-nav></top-nav>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="container">
        <router-view> </router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topNav from "../../commons/nav/topNav.vue";


export default {
  components: {
    topNav,
  },
};
</script>

<style>
.main-container {
  width: 100%;
  display: block;
  height: 100%;
}
.main-container .container {
  margin-top: 72px;
  height: 500px;
}
</style>
