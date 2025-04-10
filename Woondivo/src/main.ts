import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import global css file
import './assets/styles/global.css';

createApp(App).use(router).mount('#app');
