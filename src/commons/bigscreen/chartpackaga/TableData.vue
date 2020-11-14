<template>
  <div>
    <el-header>{{ title }}</el-header>
    <el-table
      :data="tableList"
      customClass="big-table-dialog"
      size="mini"
      id="tablechart"
      :row-style="tableRowStyle"
      :header-cell-style="tableHeaderColor"
    >
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="设备"></el-table-column>
      <el-table-column prop="type" label="防区"></el-table-column>
      <el-table-column prop="address" label="警情"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "最新警报信息",
      tableList: [
        {
          date: "2016-05-02",
          name: "W20-3213",
          type: "User:0",
          address: "AC Loss",
        },
        {
          date: "2016-05-04",
          name: "SGW01-SD",
          type: "User:1",
          address: "开门警报",
        },
        {
          date: "2016-05-01",
          name: "W7-SS",
          type: "Zone:02",
          address: "布撤防",
        },
        {
          date: "2016-05-03",
          name: "W5-123",
          type: "User:0",
          address: "火警",
        },
      ],
    };
  },
  methods: {
    //设置表格行的样式
    tableRowStyle({ row, rowIndex }) {
      return "background-color:transparent;font-size:12px;color:#ffffff";
    },
    //设置表头行的样式
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {

      return "background-color:#4f1d344d;font-wight:500;font-size:15px;";
    
    },
  },
};
</script>

<style lang="scss" scoped>
#tablechart {
  width: 100%;
  background: transparent;

}
</style>