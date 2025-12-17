import { createApp } from 'vue';
import App from './App.vue';
import 'vue3-toastify/dist/index.css'; // Import CSS
import Vue3Toastify from 'vue3-toastify';

const app = createApp(App);

// pinia store
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import router from './router';
app.use(router);

app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right',
    transition: 'slide',
});
// main app css
import './assets/css/app.css';

// set default settings
import appSetting from '@/app-setting';
appSetting.init();

// set default settings
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
});

app.mount('#app');
