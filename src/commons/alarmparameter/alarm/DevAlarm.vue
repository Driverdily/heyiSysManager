<template>
  <div>
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
          style="margin-left: 5px;"
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
        <!-- <el-radio v-model="radio" label="1">{{$t('commons.open')}}</el-radio>
				<el-radio v-model="radio" label="2">{{$t('commons.close')}}</el-radio> -->
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
        <!-- <el-radio v-model="radio" label="1">{{$t('commons.open')}}</el-radio>
				<el-radio v-model="radio" label="2">{{$t('commons.close')}}</el-radio> -->
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
      <!-- <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/alarm_delay_66_red.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="11">
        <span>{{ $t("alarm_delay") }}</span>
      </el-col>
      <el-col :span="6">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="infor" style="margin-left: 5px" size="mini">{{
          $t("change")
        }}</el-button>
      </el-col>
      <el-col :span="2" class="align-right">
        <span>0-255</span>
      </el-col> -->
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
    <!-- 接警号码 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("alarm_number") }}</span>
      </el-col>
    </el-row>

    <el-row style="height: 240px; border: 1px solid #f0eff5">
      <el-col :span="8" style="height: 100%; border-right: 1px solid #ccc">
        <el-table
          ref="singleTable"
          :data="phoneDate"
          style="width: 100%"
          size="mini"
          stripe
          highlight-current-row
          @current-change="handleCurrentChange"
          :cell-style="{ padding: '0' }"
        >
          <el-table-column
            prop="serial"
            :label="$t('serial_no')"
          ></el-table-column>
          <el-table-column prop="value" :label="$t('phone')"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="16" style="">
        <!-- 接警类型 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/telphone_wire_66_oriange.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("alarm_type") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="alarm_type_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
            >
              <el-option
                v-for="item in phoneValues"
                :key="item.value"
                :label="item.labels"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 布撤防 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/arm_66_red.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="18">
            <span>{{ $t("arm_disarm") }}</span>
          </el-col>
          <el-col :span="3" class="align-right">
            <!-- 	<el-radio v-model="radio" label="1">{{$t('commons.open')}}</el-radio>
						<el-radio v-model="radio" label="2">{{$t('commons.close')}}</el-radio> -->
            <el-switch
              v-model="phone_arm_switch"
              active-color="#13ce66"
            ></el-switch>
          </el-col>
        </el-row>
        <!-- 系统信息 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/guzhang.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="18">
            <span>{{ $t("sys_information") }}</span>
          </el-col>
          <el-col :span="3" class="align-right">
            <!-- 				<el-radio v-model="radio" label="1">{{$t('commons.open')}}</el-radio>
						<el-radio v-model="radio" label="2">{{$t('commons.close')}}</el-radio> -->
            <el-switch
              v-model="phone_sys_switch"
              active-color="#13ce66"
            ></el-switch>
          </el-col>
        </el-row>
        <!-- 系统报警 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/system_66_gray.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="18">
            <span>{{ $t("sys_alarm") }}</span>
          </el-col>
          <el-col :span="3" class="align-right">
            <!-- 			<el-radio v-model="radio" label="1">{{$t('commons.open')}}</el-radio>
						<el-radio v-model="radio" label="2">{{$t('commons.close')}}</el-radio> -->
            <el-switch
              v-model="phone_alarm_switch"
              active-color="#13ce66"
            ></el-switch>
          </el-col>
        </el-row>
      </el-col>

      <!-- 接警号码 -->
      <el-row class="dev-set-list-item">
        <el-col :span="2" style="align-items: center">
          <img
            src="../../../assets/img/seticon/telphone_66_green.png"
            class="dev-set-list-img"
          />
        </el-col>
        <el-col :span="11">
          <span>{{ $t("phone_name") }}</span>
        </el-col>
        <el-col :span="8">
          <el-input size="mini"></el-input>
        </el-col>
        <el-col :span="3" class="align-right">
          <el-button type="infor" style="margin-left: 5px" size="mini">{{
            $t("change")
          }}</el-button>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sos_value: "", //紧急键类型绑定值
      alarm_type_value: "", //报警类型绑定值
      push_arm_switch: true, //推送布撤防开关
      push_sys_switch: false, //推送系统消息
      phone_arm_switch: false, //布撤防
      phone_sys_switch: false, //系统信息
      phone_alarm_switch: false, //系统报警
      arm_delay_time_value: "3", //布防延迟
      alarm_delay_time_value: "13", //报警延迟
      call_times_value: "2", //拨号次数
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
