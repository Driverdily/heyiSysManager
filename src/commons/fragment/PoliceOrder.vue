<template>
  <div class="main_fragment_policeorder">
    <el-row style="height: 100%; width: 100%">
      <el-col :span="3" class="left-nav p-20">
        <div class="m-t-10">{{ $t("duty_officer") }}</div>
        <el-input class="m-t-5 w-90" size="mini"></el-input>
        <div class="m-t-10">{{ $t("alarm_person") }}</div>
        <el-input class="m-t-5 w-90" size="mini"></el-input>
        <div class="m-t-10">{{ $t("alarm_sort") }}</div>

        <el-select
          v-model="alarm_type_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
          class="m-t-5"
        >
          <el-option
            v-for="item in alarmTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <div class="m-t-10">{{ $t("police_type") }}</div>

        <el-select
          v-model="police_type_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
          class="m-t-5"
        >
          <el-option
            v-for="item in policeTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-date-picker
          v-model="startTime"
          type="datetime"
          :placeholder="$t('select_time')"
          default-time="12:00:00"
          class="m-t-20 w-90"
          size="mini"
        >
        </el-date-picker>

        <el-date-picker
          v-model="endTime"
          type="datetime"
          :placeholder="$t('select_time')"
          default-time="12:00:00"
          class="m-t-5 w-90"
          size="mini"
        >
        </el-date-picker>

        <br /><br />
        <el-button
          type="infor"
          style="padding: 7px 25px; width: 90%"
          size="mini"
          icon="el-icon-check"
        ></el-button>
      </el-col>

      <el-col :span="21" class="right-nav">
        <el-table
          :data="PoliceRecordData"
          stripe
          style="width: 100%; overflow-y: scroll; height: 90%"
          size="mini"
          border
        >
          <el-table-column prop="serial"></el-table-column>

          <el-table-column
            prop="deal_alarm_time"
            :label="$t('deal_alarm_time')"
          ></el-table-column>

          <el-table-column
            prop="alarm_analysis"
            :label="$t('alarm_analysis')"
          ></el-table-column>

          <el-table-column
            prop="deal_type"
            :label="$t('deal_type')"
          ></el-table-column>

          <el-table-column
            prop="alarm_dev"
            :label="$t('alarm_dev')"
          ></el-table-column>

          <el-table-column
            prop="duty_officer"
            :label="$t('duty_officer')"
          ></el-table-column>

          <el-table-column
            prop="alarm_person"
            :label="$t('alarm_person')"
          ></el-table-column>
          <el-table-column
            prop="alarm_person_number"
            :label="$t('alarm_person_number')"
          ></el-table-column>
          <el-table-column
            prop="catch_person_number"
            :label="$t('catch_person_number')"
          ></el-table-column>
          <el-table-column
            prop="value_involved"
            :label="$t('value_involved')"
          ></el-table-column>

          <el-table-column
            prop="live_situation"
            :label="$t('live_situation')"
          ></el-table-column>

          <el-table-column
            prop="live_situation"
            :label="$t('deal_result')"
          ></el-table-column>
          <el-table-column
            prop="alarm_account"
            :label="$t('alarm_account')"
          ></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
      alarm_type_value: "",
      police_type_value: "",
      alarmTypeList: [
        {
          value: 0,
          label: this.$t("weather_reason"),
        },
        {
          value: 1,
          label: this.$t("Inspection_alarm"),
        },
        {
          value: 2,
          label: this.$t("Test_alarm"),
        },
        {
          value: 3,
          label: this.$t("Real_alarm"),
        },
        {
          value: 4,
          label: this.$t("Equipment_failure"),
        },
        {
          value: 5,
          label: this.$t("False_positive"),
        },
      ],
      policeTypeList: [
        {
          value: 0,
          label: this.$t("Security_team"),
        },
        {
          value: 1,
          label: this.$t("Police_team"),
        },
        {
          value: 2,
          label: this.$t("Test_alarm"),
        },
        {
          value: 3,
          label: this.$t("Police_station"),
        },
      ],
      PoliceRecordData: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.main_fragment_policeorder {
  .left-nav {
    border-right: 1px solid #ccc;
    height: 100%;
    text-align: left;
    font-size: 14px;
  }
  .right-nav {
    // margin-top: 3px;
  }
}
</style>