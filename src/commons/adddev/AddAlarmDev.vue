<template>
  <el-dialog
    :visible.sync="visible"
    customClass="h-800px"
    :title="$t('alarm_dev')"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    append-to-body
    :before-close="handleClose"
  >
    <div>
      <el-row style="height: 692px; border-top: 0.5px solid gray">
        <el-col :span="9" style="height: 100%; border-right: 1px solid gray">
      
      <!-- 设备信息 -->
          <div class="box-card">
            <!-- 设备信息 -->
            <span class="box-title">{{ $t("dev_information") }}</span>

            <!-- 设备类型和IMEI号 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="6">
                <span>{{ $t("dev_type") }}</span>
              </el-col>

              <el-col :span="6" class="align-right">
                <el-select
                  v-model="add_alarm_value"
                  keep-alive
                  size="mini"
                  :placeholder="$t('select')"
                  style="width: 90%"
                  class="m-t-5"
                >
                  <el-option
                    v-for="item in AddAlarmTypeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <span>{{ $t("dev_imei") }}</span>
              </el-col>
              <el-col :span="8">
                <el-input class="w-90" size="mini"></el-input>
              </el-col>
            </el-row>
            <!-- 设备编号和编程密码 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="6">
                <span>{{ $t("dev_number") }}</span>
              </el-col>
              <el-col :span="6">
                <el-input class="w-90" size="mini"></el-input>
              </el-col>
              <el-col :span="6">
                <span>{{ $t("program_pwd") }}</span>
              </el-col>
              <el-col :span="6">
                <el-input class="w-90" size="mini"></el-input>
              </el-col>
            </el-row>

            <!-- 设备名称 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="6">
                <span>{{ $t("dev_name") }}</span>
              </el-col>
              <el-col :span="10">
                <el-input size="mini"></el-input>
              </el-col>
              <el-col :span="6">
                <el-button size="mini">{{
                  $t("Device_data_verification")
                }}</el-button>
              </el-col>
            </el-row>

          </div>

          <!-- 联系人信息-- -->
          <div class="box-card">
            <span class="box-title">{{ $t("contect_person_info") }}</span>

            <!-- 联系人1 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="11">
                <el-input
                  size="mini"
                  :placeholder="$t('contect_person') + 1"
                ></el-input>
              </el-col>
              <el-col :span="11" :offset="2">
                <el-input
                  size="mini"
                  :placeholder="$t('contect_phone') + 1"
                ></el-input>
              </el-col>
            </el-row>
            <!-- 联系人2 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="11">
                <el-input
                  size="mini"
                  :placeholder="$t('contect_person') + 2"
                ></el-input>
              </el-col>
              <el-col :span="11" :offset="2">
                <el-input
                  size="mini"
                  :placeholder="$t('contect_phone') + 2"
                ></el-input>
              </el-col>
            </el-row>
            <!-- 地址 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="24">
                <el-input
                  type="textarea"
                  autosize
                  :placeholder="$t('contect_address')"
                  v-model="textarea1"
                >
                </el-input>
              </el-col>
            </el-row>
            <!-- 备注 -->
            <el-row class="dev-set-list-item-no">
              <el-col>
                <el-input
                  type="textarea"
                  autosize
                  :placeholder="$t('ps')"
                  v-model="textarea1"
                >
                </el-input>
              </el-col>
            </el-row>
          </div>
          <!-- 定位信息 -->
          <div class="box-card">
            <span class="box-title">{{ $t("install_information") }}</span>
            <!-- 经纬度 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="4">
                <span>{{ $t("lat_lon") }}</span>
              </el-col>
              <el-col :span="7">
                <el-input size="mini"></el-input>
              </el-col>
              <el-col :span="7">
                <el-input size="mini"></el-input>
              </el-col>
              <el-col :span="6" class="align-right">
                <el-button type="infor" size="mini">{{
                  $t("locate")
                }}</el-button>
              </el-col>
            </el-row>
            <!-- 安装情况 -->
            <el-row class="dev-set-list-item-no">
              <el-col :span="4">
                <span>{{ $t("install_time") }}</span>
              </el-col>
              <el-col :span="14">
                <el-date-picker
                  v-model="install_start"
                  type="date"
                  placeholder="选择日期"
                  size="mini"
                  style="width: 80%"
                >
                </el-date-picker>
              </el-col>
            </el-row>
            <el-row class="dev-set-list-item-no">
              <el-col :span="4">
                <span>{{ $t("expire_time") }}</span>
              </el-col>
              <el-col :span="14">
                <el-date-picker
                  v-model="install_end"
                  type="date"
                  placeholder="选择日期"
                  size="mini"
                  style="width: 80%"
                >
                </el-date-picker>
              </el-col>
              <el-col :span="6" class="align-right">
                <el-checkbox v-model="checked">{{
                  $t("expire_remind")
                }}</el-checkbox>
              </el-col>
            </el-row>
          </div>
        <!-- 保存信息 -->
          <div class="box-card">
            <span class="box-title">{{ $t("operate") }}</span>
            <el-row class="dev-set-list-item-no">
              <el-col :span="12">
                <el-button
                  type="infor"
                  style="padding: 10px 50px"
                  size="mini"
                  >{{ $t("save") }}</el-button
                >
              </el-col>
              <el-col :span="12">
                <el-button
                  type="infor"
                  style="padding: 10px 50px"
                  size="mini"
                  >{{ $t("cancel") }}</el-button
                >
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="15" style="height: 100%">
          <common-map></common-map>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
import CommonMap from "../maps/CommonMap.vue";
export default {
  components: {
    CommonMap,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      install_start: "",
      install_end: "",
      add_alarm_value: "",
      AddAlarmTypeList: [
        {
          value: 0,
          label: "518C",
        },
        {
          value: 1,
          label: "518D",
        },
        {
          value: 2,
          label: "518E",
        },
        {
          value: 3,
          label: "W1",
        },
        {
          value: 4,
          label: "W5",
        },
        {
          value: 5,
          label: "W7",
        },
        {
          value: 6,
          label: "W20",
        },
        {
          value: 7,
          label: "W21",
        },
        {
          value: 8,
          label: "518F",
        },
        {
          value: 9,
          label: "308Z",
        },
        {
          value: 10,
          label: "518D2",
        },
      ],
    };
  },
  methods: {
    // 关闭
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>


<style scoped>
.h-800px {
		height: 750px;
		width: 1100px;
		margin-top: 90px !important;
	}

	.el-dialog__body {
		padding: 1px 0px !important;
	}

	.el-tabs--left .el-tabs__header.is-left {
		margin-right: 1px !important;

	}

	.table-img {
		min-width: 24px;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 12px;
		font-size: 32px;
	}

	.box-card {
		margin: 20px 10px 20px;
		border: 0.5px solid lightgray;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		padding: 5px;
		background: #f0eff5;
	}

	.box-card .box-title {
		position: relative;
		width: auto;
		top: -19px;
		margin-left: 40px;
		background-color: white;
		padding: 5px;
		border-radius: 5px;
		border: 0.5px solid lightgray;
	}
</style>