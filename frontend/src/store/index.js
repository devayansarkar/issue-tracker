import { createStore } from 'vuex';
import { securedConnection } from '../config/axios';

export default createStore({
  state: {
    isLoading: true,
    user: {
      name: '',
      email: '',
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
    initiateLoadUserInfo(state) {
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
  },
  actions: {
    loadUserInfo({ commit }) {
      commit('initiateLoadUserInfo');
      securedConnection
        .get('/api/v1/user')
        .then((r) => commit('loadUserInfoSuccess', r.data))
        .catch((e) => commit('loadUserInfoFailure', e));
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
    // getRecentItems(state) { },
    // getDeadlineItems(state) { },
    getTaskCount(state) {
      return {
        ...state.taskCount,
        total: state.taskCount.todo + state.taskCount.done + state.taskCount.inprogress,
      };
    },
  },
});
