<template>
  <div>
    <Navbar :page="'addIssue'" />
    <div class="page-container">
      <Topbar />
      <div v-if="!$store.state.isLoading" class="add-issue">
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
              ></textarea>
            </div>
            <div class="issue-info">
              <div class="input-container">
                <label for="date" class="form-field-label">End date</label>
                <input
                  :readonly="isReadonly"
                  @click="makeEditable"
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
                  :readonly="isReadonly"
                  @click="makeEditable"
                  id="lane"
                  v-model="lane"
                  placeholder="Add your lane"
                  name="lane"
                  :class="isReadonly ? 'read-only-select' : ''"
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
                />
              </div>
            </div>
            <div class="issue-cta">
              <button
                v-if="!isReadonly"
                :disabled="isFormIncomplete"
                class="btn btn-primary"
              >
                {{ getButtonName }}
              </button>
            </div>
          </form>
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
      title: '',
      description: '',
      endDate: '',
      lane: 'TODO',
      category: '',
      pageType: this.$route.name,
      isReadonly: this.$route.name === 'ViewIssue',
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
      const formattedDate = moment(this.endDate, 'DD-MM-YYYY').format(
        'DD/MM/YYYY',
      );
      this.$store.dispatch('addNewIssue', {
        title: this.title,
        description: this.description,
        category: this.category,
        end_date: formattedDate,
        status: this.lane,
      });
    },
    makeEditable() {
      this.isReadonly = false;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/issue.styles.scss';
</style>
