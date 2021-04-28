import { createStore } from 'vuex';
import { securedConnection } from '../config/axios';

export default createStore({
  state: {
    isLoading: true,
    user: {
      name: '',
      email: '',
    },
    tasks: {
      todo: [],
      doing: [],
      done: [],
    },
    deadlineIssues: [],
    recentIssues: [],
    taskCount: {
      inprogress: 0,
      done: 0,
      todo: 0,
    },
    error: {
      isError: false,
      message: '',
    },
  },
  mutations: {
    startLoader(state) {
      state.isLoading = true;
    },
    loadUserInfoSuccess(state, responseBody) {
      state.user = { name: responseBody.name, email: responseBody.email };
      state.taskCount = {
        done: responseBody.done,
        inprogress: responseBody.inProgress,
        todo: responseBody.todo,
      };
      state.deadlineIssues = responseBody.deadlineIssues;
      state.recentIssues = responseBody.recentlyUpdatedIssues;
      state.isLoading = false;
    },
    loadUserInfoFailure(state) {
      state.isLoading = false;
    },
    loadAllIssuesSuccess(state, responseBody) {
      const todo = [];
      const doing = [];
      const done = [];
      if (responseBody !== undefined && responseBody.issues !== undefined) {
        responseBody.issues.forEach((t) => {
          if (t.status === 'TODO') {
            todo.push(t);
          } else if (t.status === 'INPROGRESS') {
            doing.push(t);
          } else {
            done.push(t);
          }
        });
      }
      state.tasks = { todo, doing, done };
      state.isLoading = false;
    },
    loadAllIssuesFailure(state, responseBody) {
      state.isLoading = false;
      if (responseBody !== undefined && responseBody.tasks !== undefined) {
        responseBody.tasks.forEach((t) => {
          console.log(t);
        });
      }
    },
    signoutSuccess(state) {
      state.isLoading = false;
      delete localStorage.access_token;
      delete localStorage.refresh_token;
      delete localStorage.access_expires_at;
      delete localStorage.refresh_token_expires_at;
    },
    signoutFailure(state) {
      state.isLoading = true;
    },
  },
  actions: {
    loadUserInfo({ commit }) {
      commit('startLoader');
      securedConnection
        .get('/api/v1/user')
        .then((r) => commit('loadUserInfoSuccess', r.data))
        .catch((e) => commit('loadUserInfoFailure', e));
    },
    loadAllIssues({ commit }) {
      commit('startLoader');
      securedConnection.get('/api/v1/issues')
        .then((r) => commit('loadAllIssuesSuccess', r.data))
        .catch((e) => commit('loadAllIssuesFailure', e));
    },
    logout({ commit }) {
      commit('startLoader');
      securedConnection.delete('/signin')
        .then(() => commit('signoutSuccess'))
        .catch(() => commit('signoutFailure'));
    },
  },
  modules: {
  },
  getters: {
    getUser(state) {
      return { ...state.user };
    },
    hasDeadlineIssues(state) {
      return state.deadlineIssues.length > 0;
    },
    hasRecentIssues(state) {
      return state.recentIssues.length > 0;
    },
    hasEmptyActionItems(state) {
      return state.recentIssues.length === 0 || state.deadlineIssues.length === 0;
    },
    getTaskCount(state) {
      return {
        ...state.taskCount,
        total: state.taskCount.todo + state.taskCount.done + state.taskCount.inprogress,
      };
    },
    getIssues: (state) => (payload) => {
      if (payload === 'TODO') {
        return state.tasks.todo;
      }
      if (payload === 'DOING') {
        return state.tasks.doing;
      }
      return state.tasks.done;
    },
  },
});
