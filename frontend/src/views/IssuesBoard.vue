<template>
  <div>
    <Navbar :page="'board'" />
    <div class="page-container">
      <Topbar />
      <div class="board-title">Board</div>
      <div v-if="!$store.state.isLoading">
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
                <button
                  v-if="task === 'TODO'"
                  class="btn-primary-small"
                  @click="$router.push('/add-issue')"
                >
                  +
                </button>
              </div>
              <div class="lane-items">
                <div v-for="issue in getLaneItems(task)" :key="issue.id">
                  <IssueCard
                    :issueNumber="issue.id"
                    :title="issue.title"
                    :deadline="issue.end_date"
                    :startDate="issue.created_at"
                    :issueStatus="issue.status"
                  />
                </div>
                <div
                  class="lane-no-item"
                  v-if="getLaneItems(task).length === 0"
                >
                  No tasks
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="desktop">
          <div class="lane-container">
            <div class="lane">
              <div class="lane-header">
                <div class="lane-title">TODO</div>
                <button
                  class="btn-primary-small"
                  @click="$router.push('/add-issue')"
                >
                  +
                </button>
              </div>
              <div class="lane-items">
                <div v-for="issue in getLaneItems('TODO')" :key="issue.id">
                  <IssueCard
                    :issueNumber="issue.id"
                    :title="issue.title"
                    :deadline="issue.end_date"
                    :startDate="issue.created_at"
                    :issueStatus="issue.status"
                  />
                </div>
                <div
                  class="lane-no-item"
                  v-if="getLaneItems(task).length === 0"
                >
                  No tasks
                </div>
              </div>
            </div>
            <div class="lane">
              <div class="lane-header">
                <div class="lane-title">DOING</div>
              </div>
              <div class="lane-items">
                <div v-for="issue in getLaneItems('DOING')" :key="issue.id">
                  <IssueCard
                    :issueNumber="issue.id"
                    :title="issue.title"
                    :deadline="issue.end_date"
                    :startDate="issue.created_at"
                    :issueStatus="issue.status"
                  />
                </div>
                <div
                  class="lane-no-item"
                  v-if="getLaneItems(task).length === 0"
                >
                  No tasks
                </div>
              </div>
            </div>
            <div class="lane">
              <div class="lane-header">
                <div class="lane-title">DONE</div>
              </div>
              <div class="lane-items">
                <div v-for="issue in getLaneItems('DONE')" :key="issue.id">
                  <IssueCard
                    :issueNumber="issue.id"
                    :title="issue.title"
                    :deadline="issue.end_date"
                    :startDate="issue.created_at"
                    :issueStatus="issue.status"
                  />
                </div>
                <div
                  class="lane-no-item"
                  v-if="getLaneItems(task).length === 0"
                >
                  No tasks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$store.state.isLoading" class="loading-container">
        <Loading />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/Topbar.vue';
import Loading from '@/components/Loading.vue';
import IssueCard from '@/components/IssueCard.vue';

export default {
  name: 'IssuesBoard',
  components: {
    Navbar,
    Topbar,
    Loading,
    IssueCard,
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
    getLaneItems(lane) {
      return this.$store.getters.getIssues(lane);
    },
  },
  created() {
    this.$store.dispatch('loadAllIssues');
  },
};
</script>

<style lang="scss">
@import '../styles/button.styles.scss';
@import '../styles/issues-board.page.styles.scss';
@import '../styles/media.queries.scss';
</style>
