const state = {
	shopItems : [
		{
			name     : 'Laptop',
			id       : 1,
			imageUrl :
				'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
			route    : '/shop/laptops',
			height   : '300px',
			col      : 4
		},
		{
			name     : 'Desktop',
			id       : 2,
			imageUrl :
				'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
			route    : '/shop/desktops',
			height   : '300px',
			col      : 4
		},
		{
			name     : 'Mouse',
			id       : 3,
			imageUrl :
				'https://images.unsplash.com/photo-1565788061370-4771680a4df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1020&q=80',
			route    : '/shop/mouses',
			height   : '300px',
			col      : 4
		},
		{
			name     : 'Keyboard',
			id       : 4,
			imageUrl :
				'https://images.unsplash.com/photo-1493878777218-cf22a808450c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
			route    : '/shop/keyboards',
			height   : '400px',
			col      : 6
		},
		{
			name     : 'Ipad',
			id       : 5,
			imageUrl :
				'https://images.unsplash.com/photo-1527697911963-20cb424e9608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80',
			route    : '/shop/ipads',
			height   : '400px',
			col      : 6
		}
	]
};

const getters = {
	shopItems : (state) => {
		return state.shopItems;
	}
};

const mutations = {};

const actions = {};

export default {
	namespaced : true,
	actions,
	getters,
	state,
	mutations
};
