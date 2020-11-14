<template>
  <div>
    <el-row class="main_top" type="flex" justify="space-between">
      <el-col :span="16">
        <div class="header-logo">
          <img
            src="../../assets/img/bg_logo_s.png"
            title="LightYear"
            alt="LightYear"
            class="img-logo"
          />
        </div>
        
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main_top {
  height: 72px;
  padding: 0 15px;
  align-self: center;
  background-color: #3060ff;
}
</style>