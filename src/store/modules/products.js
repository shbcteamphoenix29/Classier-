import { fetchHotDeals } from '../../api/product';

// initial state
const initialState = () => ({
  storeHotDealsProducts: [],
});

// getters
const getters = {};

// actions
const actions = {
  getHotDealsProducts({ commit }) {
    fetchHotDeals().then((hotDeals) => {
      console.log(hotDeals);
      commit('setStoreHotDealsProducts', hotDeals);
    });
  },
};

// mutations
const mutations = {
  setStoreHotDealsProducts(state, products) {
    state.storeHotDealsProducts = products;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
