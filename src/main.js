import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueTheMask from 'vue-the-mask'

import { createPinia } from 'pinia'

import './assets/sass/style.sass'

createApp(App).use(store).use(router).use(VueTheMask).use(createPinia()).mount('#app')
