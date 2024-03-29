import { createApp } from 'vue'
import App from './App.vue'

import './styles/tailwind.css'
import './styles/main.css'
import './styles/responsive.css'

import router from "@/router/index.js";

createApp(App)
    .use(router)
    .mount('#app')
