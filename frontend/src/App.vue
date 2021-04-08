<template>
  <div>
    <router-view />
  </div>
</template>

<style lang='scss'>
@import './styles/_variables.scss';
@import './styles/styles.scss';

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
