<template>
  <el-dialog
    :visible.sync="visible"
    customClass="dialog-alarm-devset-menu"
    title="报警设备名称(待)"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    append-to-body
    :before-close="handleClose"
  >
    <div>
      <el-tabs tab-position="left" type="border-card" class="tab-alarm-set">
        <el-tab-pane>
          <!-- 设备信息-- -->
          <span slot="label"
            ><i class="iconfont icon-adjust" style="color: red"></i>&nbsp;
            {{ $t("dev_information") }}</span
          >
          <dev-informations class="tab-alarm-set-content"></dev-informations>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 时间设置 -->
          <span slot="label"
            ><i class="iconfont icon-shijian" style="color: gray"></i>&nbsp;
            {{ $t("time_set") }}
          </span>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 报警设置 -->
          <span slot="label"
            ><i class="iconfont icon-baojing" style="color: red"></i>&nbsp;
            {{ $t("alarm_set") }}
          </span>
          <dev-alarm class="tab-alarm-set-content"></dev-alarm>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 密码设置 -->
          <span slot="label"
            ><i class="iconfont icon-mima" style="color: #cc33ff"></i>&nbsp;
            {{ $t("pwd_set") }}
          </span>
          <dev-password class="tab-alarm-set-content"></dev-password>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 声音设置 -->
          <span slot="label"
            ><i class="iconfont icon-laba" style="color: #2e2e2e"></i>&nbsp;
            {{ $t("voice_set") }}
          </span>
          <dev-siren class="tab-alarm-set-content"></dev-siren>
        </el-tab-pane>

        <el-tab-pane>
          <!-- CMS设置 -->
          <span slot="label"
            ><i class="iconfont icon-zhexian" style="color: green"></i>&nbsp;
            {{ $t("cms_set") }}
          </span>
          <dev-cms class="tab-alarm-set-content"></dev-cms>
        </el-tab-pane>

        <el-tab-pane>
          <!-- LED设置 -->
          <span slot="label"
            ><i class="iconfont icon-led" style="color: red"></i>&nbsp;
            {{ $t("led_set") }}
          </span>
          <dev-led class="tab-alarm-set-content"></dev-led>
        </el-tab-pane>

        <el-tab-pane>
          <!-- RFID设置 -->
          <span slot="label"
            ><i class="iconfont icon-RFID" style="color: deepskyblue"> </i
            >&nbsp; {{ $t("rfid_set") }}
          </span>
          <dev-rfid class="tab-alarm-set-content"></dev-rfid>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 计划任务 -->
          <span slot="label"
            ><i class="iconfont icon-jihua" style="color: tomato"></i>&nbsp;
            {{ $t("plan_task") }}
          </span>
          <plan-task class="tab-alarm-set-content-noborder"></plan-task>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 固件升级 -->
          <span slot="label"
            ><i class="iconfont icon-shengji" style="color: rosybrown"></i
            >&nbsp;
            {{ $t("firmware_update") }}
          </span>
          <dev-firmware class="tab-alarm-set-content"></dev-firmware>
        </el-tab-pane>

        <el-tab-pane>
          <!-- SIA-IP设置 -->
          <span slot="label"
            ><i class="iconfont icon-qitashezhi" style="color: deepskyblue"></i
            >&nbsp; {{ $t("siaip_set") }}
          </span>
          <dev-siaip class="tab-alarm-set-content"></dev-siaip>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 其他设置 -->
          <span slot="label"
            ><i class="iconfont icon-config" style="color: #003d4c"></i> &nbsp;
            {{ $t("other_set") }}
          </span>
          <dev-other class="tab-alarm-set-content"></dev-other>
        </el-tab-pane>

        <el-tab-pane>
          <!-- 恢复出厂 -->
          <span slot="label"
            ><i class="iconfont icon-huifuchuchang" style="color: #006600"></i
            >&nbsp; {{ $t("restore_factory") }}</span
          >
          <dev-reset class="tab-alarm-set-content"></dev-reset>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-dialog>
</template>

<script>
import DevInformations from "../alarmparameter/information/DevInformation.vue";
import DevAlarm from "../alarmparameter/alarm/DevAlarm.vue";
import DevPassword from "./password/DevPassword.vue";
import DevSiren from "./siren/DevSiren.vue";
import DevCms from "./cms/DevCMS.vue";
import DevLed from "./led/LedSet.vue";
import PlanTask from "./plan/PlanTask.vue";
import DevRfid from "./rfid/DevRfid.vue";
import DevFirmware from "./firmware/DevFirmware.vue";
import DevSiaip from "./siaip/DevSiaip.vue";
import DevReset from "./reset/ResetFactory.vue";
import DevOther from "./other/DevOther.vue";

export default {
  components: {
    DevInformations,
    DevAlarm,
    DevPassword,
    DevSiren,
    DevCms,
    DevLed,
    PlanTask,
    DevRfid,
    DevFirmware,
    DevSiaip,
    DevReset,
    DevOther,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
  methods: {
    // 关闭
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style>
.dialog-alarm-devset-menu {
  width: 850px;
  border-radius: 5px;
}

.el-tabs--left .el-tabs__header.is-left {
  margin-right: 1px !important;
}
.tab-alarm-set {
  height: 650px;
  border-top: 1px solid #ccc;
}
.tab-alarm-set .tab-alarm-set-content {
  border: 1px solid #ccc;
  margin: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.tab-alarm-set .tab-alarm-set-content-noborder {
  margin: 8px;
}

.dialog-alarm-devset-menu .el-tabs--border-card > .el-tabs__content {
  padding: 0px;
}
.dialog-alarm-devset-menu .el-dialog__body {
  padding: 0 !important;
}
</style>
