<template>
  <div>
    <div class="header">
      <div class="header-left-box">
        <div class="header-logo">
          <img
            src="../../assets/heyi_logo_white.png"
            title="LightYear"
            alt="LightYear"
            class="img-logo"
          />
        </div>
        <el-menu
          class="header-nav"
          mode="horizontal"
          text-color="#fff"
          background-color="#282A36"
          active-text-color="#fff"
          :default-active="this.$route.path"
          router
        >
          <el-menu-item index="/bigscreen">
            <i class="el-icon-s-home"></i>
            <span slot="title">工作台</span>
          </el-menu-item>
          <el-menu-item index="/mainmap">
            <i class="el-icon-location"></i>
            <span slot="title">控制台</span>
          </el-menu-item>
          <el-menu-item index="/devstatus">
            <i class="el-icon-s-platform"></i>
            <span slot="title">设备状态</span>
          </el-menu-item>


          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span slot="title">记录列表</span>
            </template>

            <el-menu-item index="/alarmrecord">
              {{ $t("alarm_record") }}
            </el-menu-item>
            <el-menu-item index="/operaterecord">
              {{ $t("operate_record") }}
            </el-menu-item>
            <el-menu-item index="/policeorder">
              {{ $t("police_order") }}
            </el-menu-item>
          </el-submenu>
          <!-- 
          <el-menu-item index="/mainmap">
            <i class="el-icon-d-caret"></i>
            <span slot="title">待用列表</span>
          </el-menu-item> -->
        </el-menu>
      </div>

      <div class="header-right-box">
        <span class="notice">
          <i
            class="iconfont icon-notificationbellring"
            style="color: #ffffff; font-size: 20px"
          ></i>
        </span>

        <span style="margin-right: 20px; margin-top: 1px">
          <i
            @click="showAboutVersion"
            class="iconfont icon-about"
            style="color: #ffffff; font-size: 20px"
          ></i>
        </span>

        <el-dropdown
          trigger="hover"
          style="margin-right: 20px"
          placement="bottom"
          @command="handleCommand"
        >
          <span>
            <i
              class="iconfont icon-yuyan"
              style="color: #ffffff; font-size: 20px"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="iconfont icon-yingyu" command="en"
              >English</el-dropdown-item
            >
            <el-dropdown-item icon="iconfont icon-zhongwen" command="zh"
              >中文</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >其他待续</el-dropdown-item
            >
            
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="hover" @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="../../assets/img/login_title.png" />
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user" command=""
              >个人信息</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus"
              >我的设置</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-check" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <about-dialog
      ref="isAboutDialogMession"
      v-if="isAboutDialogShow"
      :visible.sync="isAboutDialogShow"
    ></about-dialog>
  </div>
</template>

<script>
import AboutDialog from "../utils/AboutVersionDialog";
export default {
  components: {
    AboutDialog,
  },
  data() {
    return {
      activeIndex: "2",
      isAboutDialogShow: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command) {
      this.$message("click on item " + command);
      // this.$router.push(command);
      if (command == "zh") {
        console.log("中文");
        this.$i18n.locale = "zh";
        localStorage.setItem("locale", "zh");
      }
      if (command == "en") {
        console.log("英语");
        this.$i18n.locale = "en";
        localStorage.setItem("locale", "en");
      }
      
    },
    showAboutVersion() {
      this.isAboutDialogShow = true;
    },
  },
};
</script>

<style>
.header {
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding: 0 15px;
  /* background-color: #3060ff; */
  background: #282A36;
}

.header .header-left-box {
  display: flex;
  justify-content: flex-start;
}

.header .header-logo {
  position: relative;
}
.header .header-logo .img-logo {
  height: 50px;
  margin-top: 10px;
  margin-left: 15px;
}

.header .header-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  font-size: 14px;
  background-color: transparent;
  /* border-bottom: solid 1px #3060ff; */
  border-bottom: solid 1px #282A36;
}

.header .header-nav .el-menu-item,
.header .header-nav .el-submenu .el-submenu__title {
  display: list-item;
  margin-left: 10px;
  padding: 0 10px !important;
  height: 40px;
  line-height: 40px;
  border-radius: 15px;
}

.header .header-nav .el-menu-item.is-active {
  /* color: #3060ff !important; */
  color: #282A36 !important;
  background-color: #fff !important;
}

.header .header-nav .el-submenu.is-active .el-submenu__title {
  /* color: #3060ff !important; */
  color: #282A36 !important;
  background-color: #fff !important; 
}
.header .header-nav .el-submenu .el-submenu__title i {
  color: #fff;
}
.header .header-nav .el-submenu.is-active .el-submenu__title i {
  /* color: #3060ff !important; */
  color: #282A36 !important;
  background-color: #fff !important;
}

.el-menu--horizontal .el-menu .el-menu-item {
  float: none;
  height: 33px;
  line-height: 33px;
  width: auto;
  color: #282A36;
}

.el-menu-item i {
  color: #fff;
}

.header .header-right-box {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 0;
}
.header .header-right-box .notice {
  margin-right: 20px;
  margin-top: 1px;
}

.el-dropdown .el-dropdown-link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.el-dropdown .el-dropdown-link img {
  border-radius: 50%;
  width: 31px;
  height: 31px;
  margin: 6px;
}

.el-dropdown .el-dropdown-link i {
  display: inline-block;
  color: white;
  font-size: 18px !important;
}
</style>
