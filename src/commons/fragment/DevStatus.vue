<template>
  <div class="main_fragment_devstatus">
    <el-row style="height: 100%; width: 100%">
      <el-col :span="4" class="left-nav">
        <span>设备编号</span> <br /><br />
        <el-input size="mini"></el-input> <br /><br />
        <span> 设备名称</span> <br /><br />
        <el-input size="mini"></el-input> <br /><br />

        <el-button
          type="infor"
          size="mini"
          icon="el-icon-check"
        ></el-button>

        <br /><br />

	<el-button type="infor" style="padding: 7px 25px;" >所有</el-button>
		
<br /><br />
<el-button type="infor" style="padding: 7px 25px;" size="mini">在线</el-button>
	
<br /><br />
<el-button type="infor" style="padding: 7px 25px;" size="mini">离线</el-button>
	
<br /><br />
<el-button type="infor" style="padding: 7px 25px;" size="mini">布防</el-button>
	
<br /><br />
<el-button type="infor" style="padding: 7px 25px;" size="mini">撤防</el-button>
	
      </el-col>

      <el-col :span="20">
        <el-table
          :data="statusData"
          stripe
          style="width: 100%; overflow: scroll; height: 90%"
          size="mini"
          border
        >
          <el-table-column
            prop="group_name"
            :label="$t('group_name')"
          ></el-table-column>
          <el-table-column
            prop="dev_number"
            :label="$t('dev_number')"
          ></el-table-column>
          <el-table-column
            prop="dev_name"
            :label="$t('dev_name')"
          ></el-table-column>

          <el-table-column
            prop="dev_type"
            :label="$t('dev_type')"
          ></el-table-column>

          <el-table-column
            prop="online_status"
            :label="$t('online_status')"
          ></el-table-column>

          <el-table-column
            prop="update_time"
            :label="$t('update_time')"
          ></el-table-column>

          <el-table-column
            prop="arm_status"
            :label="$t('arm_status')"
          ></el-table-column>

          <!-- <el-table-column prop="net_type" :label="$t('net_type')">
          </el-table-column> -->

          <el-table-column prop="net_type" :label="$t('net_type')">
          </el-table-column>

          <el-table-column
            prop="link_person_1"
            :label="$t('link_person') + 1"
          ></el-table-column>
          <el-table-column
            prop="link_phone"
            :label="$t('link_phone') + 1"
          ></el-table-column>

          <el-table-column
            prop="link_person_1"
            :label="$t('link_person') + 2"
          ></el-table-column>
          <el-table-column
            prop="link_phone"
            :label="$t('link_phone') + 2"
          ></el-table-column>

          <el-table-column
            prop="link_address"
            :label="$t('link_address')"
          ></el-table-column>

          <el-table-column
            prop="install_time"
            :label="$t('install_time')"
          ></el-table-column>
          <el-table-column
            prop="expire_time"
            :label="$t('expire_time')"
          ></el-table-column>

          <el-table-column
            prop="ps"
            :label="$t('ps')"
          ></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      statusData: [],
    };
  },
};
</script>

<style scoped>
.main_fragment_devstatus {
  height: 100%;
}
.main_fragment_devstatus .left-nav {
  padding: 15px;
  height: 100%;
  border-right: 1px solid gray;
}
</style>
