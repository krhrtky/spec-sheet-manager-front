import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    projects: [
      {
        id: 1,
        name: 'sample',
        languages: 'java',
        startDate: '2018-01',
        endDate: '2018-04',
      },
      {
        id: 2,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
      {
        id: 3,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
      {
        id: 4,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
      {
        id: 5,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
      {
        id: 6,
        name: 'sample',
        languages: 'java',
        startDate: '2018-01',
        endDate: '2018-04',
      },
      {
        id: 7,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
      {
        id: 8,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
      {
        id: 9,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
      {
        id: 10,
        name: 'sample1',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
      },
    ],

  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    projects: state => state.projects
  },
  mutations: {
    setAuthenticated:(state, payload) => {
      state.isAuthenticated = payload.authenticated ;
    },

  },
  actions: {
  }
});
