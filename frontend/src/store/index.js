import { createStore } from 'vuex';
import { securedConnection } from '../config/axios';

export default createStore({
  state: {
    isLoading: true,
    user: {
      name: '',
      email: '',
    },
    deadlineItems: [],
    recentItems: [],
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
    hasDeadlineItems(state) {
      return state.deadlineItems.length > 0;
    },
    hasRecentItems(state) {
      return state.recentItems.length > 0;
    },
    hasEmptyActionItems(state) {
      return state.recentItems.length === 0 || state.deadlineItems.length === 0;
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
