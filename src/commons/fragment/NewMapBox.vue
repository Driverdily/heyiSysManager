<template>
  <div>
    <div class="map-box">
      <div class="map-left fl pr clearfix">
        <div class="user-container clearfix" :style="{ width: scrollerWidth }">
          <!-- 顶部标题 -->
          <div v-show="isleftFolder" class="side-subtitle clearfix">
            <b id="account" title="">泉州分公司</b>
          </div>
          <!-- 顶部伸缩按钮 -->
          <span class="toggle-tree-btn">
            <el-button
              plain
              size="mini"
              style="padding: 6px 3px"
              icon="el-icon-caret-left"
              @click="changeShowFolder"
              v-show="isleftFolder"
            ></el-button>
            <el-button
              plain
              size="mini"
              style="padding: 6px 3px"
              icon="el-icon-caret-right"
              @click="changeShowFolder"
              v-show="!isleftFolder"
            ></el-button>
          </span>

          <div v-if="!isleftFolder" class="cover-bg dn"></div>

          <!-- 内容 -->
          <div v-show="isleftFolder" class="user-content">
            <!-- 条件搜索框 -->
            <el-input
              class="tree-search"
              placeholder="请输入客户名称"
              v-model="filterText"
              size="mini"
            >
            </el-input>
            <el-tree
              class="filter-tree"
              :data="data"
              :props="defaultProps"
              ref="tree"
            >
            </el-tree>
          </div>
        </div>
        <!-- 设备菜单栏 -->
        <div
          class="device-container b1-ccc clearfix"
          :style="{ width: scrollerRightWidth }"
        >
          <div v-show="isRightFolder" class="tab-navbar clearfix">
            <b id="account" title="">第3个分组</b>
          </div>
          <span class="pack-up-btn">
            <el-button
              plain
              size="mini"
              style="padding: 6px 3px"
              icon="el-icon-caret-left"
              @click="changeShowRightFolder"
              v-show="isRightFolder"
            ></el-button>
            <el-button
              plain
              size="mini"
              style="padding: 6px 3px"
              icon="el-icon-caret-right"
              @click="changeShowRightFolder"
              v-show="!isRightFolder"
            ></el-button>
          </span>
          <div class="overspread-bg dn" v-if="!isRightFolder"></div>

          <div class="tab-con device-content" v-show="isRightFolder">
            <el-input
              class="device-search"
              size="mini"
              placeholder="请输入设备名称"
            ></el-input>
            <div class="device-list">
              <div v-for="device in deviceList" :key="device.id">
                <device-list-item :item="device"></device-list-item>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <!-- 地图 -->
      <div class="map-content">
        <main-map style="height: 99.8%"></main-map>
      </div>
    </div>
  </div>
</template>

<script>
import MainMap from "../maps/MainMaps";
import DeviceListItem from "../utils/DeviceListItem.vue";
export default {
  components: {
    MainMap,
    DeviceListItem,
  },

  data() {
    return {
      filterText: "",
      isleftFolder: true,
      isRightFolder: true,
      data: [
        {
          id: 1,
          label: "一级1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "三级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 2-1",
            },
            {
              id: 8,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 9,
          label: "一级 4",
        },
        {
          id: 11,
          label: "一级 5",
          children: [
            {
              id: 12,
              label: "二级 5-1",
              children: [
                {
                  id: 13,
                  label: "三级 5-1-1",
                },
              ],
            },
          ],
        },
        {
          id: 14,
          label: "一级 6",
        },
      ],

      deviceList: [
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
        {
          id: 0,
          label: "ceshi",
        },
      ],

      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    changeShowFolder() {
      this.isleftFolder = !this.isleftFolder;
    },
    changeShowRightFolder() {
      this.isRightFolder = !this.isRightFolder;
    },
  },
  computed: {
    scrollerWidth: function () {
      return this.isleftFolder ? 299 + "px" : 40 + "px";
    },
    scrollerRightWidth: function () {
      return this.isRightFolder ? 299 + "px" : 40 + "px";
    },
  },
};
</script>

<style scoped>
.map-box {
  display: block;
  height: 100%;
  overflow: hidden;
}
.map-left {
  background: white;
  transition: all 0.3s;
  height: 100%;
  overflow: hidden;
}
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}

.map-content {
  overflow: hidden;
  height: 100%;
}

.fl {
  float: left;
}
.pr {
  position: relative;
}
.user-container {
  overflow: hidden;
}



.user-container,
.device-container {
  position: relative;
  float: left;
  width: 299px;
  background-color: #fff;
  height: 99.9%;
  overflow: hidden;
}
.b1-ccc {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.side-subtitle,
.tab-navbar {
  background-color: aliceblue;
  box-shadow: inset 0 1px 0 #fff;
}
.side-subtitle,
.tab-navbar {
  padding: 4px 15px;
  border-bottom: 1px solid #ddd;
  color: #333;
  height: 30px;
}
.side-subtitle,
.tab-navbar {
  line-height: 2;
}
.side-subtitle {
  border-top: 1px solid #ccc;
}

.tab-navbar {
  border-top: 1px solid #ccc;
}

.side-subtitle,
.tab-navbar {
  font-size: 14px;
}
.side-subtitle b,
.tab-navbar b {
  float: left;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}
b {
  font-weight: 700px;
}
.clearfix :after {
  clear: both;
}
.toggle-tree-btn,
.pack-up-btn {
  position: absolute;
  right: 10px;
  top: 5px;
}
.user-content,
.device-content {
  padding: 10px;
  overflow: hidden;
}
.cover-bg,
.overspread-bg {
  width: 50px;
  position: absolute;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.cover-bg,
.overspread-bg {
  display: none;
}
.device-list {
  background-color: #d5dced;
  padding-top: 5px;
  margin-top: 10px;
  border-radius: 5px;
  overflow:  scroll;;
  display: block;

}


</style>