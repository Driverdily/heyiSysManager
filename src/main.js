import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios'; //导入联网框架

import i18n from './tools/i18n'; //导入切换语言包

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map';
import './assets/icon/iconfont.css';
import echarts from 'echarts';
import echartgl from 'echarts-gl';

Vue.use(ElementUI)
Vue.use(VueAxios, axios)


Vue.prototype.$echarts = echarts



Vue.config.productionTip = false
axios.defaults.baseURL = "/api"


Vue.use(BaiduMap, {
	ak: "VA6Q31n4oOVq5x6WTfO1EkHyVjibF72e"
});


new Vue({
	el: '#app',
	router,
	store,
	i18n,
	render: h => h(App)
})