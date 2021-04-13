<template>
  <div>
    <div class="menu-btn">
      <span class="material-icons" @click="openMenu"> menu </span>
    </div>
    <div :class="isOpen ? 'menu-open' : 'menu-close'">
      <div class="close-btn" @click="closeMenu">
        <span class="material-icons"> close </span>
      </div>
      <div class="menu-page">
        <div>
          <router-link to="/home"><div class="item">Home</div></router-link>
          <router-link to="/board">
            <div class="item">All issues</div>
          </router-link>
          <router-link to="/home"><div class="item">New issue</div></router-link>
          <router-link to="/home"><div class="item">Account</div></router-link>
          <router-link to="/about"><div class="item">About</div></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
    openMenu() {
      this.isOpen = true;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/media.queries.scss';
@import '../styles/menu.styles.scss';
</style>
