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
              <div class="task-count total">
                <div>
                  <div class="count">24</div>
                  <div class="type">Tasks</div>
                </div>
              </div>
              <div class="task-count active">
                <div>
                  <div class="count">12</div>
                  <div class="type">Todo</div>
                </div>
              </div>
               <div class="task-count active">
                <div>
                  <div class="count">6</div>
                  <div class="type">Doing</div>
                </div>
              </div>
              <div class="task-count active">
                <div>
                  <div class="count">6</div>
                  <div class="type">Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="next-tasks">
          <div class="title">
            Approaching deadline
          </div>
        </div>

        <div class="next-tasks">
          <div class="title">
            Recent tasks
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/Topbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Topbar,
  },
};
</script>

<style lang="scss">
@import '../styles/home.page.styles.scss';
@import '../styles/task.count.styles.scss';
</style>
