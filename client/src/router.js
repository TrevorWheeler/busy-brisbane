import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Activities from './views/Activities.vue';
import CreateActivity from './views/CreateActivity.vue';
import ViewActivity from './views/ViewActivity.vue';
import EditActivity from './views/EditActivity.vue';
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			redirect: 'activities'
		},
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/activities',
			name: 'activities',
			component: Activities
		},
		{
			path: '/activities/create',
			name: 'activities-create',
			component: CreateActivity
		},
		{
			path: '/activity/:activityId',
			name: 'activity',
			component: ViewActivity
		},
		{
			path: '/activity/:activityId/edit',
			name: 'activity-edit',
			component: EditActivity
		}
	]
});
