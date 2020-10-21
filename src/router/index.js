import Vue from 'vue'
import VueRouter from 'vue-router'

//导入各种页面
import Login from '../page/login/Login.vue';
import MainPager from '../page/main/MainCategory.vue';
import mainMaps from '../commons/fragment/AllMaps.vue';
import devStatus from '../commons/devastates/DevStatus.vue';

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
		]
	}, 


]

var router = new VueRouter({
	routes
})
export default router;
