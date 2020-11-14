<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div id="worldMapChart"></div>
  </div>
</template>

<script>
import "echarts/map/js/world.js";
var uploadedDataURL = require("../../../tools/flights.json");

export default {
  name: "chinaMapChart",
  data() {
    return {
      title: "设备分布图",
      mapData: {},
      series: [],
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.chartInit();
    },

    chartInit(){
      let myChart = this.$echarts.init(
        document.getElementById("worldMapChart")
      );
      let symbolImg = require("../../../assets/img/earth_color.jpg"); //或者import引入在拼接也行
      let imggray = require("../../../assets/img/earth_gray.jpg");

      let data=uploadedDataURL;

      function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
      };
      var routes = data.routes.map(function (airline) {
        return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
      });

      myChart.setOption({
        // geo: {
        //   map: "world",
        //   roam: true,
        //   label: {
        //     emphasis: {
        //       show: false,
        //     },
        //   },
        //   silent: true,
        //   itemStyle: {
        //     normal: {
        //       areaColor: "#323c48",
        //       borderColor: "#111",
        //     },
        //     emphasis: {
        //       areaColor: "#2a333d",
        //     },
        //   },
        // },
        // geo3D: {
        //   map: "world",
        //   shading: "realistic",
        //   silent: true,
        //   environment: "#333",
        //   realisticMaterial: {
        //     roughness: 0.8,
        //     metalness: 0,
        //   },
        //   postEffect: {
        //     enable: true,
        //   },
        //   groundPlane: {
        //     show: false,
        //   },
        //   light: {
        //     main: {
        //       intensity: 1,
        //       alpha: 30,
        //     },
        //     ambient: {
        //       intensity: 0,
        //     },
        //   },
        //   viewControl: {
        //     distance: 70,
        //     alpha: 89,

        //     panMouseButton: "left",
        //     rotateMouseButton: "right",
        //   },

        //   itemStyle: {
        //     areaColor: "#000",
        //   },

        //   regionHeight: 0.5,
        // },
        // backgroundColor: "#000",

        globe: {
          baseTexture: symbolImg,
          heightTexture: imggray,

          shading: "lambert",

          light: {
            ambient: {
              intensity: 0.4,
            },
            main: {
              intensity: 0.4,
            },
          },

          viewControl: {
            autoRotate: false,
          },
        },
        series: {
          type: "lines3D",
          coordinateSystem: "globe",
          blendMode: "lighter",
          lineStyle: {
            width: 1,
            color: "rgb(50, 50, 150)",
            opacity: 0.1,
          },
          data: routes
        },
      });
    },
  },
};
</script>

<style scoped>
#worldMapChart {
  width: 100%;
  height: 500px;
}

</style>