import { createApp } from 'vue'
import App from './App.vue'
import routers from '@/routes'
import './index.css'

createApp(App).use(routers).mount('#app')
