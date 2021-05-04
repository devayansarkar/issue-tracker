import { createStore } from 'vuex';
import { securedConnection } from '../config/axios';

export default createStore({
  state: {
    isLoading: false,
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
      doing: -1,
      done: -1,
      todo: -1,
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
        doing: responseBody.inProgress,
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
    addNewIssueSuccess(state) {
      state.isLoading = false;
    },
    addNewIssueFailure(state) {
      state.isLoading = false;
    },
  },
  actions: {
    loadUserInfo({ commit }, ignoreLoader) {
      if (!ignoreLoader) {
        commit('startLoader');
      }
      securedConnection
        .get('/api/v1/user')
        .then((r) => commit('loadUserInfoSuccess', r.data))
        .catch((e) => commit('loadUserInfoFailure', e));
    },
    loadAllIssues({ commit }, ignoreLoader) {
      if (!ignoreLoader) {
        commit('startLoader');
      }
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
    addNewIssue({ commit, dispatch }, payload) {
      commit('startLoader');
      securedConnection.post('/api/v1/issues', payload)
        .then(() => {
          commit('addNewIssueSuccess');
          dispatch('loadAllIssues', true);
          dispatch('loadUserInfo', true);
        })
        .catch(() => commit('addNewIssueFailure'));
    },
    updateIssue({ commit, dispatch }, { payload, id }) {
      commit('startLoader');
      securedConnection.patch(`/api/v1/issues/${id}`, payload)
        .then(() => {
          commit('addNewIssueSuccess');
          dispatch('loadAllIssues', true);
          dispatch('loadUserInfo', true);
        })
        .catch(() => commit('addNewIssueFailure'));
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
        total: state.taskCount.todo + state.taskCount.done + state.taskCount.doing,
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
    isUserInfoLoaded(state) {
      return state.taskCount.done >= 0
        && state.taskCount.doing >= 0
        && state.taskCount.todo >= 0;
    },
    areIssuesLoaded(state) {
      return state.taskCount.todo <= state.tasks.todo.length
        && state.taskCount.doing <= state.tasks.doing.length
        && state.taskCount.done <= state.tasks.done.length;
    },
    getIssue: (state) => (payload) => {
      const { type, index } = payload;

      switch (type) {
        case 'deadline':
          return state.deadlineIssues[index];
        case 'recent':
          return state.recentIssues[index];
        case 'todo':
          return state.tasks.todo[index];
        case 'doing':
          return state.tasks.doing[index];
        case 'done':
          return state.tasks.done[index];
        default:
          return undefined;
      }
    },
  },
});
