<template>
  <div class="main_fragment_devstatus">
    <el-row style="height: 100%; width: 100%">
      <el-col :span="3" class="left-nav p-20">
        <div class="m-t-10">{{$t('dev_number')}}</div> 
        <el-input class="m-t-5" size="mini"></el-input> 
        <div class="m-t-10"> {{$t('dev_name')}}</div> 
        <el-input class="m-t-5" size="mini"></el-input> 

        <el-button
          type="infor"
          size="mini"
          icon="el-icon-check"
          style="width: 100%"
          class="m-t-20"
        ></el-button>

        <br /><br />

        <el-button type="infor" class="status">{{$t('all')}}</el-button>

        <br />
        <el-button type="infor" class="status" size="mini">{{$t('online')}}</el-button>

        <br />
        <el-button type="infor" class="status" size="mini">{{$t('offline')}}</el-button>

        <br />
        <el-button type="infor" class="status" size="mini">{{$t('arm')}}</el-button>

        <br />
        <el-button type="infor" class="status" size="mini">{{$t('disarm')}}</el-button>
      </el-col>

      <el-col :span="21">
        <el-table :data="statusData" stripe size="mini" border>
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

          <el-table-column prop="ps" :label="$t('ps')"></el-table-column>
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
  text-align: left;
}
.main_fragment_devstatus .left-nav .status {
  padding: 7px 25px;
  width: 100%;
  margin-top: 5px;
}
</style>
