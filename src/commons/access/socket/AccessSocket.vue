<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-table
          ref="singleTable"
          :data="SocketList"
          style="width: 100%; overflow-y: scroll;"
          size="mini"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column width="40px">
            <template slot-scope>
              <img
                src="../../../assets/img/access/smart_socket_pic_132.png"
                alt=""
                class="table-img"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="value"
            :label="$t('serial_no')"
            width="70px"
          ></el-table-column>
          <el-table-column prop="label" :label="$t('name')"></el-table-column>

          <el-table-column
            property="Switch"
            :label="$t('open_close')"
            width="70px"
          >
            <template slot-scope="scope">
              <el-switch
                active-color="#13ce66"
                v-model="scope.row.Switch"
                @change="change(scope.$index, scope.row)"
              >
              </el-switch>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <el-col :span="16">
        <div class="box-card">
          <span class="box-title">{{ $t("linkage_set") }}</span>
          <!-- 联动系统报警 -->
          <el-row class="dev-set-list-item">
            <el-col :span="2" style="align-items: center">
              <img
                src="../../../assets/img/seticon/system_66_gray.png"
                class="dev-set-list-img"
              />
            </el-col>
            <el-col :span="18">
              <span>{{ $t("linkage_set_alarm") }}</span>
            </el-col>
            <el-col :span="4" class="align-right">
              <el-switch
                v-model="allow_arm_switch"
                active-color="#13ce66"
              ></el-switch>
            </el-col>
          </el-row>
          <!-- 联动防区报警 -->
          <el-row class="dev-set-list-item">
            <el-col :span="2" style="align-items: center">
              <img
                src="../../../assets/img/seticon/alarm_66_red.png"
                class="dev-set-list-img"
              />
            </el-col>
            <el-col :span="11">
              <span>{{ $t("linkage_zone_alarm") }}</span>
            </el-col>
            <el-col :span="11" class="align-right">
              <el-select
                v-model="link_zone_value"
                keep-alive
                size="mini"
                :placeholder="$t('select')"
                style="width: 90%"
              >
                <el-option
                  v-for="item in ZoneTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <!-- 联动输出时间 -->
          <el-row class="dev-set-list-item">
            <el-col :span="2" style="align-items: center">
              <img
                src="../../../assets/img/seticon/clock1_66_gray.png"
                class="dev-set-list-img"
              />
            </el-col>
            <el-col :span="11">
              <span>{{ $t("linkage_duration") }}</span>
            </el-col>
            <el-col :span="11" class="align-right">
              <el-select
                v-model="link_zone_value"
                keep-alive
                size="mini"
                :placeholder="$t('select')"
                style="width: 90%"
              >
                <el-option
                  v-for="item in ZoneTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>

        <div class="box-card">
          <span class="box-title">{{ $t("timer_switch") }}</span>
          <!-- 重复 -->
          <el-row class="dev-set-list-item">
            <el-col :span="2" style="align-items: center">
              <img
                src="../../../assets/img/seticon/repeat_66_blue.png"
                class="dev-set-list-img"
              />
            </el-col>
            <el-col :span="16">
              <span>{{ $t("repeat") }}</span>
            </el-col>
            <el-col :span="6" class="align-right">
              <el-select
                v-model="close_repeat_value"
                keep-alive
                size="mini"
                :placeholder="$t('select')"
                style="width: 90%"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <!-- 开启时间 -->
          <el-row class="dev-set-list-item">
            <el-col :span="2" style="align-items: center">
              <img
                src="../../../assets/img/access/charging_protection_66_green.png"
                class="dev-set-list-img"
              />
            </el-col>
            <el-col :span="10">
              <span>{{ $t("open_time") }}</span>
            </el-col>
            <el-col :span="12" class="align-right">
              <el-time-picker
                :picker-options="{ selectableRange: '00:00:00 - 23:59:59' }"
                size="mini"
              >
              </el-time-picker>
            </el-col>
          </el-row>
          <!-- 关闭时间 -->
          <el-row class="dev-set-list-item">
            <el-col :span="2" style="align-items: center">
              <img
                src="../../../assets/img/access/charging_protection_66_gray.png"
                class="dev-set-list-img"
              />
            </el-col>
            <el-col :span="10">
              <span>{{ $t("close_time") }}</span>
            </el-col>
            <el-col :span="12" class="align-right">
              <el-time-picker
                :picker-options="{ selectableRange: '00:00:00 - 23:59:59' }"
                size="mini"
              >
              </el-time-picker>
            </el-col>
          </el-row>
          <!-- 星期 -->
          <el-row class="dev-set-list-item">
            <el-col :span="2" style="align-items: center">
              <img
                src="../../../assets/img/seticon/clock1_66_gray.png"
                class="dev-set-list-img"
              />
            </el-col>
            <el-col :span="6">
              <span>{{ $t("week") }}</span>
            </el-col>
            <el-col :span="16" class="align-right">
              <el-checkbox-group v-model="checkedWeeks">
                <el-checkbox
                  v-for="item in weeks"
                  :label="item"
                  :key="item"
                ></el-checkbox>
              </el-checkbox-group>
            </el-col>
          </el-row>
          <!-- 提交 -->
          <el-row class="dev-set-list-item">
            <el-col :span="24" class="align-center">
              <el-button type="infor" style="padding: 10px 80px" size="mini">{{
                $t("save")
              }}</el-button>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedWeeks: [], //已选中的星期
      SocketList: [
        {
          value: "1",
          label: "插座1",
          Switch: false,
        },
        {
          value: "2",
          label: "插座2",
          Switch: true,
        },
        {
          value: "3",
          label: "插座3",
          Switch: false,
        },
        {
          value: "4",
          label: "插座4",
          Switch: true,
        },
        {
          value: "5",
          label: "插座5",
          Switch: false,
        },
        {
          value: "6",
          label: "插座6",
          Switch: true,
        },
        {
          value: "7",
          label: "插座7",
          Switch: false,
        },
        {
          value: "8",
          label: "插座8",
          Switch: true,
        },
      ],
      weeks: ["1", "2", "3", "4", "5", "6", "7"],
    };
  },
  methods: {
    change: function (index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
.table-img {
  min-width: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 32px;
}

.box-card {
  margin: 20px 10px 20px;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 10px;
  background: #f0eff5;
}

.box-card .box-title {
  position: relative;
  width: auto;
  top: -19px;
  left: 15px;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
}

.el-checkbox {
  margin-right: 5px !important;
}
</style>
