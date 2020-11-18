<template>
  <div>
    <!-- 设备属性 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("dev_property") }}</span>
      </el-col>
    </el-row>

    <!-- 设备名称 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/w20_66.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("dev_name") }}</span>
      </el-col>
      <el-col :span="6">
        <el-input size="mini"></el-input>
      </el-col>
      <el-col :span="2" class="align-right">
        <el-button
          type="infor"
          style="margin-left: 5px"
          size="mini"
          icon="el-icon-check"
        ></el-button>
      </el-col>
    </el-row>

    <!-- 序列号 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/barcode_66_black.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("serial_no") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备的序列号</span>
      </el-col>
    </el-row>
    <!-- 硬件版本 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/firmware_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("hardware_version") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备硬件版本</span>
      </el-col>
    </el-row>
    <!-- 固件版本 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/ota_66_red.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("fireware_version") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备固件版本</span>
      </el-col>
    </el-row>
    <!-- CCID -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/smart_link_66_yellow.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span> CCID </span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备CCID</span>
      </el-col>
    </el-row>
    <!-- 状态信息 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("dev_status") }}</span>
      </el-col>
    </el-row>
    <!-- 交流电 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/ac_66.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("ac") }}</span>
      </el-col>                                                                               
      <el-col :span="8" class="align-right">
        <span class="txt-blue">交流电</span>
      </el-col>
    </el-row>
    <!-- 设备电池-- -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/full_power_66_green.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("dev_battery") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备电池</span>
      </el-col>
    </el-row>
    <!-- 电池电压 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/property.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("battery_voltage") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">电池电压</span>
      </el-col>
    </el-row>
    <!-- GSM信号 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/gsm.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("gsm_singal") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">GSM信号</span>
      </el-col>
    </el-row>
    <!-- 温度 -->
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/temperature_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("temperature") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">温度</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
</style>
