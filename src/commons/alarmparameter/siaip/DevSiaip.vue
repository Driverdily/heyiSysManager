<template>
  <div style="overflow-y: scroll; max-height: 630px">

    <!-- 网络参数设置 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("net_set") }}</span></el-col
      >
    </el-row>

    <!-- 开关 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/switch_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("open_close") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch v-model="net_switch" active-color="#13ce66"></el-switch>
      </el-col>
    </el-row>

    <!-- 网络通道 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/all_time.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="10">
        <span>{{ $t("net_aisle") }}</span>
      </el-col>
      <el-col :span="12" class="align-right">
        <el-radio v-model="NetAisle_Radio" label="1">LAN/GPRS</el-radio>
        <el-radio v-model="NetAisle_Radio" label="2">LAN</el-radio>
        <el-radio v-model="NetAisle_Radio" label="3">GPRS</el-radio>
      </el-col>
    </el-row>

    <!-- 连接类型 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/all_time.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="10">
        <span>{{ $t("link_type") }}</span>
      </el-col>
      <el-col :span="12" class="align-right">
        <el-radio v-model="LinkType_Radio" label="1">TCP</el-radio>
        <el-radio v-model="LinkType_Radio" label="2">UDP</el-radio>
      </el-col>
    </el-row>

    <!-- 连接路径 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/linkage.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="10">
        <span>{{ $t("link_path") }}</span>
      </el-col>
      <el-col :span="12" class="align-right">
        <el-radio v-model="LinkPath_Raio" label="1">IP</el-radio>
        <el-radio v-model="LinkPath_Raio" label="2">DNS</el-radio>
      </el-col>
    </el-row>

    <!-- 域名 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/ip_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="11">
        <span>{{ $t("domain_name") }}</span>
      </el-col>
      <el-col :span="8">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-button type="infor" style="margin-left: 5px" size="mini">{{
          $t("change")
        }}</el-button>
      </el-col>
    </el-row>

    <!-- 端口 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/port_66.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="11">
        <span>{{ $t("port") }}</span>
      </el-col>
      <el-col :span="8">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-button type="infor" style="margin-left: 5px" size="mini">{{
          $t("change")
        }}</el-button>
      </el-col>
    </el-row>

    <!-- 协议设置 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{
          $t("protocol_set")
        }}</span></el-col
      >
    </el-row>

    <!-- 协议类型 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/protocol_type.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="14">
        <span>{{ $t("protocol_type") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">ADM-CID</span>
      </el-col>
    </el-row>

    <!-- 用户账号 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/user_66_black.png"
          class="dev-set-list-img"
      /></el-col>
      <el-col :span="11">
        <span>{{ $t("account") }}</span>
      </el-col>
      <el-col :span="8">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-button type="infor" style="margin-left: 5px" size="mini">{{
          $t("change")
        }}</el-button>
      </el-col>
    </el-row>

    <!-- 用户前缀 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/list_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="11">
        <span>{{ $t("account_prefix") }}</span>
      </el-col>
      <el-col :span="1">
        <span style="color: red">L</span>
      </el-col>
      <el-col :span="7">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-button type="infor" style="margin-left: 5px" size="mini">{{
          $t("change")
        }}</el-button>
      </el-col>
    </el-row>

    <!-- 接收方号码 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/phone_66_gray.png"
          class="dev-set-list-img"
      /></el-col>
      <el-col :span="11">
        <span>{{ $t("receive_number") }}</span>
      </el-col>
      <el-col :span="1">
        <span style="color: red">R</span>
      </el-col>
      <el-col :span="7">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-button type="infor" style="margin-left: 5px" size="mini">{{
          $t("change")
        }}</el-button>
      </el-col>
    </el-row>

    <!-- aes 128位加密 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{
          $t("aes_128key")
        }}</span></el-col
      >
    </el-row>

    <!-- 开关 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/switch_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("open_close") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch v-model="aes_switch" active-color="#13ce66"></el-switch>
      </el-col>
    </el-row>
    
    <!-- AES 128位加密 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/lock_66_yellow.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="6">
        <span>{{ $t("aes_128key") }}</span>
      </el-col>
      <el-col :span="6" class="align-right">
        <el-radio v-model="Prefix_Radio" label="1">ASCII</el-radio>
        <el-radio v-model="Prefix_Radio" label="2">HEX</el-radio>
      </el-col>

      <el-col :span="7">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-button type="infor" style="margin-left: 5px" size="mini">{{
          $t("change")
        }}</el-button>
      </el-col>
    </el-row>
    <!-- 定时监测 -->
    <!-- <el-row class="dev-set-list-item-mini bg-gray">
      <el-col :span="2">
        <img
          src="../../../assets/img/seticon/arm_clock_66_green.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="17">
        <span class="fa-1-2x txt-bold">{{ $t("time_monitor") }}</span>
      </el-col>
      <el-col :span="2">
        <img
          src="../../../assets/img/seticon/download.png"
          class="dev-set-list-img align-right"
        />
      </el-col>
      <el-col :span="3">
        <el-button type="infor" size="mini" style="margin-left: 5px">{{
          $t("change")
        }}</el-button>
      </el-col>
    </el-row> -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{
          $t("time_monitor")
        }}</span></el-col
      >
    </el-row>

    <!-- 开关 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/switch_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("open_close") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch v-model="timing_switch" active-color="#13ce66"></el-switch>
      </el-col>
    </el-row>
    
    <!-- 监测间隔 -->
    <el-row class="dev-set-list-item-mini">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/clock_02_66_orange.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="11">
        <span>{{ $t("monitor_interval") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <span style="color: red">1-65535</span>
      </el-col>
      <el-col :span="8">
        <el-input size="mini"></el-input>
      </el-col>
    </el-row>
    
    <!-- 监测报告定时测试- -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/switch_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("monitor_report") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch
          v-model="monitor_report_switch"
          active-color="#13ce66"
        ></el-switch>
      </el-col>
    </el-row>

    <!-- 重传 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{
          $t("retransmission")
        }}</span></el-col
      >
    </el-row>
    
    <!-- 重传次数 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/chongfacishu.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="18">
        <span>{{ $t("retransmission_times") }}</span>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-select
          v-model="retransmission_times_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
        >
          <el-option v-for="i in 10" :key="i" :label="i" :value="i">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    
    <!-- 重传时间 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/clock1_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="18">
        <span>{{ $t("retransmission_interval") }}</span>
      </el-col>
      <el-col :span="4" class="align-right">
        <el-select
          v-model="retransmission_interval_value"
          keep-alive
          size="mini"
          :placeholder="$t('select')"
          style="width: 90%"
        >
          <el-option v-for="i in (5, 60)" :key="i" :label="i" :value="i">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    
    <!-- CRC16 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">CRC 16</span></el-col
      >
    </el-row>

    <!-- CRC16开关 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/crc_set.png"
          class="dev-set-list-img"
        />
      </el-col>
      <el-col :span="19">
        <span>{{ $t("crc16_switch") }}</span>
      </el-col>
      <el-col :span="3" class="align-right">
        <el-switch v-model="crc16_switch" active-color="#13ce66"></el-switch>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      net_switch: true, //网络参数开关
      aes_switch: true, //AES加密开关
      timing_switch: true, //定时监测开关
      monitor_report_switch: false, //监测报告定时测试开关
      crc16_switch: false, //CRC16开关
      NetAisle_Radio: 1, //网络通道
      LinkType_Radio: 1, //连接类型
      LinkPath_Raio: 1, //连接路径
      Prefix_Radio: 1,
      retransmission_times_value: "2",
      retransmission_interval_value: "8",
    };
  },
};
</script>


<style>
</style>
