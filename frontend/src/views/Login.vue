<template>
  <div>
    <div v-if="!isLoading" class="auth-form-container">
      <div class="left-section">
        <div class="login-form-container">
          <div v-if="message.text" class="info-message" :class="message.type">
            {{ message.text }}
          </div>
          <div class="app-title">Issue Tracker</div>
          <div class="app-subtitle">Login in your portal</div>
          <form @submit.prevent="login">
            <div class="input-container">
              <label for="email" class="form-field-label">Email</label>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-field"
                placeholder="Enter your email"
              />
            </div>
            <div class="input-container">
              <label for="password" class="form-field-label">Password</label>
              <input
                id="password"
                type="password"
                v-model="password"
                class="form-field"
                placeholder="Enter your password"
              />
            </div>
            <button class="btn btn-primary">Login</button>
          </form>
          <div class="sign-up-info">Do not have an account yet ?</div>
          <router-link to="/signup">
            <button type="submit" class="btn btn-secondary">Sign up</button>
          </router-link>
        </div>
      </div>
      <div class="right-section"></div>
    </div>
    <div v-if="isLoading" class="loading-container">
      <Loading />
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  name: 'Login',
  data() {
    return {
      isLoading: true,
      email: '',
      password: '',
      message: {
        type: 'success',
        text: '',
      },
    };
  },
  components: {
    Loading,
  },
  methods: {
    login() {
      this.isLoading = true;
      this.$http.plain
        .post('/signin', { email: this.email, password: this.password })
        .then((r) => this.signinSuccessful(r))
        .catch((e) => this.signinFailed(e));
    },
    signinSuccessful(response) {
      this.addTokensToLocalStorage(response.data);
      this.$router.replace('/home');
    },
    signinFailed(exception) {
      const errorMessage = (exception.response
          && exception.response.data
          && exception.response.data.error)
        || 'Unable to sign user.';
      this.isLoading = false;
      this.message = {
        type: 'error',
        text: errorMessage,
      };
      this.removeTokensFromLocalStorage();
      this.isLoading = false;
    },
    addTokensToLocalStorage(token) {
      localStorage.access_token = token.access;
      localStorage.refresh_token = token.refresh;
      localStorage.access_expires_at = token.access_expires_at;
      localStorage.refresh_token_expires_at = token.refresh_expires_at;
    },
    removeTokensFromLocalStorage() {
      delete localStorage.access_token;
      delete localStorage.refresh_token;
      delete localStorage.access_expires_at;
      delete localStorage.refresh_token_expires_at;
    },
  },
  created() {
    this.$http.secured
      .post('/refresh', {})
      .then((r) => this.signinSuccessful(r))
      .catch(() => {
        this.removeTokensFromLocalStorage();
        this.isLoading = false;
      });
  },
};
</script>

<style lang='scss'>
@import '../styles/media.queries.scss';
@import '../styles/button.styles.scss';
@import '../styles/input.styles.scss';
@import '../styles/login.page.styles.scss';
@import '../styles/info.styles.scss';
</style>
