<template>
  <div class="navbar">
    <div class="item">
      <div class="icon logo">
        <span class="material-icons"> group_work </span>
      </div>
    </div>
    <div class="item" :class="page === 'home' ? 'active' : ''">
      <router-link to="/home">
        <div>
          <div class="icon">
            <span class="material-icons"> home </span>
          </div>
          <div class="text">Home</div>
        </div>
      </router-link>
    </div>
    <div class="item" :class="page === 'board' ? 'active' : ''">
      <router-link to="/board">
        <div>
          <div class="icon" data-cy="all-issues-navigation-button">
            <span class="material-icons"> assignment </span>
          </div>
          <div class="text">All issues</div>
        </div>
      </router-link>
    </div>
    <div class="item" :class="page === 'addIssue' ? 'active' : ''">
      <router-link to="/add-issue">
        <div>
          <div class="icon" data-cy="add-issue-navigation-button">
            <span class="material-icons"> add_circle </span>
          </div>
          <div class="text">New issue</div>
        </div>
      </router-link>
    </div>
    <div class="item" :class="page === 'about' ? 'active' : ''">
      <router-link to="/about">
        <div class="icon">
          <span class="material-icons"> info </span>
          <div class="text">About</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['page'],
};
</script>

<style lang="scss">
@import '../styles/media.queries.scss';
@import '../styles/navbar.styles.scss';
</style>
