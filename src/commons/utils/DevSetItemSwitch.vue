<template>
   <!-- 强制布防 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          :src="devItemSwitch.imgUrl"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ devItemSwitch.label }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch
          :v-model="devItemSwitch.Switch"
          active-color="#13ce66"
          on-value="1"
          off-value="0"
        ></el-switch>
      </el-col>
    </el-row>
</template>
<script>
export default {
  props: {
    devItemSwitch: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped>


</style>