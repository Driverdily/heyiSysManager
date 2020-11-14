<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-table
          ref="singleTable"
          :data="ZoneList"
          style="width: 100%; overflow-y: scroll"
          size="mini"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column width="50px">
            <template slot-scope>
              <img
                src="../../../assets/img/access/accessories_png_door_sensor2.png"
                alt=""
                class="table-img"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="value"
            :label="$t('serial_no')"
          ></el-table-column>
          <el-table-column prop="label" :label="$t('zones')"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="16" style="">
        <!-- 对码状态 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/pluse_66_red.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="14">
            <span>{{ $t("enrolling_state") }}</span>
          </el-col>
          <el-col :span="8" class="align-right">
            <span class="txt-blue">对码状态</span>
          </el-col>
        </el-row>
        <!-- 防区名称 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/shield_66_red.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("zone_name") }}</span>
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
        <!-- 防区类型 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/category_66_gray.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("zone_type") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="zone_key_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
            >
              <el-option
                v-for="item in ZoneTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 允许在家布防 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/home_arm_66_blue.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="18">
            <span>{{ $t("allow_home_arm") }}</span>
          </el-col>
          <el-col :span="4" class="align-right">
            <el-switch
              v-model="allow_arm_switch"
              active-color="#13ce66"
            ></el-switch>
          </el-col>
        </el-row>
        <!-- 防区防误报 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/warning.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="18">
            <span>{{ $t("zone_fwb") }}</span>
          </el-col>
          <el-col :span="4" class="align-right">
            <el-switch
              v-model="allow_arm_switch"
              active-color="#13ce66"
            ></el-switch>
          </el-col>
        </el-row>
        <!-- 防区锁定 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/lock_point.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("zone_locking") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="zone_lock_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 50%"
            >
              <el-option v-for="i in 10" :key="i" :label="i + 次" :value="i">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- 防区触发类型 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/shield_66_red.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("zone_trigger_type") }}</span>
          </el-col>
          <el-col :span="11" class="align-right">
            <el-select
              v-model="zone_trigger_type_value"
              keep-alive
              size="mini"
              :placeholder="$t('select')"
              style="width: 90%"
            >
              <el-option
                v-for="item in ZoneTriggerTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- LED广告屏 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/led.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("led_AD_Screen") }}</span>
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
        <!-- 语音内容 -->
        <el-row class="dev-set-list-item">
          <el-col :span="2" style="align-items: center">
            <img
              src="../../../assets/img/access/sms_66_blue.png"
              class="dev-set-list-img"
            />
          </el-col>
          <el-col :span="11">
            <span>{{ $t("voice_content") }}</span>
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
        <!-- 对码 -->
        <el-row class="dev-set-list-item">
          <el-col :span="24" class="align-center">
            <el-button type="infor" style="padding: 10px 50px" size="mini">{{
              $t("enrolling")
            }}</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zone_key_value: "2", //防区类型值
      allow_arm_switch: true, //允许在家布防boolean
      zone_lock_value: "3", //防区锁定次数
      zone_trigger_type_value: "1",

      ZoneList: [
        {
          value: "1",
          label: "防区1",
        },
        {
          value: "2",
          label: "防区2",
        },
        {
          value: "3",
          label: "防区3",
        },
        {
          value: "4",
          label: "防区4",
        },
        {
          value: "5",
          label: "防区5",
        },
        {
          value: "6",
          label: "防区6",
        },
        {
          value: "7",
          label: "防区7",
        },
        {
          value: "8",
          label: "防区8",
        },
        {
          value: "9",
          label: "防区9",
        },
        {
          value: "10",
          label: "防区10",
        },
        {
          value: "11",
          label: "防区11",
        },
        {
          value: "12",
          label: "防区12",
        },
        {
          value: "13",
          label: "防区13",
        },
        {
          value: "14",
          label: "防区15",
        },
      ],
      ZoneTypeList: [
        {
          value: "0",
          label: this.$t("zone_disable"),
        },
        {
          value: "1",
          label: this.$t("zone_delay"),
        },
        {
          value: "2",
          label: this.$t("zone_burglar"),
        },
        {
          value: "3",
          label: this.$t("zone_Perimeter"),
        },
        {
          value: "4",
          label: this.$t("zone_day_night"),
        },
        {
          value: "5",
          label: this.$t("zone_nor_silent"),
        },
        {
          value: "6",
          label: this.$t("zone_audible"),
        },
        {
          value: "7",
          label: this.$t("zone_fire"),
        },
        {
          value: "8",
          label: this.$t("zone_gas"),
        },
        {
          value: "9",
          label: this.$t("zone_medical"),
        },
        {
          value: "10",
          label: this.$t("zone_doorbe"),
        },
        {
          value: "11",
          label: this.$t("zone_key_switch"),
        },
        {
          value: "13",
          label: this.$t("zone_key_fire"),
        },
        {
          value: "14",
          label: this.$t("zone_key_violence"),
        },
        {
          value: "15",
          label: this.$t("zone_key_quake"),
        },
        {
          value: "16",
          label: this.$t("zone_key_air_raid"),
        },
        {
          value: "17",
          label: this.$t("zone_key_medical"),
        },
        {
          value: "18",
          label: this.$t("zone_voice_prompt"),
        },
      ],
      ZoneTriggerTypeList: [
        {
          value: "0",
          label: this.$t("zone_trigger_breake"),
        },
        {
          value: "1",
          label: this.$t("zone_trigger_close"),
        },
        {
          value: "2",
          label: this.$t("zone_trigger_line"),
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
