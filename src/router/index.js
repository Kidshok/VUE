import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
	{
		path: '/dashboard',
		name: "Dashboard",
		component: () => import(/*webpackChunkName: "Dashboard"*/ '../views/Dashboard.vue')
	},
	{
		path: '/about*',
		name: "About",
		component: () => import(/*webpackChunkName: "AboutChunk"*/ '../views/About.vue')
	},
	{
		path: '/notfound',
		name: "NotFound",
		component: () => import(/*webpackChunkName: "NotFound"*/ '../views/NotFound.vue')
	},
	{
		path: '*',
		redirect: '/notfound'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

const userIsAuth = true

router.beforeEach((to, from, next) => {
	if (to.name !== 'Auth' && !userIsAuth) {
		next({
			name: 'Auth'
		})
	} else {
		next()
	}
})


const getTitleByRouteName = routeName => {
	return {
		'Dashboard': 'Take a look on your payments and add more!',
		'About': 'Anything about our awesome application!',
		'NotFound': 'Oops! Seems like we lost this page :('
	}[routeName]
}


router.afterEach((to) => {
	document.title = getTitleByRouteName(to.name)
})
export default router