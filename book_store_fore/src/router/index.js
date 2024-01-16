import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Select from '@/pages/index'


export default new VueRouter({
	
	routes:[
		{
			path: "/",
			redirect:'/index'
		},
		{
			path: "/index",
			component: Select,
		},
		
	]
})
