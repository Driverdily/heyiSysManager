<template>
  <div>
    <div id="linesChart"></div>
  </div>
</template>
<script>
export default {
  name: "linesChart",
  data() {
    return {
      title: "",
      xRows: [],
      allData: [],
      lineTitle: [],
      colorArr: ["#daf92d", "#fe8ee1", "#bda5fc", "#912234", "#a9fefe"],
      responseData: {
        code: 0,
        data: {
          title: "趋势图",
          x: ["5-13", "5-14", "5-15", "5-16", "5-17"],
          list: [
            {
              name: "用户",
              data: [700, 1200, 800, 700, 600, 800],
              smooth: false,
              lintType: "solid",
            },
            {
              name: "设备",
              data: [1200, 550, 740, 350, 350, 550],
              smooth: false,
              lintType: "solid",
            },
            {
              name: "日活",
              data: [180, 650, 310, 610, 120, 320],
              smooth: false,
              lintType: "solid",
            },
          ],
        },
      },
    };
  },
  // mounted() {
  //   this.getData();
  // },

  created() {
    this.$nextTick(() => {
      this.getData();
    });
  },
  methods: {
    getData() {
      this.title = this.responseData.data.title;
      this.xRows = this.responseData.data.x;
      for (let i = 0; i < this.responseData.data.list.length; i++) {
        this.lineTitle.push(this.responseData.data.list[i].name);
        let singleData = {
          name: this.responseData.data.list[i].name,
          type: "line",
          data: this.responseData.data.list[i].data,
          smooth: this.responseData.data.list[i].smooth,
          lineStyle: {
            color: this.colorArr[i],
          },
          itemStyle: {
            normal: {
              lineStyle: {
                color: this.colorArr[i],
                width: 2,
                type: this.responseData.data.list[i].lintType, //'dotted'虚线 'solid'实线
              },
            },
          },
        };
        this.allData.push(singleData);
      }
      this.linesInit();
    },
    linesInit() {
      let myChart = this.$echarts.init(
        document.getElementById("linesChart"),
        "light"
      );
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.title,
          textStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
          },
          top: 20,
        },
        // 鼠标划上提示工具
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var htmlStr = '<div style="text-align:center">';
            var valMap = {};
            for (var i = 0; i < params.length; i++) {
              var param = params[i];
              var xName = param.name; //x轴的名称
              var seriesName = param.seriesName; //图例名称
              var value = param.value; //y轴值
              var color = param.color; //图例颜色
              //过滤无效值
              if (value == "-") {
                continue;
              }
              //过滤重叠值
              if (valMap[seriesName] == value) {
                continue;
              }
              if (i === 0) {
                htmlStr += xName + "<br/>"; //x轴的名称
              }
              htmlStr += "<div>";
              //为了保证和原来的效果一样，这里自己实现了一个点的效果
              htmlStr +=
                '<span style="margin-right:10px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
                color +
                ';"></span>';
              //圆点后面显示的文本
              htmlStr += seriesName + ":" + value;
              htmlStr += "</div>";
              valMap[seriesName] = value;
            }
            htmlStr += "</div>";
            return htmlStr;
          },
        },
        legend: {
          data: this.lineTitle,
          textStyle: {
            color: "#04fc9a",
          },
          right: 0,
          top: 25,
        },
        grid: {
          left: "3%",
          right: "6%",
          bottom: "3%",
          containLabel: true,
        },
        // 工具盒（保存为图片）
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xRows,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00ce7d",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00ce7d",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00ce7d",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00ce7d",
            },
          },
        },
        series: this.allData,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#linesChart {
  width: 95%;
  height: 240px;
  padding: 0 20px;
}
</style>
