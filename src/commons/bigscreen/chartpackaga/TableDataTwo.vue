<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div class="main_table t_btn8">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>类型</th>
            <th>警情</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020-11-12 12:12:12</td>
            <td>系统:0</td>
            <td>交流电故障</td>
          </tr>
          <tr>
            <td>2020-11-12 12:12:12</td>
            <td>用户:1</td>
            <td>定时撤防</td>
          </tr>
          <tr>
            <td>2020-11-12 12:12:12</td>
            <td>防区:1</td>
            <td>电池低电恢复</td>
          </tr>
          <tr>
            <td>2020-11-12 12:12:12</td>
            <td>用户:0</td>
            <td>挟持报警</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "最新推送警情",
    };
  },
};
</script>

<style lang="scss" scoped>
.main_table {
  height: 230px;
  width: 100%;
  tr {
    height: 38px;
  }
  table {
    width: 100%;
    overflow: hidden;
  }
  thead tr {
    height: 38px;
  }
  th {
    font-size: 12px;
    font-weight: 600;
    color: #61d2f7;
    text-align: center;
  }
  td {
    color: #fff;
    font-size: 10px;
    text-align: center;
  }
  tbody tr:nth-child(1),
  tbody tr:nth-child(3),
  tbody tr:nth-child(5) {
    background-color: #072951;
    box-shadow: -10px 0px 15px #2c58a6 inset,
      /*左边阴影*/ 10px 0px 15px #2c58a6 inset; /*右边阴影*/
  }
}
.t_btn8 {
  position: relative;
  z-index: 100;
  cursor: pointer;
}
</style>