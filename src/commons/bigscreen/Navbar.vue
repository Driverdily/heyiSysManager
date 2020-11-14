<template>
  <el-container>
    <el-header class="top_header">
      <span>禾逸数据展示平台</span>
      <div class="weather">
        {{ nowTime | formaDate }}
      </div>
    </el-header>
  </el-container>
</template>

<script>
var padaDate = function (value) {
  return value < 10 ? "0" + value : value;
};

export default {
  data() {
    return {
      nowTime: new Date(),
    };
  },
  computed: {},
  methods: {},
  filters: {
    formaDate: function (value) {
      var date = new Date();
      var year = date.getFullYear();
      var month = padaDate(date.getMonth() + 1);
      var day = padaDate(date.getDate());
      var hours = padaDate(date.getHours());
      var minutes = padaDate(date.getMinutes());
      var seconds = padaDate(date.getSeconds());
      return (
        year +
        "年" +
        month +
        "月" +
        day +
        "日" +
        hours +
        "时" +
        minutes +
        "分" +
        seconds +
        "秒"
      );
    },
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.nowTime = new Date(); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>

<style  lang="scss" scoped>
 .top_header {
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
  font-weight: 700;
  font-size: 34px;

  .weather {
    position: fixed;
    font-size: 20px;
    right: 42px;
    top: 15px;
  }
}
</style>
