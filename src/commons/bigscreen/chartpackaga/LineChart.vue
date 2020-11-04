<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div id="lineChart"></div>
  </div>
</template>
<script>
export default {
  name: "lineChart",
  data() {
    return {
      title: "设备在线走势图",
    };
  },
  mounted() {
    this.drawLineChart();
  },
  methods: {
    drawLineChart() {
      let myChart = this.$echarts.init(document.getElementById("lineChart"));
      //绘制图表
      myChart.setOption({
        label: {
          normal: {
            show: true,
            textStyle: { color: "#d27d39", fontSize: "18" },
            position: "top",
          },
        },
        tooltip: {
          tirgger: "axis",
          axisPointer: {
            type: "aross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          left: 30,
          right: 30,
          top: 20,
          bottom: 40,
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            lineStyle: {
              color: "#42b6f6",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#42b6f6",
            },
          },
        },
        series: [
          {
            data: [820, 932, 911, 1212, 1320, 1500, 1230],
            type: "line",
            symbolSize: 5, //折线点的大小
            areaStyle: { normal: {} },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#3794b1",
                  },
                  {
                    offset: 1,
                    color: "#86b0bd",
                  },
                ]),
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "#777",
                },
              },
              emphasis: {
                color: "#4fd6d2",
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  type: "dotted",
                  color: "#4fd6d2", //折线的颜色
                },
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
#lineChart {
  width: 95%;
  height: 200px;
  padding: 0 20px;
}

</style>
