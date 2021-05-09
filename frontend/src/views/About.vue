<template>
  <div>
    <Navbar :page="'about'" />
    <div class="page-container">
      <Topbar />
      <div class="about-page">
        <h1 class="about-title">About Issue tracker</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/Topbar.vue';

export default {
  name: 'About',
  components: {
    Navbar,
    Topbar,
  },
};
</script>

<style lang="scss">
@import '../styles/about.page.styles.scss';
</style>
