<template>
  <div>
    <Navbar :page="'about'" />
    <div class="page-container">
      <Topbar />
      <div class="about-page">
        <h1 class="about-title">About Issue tracker</h1>
        <div class="about-content">
          <div>
            <h2>Tech stack</h2>
            <ul>
              <h4>Frontend</h4>
              <li><code>Vue.js</code> for visualization</li>
              <li><code>Vuex</code> for state management</li>
              <li>Styling with <code>SCSS</code> from scratch.</li>
            </ul>
            <ul>
              <h4>Backend</h4>
              <li><code>Ruby</code> language</li>
              <li><code>Rails</code> framework</li>
              <li><code>PostgreSQL</code> for database.</li>
              <li><code>JWTSession tokens</code> for authentication</li>
              <li><code>Redis</code> to manage user sessions</li>
            </ul>
            <ul>
              <h4>Deployment</h4>
              <li>
                Code is deployed on Heroku by using
                <code>GitLab CI</code> builds.
              </li>
            </ul>
          </div>
          <div>
            <h3>Why build `Issue Tracker` ?</h3>
            <p>I needed a tracker application for myself to track my daily todos.
              Although there are many free apps and softwares available online,
              I wanted something different.
              My primary goal was :
              <ul>
                <li>Tool that will show me the tasks that are approaching deadline.</li>
                <li>With just the right amount of features,
                  without the fancy bells and whistles</li>
                <li>And one that looks different and is very simple to use.</li>
              </ul>

              And hence I decided to build <code>Issue Tracker</code>.
              This is built with just the features that I want at the moment.
              I will add features as and when I need them but
              the goal is to keep it to the bare minimum.
              The choice of the tech stack is merely to learn about
              <code>Vue.js</code> and <code>Ruby on Rails</code>.
              </p>
          </div>
          <div>
            <h4>DISCLAIMER</h4>
            <p>
              Issue tracker is a free tool, built to experiment with
              <code>Vue.js</code> as a frontend library and <code>Rails</code> as
              backend. It is NOT intended for commercial use and hence does not
              have any support for it.
            </p>
          </div>
        </div>
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
