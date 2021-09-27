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
    message: {
      type: 'success',
      text: '',
    },
    issue: {
      id: '',
      title: '',
      description: '',
      endDate: '',
      lane: '',
      category: '',
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
    issueOperationSuccess(state, payload) {
      state.isLoading = false;
      state.message = { type: 'success', text: payload };
      setTimeout(() => {
        state.message = { type: 'success', text: '' };
      }, 5000);
    },
    issueOperationFailure(state, payload) {
      state.isLoading = false;
      state.message = { type: 'error', text: payload };
      setTimeout(() => {
        state.message = { type: 'error', text: '' };
      }, 5000);
    },
    getIssueSuccess(state, payload) {
      state.isLoading = false;
      state.issue = payload;
    },
    reOrderIssues(state, payload) {
      switch (payload.lane) {
        case 'TODO':
          state.tasks.todo = payload.issues;
          break;
        case 'DOING':
          state.tasks.doing = payload.issues;
          break;
        default:
          state.tasks.done = payload.issues;
          break;
      }
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
          commit('issueOperationSuccess', 'Issue is added successfully.');
          dispatch('loadAllIssues', true);
          dispatch('loadUserInfo', true);
        })
        .catch(() => commit('issueOperationFailure', 'Unable to add the issue, please try again later.'));
    },
    updateIssue({ commit, dispatch }, { payload, id }) {
      commit('startLoader');
      securedConnection.patch(`/api/v1/issues/${id}`, payload)
        .then(() => {
          commit('issueOperationSuccess', 'Issue is updated successfully.');
          dispatch('loadAllIssues', true);
          dispatch('loadUserInfo', true);
        })
        .catch((e) => {
          console.log(e);
          commit('issueOperationFailure', 'Unable to update the issue, please try again later');
        });
    },
    updateIssueStatus({ commit, dispatch }, { status, id }) {
      let issueStatus = status.toUpperCase();
      if (status === 'Doing') {
        issueStatus = 'INPROGRESS';
      }
      commit('startLoader');
      securedConnection.patch(`/api/v1/issues/${id}`, { status: issueStatus })
        .then(() => {
          commit('issueOperationSuccess', 'Issue is updated successfully.');
          dispatch('loadAllIssues', true);
          dispatch('loadUserInfo', true);
        })
        .catch((e) => {
          console.log(e);
          commit('issueOperationFailure', 'Unable to update the issue, please try again later');
        });
    },
    updateIssueStatusOnDrag({ state }, payload) {
      let request = {};
      if (payload.lane === 'TODO') {
        if (payload.newIndex !== state.tasks.todo.length - 1) {
          request = { issue: { next_issue: state.tasks.todo[payload.newIndex + 1].id, status: 'TODO' } };
        } else {
          request = { issue: { next_issue: -1, status: 'TODO' } };
        }
      } else if (payload.lane === 'DONE') {
        if (payload.newIndex !== state.tasks.done.length - 1) {
          request = { issue: { next_issue: state.tasks.done[payload.newIndex + 1].id, status: 'DONE' } };
        } else {
          request = { issue: { next_issue: -1, status: 'DONE' } };
        }
      } else if (payload.lane === 'DOING') {
        if (payload.newIndex !== state.tasks.doing.length - 1) {
          request = { issue: { next_issue: state.tasks.doing[payload.newIndex + 1].id, status: 'INPROGRESS' } };
        } else {
          request = { issue: { next_issue: -1, status: 'INPROGRESS' } };
        }
      }
      securedConnection.patch(`/api/v1/order/${payload.id}`, request)
        .then(() => {
          console.log('Issue is updated.');
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getIssue({ commit }, { id }) {
      commit('startLoader');
      securedConnection.get(`/api/v1/issues/${id}`)
        .then((r) => {
          commit('getIssueSuccess', r.data);
        })
        .catch(() => commit('issueOperationFailure', 'Unable to fetch issue, please check the number or add a new one'));
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
        case 'DEADLINE':
          return state.deadlineIssues[index];
        case 'RECENT':
          return state.recentIssues[index];
        case 'TODO':
          return state.tasks.todo[index];
        case 'DOING':
          return state.tasks.doing[index];
        case 'DONE':
          return state.tasks.done[index];
        default:
          return undefined;
      }
    },
  },
});
