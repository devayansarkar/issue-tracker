<!-- eslint-disable max-len -->
<template>
  <div>
    <Navbar />
    <div class="page-container">
      <Topbar />
      <div class="home">
        <div class="home-header">
          <div class="left">
            <div class="title">Welcome to your personal task tracker</div>
            <div class="subtitle">
              Organize your tasks and never miss a deadline.
            </div>
            <div class="cta">
              <button class="btn-primary">Add new task</button>
              <button class="btn-primary">View all tasks</button>
            </div>
          </div>
          <div class="right">
            <div class="task-count-grid-container">
              <TaskCount cardType="total-card" count="24" type="Total" />
              <TaskCount cardType="count-card" count="12" type="Done" />
              <TaskCount cardType="count-card" count="12" type="Doing" />
              <TaskCount cardType="count-card" count="12" type="Doing" />
            </div>
          </div>
        </div>
        <div class="next-tasks">
          <div class="title">Approaching deadline</div>
          <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="23/05/2021"
            startDate="2020-04-09T21:15:02.214Z"
          />
          <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="09/02/2021"
            startDate="2020-01-09T21:15:02.214Z"
          />
          <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="23/05/2021"
            startDate="2021-04-09T21:15:02.214Z"
          />
          <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="23/05/2021"
            startDate="2021-01-09T21:15:02.214Z"
          />
        </div>

        <div class="next-tasks">
          <div class="title">Recent tasks</div>
          <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="23/15/2021"
          />
           <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="23/05/2021"
            startDate="2021-02-09T21:15:02.214Z"
          />
           <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="09/02/2021"
            startDate="2020-01-09T21:15:02.214Z"
          />
          <TaskCard
            taskNumber="11"
            title="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            description="loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt.loarIncididunt qui do proident eu sunt."
            deadline="23/05/2021"
            startDate="2021-04-09T21:15:02.214Z"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/Topbar.vue';
import TaskCount from '@/components/TaskCount.vue';
import TaskCard from '@/components/TaskCard.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Topbar,
    TaskCount,
    TaskCard,
  },
};
</script>

<style lang="scss">
@import '../styles/home.page.styles.scss';
@import '../styles/task.card.styles.scss';
</style>
              <TaskCount cardType= "count-card" count="12" type="Todo" />
