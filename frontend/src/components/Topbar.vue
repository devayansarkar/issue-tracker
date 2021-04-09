<template>
  <Menu />
  <div class="topbar">
    <div class="app-name">Issue tracker</div>
    <div class="profile-container">
      <div class="profile">
        <div class="name">Devayan Kumar Sarkar</div>
        <div class="email">DevayanSarkar@gmail.com</div>
      </div>
      <div class="icon">
        <span class="material-icons"> account_circle </span>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  name: 'Topbar',
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import '../styles/media.queries.scss';
@import '../styles/topbar.styles.scss';
</style>
