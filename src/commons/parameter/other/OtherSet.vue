<template>
  <div>
    <!-- 设备信息 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24" class=" ">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("dev_information") }}</span>
      </el-col>
    </el-row>

    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/w20_66.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("dev_type") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备的类型</span>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/firmware_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("dev_id") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备的ID</span>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/speak_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("dev_name") }}</span>
      </el-col>
      <el-col :span="6">
        <el-input v-model="dev_name_value" size="mini"></el-input>
      </el-col>
      <el-col :span="2" class="align-right">
        <el-button type="infor" style="margin-left: 5px" size="mini"
          >提交</el-button
        >
      </el-col>
    </el-row>

    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/smart_link_66_yellow.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("dev_imei") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <span class="txt-blue">设备的IMEI号</span>
      </el-col>
    </el-row>
    <!-- 用户信息 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24" class=" ">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("user_information") }}</span>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/user_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("user_name") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <el-input
          size="mini"
          v-model="user_name_value_1"
          style="width: 90%"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/telphone_66_green.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("phone") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <el-input
          size="mini"
          v-model="phone_value_1"
          style="width: 90%"
        ></el-input>
      </el-col>
    </el-row>

    <!-- 负责人 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("principal") }}</span>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/user_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("user_name") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <el-input
          size="mini"
          v-model="user_name_value_2"
          style="width: 90%"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/telphone_66_green.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("phone") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <el-input
          size="mini"
          v-model="phone_value_2"
          style="width: 90%"
        ></el-input>
      </el-col>
    </el-row>
    <!-- 维保人 -->
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">{{ $t("maintainer") }}</span>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/user_66_gray.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("user_name") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <el-input
          size="mini"
          v-model="user_name_value_3"
          style="width: 90%"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="2" style="align-items: center">
        <img
          src="../../../assets/img/seticon/telphone_66_green.png"
          class="dev-set-list-img"
        />
      </el-col>

      <el-col :span="14">
        <span>{{ $t("phone") }}</span>
      </el-col>
      <el-col :span="8" class="align-right">
        <el-input
          size="mini"
          v-model="phone_value_3"
          style="width: 90%"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="dev-set-list-item">
      <el-col :span="24">
        <el-button
          type="infor"
          style="float: right; margin-right: 1.25rem; padding: 7px 25px"
          size="mini"
          >提交</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dev_name_value: "",
      user_name_value_1: "",
      user_name_value_2: "",
      user_name_value_3: "",
      phone_value_1: "",
      phone_value_2: "",
      phone_value_3: "",
    };
  },
};
</script>

<style>
</style>
