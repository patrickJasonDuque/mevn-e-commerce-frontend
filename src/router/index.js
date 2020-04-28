import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import ShopPage from '../views/ShopPage.vue';
import ItemPage from '../views/ItemPage.vue';
import CartPage from '../views/CartPage.vue';
import OrderPlaced from '../views/OrderPlaced.vue'

Vue.use(VueRouter);

const routes = [
	{
		path      : '/',
		name      : 'Home',
		component : HomePage
	},
	{
		path      : '/signin',
		component : SignIn
	},
	{
		path      : '/signup',
		component : SignUp
	},
	{
		path      : '/shop',
		component : ShopPage
	},
	{
		path      : '/shop/:item',
		component : ItemPage
	},
	{
		path      : '/cart',
		component : CartPage
	},
	{
		path: '/orders',
		component: OrderPlaced
	},
	{
		path      : '/*',
		component : HomePage
	}
];

const router = new VueRouter({
	mode   : 'history',
	base   : process.env.BASE_URL,
	routes
});

export default router;
