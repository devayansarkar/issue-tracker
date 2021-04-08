<template>
  <div class="navbar">
    <div class="item">
      <div class="icon logo">
        <span class="material-icons"> group_work </span>
      </div>
    </div>
    <div class="item">
      <router-link to="/home">
        <div>
          <div class="icon">
            <span class="material-icons"> home </span>
          </div>
          <div class="text">Home</div>
        </div>
      </router-link>
    </div>
    <div class="item">
      <div>
        <div class="icon">
          <span class="material-icons"> assignment </span>
        </div>
        <div class="text">Tasks</div>
      </div>
    </div>
    <div class="item active">
      <div>
        <div class="icon">
          <span class="material-icons"> add_circle </span>
        </div>
        <div class="text">New task</div>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="item">
      <router-link to="/about">
        <div class="icon">
          <span class="material-icons"> info </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss">
@import '../styles/navbar.styles.scss';
</style>
