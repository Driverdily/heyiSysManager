<template>
 <div class="data-show-container ">
    <el-row>
      <el-col  :span="6"  class="left-container">
        <div class="chartComponent">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <!-- <line-chart class="lineChart"> </line-chart> -->
          <pie-three-chart class="pieThreeChart"></pie-three-chart>
        </div>
        <div class="chartComponent">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <lines-chart class="linesChart"></lines-chart>
        </div>
        <div class="chartComponent">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <bar-chart class="barChart"></bar-chart>
        </div>
      </el-col>
      <el-col :span="12" class="middle-container">
        <div class="chartComponent">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <date-box class="dateBox"></date-box>
        </div>
        <div class="chartComponent">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <worldmap-two class="worldMapTwo"></worldmap-two>
        </div>
   
      </el-col>
      <el-col  :span="6" class="right-container">
        <div class="chartComponent">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <pie-chart class="pieChart"></pie-chart>
        </div>
        <div class="chartComponent">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <beauty-chart class="beautyChart"></beauty-chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from "./chartpackage/LineChart";
import LinesChart from "./chartpackage/LinesChart";
import BarChart from "./chartpackage/BarChart";
import PieThreeChart from "./chartpackage/PieThreeChart";

import PieChart from "./chartpackage/PieChart";
import BeautyChart from "./chartpackage/BeautyPieChart";

import ChinaMap from "./chartpackage/ChinaMap";
import TableData from "./chartpackage/TableData";
import WorldMap from "./chartpackage/WorldMap";
import WorldmapTwo from "./chartpackage/WorldMapTwo";
import DateBox from "./chartpackage/DateBox";

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
    DateBox,
    PieThreeChart,
  },
};
</script>

<style lang="scss" scoped>
.data-show-container {
  padding: 10px 30px;
  .el-header {
    font-size: 25px;
    color: white;
    font-weight: 600;
  }

  .chartComponent {
    position: relative;
    margin: 20px;
    // background: #4f1d344d;
    background: #02376da4;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.1),
      0 0 5px rgba(0, 0, 0, 0.3);

    .border-span {
      display: block;
      position: absolute;
      width: 30px;
      height: 30px;
      opacity: 0.5;
    }

    .top-left {
      top: -2px;
      left: -2px;
      border-top: 3px solid #54dcf2;
      border-left: 3px solid #54dcf2;
    }
    span.top-right {
      top: -2px;
      right: -2px;
      border-top: 3px solid #54dcf2;
      border-right: 3px solid #54dcf2;
    }

    span.bottom-left {
      bottom: -2px;
      left: -2px;
      border-bottom: 3px solid #54dcf2;
      border-left: 3px solid #54dcf2;
    }

    span.bottom-right {
      bottom: -2px;
      right: -2px;
      border-bottom: 2px solid #54dcf2;
      border-right: 2px solid #54dcf2;
    }
  }
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
  .pieThreeChart {
    color: #ffffff;
  }
}

.middle-container {
  // float: left;
  // width: calc(100vw - 1120px);
  .tableData {
    color: transparent;
  }
  .chinaMap {
    color: #ffffff;
  }
  .worldMap {
    color: #ffffff;
  }
  .worldMapTwo {
    color: #ffffffff;
  }
  .dateBox {
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
</style>