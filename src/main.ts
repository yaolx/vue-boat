import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from '@/App.vue'
import routers from '@/routes'
import store from '@/store/index'
import 'ant-design-vue/dist/antd.css'
import './index.css'


const app = createApp(App)
app
.use(routers)
.use(store)
.use(Antd)
.mount('#app')
