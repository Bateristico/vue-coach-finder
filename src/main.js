import { createApp } from 'vue';

import router from './router';
import App from './App.vue';

// global styles
import './assets/main.css';

createApp(App)
  .use(router)
  .mount('#app');
