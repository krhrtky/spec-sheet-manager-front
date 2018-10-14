import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated


  },
  mutations: {
      setAuthenticated:(state, payload) => {
        state.isAuthenticated = payload.authenticated ;
      },

  },
  actions: {
  }
});
