<template>
  <el-dialog
    :visible.sync="visible"
    customClass="h-800px"
    title="配件管理"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    append-to-body
    :before-close="handleClose"
  >
    <div>
      <el-row style="height: 692px; border-top: 0.5px solid gray">
        <el-col :span="9" style="height: 100%; border-right: 1px solid gray">
          <div>{{ $t("group_name") }}</div>
          <el-input class="w-90" size="mini"></el-input>
          <el-row class="dev-set-list-item-no">
            <el-col :span="18">
              <span>{{ $t("center_name") }}</span>
            </el-col>
            <el-col :span="6">
              <span>{{ $t("center_code") }}</span>
            </el-col>
          </el-row>
          <el-row class="dev-set-list-item-no">
            <el-col :span="18">
              <el-input class="w-90" size="mini"></el-input>
            </el-col>
            <el-col :span="6">
              <el-input class="w-90" size="mini"></el-input>
            </el-col>
          </el-row>
          <el-row class="dev-set-list-item-no">
            <el-col :span="18">
              <span>{{ $t("contect_person") }}</span>
            </el-col>
            <el-col :span="6">
              <span>{{ $t("contect_phone") }}</span>
            </el-col>
          </el-row>
          <el-row class="dev-set-list-item-no">
            <el-col :span="18">
              <el-input class="w-90" size="mini"></el-input>
            </el-col>
            <el-col :span="6">
              <el-input class="w-90" size="mini"></el-input>
            </el-col>
          </el-row>
          <div>{{ $t("contect_address") }}</div>
          <el-input
            style="width: 90%"
            type="textarea"
            :rows="2"
            :placeholder="$t('input_content')"
            v-model="textarea"
          >
          </el-input>
          <div>{{ $t("ps") }}</div>
          <el-input
            style="width: 90%"
            type="textarea"
            :rows="2"
            :placeholder="$t('input_content')"
            v-model="textarea"
          >
          </el-input>
          <div>{{ $t("lat_lon") }}</div>
          <el-row class="dev-set-list-item-no">
            <el-col :span="10">
              <el-input class="w-90" size="mini"></el-input>
            </el-col>
            <el-col :span="10">
              <el-input class="w-90" size="mini"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button style="width: 90%" size="mini" type="info"
                >{{ $t("locate") }}+">>"</el-button
              >
            </el-col>
          </el-row>
          <el-row class="dev-set-list-item-no">
            <el-col :span="12">
              <el-button style="width: 50%" size="mini" type="info"
                >{{ $t("save") }}+">>"</el-button
              >
            </el-col>
            <el-col :span="12">
              <el-button style="width: 50%" size="mini" type="info"
                >{{ $t("cancel") }}+">>"</el-button
              >
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="15" style="height: 100%">
          <common-map></common-map>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
import CommonMap from "../maps/CommonMap.vue";
export default {
  components: {
    CommonMap,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      install_start: "",
      install_end: "",
    };
  },
  methods: {
    // 关闭 
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>


<style scoped>
 

</style>