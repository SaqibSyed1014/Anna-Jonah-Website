import { createApp } from 'vue'
import App from './App.vue'

import './styles/tailwind.css'
import './styles/main.css'
import './styles/responsive.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 600,
    offset: 70
});

import router from "@/router/index.js";

createApp(App)
    .use(router)
    .mount('#app')
