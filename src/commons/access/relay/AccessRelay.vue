<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-table
          ref="singleTable"
          :data="ZoneList"
          style="width: 100%; overflow-y: scroll;max-height:580px;"
          size="mini"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column width="50px">
            <template slot-scope>
              <img
                src="../../../assets/img/access/relay.png"
                alt=""
                class="table-img"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="value"
            :label="$t('serial_no')"
            width="70px"
          ></el-table-column>
          <el-table-column prop="label" :label="$t('name')"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="16">
        <!-- 跟随类型 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/system_66_gray.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("telecontrol_relay_type") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="relay_type_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
            >
              <el-option
                v-for="item in RelayTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 输出模式 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/alarm_66_red.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("telecontrol_relay_mode_output") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="output_mode_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
              :disabled="this.relay_type_value == 1"
            >
              <el-option
                v-for="item in RelayOutputmodeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 输出类型-金星眼球贝  -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/category_66_gray.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("telecontrol_relay_output_type") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="output_type_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
              :disabled="this.relay_type_value == 1"
            >
              <el-option
                v-for="item in RelayOutputTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 输出时间 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/clock1_66_gray.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("output_time") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="output_time_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
            >
              <el-option v-for="i in 99" :key="i" :label="i" :value="i">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 防区模式 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/seticon/arm_66_red.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("telecontrol_relay_mode_zone") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="zone_mode_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
              :disabled="this.relay_type_value == 0"
            >
              <el-option
                v-for="item in ZoneModeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 防区号 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/shield_66_red.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("telecontrol_relay_zone_num") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="zone_number_value"
              keep-alive
              size="mini"
              :placeholder="$t('commons.select')"
              style="width: 90%"
              :disabled="this.relay_type_value == 0"
            >
              <el-option v-for="i in 32" :key="i" :label="i" :value="i">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin-top: 120px; text-align: center">
          <el-button type="infor" style="padding: 10px 95px" size="mini">{{
            $t("save")
          }}</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      relay_type_value: "1", //跟随类型值
      output_mode_value: "1", //输出模式值
      output_type_value: "1", //输出类型值
      output_time_value: "22", //输出时间值
      zone_mode_value: "1", //防区模式值
      zone_number_value: "11", //防区号值

      ZoneList: [
        {
          value: "1",
          label: "继电器1",
        },
        {
          value: "2",
          label: "继电器2",
        },
        {
          value: "3",
          label: "继电器3",
        },
        {
          value: "4",
          label: "继电器4",
        },
        {
          value: "5",
          label: "继电器5",
        },
        {
          value: "6",
          label: "继电器6",
        },
        {
          value: "7",
          label: "继电器7",
        },
        {
          value: "8",
          label: "继电器8",
        },
        {
          value: "9",
          label: "继电器9",
        },
        {
          value: "10",
          label: "继电器10",
        },
        {
          value: "11",
          label: "继电器11",
        },
        {
          value: "12",
          label: "继电器12",
        },
        {
          value: "13",
          label: "继电器13",
        },
        {
          value: "14",
          label: "继电器15",
        },
      ],
      RelayTypeList: [
        {
          value: "1",
          label: this.$t("telecontrol_relay_event"),
        },
        {
          value: "2",
          label: this.$t("telecontrol_relay_zone"),
        },
      ],

      RelayOutputmodeList: [
        {
          value: "0",
          label: this.$t("mode_Impuls"),
        },
        {
          value: "1",
          label: this.$t("mode_Fortsetzung"),
        },
      ],
      RelayOutputTypeList: [
        {
          value: "0",
          label: this.$t("telecontrol_relay_output_type_0"),
        },
        {
          value: "1",
          label: this.$t("telecontrol_relay_output_type_1"),
        },
        {
          value: "2",
          label: this.$t("telecontrol_relay_output_type_2"),
        },
        {
          value: "3",
          label: this.$t("telecontrol_relay_output_type_3"),
        },
        {
          value: "4",
          label: this.$t("telecontrol_relay_output_type_4"),
        },
        {
          value: "5",
          label: this.$t("telecontrol_relay_output_type_5"),
        },
        {
          value: "6",
          label: this.$t("telecontrol_relay_output_type_6"),
        },
        {
          value: "7",
          label: this.$t("telecontrol_relay_output_type_7"),
        },
        {
          value: "8",
          label: this.$t("telecontrol_relay_output_type_8"),
        },
      ],
      ZoneModeList: [
        {
          value: "0",
          label: this.$t("telecontrol_relay_mode_zone_0"),
        },
        {
          value: "1",
          label: this.$t("telecontrol_relay_mode_zone_1"),
        },
        {
          value: "2",
          label: this.$t("telecontrol_relay_mode_zone_2"),
        },
        {
          value: "3",
          label: this.$t("telecontrol_relay_mode_zone_3"),
        },
      ],
    };
  },
};
</script>

<style scoped>
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
</style>
