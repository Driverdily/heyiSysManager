<template>
  <div>
    <div class="header">
      <div class="header-left-box">
        <div class="header-logo">
          <img
            src="../../assets/img/bg_logo_s.png"
            title="LightYear"
            alt="LightYear"
            class="img-logo"
          />
        </div>
        <el-menu
          class="header-nav"
          mode="horizontal"
          text-color="#fff"
          background-color="#000"
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
        <el-dropdown
          trigger="hover"
          style="margin-right: 25px"
          placement="bottom"
          @command="handleCommand"
        >
          <span>
            <i class="iconfont icon-diqiu" style="color: #ffffff"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user" command="en"
              >English</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus" command="zh"
              >中文</el-dropdown-item
            >

            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >修改密码</el-dropdown-item
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "2",
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
  },
};
</script>

<style>
.header {
  top: 0;
  right: 0;
  left: 0;
  /* box-sizing: border-box; */
  display: flex;
  justify-content: space-between;
  min-width: 1240;
  /* height: 72px; */
  padding: 0 15px;
  /* background-color: #3060ff; */
  background: black;
}

.header .header-left-box {
  display: flex;
  justify-content: flex-start;
}

.header .header-logo {
  position: relative;
}

.header .header-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  font-size: 14px;
  background-color: transparent;
  /* border-bottom: solid 1px #3060ff; */
  border-bottom: solid 1px  black;;
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
  color: black !important;
  background-color: #fff !important;
}

.header .header-nav .el-submenu.is-active .el-submenu__title {
  /* color: #3060ff !important; */
  color: black !important;
  background-color: #fff !important;
}
.header .header-nav .el-submenu .el-submenu__title i {
  color: #fff;
}
.header .header-nav .el-submenu.is-active .el-submenu__title i {
  /* color: #3060ff !important; */
  color: black !important;
  background-color: #fff !important;
}

.el-menu--horizontal .el-menu .el-menu-item {
  float: none;
  height: 33px;
  line-height: 33px;
  width: auto;
  color: black;
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

.el-dropdown .el-dropdown-link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.el-dropdown .el-dropdown-link img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 6px;
}

.el-dropdown .el-dropdown-link i {
  display: inline-block;
  color: white;
  font-size: 18px !important;
}
.el-dropdown-link-submenu {
  margin-left: 20px;
}
.el-dropdown-link-submenu:hover {
  margin-left: 20px;
  background: #ecf5ff;
  color: #7ccaff;
}
/* .header-right-box {} */
</style>
