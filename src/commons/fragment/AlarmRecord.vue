<template>
  <div class="main_fragment_alarmrecord">
    <el-row style="height: 100%; width: 100%">
      <el-col :span="3" class="left-nav p-20">
        <div class="m-t-10">{{ $t("dev_number") }}</div>
        <el-input class="m-t-5 w-90" size="mini"></el-input> <br />
        <div class="m-t-10">{{ $t("dev_name") }}</div>
        <el-input class="m-t-5 w-90" size="mini"></el-input> <br />

        <div class="m-t-10">{{ $t("alarm_content") }}</div>
        <el-select
          v-model="alarm_content_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
          class="m-t-5"
        >
          <el-option
            v-for="item in options"
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
          size="mini"
          style="width: 90%"
          class="m-t-20"
        >
        </el-date-picker>

        <el-date-picker
          v-model="endTime"
          type="datetime"
          :placeholder="$t('select_time')"
          default-time="12:00:00"
          size="mini"
          style="width: 90%"
          class="m-t-5"
        >
        </el-date-picker>

        <br /><br />

        <el-button
          type="infor"
          size="mini"
          icon="el-icon-check"
          style="width: 90%"
        ></el-button>
      </el-col>

      <el-col :span="21" class="right-nav">
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
      alarm_content_value: "",
      options: [
        {
          value: 0,
          label: this.$t("all_day"),
        },
        {
          value: 1,
          label: this.$t("once_day"),
        },
        {
          value: 2,
          label: this.$t("customize"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.main_fragment_alarmrecord .left-nav {
  border-right: 1px solid #ccc;
  height: 99%;
  text-align: left;
}
.main_fragment_alarmrecord .right-nav{
  margin-top: 3px;
}

</style>