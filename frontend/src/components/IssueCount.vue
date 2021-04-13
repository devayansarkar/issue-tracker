<template>
  <div class="task-count" :class="cardType == 'total-card' ? 'total' : 'task-count'">
    <div>
      <div class="count">{{ count }}</div>
      <div class="type">{{ type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueCount',
  props: { cardType: String, count: Number, type: String },
};
</script>

<style lang="scss">
@import '../styles/task.count.styles.scss';
</style>
