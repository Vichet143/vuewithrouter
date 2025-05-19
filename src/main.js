import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './route'
import { createPinia } from 'pinia'
import "tailwindcss"
import "preline/variants.css"
import i18n from './i18n'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(Router)
app.use(i18n)
app.mount('#app')



