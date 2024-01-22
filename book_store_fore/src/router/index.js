import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Index from '@/pages/index'
import List from '@/pages/list'


export default new VueRouter({
	
	routes:[
		{
			path: "/",
			redirect:'/index'
		},
		{
			path: "/index",
			component: Index,
		},
		{
			path: "/list",
			component: List,
		}
		
	]
})
