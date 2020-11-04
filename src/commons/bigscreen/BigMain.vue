<template>
  <div class="data-show-container clearfix">
    <!-- <div class="left-container">
      <line-chart class="chartComponent lineChart"></line-chart>
      <lines-chart class="chartComponent linesChart"></lines-chart>
      <bar-chart class="chartComponent barChart"></bar-chart>
    </div>

    <div class="middle-container">
        <!-- <china-map class="chartComponent chinaMap"></china-map> -->
    <!-- <world-map class="chartComponent worldMap"></world-map> -->
    <!-- <worldmap-two class="chartComponent worldMapTwo"></worldmap-two>
      <table-data class="chartComponent tableData"></table-data>
    
    </div>

    <div class="right-container">
      <pie-chart class="chartComponent pieChart"></pie-chart>
      <beauty-chart class="chartComponent beautyChart"></beauty-chart>
    </div> 
 -->

    <el-row>
      <el-col :span="6" class="left-container">
        <line-chart class="chartComponent lineChart"></line-chart>
        <lines-chart class="chartComponent linesChart"></lines-chart>
        <bar-chart class="chartComponent barChart"></bar-chart>
      </el-col>
      <el-col :span="12" class="middle-container">
        <worldmap-two class="chartComponent worldMapTwo"></worldmap-two>
        <table-data class="chartComponent tableData"></table-data>
      </el-col>
      <el-col :span="6" class="right-container">
        <pie-chart class="chartComponent pieChart"></pie-chart>
        <beauty-chart class="chartComponent beautyChart"></beauty-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from "./chartpackaga/LineChart";
import LinesChart from "./chartpackaga/LinesChart";
import BarChart from "./chartpackaga/BarChart";

import PieChart from "./chartpackaga/PieChart";
import BeautyChart from "./chartpackaga/BeautyPieChart";

import ChinaMap from "./chartpackaga/ChinaMap";
import TableData from "./chartpackaga/TableData";
import WorldMap from "./chartpackaga/WorldMap";
import WorldmapTwo from "./chartpackaga/WorldMapTwo";

export default {
  name: "dataIndex",
  components: {
    LineChart,
    LinesChart,
    BarChart,
    PieChart,
    BeautyChart,
    ChinaMap,
    TableData,
    WorldMap,
    WorldmapTwo,
  },
};
</script>
<style lang="scss" scoped>
.data-show-container {
  .chartComponent {
    margin: 20px;
    background: #1d344d;
    border: 1px transparent solid;
    // border-image: linear-gradient(
    //     to right,
    //     red 0%,
    //     blue 30%,
    //     yellow 60%,
    //     green 90%
    //   )
    //   5;
    border-radius: 5px;
  }

  .left-container {
    // float: left;
    // width: 600px;
    .lineChart {
      color: #ffffff;
    }
    .linesChart {
      color: #ffffff;
    }
    .barChart {
      color: #ffffff;
    }
  }

  .middle-container {
    // float: left;
    // width: calc(100vw - 1120px);
    .tableData {
      color: #ffffff;
    }
    .chinaMap {
      color: #ffffff;
    }
    .worldMap {
      color: #ffffff;
    }
    .worldMapTwo {
      color: #ffffff;
    }
  }

  .right-container {
    // float: left;
    // width: 500px;
    .pieChart {
      color: #ffffff;
    }
    .beautyChart {
      color: #ffffff;
    }
  }
}
</style>