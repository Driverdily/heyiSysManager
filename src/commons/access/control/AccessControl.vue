<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-table
          ref="singleTable"
          :data="ControlList"
          style="width: 100%; overflow-y: scroll; max-height: 580px"
          size="mini"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column width="40px">
            <template slot-scope>
              <img
                src="../../../assets/img/access/control_old.png"
                alt=""
                class="table-img"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="value"
            :label="$t('serial_no')"
            width="60px"
          ></el-table-column>
          <el-table-column prop="label" :label="$t('name')"></el-table-column>

          <el-table-column
            property="Switch"
            :label="$t('enrolling')"
            width="60px"
          >
            <template slot-scope="scope">
              <img
                v-show="scope.row.Switch"
                src="../../../assets/img/access/checkmark_66.png"
                class="table-img"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <el-col :span="16">
        <div style="height: 100%; text-align: center; margin-top: 300px">
          <el-button
            type="infor"
            style="padding: 10px 95px; margin-top: 10px"
            size="mini"
            >{{ $t("enrolling") }}</el-button
          >
          <br />
          <el-button
            type="infor"
            style="padding: 10px 80px; margin-top: 10px"
            size="mini"
            >{{ $t("re_code") }}</el-button
          >
          <br />
          <el-button
            type="infor"
            style="padding: 10px 80px; margin-top: 10px"
            size="mini"
            >{{ $t("delete_code") }}</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ControlList: [
        {
          value: "1",
          label: "遥控器1",
          Switch: false,
        },
        {
          value: "2",
          label: "遥控器2",
          Switch: true,
        },
        {
          value: "3",
          label: "遥控器3",
          Switch: false,
        },
        {
          value: "4",
          label: "遥控器4",
          Switch: true,
        },
        {
          value: "5",
          label: "遥控器5",
          Switch: false,
        },
        {
          value: "6",
          label: "遥控器6",
          Switch: true,
        },
        {
          value: "7",
          label: "遥控器7",
          Switch: false,
        },
        {
          value: "8",
          label: "遥控器8",
          Switch: true,
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
