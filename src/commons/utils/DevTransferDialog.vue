<template>
  <el-dialog
    :visible.sync="visible"
    :title="$t('transfer_dev')"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    width="30%"
    :before-close="handleClose"
  >
    <span>转让设备给:</span> <el-input size="mini"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">{{ $t("cancel") }}</el-button>
      <el-button type="primary" @click="dialogVisible = false">{{
        $t("enter")
      }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 关闭
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style >
</style>
