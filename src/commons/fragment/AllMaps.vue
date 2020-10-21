<template>
  <el-container class="map-all">
    <!-- <div class="left-nav">
      <el-input placeholder="输入关键字" v-model="filterText"> </el-input>
      <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        :filter-node-method="filterNode"
        ref="tree"
        
      >
      </el-tree>
    </div>
  
    <div class="content">
      <main-map style="height:100%;"></main-map>
    </div> -->
    <el-row style="height:100%">
      <el-col :span="6">
        <el-input placeholder="输入关键字" v-model="filterText"> </el-input>

        <!-- <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          ref="tree"
        >
        </el-tree> -->
      </el-col>
      <el-col :span="18">
        <main-map style="height: 100%"></main-map>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import MainMap from "../maps/MainMaps";

export default {
  components: {
    MainMap,
  },
  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "一级1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "三级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 2-1",
            },
            {
              id: 8,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 9,
          label: "一级 4",
        },
        {
          id: 11,
          label: "一级 5",
          children: [
            {
              id: 12,
              label: "二级 5-1",
              children: [
                {
                  id: 13,
                  label: "三级 5-1-1",
                },
              ],
            },
          ],
        },
        {
          id: 14,
          label: "一级 6",
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
};
</script>

<style scoped>
/* .map-all {
  position: fixed;
  width: 100%;
  height: 100%;
}

.map-all .left-nav {
  display: inline;
}

.map-all .left-nav el-input {
  display: block;
}

.map-all .content {
  display: inline;
  margin-left: 10px;
  height: 100%;
  width: 100%;
}

.map {
  height: 100%;
  width: 100%;
} */

.map-all {
  width: 100%;
  height: 700px;
}
</style>
