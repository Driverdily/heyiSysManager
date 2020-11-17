<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // methods: {
  // 	startHacking() {
  // 		if (this.$i18n.locale === 'zh') {
  // 			this.$i18n.locale = 'en'
  // 			localStorage.setItem('locale', 'en')
  // 		} else {
  // 			this.$i18n.locale = 'zh'
  // 			localStorage.setItem('locale', 'zh')
  // 		}
  // 	}
  // },
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif, "Helvetica Neue", Arial;
  /* text-align: center; */
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100% !important;
  width: 100% !important;
}

.dev-set-list-item {
  /* background: #f0eff5; */
  /* background: aliceblue; */
  border-bottom: 0.5px solid #ccc;
  display: flex;
  align-items: center;
  padding: 5px 10px;
}

.dev-set-list-item-mini {
  /* background: aliceblue; */
  border-bottom: 0.5px solid rgb(145, 144, 144);
  display: flex;
  align-items: center;
  padding: 2px 10px;
}

.dev-set-list-item-no {
  display: flex;
  align-items: center;
  padding: 2px 10px;
}

.dev-set-list-img {
  width: 22px;
  height: 22px;
  margin-top: 3px;
}

.align-right {
  text-align: right;
  margin-right: 5px;
}

.align-left {
  text-align: left;
  margin-left: 5px;
}

.align-center {
  text-align: center;
}
.clearfix ::after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.el-header {
  line-height: 60px;
  text-align: left;
  padding: 0 20px;
}

.el-dialog__title {
  font-size: 14px;
}
.el-dialog__header {
  background: #f3f1f1;
  padding: 8px 10px;
}
.el-dialog__headerbtn {
  top: 12px;
  right: 12px;
  font-size: 20px;
}
.el-dialog__headerbtn .el-dialog__close {
  color: black;
}

.h-80 {
  height: 80%;
}

.txt-blue {
  color: #0074d9;
}

/* 字体大小 */
.fa-1x {
  font-size: 1em;
}
.fa-0-75x {
  font-size: 12px;
}
.fa-0-87x {
  font-size: 14px;
}

.fa-1-2x {
  font-size: 1.2em;
}

.fa-1-5x {
  font-size: 1.5em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

/* margin */
.m-0 {
  margin: 0px !important;
}

.m-t-0 {
  margin-top: 0px !important;
}

.m-b-0 {
  margin-bottom: 0px !important;
}

.m-5 {
  margin: 5px !important;
}

.m-t-5 {
  margin-top: 5px !important;
}

.m-r-5 {
  margin-right: 5px !important;
}

.m-b-5 {
  margin-bottom: 5px !important;
}

.m-l-5 {
  margin-left: 5px !important;
}

.m-10 {
  margin: 10px !important;
}

.m-tb-10 {
  margin: 10px 0px !important;
}

.m-lr-10 {
  margin: 0px 10px !important;
}

.m-t-10 {
  margin-top: 10px !important;
}
.m-t-20 {
  margin-top: 20px !important;
}

.m-r-10 {
  margin-right: 10px !important;
}

.m-b-10 {
  margin-bottom: 10px !important;
}

.m-l-10 {
  margin-left: 10px !important;
}
.p-10 {
  padding: 10px !important;
}
.p-5 {
  padding: 5px !important;
}

.p-15 {
  padding: 15px !important;
}
.p-20 {
  padding: 20px !important;
}
.w-80 {
  width: 80% !important;
}
.w-90 {
  width: 90% !important;
}
.w-70 {
  width: 70% !important;
}

.bg-gray {
  background-color: #cccccc !important;
}

.txt-bold {
  font-weight: 500;
}
.border-right {
  border-right: 1px solid #ccc;
}
.border-left {
  border-left: 1px solid #ccc;
}
</style>
