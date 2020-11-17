<template>
  <div class="main_fragment_operaterecord">
    <el-row style="height: 100%; width: 100%">
      <el-col :span="3" class="left-nav p-20">
        <span class="m-t-10">{{ $t("account") }}</span>
        <el-input class="m-t-5 w-90" size="mini"></el-input> <br /><br />

        <el-date-picker
          v-model="startTime"
          type="datetime"
          :placeholder="$t('select_time')"
          default-time="12:00:00"
          size="mini"
          class="m-t-10 w-90"
        >
        </el-date-picker>
        <br />

        <el-date-picker
          v-model="endTime"
          type="datetime"
          :placeholder="$t('select_time')"
          default-time="12:00:00"
          size="mini"
          class="m-t-5 w-90"
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
          :data="OperateRecordData"
          stripe
          style="width: 100%; overflow-y: scroll; height: 95%"
          size="mini"
          border
        >
          <el-table-column prop="serial"></el-table-column>

          <el-table-column
            prop="serial_number"
            :label="$t('serial_number')"
          ></el-table-column>

          <el-table-column
            prop="operate_time"
            :label="$t('operate_time')"
          ></el-table-column>

          <el-table-column
            prop="operate_type"
            :label="$t('operate_type')"
          ></el-table-column>

          <el-table-column
            prop="operate_content"
            :label="$t('operate_content')"
          ></el-table-column>

          <el-table-column
            prop="old_content"
            :label="$t('old_content')"
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
            prop="operate_person"
            :label="$t('operate_person')"
          ></el-table-column>

          <el-table-column
            prop="client_type"
            :label="$t('client_type')"
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
      OperateRecordData: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.main_fragment_operaterecord {
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