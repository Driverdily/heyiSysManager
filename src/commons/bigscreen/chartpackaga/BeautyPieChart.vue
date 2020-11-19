<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div id="beautyPieChart"></div>
  </div>
</template>
<script>
export default {
  name: "beautyPieChart",
  data() {
    return {
      title: "设备类型比例图",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var scaleData = [
        {
          name: "SGW01-SD",
          value: 20,
        },
        {
          name: "W7-SDF",
          value: 15,
        },
        {
          name: "518D-4321",
          value: 8,
        },
        {
          name: "W20-1203",
          value: 12,
        },
        {
          name: "AC01-231",
          value: 15,
        },
        {
          name: "其他设备",
          value: 10,
        },
      ];
      var rich = {
        white: {
          color: "#ddd",
          align: "center",
          padding: [3, 0],
        },
      };
      var placeHolderStyle = {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
        },
      };
      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000",
      ];
      for (var i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 2,
                // shadowBlur: 150,
                borderColor: color[i],
                // shadowColor: color[i],
              },
            },
          },
          {
            value: 2,
            name: "",
            itemStyle: placeHolderStyle,
          }
        );
      }
      this.seriesObj = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [60, 80],
          center: ["50%", "45%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#fff",
                formatter: function (params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return params.name + "\n{white|" + "占比" + percent + "%}";
                  } else {
                    return "";
                  }
                },
                rich: rich,
              },
              labelLine: {
                length: 20,
                length2: 35,
                show: true,
                color: "#00ffff",
              },
            },
          },
          data: data,
        },
      ];
      this.chartInit();
    },
    chartInit() {
      let myChart = this.$echarts.init(
        document.getElementById("beautyPieChart"),
        "light"
      );
      let options = {
        // backgroundColor: "#04243E",
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
        },
        toolbox: {
          show: false,
        },
        series: this.seriesObj,
      };
      myChart.setOption(options);
    },
  },
};
</script>
<style lang="scss" scoped>
#beautyPieChart {
  width: 100%;
  height: 240px;
}
</style>
