<template>
  <div>
    <Navbar />
    <div class="page-container">
      <Topbar />
      <p>Hello from the otherside!!!</p>
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
</style>
