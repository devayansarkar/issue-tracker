<template>
  <div class='auth-form-container'>
    <div class='left-section'>
      <div class='login-form-container'>
        <div class='app-title'>Issue Tracker</div>
        <div class='app-subtitle'>Login in your portal</div>
        <div class='input-container'>
          <label for='email' class='form-field-label'>Email</label>
          <input
            id='email'
            type='text'
            class='form-field'
            placeholder='Enter your email'
          />
        </div>
        <div class='input-container'>
          <label for='password' class='form-field-label'>Password</label>
          <input
            id='password'
            type='password'
            class='form-field'
            placeholder='Enter your password'
          />
        </div>
        <button class='btn btn-primary'>Login</button>
        <div class='sign-up-info'>
          Do not have an account yet ?
        </div>
        <button class='btn btn-secondary'>Sign up</button>
      </div>
    </div>
    <div class='right-section'></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang='scss'>
@import '../styles/media.queries.scss';
@import '../styles/button.styles.scss';
@import '../styles/input.styles.scss';
@import '../styles/login.page.styles.scss';
</style>
