<template>
  <div>
    <el-header>{{title}}</el-header>
    <div id="barChart"></div>
  </div>
</template>
<script>
export default {
  name: 'barChart',
  data() {
    return {
      title: '各地区设备增加数量'
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.chartInit()
    },
    chartInit() {
      let myChart = this.$echarts.init(document.getElementById('barChart'))
      myChart.setOption({
        legend: {
          textStyle: {
            color: '#00ce7d'
          }
        },
        tooltip: {},
        dataset: {
          source: [
            ['product',  '2016', '2017','2018','2019'],
            ['德国', 43.3, 85.8, 93.7,80.0],
            ['意大利', 83.1, 73.4, 55.1,120.0],
            ['土耳其', 86.4, 65.2, 82.5,79.0],
            ['西班牙', 72.4, 53.9, 39.1,50.0],
            ['墨西哥',120,77,72.0,80.2],
          ]
        },
        xAxis: {
          type: 'category',
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          }
        },
        yAxis: {
          name: "（万）",
          nameTextStyle: {
              color: '#42b6f6',
              fontSize: 12
          },
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            // barWidth: 18,
            itemStyle:{
              normal:{
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00b0ff'
                }, {
                  offset: 1,
                  color: '#7052f4'
                }], false)
              }
            },
          },
          {
            type: 'bar',
            // barWidth: 18,
            itemStyle:{
              normal:{
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#c487ee'
                }, {
                  offset: 1,
                  color: '#6f81da'
                }], false)
              }
            },
          },
          {
            type: 'bar',
            // barWidth: 18,
            itemStyle:{
              normal:{
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#7aee8e'
                }, {
                  offset: 1,
                  color: '#43ce5b'
                }], false)
              }
            },
          },
          {
            type:'bar',
          }


        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#barChart{
  width: 100%;
  height: 250px;
}
</style>
