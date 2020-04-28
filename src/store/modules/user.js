import axios from 'axios';
import router from '../../router/index';

const state = {
	id       : '',
	token    : '',
	userName : '',
	auth     : false
};

const getters = {
	getId       : (state) => state.id,
	auth        : (state) => state.auth,
	getUserName : (state) => state.userName
};

const mutations = {
	login    : (state, user) => {
		axios
			.post('https://patrickduque-mevn-server.glitch.me/user/signin', user)
			.then((result) => {
				state.id = result.data.id;
				state.userName = result.data.firstName + ' ' + result.data.lastName;
				state.auth = true;
				router.push('/');
				localStorage.setItem('id', result.data.id);
				localStorage.setItem('name', result.data.firstName + ' ' + result.data.lastName);
			})
			.catch(() => {
				alert('Invalid Username or Password');
			});
	},
	register : (state, user) => {
		axios
			.post('https://patrickduque-mevn-server.glitch.me/user/signup', user)
			.then((result) => {
				state.id = result.data.result._id;
				state.userName = result.data.result.firstName + ' ' + result.data.result.lastName;
				state.auth = true;
				router.push('/');
			})
			.catch((err) => {
				alert('error registering', err);
			});
	},
	logout   : (state) => {
		state.auth = false;
		state.id = '';
		state.userName = '';
	},
	authUser(state, storage) {
		state.id = storage.id;
		state.userName = storage.name;
		state.auth = true;
	}
};

const actions = {
	login        : ({ commit }, user) => {
		commit('login', user);
	},
	register     : ({ commit }, user) => {
		commit('register', user);
	},
	logout       : ({ commit }) => {
		commit('logout');
		localStorage.removeItem('name');
		localStorage.removeItem('id');
	},
	tryAutoLogin({ commit }) {
		const id = localStorage.getItem('id');
		const name = localStorage.getItem('name');
		commit('authUser', { id, name });
	}
};

export default {
	namespaced : true,
	state,
	getters,
	mutations,
	actions
};
