<template>
  <div>
    <!-- 强制布防 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/arm_66_red.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("force_arm") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch
          v-model="force_arm_switch"
          active-color="#13ce66"
        ></el-switch>
      </el-col>
    </el-row>
    <!-- 中心账号 -->
    <dev-input-item :devItemInput="cciditem"></dev-input-item>

    <!-- 紧急报警短信/语音 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/alarm_delay_66_red.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="14">
        <span>{{ $t("sos_sms") }}</span>
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
    <!-- 推送设置 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("push_set") }}</span>
      </el-col>
    </el-row>
    <!-- 推送布撤防消息 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/arm_66_red.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("push_arm_disarm") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch v-model="push_arm_switch" active-color="#13ce66"></el-switch>
      </el-col>
    </el-row>
    <!-- 推送系统消息 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/system_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("push_system_message") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch v-model="push_sys_switch" active-color="#13ce66"></el-switch>
      </el-col>
    </el-row>
    <!-- 延时设置 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("delay_set") }}</span>
      </el-col>
    </el-row>
    <!-- 布防延时 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/arm_clock_66_green.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="18">
        <span>{{ $t("arm_delay") }}</span>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-select
          v-model="arm_delay_time_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
        >
          <el-option v-for="i in 255" :key="i" :label="i" :value="i">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- 报警延时 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/alarm_delay_66_red.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="18">
        <span>{{ $t("alarm_delay") }}</span>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-select
          v-model="alarm_delay_time_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
        >
          <el-option v-for="i in 255" :key="i" :label="i" :value="i">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <!-- 电话报警 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("phone_alarm") }}</span>
      </el-col>
    </el-row>
    <!-- 紧急键 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/alarm_66_red.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="11">
        <span>{{ $t("sos_key") }}</span>
      </el-col>
      <el-col :span="11" class="align-right">
        <el-select
          v-model="sos_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <!-- 拨号次数 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/arm_clock_66_green.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="18">
        <span>{{ $t("call_times") }}</span>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-select
          v-model="call_times_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
        >
          <el-option v-for="i in 15" :key="i" :label="i" :value="i">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <!-- 一键紧急报警灯开关 -->
    <dev-switch-item :devItemSwitch="SosLightItem"></dev-switch-item>

    <!-- 一键紧急报警短信及语音信息 -->
    <dev-switch-item :devItemSwitch="SmsPushItem"></dev-switch-item>
    <!-- 电话线检测 -->
    <dev-switch-item :devItemSwitch="PhoneLinkItem"></dev-switch-item>
 <!-- 振铃次数 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/ring_66_oriange.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="18">
        <span>{{ $t("ring_times") }}</span>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-select
          v-model="ring_times_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
        >
          <el-option v-for="i in (1,15)" :key="i" :label="i" :value="i">
          </el-option>
        </el-select>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import DevInputItem from "../../utils/DevSetItemInput.vue";
import DevSwitchItem from "../../utils/DevSetItemSwitch.vue";

export default {
  components: {
    DevInputItem,
    DevSwitchItem,
  },
  data() {
    return {
      sos_value: "", //紧急键类型绑定值
      alarm_type_value: "", //报警类型绑定值
      force_arm_switch: true, //强制布防
      push_arm_switch: true, //推送布撤防开关
      push_sys_switch: false, //推送系统消息
      arm_delay_time_value: "3", //布防延迟
      alarm_delay_time_value: "13", //报警延迟
      call_times_value: "2", //拨号次数
      ring_times_value:'3',//振铃次数
      options: [
        {
          value: 0,
          label: this.$t("close_intercom"),
        },
        {
          value: 1,
          label: this.$t("open_intercom_1"),
        },
        {
          value: 2,
          label: this.$t("open_intercom_2"),
        },
        {
          value: 3,
          label: this.$t("open_intercom_3"),
        },
        {
          value: 4,
          label: this.$t("open_intercom_4"),
        },
        {
          value: 5,
          label: this.$t("open_intercom_5"),
        },
        {
          value: 6,
          label: this.$t("open_intercom_6"),
        },
        {
          value: 7,
          label: this.$t("open_intercom_7"),
        },
        {
          value: 8,
          label: this.$t("open_intercom_8"),
        },
      ],
      phoneDate: [
        {
          serial: "phone 1",
          value: "1323123123",
        },
        {
          serial: "phone 2",
          value: "1323123123",
        },
        {
          serial: "phone 3",
          value: "1323123123",
        },
        {
          serial: "phone 4",
          value: "1323123123",
        },
        {
          serial: "phone 5",
          value: "1323123123",
        },
        {
          serial: "phone 6",
          value: "1323123123",
        },
        {
          serial: "phone 7",
          value: "1323123123",
        },
        {
          serial: "phone 8",
          value: "1323123123",
        },
      ],
      phoneValues: [
        {
          value: 0,
          labels: this.$t("disable"),
        },
        {
          value: 1,
          labels: this.$t("gsm_dial"),
        },
        {
          value: 2,
          labels: this.$t("gsm_sms"),
        },
        {
          value: 3,
          labels: this.$t("gsm_cid"),
        },
      ],
      cciditem: {
        imgUrl: require("../../../assets/img/seticon/user_66_gray.png"),
        label: this.$t("center_number"),
      },
      SosLightItem: {
        imgUrl: require("../../../assets/img/seticon/alarm_66_red.png"),
        label: this.$t("sos_light_switch"),
        Switch: 1,
      },
      SmsPushItem: {
        imgUrl: require("../../../assets/img/seticon/sms_66_blue.png"),
        label: this.$t("sms_push"),
        Switch: 0,
      },
      PhoneLinkItem: {
        imgUrl: require("../../../assets/img/seticon/telphone_wire_66_oriange.png"),
        label: this.$t("phone_line_check"),
        Switch: 1,
      },
    };
  },
};
</script>

<style>
/* 	.el-table__row td {
		padding: 0 !important;
		font-size: 10px !important;
	} */
</style>
