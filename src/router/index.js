import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import About from '../views/About.vue'
import Auth from '../views/Auth.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/dashboard',
		name: "Dashboard",
		component: Dashboard
	},
	{
		path: '/about*',
		name: "About",
		component: About
	},
	{
		path: '/notfound',
		name: "NotFound",
		component: NotFound
	},
	{
		path: '/login',
		name: "Auth",
		component: Auth
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