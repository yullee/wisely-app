import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    member: [],
    price: 0,
    quantity: 1,
    newQuantity: 1,
    loaded: false,
    show: false,
    navShow: false,
    subscription: false,
    // Check if the window innerwidth is mobile size 
    mobile: window.innerWidth < 768 ? true : false,
  },
  mutations: {
    setMember(state, member) {
      state.member = member;
    },
    setPrice(state, price) {
      state.price = price;
    },
    setQuantity(state, quantity) {
      state.quantity = quantity;
    },
    setNewQuantity(state, newQuantity) {
      state.newQuantity = newQuantity;
    },
    setLoaded(state, loaded) {
      state.loaded = loaded;
    },
    setShow(state, show) {
      state.show = show;
    },
    setSubscription(state, subscription) {
      state.subscription = subscription;
    },
    setMobile(state, mobile) {
      state.mobile = mobile;
    },
    setNavShow(state, navShow) {
      state.navShow = navShow;
    },
  },
  actions: {
    setMember({ commit }, member) {
      commit('setMember', member);
    },
    setPrice({ commit }, price) {
      commit('setPrice', price);
    },
    setQuantity({ commit }, quantity) {
      commit('setQuantity', quantity);
    },
    setNewQuantity({ commit }, newQuantity) {
      commit('setNewQuantity', newQuantity);
    },
    setLoaded({ commit }, loaded) {
      commit('setLoaded', loaded);
    },
    setShow({ commit }, show) {
      commit('setShow', show);
    },
    setSubscription({ commit }, subscription) {
      commit('setSubscription', subscription);
    },
    setMobile({ commit }, mobile) {
      commit('setMobile', mobile);
    },
    setNavShow({ commit }, navShow) {
      commit('setNavShow', navShow);
    },
  },
});
