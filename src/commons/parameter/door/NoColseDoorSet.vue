<template>
  <div>
    <!-- 列表 -->
    <el-row>
      <el-col :span="24">
        <el-table
          ref="singleTable"
          :data="CloseDoorDate"
          stripe
          style="width: 100%"
          size="mini"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column prop="date" :label="$t('time')"></el-table-column>
          <el-table-column
            prop="repeat"
            :label="$t('repeat')"
          ></el-table-column>
          <el-table-column prop="cycle" :label="$t('cycle')"></el-table-column>
          <el-table-column
            prop="enable"
            :label="$t('enable')"
          ></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 设置 -->
    <div class="layout-bottom">
      <!-- 使用情况 -->
      <el-row class="dev-set-list-item">
        <el-col :span="3" style="align-items: center">
          <img
            src="../../../assets/img/seticon/timeclock.png"
            class="dev-set-list-img"
          />
        </el-col>

        <el-col :span="15">
          <span>{{ $t("to_enable") }}</span>
        </el-col>
        <el-col :span="6" class="align-right">
          <el-radio v-model="radio" label="1">开</el-radio>
          <el-radio v-model="radio" label="2">关</el-radio>
        </el-col>
      </el-row>
      <!-- 时间 -->
      <el-row class="dev-set-list-item">
        <el-col :span="3" style="align-items: center">
          <img
            src="../../../assets/img/clock1_66_gray.png"
            class="dev-set-list-img"
          />
        </el-col>

        <el-col :span="15">
          <span>{{ $t("time") }}</span>
        </el-col>
        <el-col :span="6" class="align-right">
          <el-date-picker
            v-model="value3"
            type="datetime"
            :placeholder="$t('select_time')"
            size="mini"
            style="width: 90%"
            default-time="12:00:00"
          >
          </el-date-picker>
        </el-col>
      </el-row>

      <!-- 重复 -->
      <el-row class="dev-set-list-item">
        <el-col :span="3" style="align-items: center">
          <img
            src="../../../assets/img/seticon/repeat_66_blue.png"
            class="dev-set-list-img"
          />
        </el-col>

        <el-col :span="15">
          <span>{{ $t("repeat") }}</span>
        </el-col>
        <el-col :span="6" class="align-right">
          <el-select
            v-model="close_repeat_value"
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
      <!-- 星期 -->
      <el-row class="dev-set-list-item">
        <el-col
          keep-alive
          :span="24"
          v-show="this.close_repeat_value == 2"
          style="text-align: center"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="item in weeks" :label="item" :key="item">{{
              item.label
            }}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <!-- 确认 -->
      <el-row class="dev-set-list-item">
        <el-col :span="24">
          <el-button
            type="infor"
            size="mini"
            style="width: 22%; float: right; margin-right: 15px"
            >{{ $t("change") }}</el-button
          >
          <el-button
            type="infor"
            size="mini"
            style="width: 22%; float: right; margin-right: 15px"
            >{{ $t("delete") }}</el-button
          >
          <el-button
            type="infor"
            size="mini"
            style="width: 22%; float: right"
            >{{ $t("enter") }}</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CloseDoorDate: [
        {
          date: "2020-10-10 12:22",
          repeat: "每天",
          cycle: "周期",
          enable: "启用",
        },
        {
          date: "2020-10-10 12:22",
          repeat: "每天",
          cycle: "周期",
          enable: "启用",
        },
        {
          date: "2020-10-10 12:22",
          repeat: "每天",
          cycle: "周期",
          enable: "启用",
        },
        {
          date: "2020-10-10 12:22",
          repeat: "每天",
          cycle: "周期",
          enable: "启用",
        },
      ],
      value3: "",
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
      close_repeat_value: "",
      weeks: [
        {
          value: "1",
          label: this.$t("Monday"),
        },
        {
          value: "2",
          label: this.$t("Tuesday"),
        },
        {
          value: "3",
          label: this.$t("Wednesday"),
        },
        {
          value: "4",
          label: this.$t("Thursday"),
        },
        {
          value: "5",
          label: this.$t("Friday"),
        },
        {
          value: "6",
          label: this.$t("Saturday"),
        },
        {
          value: "7",
          label: this.$t("Sunday"),
        },
      ],
      checkList: [],
    };
  },
};
</script>

<style>
</style>
