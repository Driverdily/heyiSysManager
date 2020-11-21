<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div id="worldMapChartThree"></div>
  </div>
</template>

<script>
import "echarts/map/js/world.js";
var uploadedDataURL = require("../../../tools/flights.json");

export default {
  name: "worldMapChartThree",
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
        document.getElementById("worldMapChartThree")
      );
      var symbolImg = require("../../../assets/img/earth_color.jpg");
      var imggray = require("../../../assets/img/device/earth_gray.jpg");
      var environments = require("../../../assets/img/device/starfield.jpg");

      let data = uploadedDataURL;

      var airports = data.airports.map(function (item) {
        return {
          coord: [item[3], item[4]],
        };
      });
      function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
      }

      var routesGroupByAirline = {};
      data.routes.forEach(function (route) {
        var airline = data.airlines[route[0]];
        var airlineName = airline[0];
        if (!routesGroupByAirline[airlineName]) {
          routesGroupByAirline[airlineName] = [];
        }
        routesGroupByAirline[airlineName].push(route);
      });

      var pointsData = [];
      data.routes.forEach(function (airline) {
        pointsData.push(getAirportCoord(airline[1]));
        pointsData.push(getAirportCoord(airline[2]));
      });
      var series = data.airlines
        .map(function (airline) {
          var airlineName = airline[0];
          var routes = routesGroupByAirline[airlineName];

          if (!routes) {
            return null;
          }
          return {
            type: "lines3D",
            name: airlineName,

            effect: {
              show: true,
              trailWidth: 2,
              trailLength: 0.15,
              trailOpacity: 1,
              trailColor: "rgb(30, 30, 60)",
            },

            lineStyle: {
              width: 1,
              color: "rgb(50, 50, 150)",
              // color: 'rgb(118, 233, 241)',
              opacity: 0.1,
            },
            blendMode: "lighter",

            data: routes.map(function (item) {
              return [airports[item[1]].coord, airports[item[2]].coord];
            }),
          };
        })
        .filter(function (series) {
          return !!series;
        });
      series.push({
        type: "scatter3D",
        coordinateSystem: "globe",
        blendMode: "lighter",
        symbolSize: 2,
        itemStyle: {
          color: "rgb(50, 50, 150)",
          opacity: 0.2,
        },
        data: pointsData,
      });

      myChart.setOption({
        legend: {
          selectedMode: "single",
          left: "left",
          data: Object.keys(routesGroupByAirline),
          orient: "vertical",
          textStyle: {
            color: "#fff",
          },
        },
        globe: {
          environment: environments,
        //   baseTexture: symbolImg,
          heightTexture: imggray,

          displacementScale: 0.1,
          displacementQuality: "high",

          baseColor: "#000",

          shading: "realistic",
          realisticMaterial: {
            roughness: 0.2,
            metalness: 0,
          },

          postEffect: {
            enable: true,
            depthOfField: {
              enable: false,
              focalDistance: 150,
            },
          },
          temporalSuperSampling: {
            enable: true,
          },
          light: {
            ambient: {
              intensity: 0,
            },
            main: {
              intensity: 0.1,
              shadow: false,
            },
            ambientCubemap: {
              texture: "../../../assets/lake.hdr",
              exposure: 1,
              diffuseIntensity: 0.5,
              specularIntensity: 2,
            },
          },
          viewControl: {
            autoRotate: false,
          },
          silent: true,
        },
        series: series,
      });
    },
  },
};
</script>

<style scoped>
#worldMapChartThree {
  width: 100%;
  height: 500px;
}
</style>