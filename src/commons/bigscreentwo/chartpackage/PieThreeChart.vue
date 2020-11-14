<template>
  <div>
    <div id="pieThreeChart"></div>
  </div>
</template>
<script>
export default {
  name: "pieThreeChart",
  data() {
    return {
      title: "设备状态图",
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
      let myChart = this.$echarts.init(
        document.getElementById("pieThreeChart")
      );
      let options = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} 台",
        },
        legend: {
          x: "center",
          y: "15%",
          data: ["正常", "离线", "故障", "报警"],
          icon: "circle",
          textStyle: {
            color: "#ffffff",
          },
        },
        calculable: true,
        series: [
          {
            name: "",
            type: "pie",
            //起始角度，支持范围[0, 360]
            startAngle: 0,
            //饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: [41, 100.75],
            //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
            center: ["50%", "40%"],
            //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
            // 'radius' 面积展现数据的百分比，半径展现数据的大小。
            //  'area' 所有扇区面积相同，仅通过半径展现数据大小
            roseType: "area",
            //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                formatter: "{c}台",
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              {
                value: 43000,
                name: "正常",
                itemStyle: {
                  normal: {
                    color: "#44aff0",
                  },
                },
              },
              {
                value: 312,
                name: "离线",
                itemStyle: {
                  normal: {
                    color: "#F3D8F6",
                  },
                },
              },

              {
                value: 2300,
                name: "报警",
                itemStyle: {
                  normal: {
                    color: "#ff4343",
                  },
                },
              },

              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
              {
                value: 0,
                name: "",
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            ],
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
#pieThreeChart {
  height: 200px;
  padding: 0 20px;
}
</style>

