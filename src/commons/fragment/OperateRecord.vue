<template>
  <div class="main_fragment_operaterecord">
    <el-row style="height: 100%; width: 100%">
      <el-col :span="4" class="left-nav p-10">
        <span>{{ $t("account") }}</span> <br /><br />
        <el-input size="mini"></el-input> <br /><br />

        <el-date-picker
          v-model="startTime"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00"
        >
        </el-date-picker>
        <br/>

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
          :data="operateRecordData"
          stripe
          style="width: 100%; overflow: scroll; height: 90%"
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
</script>

<style scoped>
.main_fragment_operaterecord .left-nav {
  border-right: 1px solid gray;
  height: 99%;
}
</style>