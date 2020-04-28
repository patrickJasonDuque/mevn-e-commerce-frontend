import axios from 'axios';

const state = {
	cart : []
};

const getters = {
	getCart : (state) => {
		return state.cart;
	}
};

const mutations = {
	addItemToCart  : (state, data) => {
		axios.post(`https://patrickduque-mevn-server.glitch.me/cart/${data.id}`, data.item).then(() => {
			axios.get(`https://patrickduque-mevn-server.glitch.me/cart/${data.id}`).then((result) => {
				state.cart = result.data.cart;
			});
		});
	},
	removeFromCart : (state, data) => {
		console.log(data);
		axios.delete(`https://patrickduque-mevn-server.glitch.me/cart/${data.id}/${data.itemId}`).then(() => {
			axios.get(`https://patrickduque-mevn-server.glitch.me/cart/${data.id}`).then((result) => {
				state.cart = result.data.cart;
			});
		});
	},
	getCart        : (state, id) => {
		axios.get(`https://patrickduque-mevn-server.glitch.me/cart/${id}`).then((result) => {
			state.cart = result.data.cart;
		});
	},
	clearCart      : (state) => {
		state.cart = [];
	}
};

const actions = {
	addItemToCart  : ({ commit }, data) => {
		commit('addItemToCart', data);
	},
	removeFromCart : ({ commit }, item) => {
		commit('removeFromCart', item);
	},
	initCart       : ({ commit }, id) => {
		commit('getCart', id);
	}
};

export default {
	namespaced : true,
	actions,
	getters,
	state,
	mutations
};
