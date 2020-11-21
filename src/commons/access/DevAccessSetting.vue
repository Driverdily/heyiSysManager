<template>
  <el-dialog
    :visible.sync="visible"
    customClass="dialog-access-menu"
    title="配件管理"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    append-to-body
    :before-close="handleClose"
  >
    <el-tabs tab-position="top" type="border-card" style="margin-top: 1px">
      <!-- 配件 -->
      <el-tab-pane>
        <span slot="label"> {{ $t("accesses") }}</span>
        <access-zone class="tab-aceess-content"></access-zone>
      </el-tab-pane>
      <!-- 智能插座 -->
      <el-tab-pane>
        <span slot="label"> {{ $t("socketes") }}</span>
        <access-socket class="tab-aceess-content"></access-socket>
      </el-tab-pane>
      <!-- 智能遥控器-- -->
      <el-tab-pane>
        <span slot="label"> {{ $t("controles") }}</span>
        <access-control class="tab-aceess-content"></access-control>
      </el-tab-pane>
      <!-- 智能户外声光警号 -->
      <el-tab-pane>
        <span slot="label"> {{ $t("out_sirenes") }}</span>
        <access-out-siren class="tab-aceess-content"></access-out-siren>
      </el-tab-pane>
      <!-- 继电器 -->
      <el-tab-pane>
        <span slot="label"> {{ $t("relayes") }}</span>
        <access-relay class="tab-aceess-content"></access-relay>
      </el-tab-pane>
      <!-- RFID -->
      <el-tab-pane>
        <span slot="label"> {{ $t("rfides") }}</span>
        <access-rfid class="tab-aceess-content"></access-rfid>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script>
import AccessZone from "./zone/AccessZone.vue";
import AccessSocket from "./socket/AccessSocket.vue";
import AccessControl from "./control/AccessControl.vue";
import AccessOutSiren from "./siren/AccessOutSiren.vue";
import AccessRelay from "./relay/AccessRelay.vue";
import AccessRfid from "./rfid/AccessRfid.vue";

export default {
  components: {
    AccessZone,
    AccessSocket,
    AccessControl,
    AccessOutSiren,
    AccessRelay,
    AccessRfid,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style>
.dialog-access-menu {
  width: 800px;
}

.dialog-access-menu .el-tabs__item {
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  font-weight: 550;
  color: #666666;
}

.dialog-access-menu .el-tabs--border-card > .el-tabs__content {
  padding: 5px;
}
.dialog-access-menu .el-dialog__body {
  padding: 0 !important;
}

.el-tabs--left .el-tabs__header.is-left {
  margin-right: 1px !important;
}
.tab-aceess-content {
  height: 580px;
  border-radius: 5px;
  padding: 1px;
  border: 1px solid #ccc;
}
</style>
