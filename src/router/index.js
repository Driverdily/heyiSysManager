import Vue from 'vue'
import VueRouter from 'vue-router'

//导入各种页面
import Login from '../page/login/Login.vue';
import MainPager from '../page/main/MainCategory.vue';
import mainMaps from '../commons/fragment/AllMaps.vue'; //作废
import newMapBox from '../commons/fragment/NewMapBox.vue';


import devStatus from '../commons/fragment/DevStatus.vue';
import alarmRecord from '../commons/fragment/AlarmRecord.vue';
import operateRecord from '../commons/fragment/OperateRecord.vue';
import policeOrder from '../commons/fragment/PoliceOrder.vue';
import bigScreen from '../commons/fragment/BigScreenView.vue';
import bigMain from '../commons/bigscreen/BigMain.vue';
import bigScreenTwo from "../commons/fragment/BigScreenViewTwo.vue";

Vue.use(VueRouter)

let routes = [{
		path: "/",
		redirect: '/login',
		hidden: true
	},
	{
		path: '/login',
		component: Login,
		name: '',
		hidden: true,
	},
	{
		path: '/main',
		component: MainPager,
		name: 'main',
		children: [{
				path: '',
				component: newMapBox
			},
			{
				path: '/mainmap',
				component: newMapBox
			},
			{
				path: '/devstatus',
				component: devStatus
			},
			{
				path: '/alarmrecord',
				component: alarmRecord
			},
			{
				path: '/operaterecord',
				component: operateRecord
			},
			{
				path: '/policeorder',
				component: policeOrder
			},
		]
	},
	{
		path: '/bigscreen',
		component: bigScreen,
		name: 'bigscreen',
		children: [{
			path: 'dataIndex',
			component: bigMain
		}]
	},
	{
		path:"/bigscreentwo",
		component:bigScreenTwo,
		name:'bigscreentwo'
	}





]

var router = new VueRouter({
	routes
})
export default router;