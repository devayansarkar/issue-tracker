import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import { securedConnection, openConnection } from './config/axios';

createApp(App)
  .use(store)
  .use(VueAxios, { secured: securedConnection, plain: openConnection })
  .use(router)
  .mount('#app');
