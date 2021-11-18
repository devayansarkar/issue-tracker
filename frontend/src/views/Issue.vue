<template>
  <div>
    <Navbar :page="getCurrentPage" />
    <div class="page-container">
      <Topbar />
      <div v-if="!$store.state.isLoading" class="add-issue">
        <div
          v-if="$store.state.message.text"
          class="info-message"
          :class="$store.state.message.type"
          data-cy="issue-info-message"
        >
          {{ $store.state.message.text }}
        </div>
        <div class="page-type">{{ getPageTitle }}</div>
        <div class="issue">
          <form @submit.prevent="saveIssue">
            <div class="input-container">
              <label for="title" class="form-field-label">Title</label>
              <input
                @click="makeEditable"
                :readonly="isReadonly"
                id="title"
                type="text"
                v-model="title"
                class="form-field"
                placeholder="Enter issue title"
                data-cy="title-input"
              />
            </div>
            <div class="input-container">
              <label for="description" class="form-field-label"
                >Description</label
              >
              <textarea
                :readonly="isReadonly"
                @click="makeEditable"
                id="description"
                v-model="description"
                type="description"
                placeholder="Add your description here"
                cols="30"
                rows="8"
                data-cy="description-input"
              ></textarea>
            </div>
            <div class="issue-info">
              <div class="input-container">
                <label for="date" class="form-field-label">End date</label>
                <input
                  :min="getCurrentDate"
                  :readonly="isReadonly"
                  @click="makeEditable"
                  id="date"
                  type="date"
                  v-model="endDate"
                  class="form-field"
                  placeholder="Enter issue date"
                  data-cy="date-input"
                />
              </div>
              <div class="input-container">
                <label for="lane" class="form-field-label">Add to lane</label>
                <select
                  :readonly="isReadonly"
                  @click="makeEditable"
                  id="lane"
                  v-model="lane"
                  placeholder="Add your lane"
                  name="lane"
                  :class="isReadonly ? 'read-only-select' : ''"
                  data-cy="lane-input"
                >
                  <option value="TODO">Todo</option>
                  <option value="INPROGRESS">Doing</option>
                  <option value="DONE">Done</option>
                </select>
              </div>
              <div class="input-container">
                <label for="category" class="form-field-label">Category</label>
                <input
                  :readonly="isReadonly"
                  @click="makeEditable"
                  id="category"
                  type="text"
                  v-model="category"
                  class="form-field"
                  placeholder="Enter issue category"
                  data-cy="category-input"
                />
              </div>
            </div>
            <div class="issue-cta">
              <button
                v-if="!isReadonly"
                :disabled="isFormIncomplete"
                class="btn btn-primary"
                data-cy="add-issue-button"
              >
                {{ getButtonName }}
              </button>
            </div>
          </form>
        </div>
        <div class="comments-section">
          <div v-if="!isAddCommentVisible"
            class="add-comment-button"
            @click="toggleAddCommentSection">
            + Add new comment
          </div>
          <div class="input-container add-comment" v-if="isAddCommentVisible">
              <textarea
                id="comment"
                v-model="comment"
                type="comment"
                placeholder="Add your comment here"
                cols="30"
                rows="5"
                data-cy="comment-input"
              ></textarea>
          </div>
          <div class="comments-button-section" v-if="isAddCommentVisible">
              <button class="btn-danger" @click="toggleAddCommentSection"> Cancel </button>
              <button class="btn-primary"> Save </button>
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
import moment from 'moment';

export default {
  name: 'AddNewIssue',
  components: {
    Navbar,
    Topbar,
    Loading,
  },
  data() {
    return {
      id: 0,
      title: '',
      description: '',
      endDate: '',
      lane: 'TODO',
      category: '',
      pageType: this.$route.name,
      isReadonly: this.$route.name === 'ViewIssue',
      isAddCommentVisible: false,
      comment: '',
    };
  },
  computed: {
    isFormIncomplete() {
      return this.title === '' || this.description === '';
    },
    getButtonName() {
      if (this.pageType === 'AddIssue') {
        return 'Save';
      }
      return 'Update';
    },
    getPageTitle() {
      if (this.pageType === 'AddIssue') {
        return 'Add issue';
      }
      if (this.pageType === 'ViewIssue') {
        const issueId = this.$route.params && this.$route.params.issue_id;
        return `Viewing issue : ${issueId}`;
      }
      if (this.pageType === 'UpdateIssue') {
        const issueId = this.$route.params && this.$route.params.issue_id;
        return `Updating issue : ${issueId}`;
      }
      return 'Update issue';
    },
    getCurrentDate() {
      return moment().format('YYYY-MM-DD').toString();
    },
    getCurrentPage() {
      if (this.pageType === 'AddIssue' || this.pageType === 'UpdateIssue') {
        return 'addIssue';
      }
      return 'viewIssue';
    },
  },
  methods: {
    cleanState() {
      this.title = '';
      this.description = '';
      this.endDate = '';
      this.lane = 'TODO';
      this.category = '';
      this.id = '';
    },
    saveIssue() {
      const formattedDate = moment(this.endDate, 'YYYY-MM-DD').format(
        'DD/MM/YYYY',
      );
      if (this.pageType === 'UpdateIssue') {
        this.$store.dispatch('updateIssue', {
          id: this.id,
          payload: {
            title: this.title,
            description: this.description,
            category: this.category,
            end_date: formattedDate,
            status: this.lane,
          },
        });
      } else {
        this.$store.dispatch('addNewIssue', {
          title: this.title,
          description: this.description,
          category: this.category,
          end_date: formattedDate,
          status: this.lane,
        });
      }
    },
    toggleAddCommentSection() {
      this.isAddCommentVisible = !this.isAddCommentVisible;
    },
    makeEditable() {
      this.isReadonly = false;
      if (this.pageType !== 'AddIssue') {
        this.pageType = 'UpdateIssue';
      }
    },
  },
  created() {
    if (this.$route.params && this.$route.params.issue_id) {
      const { params } = this.$route;

      if (params.index === undefined || params.type === undefined) {
        console.log('Fetching the issue from the backend');
        this.$store.dispatch('getIssue', {
          id: params.issue_id,
        });
      } else {
        console.log('Not fetching the issue from the backend');
        const issue = this.$store.getters.getIssue({
          type: params.type,
          index: params.index,
        });
        this.$store.commit('getIssueSuccess', issue);
        this.title = issue.title;
        this.description = issue.description;
        this.endDate = issue.end_date;
        this.lane = issue.status;
        this.category = issue.category;
        this.id = issue.id;
      }
    }

    this.$store.watch(
      (state) => state.issue,
      (item) => {
        if (item.title !== '') {
          this.title = item.title;
          this.description = item.description;
          this.endDate = item.end_date;
          this.lane = item.status;
          this.category = item.category;
          this.id = item.id;
        }
      },
    );
    this.$store.watch(
      (state) => state.message,
      (item) => {
        if (item.type === 'success' && this.pageType === 'AddIssue') {
          this.cleanState();
        }
      },
    );
  },
};
</script>

<style lang="scss">
@import '../styles/issue.styles.scss';
@import '../styles/info.styles.scss';
</style>
