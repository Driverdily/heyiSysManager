<template>
  <div class="data-show-container clearfix">
    <el-row style="height: 100%">
      <el-col :lg="6" :xl="6" class="left-container">
        <div class="chartComponent pieThreeChart">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <!-- <line-chart class="lineChart"> </line-chart> -->
          <pie-three-chart></pie-three-chart>
        </div>
        <div class="chartComponent linesChart">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <lines-chart></lines-chart>
        </div>
        <div class="chartComponent barChart">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <bar-chart></bar-chart>
        </div>
      </el-col>

      <el-col :lg="16" :xl="12" class="middle-container">
        <div class="chartComponent dateBox">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <date-box></date-box>
        </div>
        <div class="chartComponent worldMapTwo">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <worldmap-two></worldmap-two>
        </div>
      </el-col>

      <el-col :lg="6" :xl="6" class="right-container">
        <div class="chartComponent tableDataTwo">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <table-data-two></table-data-two>
        </div>
        <div class="chartComponent pieChart">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <pie-chart></pie-chart>
        </div>
        <div class="chartComponent beautyChart">
          <span class="top-left border-span"></span>
          <span class="top-right border-span"></span>
          <span class="bottom-left border-span"></span>
          <span class="bottom-right border-span"></span>
          <beauty-chart></beauty-chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from "./chartpackaga/LineChart.vue";
import LinesChart from "./chartpackaga/LinesChart.vue";
import BarChart from "./chartpackaga/BarChart.vue";
import PieThreeChart from "./chartpackaga/PieThreeChart.vue";

import PieChart from "./chartpackaga/PieChart.vue";
import BeautyChart from "./chartpackaga/BeautyPieChart.vue";
import TableDataTwo from "./chartpackaga/TableDataTwo.vue";

import ChinaMap from "./chartpackaga/ChinaMap.vue";
import TableData from "./chartpackaga/TableData.vue";
import WorldMap from "./chartpackaga/WorldMap.vue";
import WorldmapTwo from "./chartpackaga/WorldMapTwo.vue";
import DateBox from "./chartpackaga/DateBox.vue";
import WorldmapThree from './chartpackaga/WorldMapThree.vue';

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
    TableDataTwo,
    WorldmapThree,
  },
};
</script>
<style lang="scss" scoped>
.data-show-container {
  padding: 10px 30px;
  height: calc(100% - 70px);
  .el-header {
    border-bottom: 1px solid gray;
  }

  .chartComponent {
    position: relative;
    margin: 20px;
    // background: #02376da4;
    background: #033d6d79;
    // border: 1px solid rgba(26, 10, 10, 0.15);
    // box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.1),
    //   0 0 5px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 7px #01f1f5;

    .border-span {
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      opacity: 0.6;
    }

    .top-left {
      top: -4px;
      left: -4px;
      border-top: 3px solid #01f1f5;
      border-left: 3px solid #01f1f5;
    }
    span.top-right {
      top: -4px;
      right: -4px;
      border-top: 3px solid #01f1f5;
      border-right: 3px solid #01f1f5;
    }

    span.bottom-left {
      bottom: -4px;
      left: -4px;
      border-bottom: 3px solid #01f1f5;
      border-left: 3px solid #01f1f5;
    }

    span.bottom-right {
      bottom: -4px;
      right: -4px;
      border-bottom: 3px solid #01f1f5;
      border-right: 3px solid #01f1f5;
    }
  }
}

.left-container {
  height: 100%;

  .pieThreeChart {
    color: #ffffff;
    height: 28%;
    min-height: 270px;
  }
  .linesChart {
    color: #ffffff;
    height: 26%;
    min-height: 240px;
  }
  .barChart {
    color: #ffffff;
    height: 32%;
    min-height: 300px;
  }
}

.middle-container {
  // float: left;
  // width: calc(100vw - 1120px);
  height: 100%;
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
    height: 65%;
  }
  .dateBox {
    color: #ffffff;
    max-height: 245px;
    height: 27%;
  }
  
}

.right-container {
  height: 100%;
  .pieChart {
    color: #ffffff;
    height: 29%;
  }
  .beautyChart {
    color: #ffffff;
    height: 32%;
  }
  .tableDataTwo {
    color: #ffffff;
    height: 26%;
    min-height: 260px;
  }
}
</style>