<template>
  <div style="height: 600px; position: relative">
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("alarm_number") }}</span>
      </el-col>
    </el-row>
    <!-- 列表 -->
    <el-row>
      <el-col :span="24">
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
    </el-row>

    <!-- 设置 -->
    <div class="layout-bottom">
      <el-row class="dev-set-list-item bg-gray">
        <el-col :span="24">
          <span class="fa-1x m-l-10 txt-bold">{{ $t("phone_set") }}</span>
        </el-col>
      </el-row>
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
          <el-switch
            v-model="phone_alarm_switch"
            active-color="#13ce66"
          ></el-switch>
        </el-col>
      </el-row>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alarm_type_value: "", //报警类型绑定值
      phone_arm_switch: false, //布撤防
      phone_sys_switch: false, //系统信息
      phone_alarm_switch: false, //系统报警
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

<style lang="scss" >
div.layout-bottom {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
}
</style>