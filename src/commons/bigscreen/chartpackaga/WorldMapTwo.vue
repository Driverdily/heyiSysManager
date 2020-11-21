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

    chartInit() {
      let myChart = this.$echarts.init(
        document.getElementById("worldMapChart")
      );


      let data = uploadedDataURL;

      function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
      }
      var routes = data.routes.map(function (airline) {
        return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
      });

      myChart.setOption({
        geo3D: {
          map: "world",
          shading: "realistic",
          silent: true,
          // environment: "#ffffffff",
          realisticMaterial: {
            roughness: 0.8,
            metalness: 0,
          },
          postEffect: {
            enable: true,
          },
          groundPlane: {
            show: false,
          },
          light: {
            main: {
              intensity: 1,
              alpha: 30,
            },
            ambient: {
              intensity: 0,
            },
          },
          viewControl: {
            distance: 70,
            alpha: 89,
            panMouseButton: "left",
            rotateMouseButton: "right",
          },

          itemStyle: {
            areaColor: "#000",
          },

          regionHeight: 0.5,
        },
        series: [
          {
            type: "lines3D",
            coordinateSystem: "geo3D",
            effect: {
              show: true,
              trailWidth: 1,
              trailOpacity: 0.4,
              trailLength: 0.2,
              constantSpeed: 3,
            },
            blendMode: "lighter",
            lineStyle: {
              width: 0.2,
              opacity: 0.05,
            },
            data: routes,
          },
        ],
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