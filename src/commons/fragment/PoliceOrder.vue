<template>
  <div class="main_fragment_policeorder">
    <el-row style="height: 100%; width: 100%">
      <el-col :span="4" class="left-nav p-10">
        <span>值班人员</span> <br /><br />
        <el-input size="mini"></el-input> <br /><br />
        <span>处警人员</span> <br /><br />
        <el-input size="mini"></el-input> <br /><br />
        <span>警情分类</span> <br /><br />
        <el-input size="mini"></el-input> <br /><br />
        <span>出警方式</span> <br /><br />
        <el-input size="mini"></el-input> <br /><br />
        <el-date-picker
          v-model="startTime"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00"
        >
        </el-date-picker>

        <el-date-picker
          v-model="endTime"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00"
        >
        </el-date-picker>

        <br /><br />
        <el-button type="infor" style="padding: 7px 25px" size="mini"
          >撤防</el-button
        >
      </el-col>

      <el-col :span="20">
        <el-table
          :data="alarmRecordData"
          stripe
          style="width: 100%; overflow: scroll; height: 90%"
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
    };
  },
};
</script>

<style scoped>
.main_fragment_policeorder .left-nav {
  border-right: 1px solid gray;
  height: 99%;
}
</style>