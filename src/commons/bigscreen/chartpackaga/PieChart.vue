<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div id="pieChart"></div>
  </div>
</template>
<script>
export default {
  name: "pieChart",
  data() {
    return {
      title: "报警类型分布",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.chartInit();
    },
    chartInit() {
      let myChart = this.$echarts.init(document.getElementById("pieChart"));
      let options = {
        title: {
          //   text: '饼图程序调用高亮示例',
          x: "center",
          textStyle: {
            color: "#ffffff",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 20,
          data: [
            "防拆报警",
            "开关门",
            "劫持报警",
            "紧急报警",
            "防区报警",
            "其他",
          ],
          textStyle: {
            color: "#ffffff",
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["35%", "70%"],
            center: ["50%", "60%"],
            label: {
              normal: {
                show: false,
                position: "center",
              },
              formatter: "{c|{c}} {b|万条} \n {a|累计接入数}",
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "18",
                  fontWeight: "bold",
                },
              },
            },
            data: [
              { value: 335, name: "防拆报警" },
              { value: 310, name: "开关门" },
              { value: 234, name: "劫持报警" },
              { value: 435, name: "紧急报警" },
              { value: 548, name: "防区报警" },
              { value: 330, name: "其他" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(options);
      this.autoActive(myChart, options);
    },
    autoActive(chart, option) {
      this.intervalFun(chart, option);
      // let that = this
      // document.getElementById('pieChart').on('mouseover',function(){
      //   clearInterval(that.interval)
      //   let dataLen = option.series[0].data.length
      //   for(let i = 0; i < dataLen; i++){
      //     chart.dispatchAction({
      //       type: 'downplay',
      //       seriesIndex: 0,
      //       i
      //     })
      //   }
      // })
      // chart.on('mouseout',function(){
      //   that.intervalFun(chart, option)
      // })
    },
    intervalFun(chart, option) {
      let dataIndex = -1;
      let dataLen = option.series[0].data.length;
      this.interval = setInterval(() => {
        chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex,
        });
        dataIndex = (dataIndex + 1) % dataLen;
        chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex,
        });
        // 显示 tooltip
        // chart.dispatchAction({
        //   type: 'showTip',
        //   seriesIndex: 0,
        //   dataIndex
        // })
      }, 1500);
    },
  },
};
</script>
<style lang="scss" scoped>
#pieChart {
  width: 100%;
  height: 360px;
}
</style>

