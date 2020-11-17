<template>
  <div>
    <baidu-map
      class="main-map-view"
      :center="map.center"
      :zoom="map.zoom"
      @ready="handler"
      :scroll-wheel-zoom="true"
    >
      <!--缩放-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <!--定位-->
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <!--点-->
      <bm-marker
        :position="map.center"
        :dragging="map.dragging"
        animation="BMAP_ANIMATION_DROP"
      >
        <!--提示信息-->
        <bm-info-window :show="map.show" style="padding: 8px">
          <span style="font-weight: bold">518C-0355</span><br />
          <hr />
          <span style="font-size: 15px;"
            >设备编号:<span style="color: green">00080355</span>
          </span>
          <br />
          <span style="font-size: 15px;"
            >在线状态:<span style="color: red">离线</span></span
          >

          <table
            style="
              text-align: center;
              width: auto;
              height: auto;
              background: white;
            "
          >
            <tr>
              <td @click="showAlarmSetDialog">离家布防</td>
              <td @click="showAddAlarmDevDialog">在家布防</td>
              <td @click="showAddNbDialog">远程撤防</td>
            </tr>
            <tr>
              <td @click="showSetDialog">参数设置</td>
              <td @click="showAccessDialog">配件管理</td>
              <td><router-link :to="'/alarmrecord'">查看警情</router-link></td>
            </tr>
            <tr>
              <td @click="showInformationDialog">设备信息</td>
              <!-- <td>暂无</td>
              <td>暂无</td> -->
            </tr>
          </table>
        </bm-info-window>
      </bm-marker>
    </baidu-map>

    <dev-setting
      ref="setMission"
      v-if="setVisible"
      :visible.sync="setVisible"
    ></dev-setting>
    <dev-information
      ref="informationMission"
      v-if="informationVisible"
      :visible.sync="informationVisible"
    ></dev-information>
    <alarm-set
      ref="alarmsetMission"
      v-if="setAlarmVisible"
      :visible.sync="setAlarmVisible"
    ></alarm-set>
    <dev-access
      ref="accessMission"
      v-if="setAccessVisible"
      :visible.sync="setAccessVisible"
    ></dev-access>

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
import DevSetting from "../parameter/DevSetting.vue";
import DevInformation from "../devinformation/DevInformation.vue";
import AlarmSet from "../alarmparameter/DevSetting.vue";
import DevAccess from "../access/DevAccessSetting.vue";
import AddAlarm from "../adddev/AddAlarmDev.vue";
import AddNbDev from "../adddev/AddNBDev.vue";

export default {
  components: {
    DevSetting,
    DevInformation,
    AlarmSet,
    DevAccess,
    AddAlarm,
    AddNbDev,
  },

  data() {
    return {
      setVisible: false, // 添加弹窗flag
      informationVisible: false,
      setAlarmVisible: false,
      setAccessVisible: false,
      setAddAlarmVisible: false,
      setAddNbVisible: false,
      map: {
        center: {
          lng: 121.447254,
          lat: 31.32362,
        },
        zoom: 15,
        show: true,
        dragging: true,
      },
      filterText: "",
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
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handler({ BMap, map }) {
      let me = this;
      console.log(BMap, map);
      // 鼠标缩放
      map.enableScrollWheelZoom(true);
      // 点击事件获取经纬度
      map.addEventListener("click", function (e) {
        console.log(e.point.lng, e.point.lat);
      });
      //添加地图类型切换  地图  卫星 地图
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
      );
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    showSetDialog() {
      this.setVisible = true;
      console.log("点击事件", this.isShowSet);
    },
    showInformationDialog() {
      this.informationVisible = true;
      console.log("点击事件", this.isShowSet);
    },
    showAlarmSetDialog() {
      this.setAlarmVisible = true;
      console.log("点击离家布防", this.setAlarmVisible);
    },
    showAccessDialog() {
      this.setAccessVisible = true;
      console.log("点击配件", this.setAlarmVisible);
    },
    showAddAlarmDevDialog() {
      this.setAddAlarmVisible = true;
      console.log("点击在家布防", this.setAddAlarmVisible);
    },
    showAddNbDialog() {
      this.setAddNbVisible = true;
      console.log("点击撤防", this.setAddNbVisible);
    },
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
};
</script>

<style scoped>
.main-map-view {
  height: 100%;
  width: 100%;
}
table {
  border-collapse: collapse;
}

table,
td {
  border: 3px solid white;
  background-color: rgb(248, 164, 91);
  padding: 4px 20px;
  color: rgb(255, 253, 253);
  font-size: 14px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

td:hover {
  color: #000088;
  cursor: pointer;
}

td:active {
  color: darkred;
}
td a {
  color: rgb(253, 250, 250);
  text-decoration: none;
}
td a:hover {
  color: #000088;
}
</style>