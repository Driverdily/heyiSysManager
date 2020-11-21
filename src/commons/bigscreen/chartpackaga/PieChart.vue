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
      let myChart = this.$echarts.init(document.getElementById("pieChart"),"light");
      let options = {
        title: {
          //   text: '饼图程序调用高亮示例',
          x: "center",
          textStyle: {
            color: "#fff",
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
        label: {
          normal: {
            show: true,
            formatter: "{b} \n{d}%",
          },
        },
        calculable: true,
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["25%", 95],
            center: ["65%", "37%"],
            roseType: "radius",
            label: {
              normal: {
                show: false,
                position: "center",
              },
              formatter: "{c|{c}} {b|万条} \n {a|累计接入数}",
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "normal",
                },
              },
            },
            data: [
              { value: 135, name: "防拆报警" },
              { value: 310, name: "开关门" },
              { value: 134, name: "劫持报警" },
              { value: 335, name: "紧急报警" },
              { value: 148, name: "防区报警" },
              { value: 230, name: "其他" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 4,
                shadowOffsetX: 1,
                shadowColor: "rgba(255, 255, 255, 0.6)",
              },
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    "#0658fe",
                    "#3FFFEA",
                    "#FE701A",
                    "#fe2b1b",
                    "#00E435",
                    "#FAED00",
                  ];
                  return colorList[params.dataIndex];
                },
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
  width: 99%;
  height: 235px;
}
</style>

