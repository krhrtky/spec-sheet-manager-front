import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: true,
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
    ],
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    projects: state => state.projects,
    selectedProject: state => {
      if(state.projects)
        return state
          .projects
          .find(project => project.id == state.route.params.id);
      else
        return false;
    }
  },
  mutations: {
    setAuthenticated:(state, {authenticated}) => {
      state.isAuthenticated = authenticated;
    },
    setProjects: (state, projectList) => {
      state.projects = projectList;
    },
  },
  actions: {
    initialAuthenticate: async ({commit}) => {
      const authKey = localStorage.getItem("SSM-TOKEN");
      if (!authKey) {
        return false;
      }

      axios
        .get(
          "http://localhost:8080/api",
          {
            headers: {
              "Content-Type": "application/json",
              "SSM-TOKEN" : authKey
            }
          }
        )
        .then(response => {
          commit('setAuthenticated',{ authenticated: true });
        })
        .catch(error => {
          console.log(error);
          localStorage.removeItem('SSM-TOKEN');
        });
    },
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
    createProject: ({commit}, {project}) => {
      const authKey = localStorage.getItem("SSM-TOKEN");
      if (!authKey) {
        return false;
      }

      axios.post(
        'http://localhost:8080/api/projects/create',
        {
          ...project
        },
        {
          headers: {
            "Content-Type": "application/json",
            "SSM-TOKEN" : authKey
          }
        }
      )
    },

    updateProject:({commit}, {updateProject}) => {

      const authKey = localStorage.getItem("SSM-TOKEN");
      if (!authKey) {
        return false;
      }

      axios.put(
        `http://localhost:8080/api/projects/${updateProject.id}/edit`,
        {
          ...updateProject
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


