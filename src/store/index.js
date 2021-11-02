import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		paymentsList: [],
		categoryList: []
	},
	mutations: {
		setPaymentListData(state, payload) {
			state.paymentsList = payload;
		},
		addPaymentListData(state, payload) {
			state.paymentsList.push(payload);
		},
		setCategoryList(state, payload) {
			state.categoryList = payload
		}
		// editPaymentListData (state, payload){
		//   Vue.set(state.paymentsList, 0, payload)
		//   state.paymentList[0] = payload
		//   state.paymentList = [...state.paymentList]
		// }
	},
	actions: {
		fetchData({ dispatch }) {
			return new Promise(resolve => {
				setTimeout(() => {
					const items = [];
					for (let i = 1; i < 101; i++) {
						items.push({
							id: i,
							date: "28.03.2020",
							category: "Food",
							value: i
						});
					}
					resolve(items)
				}, 2000);
			}).then(res => {
				dispatch("upgradeData", res);
			});
		},
		fetchCategoryList({ commit }) {
			return new Promise(resolve => {
				setTimeout(() => {
					const items = ['Sport', 'Food', 'Education', 'Internet'];
					resolve(items)
				}, 500);
			}).then(res => {
				commit("setCategoryList", res);
			});
		},
		upgradeData({ commit, dispatch }, payload) {
			// updateData
			dispatch('fetchCategoryList')
			commit('setPaymentListData', payload)
		}
	},
	getters: {
		getPaymentsList: state => state.paymentsList,
		getCategoryList: state => state.categoryList,
		getFullPaymentValue: state => {
			return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
		}
	}
});