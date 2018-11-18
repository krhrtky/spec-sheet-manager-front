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
    createResult: false
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    projects: state => state.projects,
    selectedProject: state => (id: number) => {
      if(state.projects)
        return state
          .projects
          .find(project => project.id == id);
      else
        return false;
    },
    getCreateResult: state => state.createResult
  },
  mutations: {
    setAuthenticated:(state, {authenticated}) => {
      state.isAuthenticated = authenticated;
    },
    setProjects: (state, projectList) => {
      state.projects = projectList;
    },
    logout: state => {
      localStorage.removeItem('SSM-TOKEN');
      state.isAuthenticated = false
    },
    setResult: (state, result) => state.createResult = result
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
    createProject: async ({commit}, {project}) => {
      const authKey = localStorage.getItem("SSM-TOKEN");
      if (!authKey) {
        return false;
      }

      try {
        await axios.post(
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
        );

        commit('setResult', true);
      } catch (e) {
        console.error(e);
      }

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


