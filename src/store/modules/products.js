import { fetchHotDeals } from '../../api/product';
import { fetchProductCategories } from '../../api/product';

// initial state
const initialState = () => ({
  storeHotDealsProducts: [],
  storeProductCategories: [],
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
  getProductCategories({ commit }) {
    fetchProductCategories().then((productCategories) => {
      commit('setStoreProductCategories', productCategories);
    });
  },
};

// mutations
const mutations = {
  setStoreHotDealsProducts(state, products) {
    state.storeHotDealsProducts = products;
  },
  setStoreProductCategories(state, categories) {
    state.storeProductCategories = categories;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
