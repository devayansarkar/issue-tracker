<template>
  <div>
    <Navbar :page="'home'" />
    <div class="page-container">
      <Topbar />
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
