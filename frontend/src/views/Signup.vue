<template>
  <div class="login-container">
    <div class="left-section">
      <div class="login-form-container">
        <div class="app-title">Issue Tracker</div>
        <div class="app-subtitle">Sign up</div>
        <div class="input-container">
          <label for="name" class="form-field-label">Name</label>
          <input
            id="name"
            type="text"
            class="form-field"
            placeholder="Enter your name"
          />
        </div>
        <div class="input-container">
          <label for="email" class="form-field-label">Email</label>
          <input
            id="email"
            type="text"
            class="form-field"
            placeholder="Enter your email"
          />
        </div>
        <div class="input-container">
          <label for="password" class="form-field-label">Password</label>
          <input
            id="password"
            type="password"
            class="form-field"
            placeholder="Enter your password"
          />
        </div>
        <div class="input-container">
          <label for="password-confirmation" class="form-field-label">Retype password</label>
          <input
            id="password-confirmation"
            type="password"
            class="form-field"
            placeholder="Enter your password again"
          />
        </div>
        <button class="btn btn-primary">Sign up</button>
        <div class="sign-up-info">Already have an account ?</div>
        <button class="btn btn-secondary">Go to login</button>
      </div>
    </div>
    <div class="right-section"></div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
};
</script>

<style lang="scss">
@import '../styles/media.queries.scss';
@import '../styles/button.styles.scss';
@import '../styles/input.styles.scss';
@import '../styles/signup.page.styles.scss';
</style>
