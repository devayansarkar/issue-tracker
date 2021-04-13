<template>
  <div>
    <Navbar :page="'board'" />
    <div class="page-container">
      <Topbar />
      <div class="mobile">
        <div class="mobile-container">
          <div class="lane-selector">Now showing issues in :</div>
          <div class="status-group">
            <div
              class="status"
              :class="task === 'TODO' ? 'status-active' : ''"
              @click="updateActiveIssueFilter('TODO')"
            >
              Todo
            </div>
            <div
              class="status"
              :class="task === 'DOING' ? 'status-active' : ''"
              @click="updateActiveIssueFilter('DOING')"
            >
              Doing
            </div>
            <div
              class="status"
              :class="task === 'DONE' ? 'status-active' : ''"
              @click="updateActiveIssueFilter('DONE')"
            >
              Done
            </div>
          </div>
          <div class="lane">
            <div class="lane-header">
              <div class="lane-title">
                {{ task }}
              </div>
            <button v-if="task ==='TODO'" class="btn-primary-small">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/Topbar.vue';

export default {
  name: 'IssuesBoard',
  components: {
    Navbar,
    Topbar,
  },
  data() {
    return {
      task: 'TODO',
    };
  },
  methods: {
    updateActiveIssueFilter(issue) {
      this.task = issue;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/button.styles.scss';
@import '../styles/issues-board.page.styles.scss';
</style>
