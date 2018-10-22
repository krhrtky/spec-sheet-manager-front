import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    selectedProject: {},
    route: {
      name: '',
      path: '',
      hash: '',
      query: {},
      params: {
        id: 0
      },
      "fullPath": "/detail/1"
    },
    projects: [
      {
        id: 1,
        name: 'sample1',
        languages: 'java',
        startDate: '2018-01',
        endDate: '2018-04',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project1',

      },
      {
        id: 2,
        name: 'sample2',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project2',
      },
      {
        id: 3,
        name: 'sample3',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project3',
      },
      {
        id: 4,
        name: 'sample4',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'spring',
        middlewares: 'postgresql',
        description: 'test project4',
      },
      {
        id: 5,
        name: 'sample5',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'struts',
        middlewares: 'mysql',
        description: 'test project5',
      },
      {
        id: 6,
        name: 'sample6',
        languages: 'java',
        startDate: '2018-01',
        endDate: '2018-04',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project6',
      },
      {
        id: 7,
        name: 'sample7',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project7',
      },
      {
        id: 8,
        name: 'sample8',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project8',
      },
      {
        id: 9,
        name: 'sample9',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project9',
      },
      {
        id: 10,
        name: 'sample10',
        languages: 'kotlin',
        startDate: '2018-05',
        endDate: '2018-07',
        frameworks: 'spring',
        middlewares: 'mysql',
        description: 'test project10',
      },
    ],

  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    projects: state => state.projects,
    selectedProject: state => state
        .projects
        .find(project => project.id == state.route.params.id)
  },
  mutations: {
    setAuthenticated:(state, {authenticated}) => {
      state.isAuthenticated = authenticated ;
    }
  },
  actions: {
  }
});
