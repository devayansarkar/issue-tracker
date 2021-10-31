<!-- eslint-disable max-len -->
<template>
  <div>
    <Navbar :page="'home'" />
    <div class="page-container">
      <Topbar />
      <div v-if="!$store.state.isLoading" class="home">
        <div class="home-header">
          <div class="left">
            <div class="title" data-cy="home-title">
              Welcome to your personal issue tracker
            </div>
            <div class="subtitle">
              Organize your tasks and never miss a deadline.
            </div>
            <div class="cta">
              <button class="btn-primary" @click="$router.push('/add-issue')">
                Add new issue
              </button>
              <button class="btn-primary" @click="$router.push('/board')">
                View all issues
              </button>
            </div>
          </div>

          <div class="right">
            <div class="task-count-grid-container">
              <IssueCount
                cardType="total-card"
                :count="$store.getters.getTaskCount.total"
                type="Total"
              />
              <IssueCount
                cardType="count-card"
                :count="$store.getters.getTaskCount.done"
                type="Done"
              />
              <IssueCount
                cardType="count-card"
                :count="$store.getters.getTaskCount.todo"
                type="Todo"
              />
              <IssueCount
                cardType="count-card"
                :count="$store.getters.getTaskCount.doing"
                type="Doing"
              />
            </div>
          </div>
        </div>

        <div v-if="$store.getters.hasDeadlineIssues" class="next-tasks">
          <div class="section-title">Approaching deadline</div>
          <div class="section-items">
            <div
              v-for="(issue, index) in $store.state.deadlineIssues"
              :key="issue.id"
            >
              <IssueCard
                :issueNumber="issue.id"
                :title="issue.title"
                :deadline="issue.end_date"
                :startDate="issue.created_at"
                :issueStatus="issue.status"
                :index="index"
                type="DEADLINE"
              />
            </div>
          </div>
        </div>

        <div v-if="$store.getters.hasRecentIssues" class="next-tasks">
          <div class="section-title">Recent issue</div>
          <div class="section-items">
            <div
              v-for="(issue, index) in $store.state.recentIssues"
              :key="issue.id"
            >
              <IssueCard
                :issueNumber="issue.id"
                :title="issue.title"
                :deadline="issue.end_date"
                :startDate="issue.created_at"
                :issueStatus="issue.status"
                :index="index"
                type="RECENT"
              />
            </div>
          </div>
        </div>

        <div v-if="$store.getters.hasEmptyActionItems" class="next-tasks">
          <div class="section-title">Issue status</div>
          <div class="section-items">
            <IssueStatusInfoCard cardType="deadline" />
            <IssueStatusInfoCard cardType="recent" />
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
import IssueCount from '@/components/IssueCount.vue';
import IssueCard from '@/components/IssueCard.vue';
import IssueStatusInfoCard from '@/components/IssueStatusInfoCard.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Topbar,
    IssueCount,
    IssueCard,
    IssueStatusInfoCard,
    Loading,
  },
  mounted() {
    if (!this.$store.getters.isUserInfoLoaded) {
      this.$store.dispatch('loadUserInfo');
    }
  },
};
</script>

<style lang="scss">
@import '../styles/home.page.styles.scss';
@import '../styles/task.card.styles.scss';
</style>
