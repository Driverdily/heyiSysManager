<template>
  <div>
    <div class="map-box">
      <div class="map-left fl pr">
        <div class="user-container" :style="{ width: scrollerWidth }">
          <!-- 顶部标题 -->
          <div v-show="isleftFolder" class="side-subtitle">
            <b id="account" title="">泉州分公司</b>
            <div class="clearfix"></div>
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
              prefix-icon="el-icon-search"
            >
            </el-input>
            
            <!-- <el-tree
              class="filter-tree"
              :data="data"
              :props="defaultProps"
              ref="tree"
              :default-checked-keys="selectFunction"
              default-expand-all="true"
              :filter-node-method="filterNode"
              node-key="id"
            >
            </el-tree> -->
            <el-tree
              :data="data"
              node-key="id"
              default-expand-all
              :filter-node-method="filterNode"
              :expand-on-click-node="false"
              ref="tree"
              style="margin-top: 10px; background: rgb(233, 231, 231)"
            >
              <span class="custom-tree-node" slot-scope="{ node }">
                <!-- <i class="{data.icon}"></i> -->
                <span>{{ node.label }}</span>
                <span style="padding: 5px">
                  <el-dropdown
                    trigger="click"
                    @command="handleCommand"
                    placement="right-start"
                  >
                    <span class="el-dropdown-link">
                      <i class="el-icon-arrow-right" style="color: gray"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="0"
                        >添加报警设备</el-dropdown-item
                      >
                      <el-dropdown-item command="1"
                        >添加NB设备</el-dropdown-item
                      >
                      <el-dropdown-item command="2">添加分组</el-dropdown-item>
                      <el-dropdown-item command="3">删除分组</el-dropdown-item>
                      <el-dropdown-item command="4">转让分组</el-dropdown-item>
                      <el-dropdown-item command="5">参数设置</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
              </span>
            </el-tree>
          </div>
        </div>
        <!-- 设备菜单栏-中午-威廉·哈姆雷 -->
        <div
          class="device-container b1-ccc"
          :style="{ width: scrollerRightWidth }"
        >
          <div v-show="isRightFolder" class="tab-navbar">
            <b id="account" title="">子菜单-小标题</b>
            <div class="clearfix"></div>
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
              prefix-icon="el-icon-search"
            ></el-input>

            <div class="device-list">
              <device-list-item
                v-for="device in deviceList"
                :listItem="device"
                class="list-item"
                :key="device.id"
              ></device-list-item>
            </div>

            <!-- <ul class="device-list">
              <li v-for="device in deviceList" :key="device.id">
                <device-list-item :item="device"></device-list-item>
              </li>
            </ul> -->
          </div>
        </div>

        <div class="clearfix"></div>
      </div>

      <!-- 地图 -->
      <div class="map-content">
        <main-map style="height: 100%"></main-map>
      </div>
      <div class="clearfix"></div>
    </div>
    <add-alarm
      ref="addalarmMission"
      v-if="setAddAlarmVisible"
      :visible.sync="setAddAlarmVisible"
    ></add-alarm>
    <add-nb-dev
      ref="addNbMission"
      v-if="setAddNbVisible"
      :visible.sync="setAddNbVisible"
    ></add-nb-dev>
  </div>
</template>

<script>
import MainMap from "../maps/MainMaps.vue";
import DeviceListItem from "../utils/DeviceListItem.vue";
import AddAlarm from "../adddev/AddAlarmDev.vue";
import AddNbDev from "../adddev/AddNBDev.vue";

let id = 1000;

export default {
  components: {
    MainMap,
    DeviceListItem,
    AddAlarm,
    AddNbDev,
  },

  data() {
    const data = [
      {
        id: 1,
        label: "一级 一",
        icon: "el-icon-school",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1",
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
        label: "一级 二",
        children: [
          {
            id: 5,
            label: "二级 2-1",
          },
          {
            id: 6,
            label: "二级 2-2",
          },
        ],
      },
      {
        id: 3,
        label: "一级 三",
        children: [
          {
            id: 7,
            label: "二级 3-1",
          },
          {
            id: 8,
            label: "二级 3-2",
          },
        ],
      },
    ];
    return {
      filterText: "",
      isleftFolder: true,
      isRightFolder: true,
      setAddAlarmVisible: false,
      setAddNbVisible: false,

      data: JSON.parse(JSON.stringify(data)),
      // data: JSON.parse(JSON.stringify(data)),

      deviceList: [
        {
          id: 0,
          label: "W5-sd131231",
          imgPath: require("../../assets/img/device/w5_true.png"),
          armStatus: 0,
          linkStatus: 0,
        },
        {
          id: 1,
          label: "SGW01-SSS-213",
          imgPath: require("../../assets/img/device/gsm_dev_list_icon_sgw01.png"),
          armStatus: 2,
          linkStatus: 1,
        },
        {
          id: 2,
          label: "W7-SDDS-231",
          imgPath: require("../../assets/img/device/w7_true.png"),
          armStatus: 2,
          linkStatus: 2,
        },
        {
          id: 3,
          label: "518D-SID-123",
          imgPath: require("../../assets/img/device/gsm_518d_true.png"),
          armStatus: 1,
          linkStatus: 1,
        },
        {
          id: 4,
          label: "W20-122-2131",
          imgPath: require("../../assets/img/device/w20_true.png"),
          armStatus: 0,
          linkStatus: 0,
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

  methods: {  //水蜗牛  刺豚  
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
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
    handleCommand(command) {
      switch (command) {
        case "0":
          this.setAddAlarmVisible = true;
          console.log("添加报警主机", this.informationVisible);
          break;
        case "1":
          this.setAddNbVisible = true;
          console.log("添加NB设备", this.devDeleteVisible);
          break;
        case "2":
          console.log("点击转让", this.devTransferVisible);
          break;
        case "3":
          console.log("点击配件", this.setAccessVisible);
          break;
        case "4":
          console.log("点击参数", this.setAlarmVisible);
          break;
      }
    },
  },
  computed: {
    
    scrollerWidth: function () {
      return this.isleftFolder ? 235 + "px" : 40 + "px";
    },
    
    scrollerRightWidth: function () {
      return this.isRightFolder ? 299 + "px" : 40 + "px";
    },

  },
};
</script>

<style  scoped>
.map-box {
  display: block;
  height: 100%;
  overflow: hidden;
}
.map-left {
  background: white;
  transition: all 1s;
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
  background-color: rgb(233, 231, 231);
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
  padding: 5px 2px;
  margin-top: 10px;
  border-radius: 5px;
  display: block;
  max-height: 570px;
  overflow-y: scroll;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>