<template>
  <div>
    <div v-if="!isLoading" class="auth-form-container">
      <div class="left-section">
        <div class="login-form-container">
          <div v-if="message.text" class="info-message" :class="message.type">
              {{ message.text }}
            </div>
          <div class="app-title">Issue Tracker</div>
          <div class="app-subtitle">Sign up</div>
          <form @submit.prevent="signup">
            <div class="input-container">
              <label for="name" class="form-field-label"
                >Name <span class="mandatory">*</span></label
              >
              <input
                id="name"
                type="text"
                v-model="name"
                class="form-field"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="input-container">
              <label for="email" class="form-field-label"
                >Email <span class="mandatory">*</span></label
              >
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-field"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="input-container">
              <label for="password" class="form-field-label"
                >Password <span class="mandatory">*</span></label
              >
              <input
                id="password"
                type="password"
                v-model="password"
                class="form-field"
                placeholder="Enter your password"
                required
              />
            </div>
            <div class="input-container">
              <label for="password-confirmation" class="form-field-label"
                >Retype password <span class="mandatory">*</span></label
              >
              <input
                id="password-confirmation"
                type="password"
                v-model="password_confirmation"
                class="form-field"
                placeholder="Enter your password again"
                required
              />
            </div>
            <button class="btn btn-primary" :disabled="!isFormValid()">
              Sign up
            </button>
          </form>
          <div class="sign-up-info">Already have an account ?</div>
          <router-link to="/">
            <button class="btn btn-secondary">Go to login</button>
          </router-link>
        </div>
      </div>
      <div class="right-section"></div>
    </div>
    <div v-if="isLoading" class="loading-container">
      <Loading/>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  name: 'SignUp',
  data() {
    return {
      isLoading: false,
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
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
    signup() {
      if (this.password !== this.password_confirmation) {
        this.message = {
          type: 'error',
          text: 'Passwords do not match!',
        };
        return;
      }
      this.isLoading = true;
      this.$http.plain
        .post('/signup',
          {
            email: this.email,
            name: this.name,
            password: this.password,
            password_confirmation: this.password_confirmation,
          })
        .then((r) => this.signinSuccessful(r))
        .catch((e) => this.signinFailed(e));
    },
    signinSuccessful(response) {
      this.isLoading = false;
      this.addTokensToLocalStorage(response.data);
      this.$router.replace('/home');
    },
    signinFailed(exception) {
      console.log(exception);
      const errorMessage = (exception.response
      && exception.response.data
      && exception.response.data.error) || 'Unable to sign up user.';
      this.isLoading = false;
      this.message = {
        type: 'error',
        text: errorMessage,
      };
      this.isLoading = false;
    },
    addTokensToLocalStorage(token) {
      localStorage.access_token = token.access;
      localStorage.refresh_token = token.refresh;
      localStorage.access_expires_at = token.access_expires_at;
      localStorage.refresh_token_expires_at = token.refresh_expires_at;
    },
    isFormValid() {
      if (this.name === '' || this.name === undefined) return false;
      if (this.email === '' || this.email === undefined) return false;
      if (this.password === '' || this.password === undefined) return false;
      if (
        this.password_confirmation === '' || this.password_confirmation === undefined
      ) return false;
      return true;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/media.queries.scss';
@import '../styles/button.styles.scss';
@import '../styles/input.styles.scss';
@import '../styles/signup.page.styles.scss';
@import '../styles/info.styles.scss';
</style>
