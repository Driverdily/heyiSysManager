<template>
  <div class="main-container">
    <top-nav class="top"></top-nav>
    <router-view class="container"> </router-view>
    <bottom-nav class="bottom"></bottom-nav>

    <!-- <el-container>
  <el-header> <top-nav></top-nav> </el-header>
 <el-main> <router-view></router-view> </el-main>
 <el-footer> <bottom-nav></bottom-nav> </el-footer>

</el-container> -->
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
  display: flex;
  flex-direction: column;
}
.main-container .top {
  height: 80px;
  flex: 0 0 auto;
}
.main-container .bottom {
  border-top: 3px double gray;
  height: 240px;
  flex: 0 0 auto;
}

.main-container .container {
  flex: 1 1 auto;
}
</style>
