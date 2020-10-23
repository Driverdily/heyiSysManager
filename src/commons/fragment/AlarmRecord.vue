<template>
  <div class="main_fragment_alarmrecord">
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
            prop="report_time"
            :label="$t('report_time')"
          ></el-table-column>
          <el-table-column
            prop="alarm_time"
            :label="$t('alarm_time')"
          ></el-table-column>
          <el-table-column
            prop="group_name"
            :label="$t('group_name')"
          ></el-table-column>
          <el-table-column
            prop="dev_number"
            :label="$t('dev_number')"
          ></el-table-column>
          <el-table-column
            prop="dev_name"
            :label="$t('dev_name')"
          ></el-table-column>

          <el-table-column
            prop="alarm_content"
            :label="$t('alarm_content')"
          ></el-table-column>
          <el-table-column
            prop="partition_number"
            :label="$t('partition_number')"
          ></el-table-column>
          <el-table-column
            prop="zone_number"
            :label="$t('zone_number')"
          ></el-table-column>
          <el-table-column
            prop="zone_information"
            :label="$t('zone_information')"
          ></el-table-column>

          <el-table-column
            prop="alarm_sort"
            :label="$t('alarm_sort')"
          ></el-table-column>
          <el-table-column
            prop="alarm_source"
            :label="$t('alarm_source')"
          ></el-table-column>

          <el-table-column
            prop="deal_status"
            :label="$t('deal_status')"
          ></el-table-column>

          <el-table-column
            prop="deal_time"
            :label="$t('deal_time')"
          ></el-table-column>

          <el-table-column
            prop="deal_ps"
            :label="$t('deal_ps')"
          ></el-table-column>

          <el-table-column
            prop="operate_person"
            :label="$t('operate_person')"
          ></el-table-column>

          <el-table-column
            prop="link_person"
            :label="$t('link_person')"
          ></el-table-column>
          <el-table-column
            prop="link_phone"
            :label="$t('link_phone')"
          ></el-table-column>
          <el-table-column
            prop="link_address"
            :label="$t('link_address')"
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
.main_fragment_alarmrecord .left-nav {
  border-right: 1px solid gray;
  height: 99%;
}
</style>