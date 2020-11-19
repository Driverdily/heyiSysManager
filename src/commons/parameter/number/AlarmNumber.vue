<template>
  <div style="height: 620px; position: relative">
    <el-row class="dev-set-list-item bg-gray">
      <el-col :span="24">
        <span class="fa-1x m-l-10 txt-bold">接警号码列表</span>
      </el-col>
    </el-row>

    <!-- 号码列表 -->
    <el-row>
      <el-col :span="24">
        <el-table
          ref="singleTable"
          :data="phoneDate"
          stripe
          style="width: 100%"
          size="mini"
          highlight-current-row
          @current-change="handleCurrentChange"
          :cell-style="{ padding: '0' }"
        >
          <el-table-column
            prop="serial"
            width="80px"
            :label="$t('serial_no')"
          ></el-table-column>
          <el-table-column prop="name" :label="$t('name')"></el-table-column>
          <el-table-column prop="phone" :label="$t('phone')"></el-table-column>
          <el-table-column prop="sms" :label="$t('send_sms')"></el-table-column>
          <el-table-column
            prop="callphone"
            :label="$t('call_phone')"
          ></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <div class="layout-bottom">
      <el-row class="dev-set-list-item bg-gray">
        <el-col :span="24">
          <span class="fa-1x m-l-10 txt-bold">联动设置</span>
        </el-col>
      </el-row>

      <!-- 接警号码名称 -->
      <el-row class="dev-set-list-item">
        <el-col :span="2" style="align-items: center">
          <img
            src="../../../assets/img/seticon/telphone_66_green.png"
            class="dev-set-list-img"
          />
        </el-col>
        <el-col :span="14">
          <span>{{ $t("phone_name") }}</span>
        </el-col>
        <el-col :span="8">
          <el-input size="mini" placeholder="请输入电话名称"></el-input>
        </el-col>
      </el-row>

      <!-- 接警号码 -->
      <el-row class="dev-set-list-item">
        <el-col :span="2" style="align-items: center">
          <img
            src="../../../assets/img/seticon/telphone_wire_66_oriange.png"
            class="dev-set-list-img"
          />
        </el-col>
        <el-col :span="14">
          <span>{{ $t("phone_number") }}</span>
        </el-col>
        <el-col :span="8">
          <el-input size="mini" placeholder="请输入电话号码"></el-input>
        </el-col>
      </el-row>

      <!-- 可拨打电话 可发送短信 check框 -->
      <el-row class="dev-set-list-item" style="padding: 10px 5px">
        <el-col :offset="14" :span="10" class="align-right">
          <el-checkbox v-model="checked_phone">{{
            $t("call_phone")
          }}</el-checkbox>
          <el-checkbox v-model="checked_sms">{{ $t("send_sms") }}</el-checkbox>
        </el-col>
      </el-row>
      <el-row class="dev-set-list-item">
        <el-col :span="24">
          <el-button
            type="infor"
            size="mini"
            style="width: 32%; float: right"
            >{{ $t("save") }}</el-button
          >
        </el-col>
        <div class="clearfix"></div>
      </el-row>

      <!-- 文字描述 -->
      <el-row style="padding: 4px; font-size: 12px">
        <el-col :offset="1" :span="7">
          {{ $t("lost_sms") }}
        </el-col>
        <el-col :span="3">
          <span style="font-weight: 450; color: red">{{text_sms_times}}</span>
        </el-col>
      </el-row>
      <el-row style="padding: 5px; font-size: 12px">
        <el-col :offset="1" :span="7">
          {{ $t("lost_phone") }}
        </el-col>
        <el-col :span="3">
          <span style="font-weight: 450; color: red">{{text_phone_times}}</span>
        </el-col>
      </el-row>

      <!-- 运营商限制 -->
      <el-row style="padding: 4px; margin-top: 6px; font-size: 14px">
        <el-col :offset="1" :span="21">
          <span>{{ $t("tips_title") }}</span>
        </el-col>
      </el-row>
      <el-row style="padding: 4px; font-size: 12px">
        <el-col :offset="2" :span="20">
          <span>{{ $t("tips_one") }}</span>
        </el-col>
      </el-row>
      
      <!-- 运营商限制 -->
      <el-row style="padding: 4px; font-size: 12px">
        <el-col :offset="2" :span="20">
          <span>{{ $t("tips_two") }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked_phone: true,
      checked_sms: false,
      text_phone_times:112,
      text_sms_times:222,

      phoneDate: [
        {
          serial: 1,
          name: "电话1",
          phone: 1232131,
          sms: "",
          callphone: 12312,
        },
        {
          serial: 2,
          name: "电话2",
          phone: "",
          sms: "",
          callphone: "",
        },
        {
          serial: 3,
          name: "电话3",
          phone: "",
          sms: "",
          callphone: "",
        },
        {
          serial: 4,
          name: "电话4",
          phone: "",
          sms: "",
          callphone: "",
        },
        {
          serial: 5,
          name: "电话5",
          phone: "",
          sms: "",
          callphone: "",
        },
        {
          serial: 6,
          name: "电话6",
          phone: "",
          sms: "",
          callphone: "",
        },
        {
          serial: 7,
          name: "电话7",
          phone: "",
          sms: "",
          callphone: "",
        },
        {
          serial: 8,
          name: "电话8",
          phone: "",
          sms: "",
          callphone: "",
        },
      ],
      currentRow: 1,
      form: {
        serial: "",
        name: "",
        phone: "",
        sms: "",
        callphone: "",
      },
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  },
};
</script>

<style >

</style>
