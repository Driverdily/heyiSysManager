<template>
  <el-row class="dev-set-list-item">
    <el-col :span="2" style="align-items: center">
      <img
        :src="devItemInput.imgUrl"
        class="dev-set-list-img"
      />
    </el-col>
    <el-col :span="14">
      <span>{{ devItemInput.label }}</span>
    </el-col>
    <el-col :span="6">
      <el-input size="mini"></el-input>
    </el-col>
    <el-col :span="2" class="align-right">
      <el-button
        type="infor"
        style="margin-left: 5px"
        size="mini"
        icon="el-icon-check"
      ></el-button>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    devItemInput: {
      type: Object,
      default: () => {},
    },
  },

};
</script>
<style scoped>
</style>