<template>
  <div>
    <!-- 网络参数设置 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("net_set") }}</span>
      </el-col>
    </el-row>
    <!-- 开关 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/switch_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("open_close") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch v-model="net_switch" active-color="#13ce66"></el-switch>
      </el-col>
    </el-row>



  </div>
</template>

<script>
export default {
  data() {
    return {
      net_switch: true, //网络参数开关

    };
  },
};
</script>

<style scoped>

</style>