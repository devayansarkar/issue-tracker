<!-- eslint-disable max-len -->
<template>
  <div class="task">
    <div class="main">
      <div class="header">
        <div class="id">Issue no: {{ issueNumber }}</div>
        <div :class="getIssueStatusClass">{{ getIssueStatus }}</div>
        <div class="menu">
          <a class="material-icons btn"> more_vert </a>
          <div class="menu-options dropdown">
            <a href="#">Open</a>
            <a href="#">Close</a>
            <a href="#">Do this</a>
          </div>
        </div>
      </div>
      <div class="title">
        {{ getIssueTitle }}
      </div>
      <div class="footer">
        <div class="deadline">
          <div class="text">Deadline</div>
          <div
            class="date"
            :class="this.deadlineType === 'danger' ? 'danger' : ''"
          >
            {{ parsedDate }}
          </div>
        </div>
        <div class="view">
          <span class="material-icons"> visibility </span>
        </div>
      </div>
    </div>
    <div class="status">
      <WavePath
        :fill="svgFillColor"
        :class="this.deadlineStatus === 'hundred' ? 'remove-svg' : ''"
      />
      <div
        class="progress"
        :class="`${this.deadlineStatus} ${this.deadlineType}`"
      ></div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import WavePath from './WavePath.vue';

export default {
  name: 'IssueCard',
  data() {
    return {
      deadlineStatus: '',
      deadlineType: 'success',
    };
  },
  components: {
    WavePath,
  },
  props: {
    issueNumber: Number,
    title: String,
    description: String,
    deadline: String,
    startDate: String,
    issueStatus: String,
  },
  computed: {
    parsedDate() {
      const value = this.deadline;
      const formattedDate = moment(value, 'YYYY-MM-DD');
      if (formattedDate.isValid()) {
        return formattedDate.toLocaleString().substring(0, 16);
      }
      return 'No deadline';
    },
    svgFillColor() {
      const success = '#54F00A';
      const warning = '#F0CB0A';
      const danger = '#FF2300';
      switch (this.deadlineType) {
        case 'danger':
          return danger;
        case 'warning':
          return warning;
        default:
          return success;
      }
    },
    getIssueTitle() {
      if (this.title.length > 80) {
        return `${this.title.substring(0, 77)}...`;
      }
      return this.title;
    },
    getIssueStatus() {
      return (
        this.issueStatus[0].toUpperCase()
        + this.issueStatus.slice(1).toLowerCase()
      );
    },
    getIssueStatusClass() {
      return this.issueStatus.toLowerCase();
    },
  },
  created() {
    if (this.deadline === undefined || this.startDate === undefined) {
      this.deadlineStatus = 'hundred';
      return;
    }
    const postedDate = moment(this.startDate);
    const formattedDeadline = moment(this.deadline, 'YYYY-MM-DD');
    const pendingTime = formattedDeadline.diff(moment(), 'days');
    const originalTimeAlloted = formattedDeadline.diff(postedDate, 'days');
    const daysPending = (pendingTime / originalTimeAlloted) * 100;
    const daysConsumed = 100 - daysPending;

    if (Number.isNaN(daysConsumed) || !formattedDeadline.isValid()) {
      this.deadlineStatus = 'hundred';
      return;
    }
    if (this.issueStatus === 'DONE') {
      this.deadlineStatus = 'hundred';
      return;
    }
    if (daysConsumed >= 100) {
      this.deadlineStatus = 'hundred';
      this.deadlineType = 'danger';
    } else if (daysConsumed > 80) {
      this.deadlineStatus = 'eighty';
      this.deadlineType = 'danger';
    } else if (daysConsumed > 60) {
      this.deadlineStatus = 'sixty';
      this.deadlineType = 'warning';
    } else if (daysConsumed > 50) {
      this.deadlineStatus = 'fifty';
      this.deadlineType = 'warning';
    } else if (daysConsumed > 20) {
      this.deadlineStatus = 'twenty';
    } else {
      this.deadlineStatus = 'ten';
    }
  },
};
</script>

<style lang="scss">
@import '../styles/task.card.styles.scss';
</style>
