import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Index from '@/pages/index'
import List from '@/pages/list'
import Detail from '@/pages/detail'


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
		},
		{
			path: "/detail",
			component: Detail,
		}
		
	]
})
