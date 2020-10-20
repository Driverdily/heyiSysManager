import Vue from 'vue'
import VueRouter from 'vue-router'

//导入各种页面
import Login from '../page/login/Login.vue';
import MainPager from '../page/main/MainCategory.vue';
import topmenu from '../commons/nav/topNav.vue';
import allmap from '../commons/maps/AllMaps.vue';
import devstatus from '../commons/devstates/DevStatus.vue';

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
	}, 
	{
		path:'/topnav',
		component:topmenu,
	},

]

var router = new VueRouter({
	routes
})
export default router;
