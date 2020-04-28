import Vue from 'vue';
import Vuex from 'vuex';

import shop from './modules/shop';
import shopItem from './modules/shopItem';
import userCart from './modules/userCart';
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
	state     : {},
	mutations : {},
	actions   : {},
	modules   : {
		shop,
		shopItem,
		userCart,
		user
	}
});
