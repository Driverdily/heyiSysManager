<template>
  <div class="data-show-container clearfix">
    <div class="left-container">
      <line-chart class="chartComponent lineChart"></line-chart>
    </div>

    <div class="middle-container"></div>
    <div class="right-container"></div>
  </div>
</template>

<script>
import LineChart from "./chartpackaga/LineChart";

export default {
  name: "dataIndex",
  components: {
    LineChart,
  },
};
</script>
<style lang="scss" scoped>
.data-show-container {
  .chartComponent {
    margin: 20px;
    background: #1d344d;
    border: 1px transparent solid;
    border-image: linear-gradient(
        to right,
        red 0%,
        blue 30%,
        yellow 60%,
        green 90%
      )
      5;
    border-radius: 5px;
    .el-header{
        text-align: left;
    }
  }
  .left-container {
    float: left;
    width: 500px;
    .lineChart{
        color: #ffffff;
    }
  }
  .middle-container {
    float: left;
    width: calc(100vw-1020px);
  }
  .right-container {
    float: left;
    width: 500px;
  }
}
.clearfix ::after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
</style>