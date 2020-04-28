import storeItems from '../../shopItem';

const state = {
	shopItems : []
};

const getters = {
    getShopItems: state => {
        return state.shopItems
    }
};

const mutations = {
	getShopItems : (state) => {
		state.shopItems = storeItems;
	}
};

const actions = {
	getShopItems : ({ commit }) => {
		commit('getShopItems');
	}
};

export default {
	namespaced : true,
	actions,
	getters,
	state,
	mutations
};
