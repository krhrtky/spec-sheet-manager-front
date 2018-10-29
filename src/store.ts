import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
      fullPath: ''
    },
    projects: [
      {
        id: 0,
        name: '',
        language: '',
        startDate: '',
        endDate: '',
        framework: '',
        middleware: '',
        description: '',
      },
      {
        id: 0,
        name: '',
        language: '',
        startDate: '',
        endDate: '',
        framework: '',
        middleware: '',
        description: '',
      },
    ],
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    projects: state => state.projects,
    selectedProject: state => ''
      // state
      //   .projects
      //   .find(project => project.id == state.route.params.id)
  },
  mutations: {
    setAuthenticated:(state, {authenticated}) => {
      state.isAuthenticated = authenticated;
    },
    setProjects: (state, projectList) => {
      state.projects = projectList;
    }
  },
  actions: {

    getAllProjects: ({commit}) => {
      const authKey = localStorage.getItem("SSM-TOKEN");
      if (!authKey) {
        return false;
      }

      axios
        .get('http://localhost:8080/api/projects',
          {
            headers: {
              "Content-Type": "application/json",
              "SSM-TOKEN" : authKey
            }
          }
        )
        .then(res => commit('setProjects', res.data))
        .catch(error => console.log(error))

    },

    updateProject:({commit}, {updateProject}) => {

      const authKey = localStorage.getItem("SSM-TOKEN");
      if (!authKey) {
        return false;
      }

      axios.post(
        `http://localhost:8080/api/projects/${updateProject.id}/edit`,
        {
          id: updateProject.id,
          name: updateProject.name,
          language: updateProject.language,
          startDate: updateProject.startDate,
          endDate: updateProject.endDate,
          framework: updateProject.framework,
          middleware: updateProject.middleware,
          about: updateProject.about,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "SSM-TOKEN" : authKey
          }
        }
      )
        .then(data => console.log(data))
        .catch(error => console.log(error))

    }
  }
});


