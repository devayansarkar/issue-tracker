<template>
  <div>
    <Navbar :page="'addIssue'" />
    <div class="page-container">
      <Topbar />
      <div class="add-issue">
        <div class="page-type">{{ getPageTitle }}</div>
        <div class="issue">
          <form @submit.prevent="saveIssue">
            <div class="input-container">
              <label for="title" class="form-field-label">Title</label>
              <input
                id="title"
                type="text"
                v-model="title"
                class="form-field"
                placeholder="Enter issue title"
              />
            </div>
            <div class="input-container">
              <label for="description" class="form-field-label"
                >Description</label
              >
              <textarea
                id="description"
                v-model="description"
                type="description"
                placeholder="Add your description here"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div class="issue-info">
              <div class="input-container">
                <label for="date" class="form-field-label">End date</label>
                <input
                  :min="getCurrentDate"
                  id="date"
                  type="date"
                  v-model="endDate"
                  class="form-field"
                  placeholder="Enter issue date"
                />
              </div>
              <div class="input-container">
                <label for="lane" class="form-field-label">Add to lane</label>
                <select
                  id="lane"
                  v-model="lane"
                  class="form-field"
                  placeholder="Add your lane"
                  name="lane"
                >
                  <option value="TODO">Todo</option>
                  <option value="INPROGRESS">Doing</option>
                  <option value="DONE">Done</option>
                </select>
              </div>
              <div class="input-container">
                <label for="category" class="form-field-label">Category</label>
                <input
                  id="category"
                  type="text"
                  v-model="category"
                  class="form-field"
                  placeholder="Enter issue category"
                />
              </div>
            </div>
            <div class="issue-cta">
              <button :disabled="isFormIncomplete" class="btn btn-primary">
                {{ getButtonName }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/Topbar.vue';
import moment from 'moment';

export default {
  name: 'AddNewIssue',
  components: {
    Navbar,
    Topbar,
  },
  data() {
    return {
      title: '',
      description: '',
      endDate: '',
      lane: 'TODO',
      category: '',
      pageType: this.$route.name,
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
      return 'Update issue';
    },
    getCurrentDate() {
      return moment().format('YYYY-MM-DD').toString();
    },
  },
  methods: {
    saveIssue() {
      console.log(this.$data);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/issue.styles.scss';
</style>
