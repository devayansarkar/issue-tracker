<template>
  <div class="profile-page">
    <div class="profile-page-container">
      <div class="profile-heading">My profile</div>
      <div class="profile">
        <div class="user-name">Devayan Kumar Sarkar</div>
        <div class="user-email">DevayanSarkar@gmail.com</div>
        <div class="issue-status">
          <div class="issue-field">
            <div class="issue-title">Total</div>
            <div class="issue-count">20</div>
          </div>
          <div class="issue-field">
            <div class="issue-title">Todo</div>
            <div class="issue-count">20</div>
          </div>
          <div class="issue-field">
            <div class="issue-title">Doing</div>
            <div class="issue-count">20</div>
          </div>
          <div class="issue-field">
            <div class="issue-title">Done</div>
            <div class="issue-count">20</div>
          </div>
          <div class="cta">
            <router-link class="home-navigation" to="/">
              Go back to home
            </router-link>
            <span class="logout" @click="logout"> Logout </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$store.dispatch('loadUserInfo');
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/profile.page.styles.scss';
</style>
