import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      name: 'Devayan',
      email: 'devayan@gmail.com',
    },
    deadlineItems: [],
    recentItem: [],
    taskCount: {
      inprogress: 12,
      done: 6,
      doing: 6,
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUser(state) {
      return { ...state.user };
    },
    // getRecentItems(state) { },
    // getDeadlineItems(state) { },
    getTaskCount(state) {
      return {
        ...state.taskCount,
        total: state.taskCount.doing + state.taskCount.done + state.taskCount.inprogress,
      };
    },
  },
});
