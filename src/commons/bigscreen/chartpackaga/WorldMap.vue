<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div id="worldMapChart"></div>
  </div>
</template>

<script>
import "echarts/map/js/world.js";
var uploadedDataURL = require("../../../tools/flights.json");

import * as THREE from "three";

export default {
  name: "chinaMapChart",
  data() {
    return {
      title: "设备分布图",
      // mapData: {},
      // series: [],
    };
  },
  mounted() {
    this.chartInit();
  },

  methods: {
    chartInit() {
      let myChart = this.$echarts.init(
        document.getElementById("worldMapChart")
      );

      var loader = new THREE.TextureLoader();
      loader.setCrossOrigin("Anonymous");

      var symbolImg =loader.require("../../../assets/img/earth_color.jpg");
      var imggray =loader.require("../../../assets/img/device/earth_gray.jpg");

      let data = uploadedDataURL;

      function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
      }

      var routes = data.routes.map(function (airline) {
        return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
      });

      myChart.setOption({
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
            color: "rgb(70, 80, 150)",
            opacity: 0.1,
          },
          effect: {
            show: true,
            trailWidth: 1,
            trailLength: 0.15,
            trailOpacity: 1,
            trailColor: "rgb(130, 30, 60)",
            period: 14,
          },
          data: routes,
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