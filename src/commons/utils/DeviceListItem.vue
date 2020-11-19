<template>
  <div class="deviceListItem">
    <el-row class="dev-list-top">
      <el-col :span="4" style="margin: 5px">
        <div class="dev-logo-bg">
          <img class="dev-logo" :src="listItem.imgPath" />
        </div>
      </el-col>
      <el-col :span="14" class="dev-status">
        <div class="dev-name">
          <span class="fa-0-87x">{{ listItem.label }}</span>
        </div>
        <div class="dev-icon">
          <i
            class="iconfont icon-wifi"
            style="color: #00a7e8"
            v-show="listItem.linkStatus == 0"
          ></i>
          <i
            class="iconfont icon-lan"
            style="color: #00a7e8"
            v-show="listItem.linkStatus == 1"
          ></i>
          <i
            class="el-icon-sort"
            style="color: #00a7e8"
            v-show="listItem.linkStatus == 2"
          ></i>
          &nbsp;
          <i class="el-icon-position" style="color: #1fd330"></i>
        </div>
      </el-col>
      <el-col :span="4" class="dev-arm">
        <div class="dev-arm-icon">
          <img
            style="width: 28px; margin-top: 12px"
            src="../../assets/img/device/disarm_132_red.png"
            v-show="listItem.armStatus == 2"
          />
          <img
            style="width: 28px; margin-top: 12px"
            src="../../assets/img/device/home_arm_132_green.png"
            v-show="listItem.armStatus == 0"
          />
          <img
            style="width: 28px; margin-top: 12px"
            src="../../assets/img/device/arm_132_red.png"
            v-show="listItem.armStatus == 1"
          />
        </div>
      </el-col>
    </el-row>
    <el-row class="dev-list-bottom fa-0-75x">
      <el-col :span="6" class="p-5 border-right">
        <div class="button_arm">
          {{ $t("arm_home") }}
        </div>
      </el-col>
      <el-col :span="6" class="p-5 border-right">
        <div class="button_arm">
          {{ $t("arm_away") }}
        </div>
      </el-col>
      <el-col :span="6" class="p-5 border-right">
        <div class="button_arm">
          {{ $t("disarm") }}
        </div>
      </el-col>
      <el-col :span="6" class="p-5 align-center">
        <el-dropdown
          trigger="click"
          @command="handleCommand"
          placement="right-start"
        >
          <span class="el-dropdown-link"> 更多 </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="0">设备信息</el-dropdown-item>
            <el-dropdown-item command="1">移除设备</el-dropdown-item>
            <el-dropdown-item command="2">转让设备</el-dropdown-item>
            <el-dropdown-item command="3">配件管理</el-dropdown-item>
            <el-dropdown-item command="4">参数设置</el-dropdown-item>
            <el-dropdown-item
              ><router-link :to="'/alarmrecord'"
                >查看警情</router-link
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>

    <dev-information
      ref="informationMission"
      v-if="informationVisible"
      :visible.sync="informationVisible"
    ></dev-information>
    <dev-delete-dialog
      ref="devDeleteMission"
      v-if="devDeleteVisible"
      :visible.sync="devDeleteVisible"
    ></dev-delete-dialog>
    <dev-transfer-dialog
      ref="devTransferMission"
      v-if="devTransferVisible"
      :visible.sync="devTransferVisible"
    ></dev-transfer-dialog>
    <dev-access
      ref="accessMission"
      v-if="setAccessVisible"
      :visible.sync="setAccessVisible"
    ></dev-access>
    <alarm-dev-set
      ref="alarmsetMission"
      v-if="setAlarmVisible"
      :visible.sync="setAlarmVisible"
    ></alarm-dev-set>
  </div>
</template>

<script>
import DevInformation from "../devinformation/DevInformation.vue"; //设备信息对话框
import DevDeleteDialog from "../utils/DevDeletDialog.vue"; //删除设备对话框
import DevTransferDialog from "../utils/DevTransferDialog"; //转让设备对话框
import DevAccess from "../access/DevAccessSetting.vue"; //配件管理
import AlarmDevSet from "../alarmparameter/DevSetting.vue"; //报警主机参数设置

export default {
  props: {
    listItem: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    DevInformation,
    DevDeleteDialog,
    DevTransferDialog,
    DevAccess,
    AlarmDevSet,
  },

  data() {
    return {
      informationVisible: false,
      devDeleteVisible: false,
      devTransferVisible: false,
      setAccessVisible: false,
      setAlarmVisible: false,
    };
  },
  
  methods: {
    handleCommand(command) {
      switch (command) {
        case "0":
          this.informationVisible = true;
          console.log("点击信息", this.informationVisible);
          break;
        case "1":
          this.devDeleteVisible = true;
          console.log("点击移除", this.devDeleteVisible);
          break;
        case "2":
          this.devTransferVisible = true;
          console.log("点击转让", this.devTransferVisible);
          break;
        case "3":
          this.setAccessVisible = true;
          console.log("点击配件", this.setAccessVisible);
          break;
        case "4":
          this.setAlarmVisible = true;
          console.log("点击参数", this.setAlarmVisible);
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.deviceListItem {
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .dev-list-top {
    min-height: 50px;
    text-align: center;
    padding: 7px 10px;
    .dev-status {
      text-align: left;
      padding: 5px;
      .dev-icon {
        padding: 5px 0 0 0;
      }
    }
  }
  .dev-list-bottom {
    border-top: 1px solid #ccc;
    text-align: center;

    .button_arm {
      cursor: pointer;
    }
    .button_arm:hover {
      color: rgb(4, 207, 243);
    }
  }

  .dev-logo-bg {
    border-radius: 50%;
    background-color: rgb(179, 215, 226);
    width: 40px;
    height: 40px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    .dev-logo {
      width: 28px;
      height: 28px;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
  font-size: 12px;
  margin-left: 5px;
}
.el-dropdown-link:hover {
  color: rgb(4, 207, 243);
}
.el-icon-arrow-down {
  font-size: 12px;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
  color: #000;
}
</style>