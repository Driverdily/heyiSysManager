<template>
  <div class="main-container">
    <top-nav class="top"></top-nav>
    <router-view class="container" :style="{ height: scrollContainerHeight }">
    </router-view>

    <div class="bottom-menu-top">
      <div class="toggle-tree-link">
        <span><i class="el-icon-pie-chart"></i> &nbsp;统计:</span>
        <router-link class="toggle-text" to="/devstatus">
          所有（40）
        </router-link>
        <router-link class="toggle-text" to="/devstatus">
          在线（20）
        </router-link>
        <router-link class="toggle-text" to="/devstatus">
          离线（18）
        </router-link>
        <router-link class="toggle-text" to="/devstatus">
          布防（28）
        </router-link>
        <router-link class="toggle-text" to="/devstatus">
          撤防（12）
        </router-link>
      </div>

      <span class="toggle-tree-btn">
        <el-button
          plain
          size="mini"
          style="padding: 6px 13px"
          @click="changeShowFolder"
          v-show="isFolder"
          icon="el-icon-caret-bottom"
          >隐藏事件</el-button
        >
        <el-button
          plain
          size="mini"
          style="padding: 6px 13px"
          icon="el-icon-caret-top"
          @click="changeShowFolder"
          v-show="!isFolder"
        >
          显示事件</el-button
        >
      </span>
      <div class="clearfix"></div>
    </div>
    <bottom-nav class="bottom" v-if="isFolder"></bottom-nav>
  </div>
</template>

<script>
import topNav from "../../commons/nav/topNav.vue";
import bottomNav from "../../commons/nav/bottomNav.vue";

export default {
  components: {
    topNav,
    bottomNav,
  },
  data() {
    return {
      isFolder: false, //true是展开状态，false关闭
    };
  },
  computed: {
    scrollContainerHeight: function () {
      var h = document.documentElement.clientHeight - 306;
      var h2 = document.documentElement.clientHeight - 112;
      return this.isFolder ? h + "px" : h2 + "px";
    },
  },
  methods: {
    changeShowFolder() {
      this.isFolder = !this.isFolder;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  display: block;
  overflow: hidden;
}
.main-container .top {
  height: 72px;
  display: block;
  width: 100%;
}

.main-container .bottom {
  display: block;
  bottom: 0;
  height: 200px;
  width: 100%;
  z-index: 100;
}

.main-container .bottom-menu-top {
  height: 34px;
  background: aliceblue;
  display: block;
  border-top: 1px solid #ccc;
  .toggle-tree-link {
    float: left;
    margin-left: 30px;
    margin-top: 9px;
    font-size: 13px;
  }
  .toggle-tree-btn {
    float: right;
    margin-top: 5px;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 10px;
    padding: 3px;
    text-align: center;
  }
  a:hover {
    border: 1px solid #ccc;
  }
}
.main-container .container {
  display: block;
  width: 100vw;
  height: calc(100% - 306px);
  overflow: hidden;
}
</style>
