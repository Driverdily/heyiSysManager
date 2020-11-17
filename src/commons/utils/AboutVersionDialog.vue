<template>
  <el-dialog
    :visible.sync="visible"
    :title="$t('about')"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    width="400px"
    :before-close="handleClose"
  >
    <h4>版本v1.4.22</h4>
    <p>
      1.XXXXXXXXXXXXXXXXXXXXXX <br />
      2.XXXXXXXXXXXXXXXXXXXXXX <br />
      3.XXXXXXXXXXXXXXXXXXXXXX <br />
      4.XXXXXXXXXXXXXXXXXXXXXX <br />
      5.XXXXXXXXXXXXXXXXXXXXXX <br />
      6.XXXXXXXXXXXXXXXXXXXXXX <br /><br/>
      2020-10-11
    </p>
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
