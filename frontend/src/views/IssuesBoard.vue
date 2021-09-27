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
                <div
                  v-for="(issue, index) in getLaneItems(task)"
                  :key="issue.id"
                >
                  <IssueCard
                    :issueNumber="issue.id"
                    :title="issue.title"
                    :deadline="issue.end_date"
                    :startDate="issue.created_at"
                    :issueStatus="issue.status"
                    :type="task"
                    :index="index"
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
                <draggable
                  v-model="todo"
                  :group="{ name: 'tasks' }"
                  @change="log"
                >
                  <transition-group type="transition" name="flip-list">
                    <div v-for="(issue, index) in todo" :key="issue.id">
                      <IssueCard
                        :issueNumber="issue.id"
                        :title="issue.title"
                        :deadline="issue.end_date"
                        :startDate="issue.created_at"
                        :issueStatus="issue.status"
                        :index="index"
                        type="TODO"
                      />
                    </div>
                  </transition-group>
                </draggable>
                <div
                  class="lane-no-item"
                  v-if="getLaneItems('TODO').length === 0"
                >
                  No tasks
                  <draggable
                    v-model="todo"
                    :group="{ name: 'tasks' }"
                    @change="log"
                  >
                    <transition-group
                      type="transition"
                      name="flip-list"
                    ></transition-group>
                  </draggable>
                </div>
              </div>
            </div>
            <div class="lane">
              <div class="lane-header">
                <div class="lane-title">DOING</div>
              </div>
              <div class="lane-items">
                <draggable
                  v-model="doing"
                  :group="{ name: 'tasks' }"
                  @change="log"
                >
                  <transition-group type="transition" name="flip-list">
                    <div v-for="(issue, index) in doing" :key="issue.id">
                      <IssueCard
                        :issueNumber="issue.id"
                        :title="issue.title"
                        :deadline="issue.end_date"
                        :startDate="issue.created_at"
                        :issueStatus="issue.status"
                        :index="index"
                        type="DOING"
                      />
                    </div>
                  </transition-group>
                </draggable>
                <div
                  class="lane-no-item"
                  v-if="getLaneItems('DOING').length === 0"
                >
                  No tasks
                  <draggable
                    v-model="doing"
                    :group="{ name: 'tasks' }"
                    @change="log"
                  >
                    <transition-group
                      type="transition"
                      name="flip-list"
                    ></transition-group>
                  </draggable>
                </div>
              </div>
            </div>
            <div class="lane">
              <div class="lane-header">
                <div class="lane-title">DONE</div>
              </div>
              <div class="lane-items">
                <draggable
                  v-model="done"
                  :group="{ name: 'tasks' }"
                  @change="log"
                >
                  <transition-group type="transition" name="flip-list">
                    <div v-for="(issue, index) in done" :key="issue.id">
                      <IssueCard
                        :issueNumber="issue.id"
                        :title="issue.title"
                        :deadline="issue.end_date"
                        :startDate="issue.created_at"
                        :issueStatus="issue.status"
                        :index="index"
                        type="DONE"
                      />
                    </div>
                  </transition-group>
                </draggable>
                <div
                  class="lane-no-item"
                  v-if="getLaneItems('DONE').length === 0"
                >
                  No tasks
                  <draggable
                    v-model="doing"
                    :group="{ name: 'tasks' }"
                    @change="log"
                  >
                    <transition-group
                      type="transition"
                      name="flip-list"
                    ></transition-group>
                  </draggable>
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
import { VueDraggableNext } from 'vue-draggable-next';

export default {
  name: 'IssuesBoard',
  components: {
    Navbar,
    Topbar,
    Loading,
    IssueCard,
    draggable: VueDraggableNext,
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
      return JSON.parse(JSON.stringify(this.$store.getters.getIssues(lane)));
    },
    log(item) {
      console.log(item);
    },
  },
  created() {
    if (!this.$store.getters.areIssuesLoaded || !this.$store.getters.isUserInfoLoaded) {
      this.$store.dispatch('loadAllIssues');
    }
  },
  computed: {
    todo: {
      get() {
        return this.$store.getters.getIssues('TODO');
      },
      set(items) {
        this.$store.commit('reOrderItems', { lane: 'TODO', items });
      },
    },
    doing: {
      get() {
        return this.$store.getters.getIssues('DOING');
      },
      set(items) {
        this.$store.commit('reOrderItems', { lane: 'DOING', items });
      },
    },
    done: {
      get() {
        return this.$store.getters.getIssues('DONE');
      },
      set(items) {
        this.$store.commit('reOrderItems', { lane: 'DONE', items });
      },
    },
  },
};
</script>

<style lang="scss">
@import '../styles/button.styles.scss';
@import '../styles/issues-board.page.styles.scss';
@import '../styles/media.queries.scss';
</style>
