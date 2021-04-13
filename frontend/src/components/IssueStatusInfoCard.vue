<template>
  <div class="task update">
    <div class="info">
      <div class="icon">
        <span class="material-icons"> thumb_up </span>
      </div>
      <div class="meesage">{{getMessage}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueStatusInfoCard',
  props: ['cardType'],
  computed: {
    getMessage() {
      if (this.cardType === 'deadline') {
        return 'No deadline issues.';
      }
      return 'No issues recently updated.';
    },
  },
};
</script>

<style lang="scss">
@import '../styles/task.card.styles';
</style>
