import { fetchHotDeals, fetchProductCategories, fetchProductsByCategory } from '../../api/product';

// initial state
const initialState = () => ({
  storeHotDealsProducts: [],
  storeProductCategories: [],
  storeCategoryProducts: [],
});

// getters
const getters = {};

// actions
const actions = {
  getHotDealsProducts({ commit }) {
    fetchHotDeals().then((hotDeals) => {
      commit('setStoreHotDealsProducts', hotDeals);
    });
  },
  getProductCategories({ commit }) {
    fetchProductCategories().then((productCategories) => {
      commit('setStoreProductCategories', productCategories);
    });
  },
  getProductsByCategory({ commit }, payload) {
    fetchProductsByCategory(payload.categoryName).then((products) => {
      commit('setStoreCategoryProducts', products);
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
  setStoreCategoryProducts(state, products) {
    state.storeCategoryProducts = products;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
