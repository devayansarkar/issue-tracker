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
          <router-link to="/home">
            <div class="item">All tasks</div>
          </router-link>
          <router-link to="/home"><div class="item">Add task</div></router-link>
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
      console.log('Closing menu');
    },
    openMenu() {
      this.isOpen = true;
      console.log('Opening menu');
    },
  },
};
</script>

<style lang="scss">
@import '../styles/media.queries.scss';
@import '../styles/menu.styles.scss';
</style>
