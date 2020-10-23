import Vue from 'vue'
import VueRouter from 'vue-router'

//导入各种页面
import Login from '../page/login/Login.vue';
import MainPager from '../page/main/MainCategory.vue';
import mainMaps from '../commons/fragment/AllMaps.vue';
import devStatus from '../commons/fragment/DevStatus.vue';
import alarmRecord from '../commons/fragment/AlarmRecord.vue';
import operateRecord from '../commons/fragment/OperateRecord.vue';
import policeOrder from '../commons/fragment/PoliceOrder.vue';

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
		name: 'home',
		children:[
			{path:'',component:mainMaps},
			{path:'/mainmap',component:mainMaps},
			{path:'/devstatus',component:devStatus},
			{path:'/alarmrecord',component:alarmRecord},
			{path:'/operaterecord',component:operateRecord},
			{path:'/policeorder',component:policeOrder},
		]
	}, 


]

var router = new VueRouter({
	routes
})
export default router;
