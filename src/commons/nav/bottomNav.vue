<template>
  <div class="main_bottom_record">
    <el-table
      :data="pushData"
      stripe
      style="width: 100%; overflow: scroll; height: 100%"
      size="mini"
      :cell-style="{ padding: '0' }"
      border
      v-show="ischangeFolder"
    >
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
        prop="alarm_code"
        :label="$t('alarm_code')"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      ischangeFolder: true,
      pushData: [
        {
          report_time: "2020-10-10",
          alarm_time: "2020-11-11",
          group_name: "第一组",
          dev_name: "设备一",
          dev_number: "00070012",
          alarm_code: "1231231231",
          alarm_content: "撤防",
          partition_number: "21312",
          zone_number: "1",
          zone_information: "开门",
          alarm_sort: "主机",
          link_person: "张三",
          link_phone: "12312312312",
          link_address: "地球1",
        },
      ],
    };
  },

  methods: {
    showchangeFolder() {
      this.ischangeFolder = !this.ischangeFolder;
      console.log("点击事件", this.ischangeFolder);
    },
  },
};
</script>

<style scoped>
.main_bottom_record{
border-top: 1px solid #ccc;
}

.bottom-menu {
  background: #f0f8ff;
  text-align: left;
  padding: 5px 5px;
  font-size: 15px;
}
.bottom-menu .bottom-button {
  float: right;
  padding: 4px 18px;
  top: 5px;
}
</style>
