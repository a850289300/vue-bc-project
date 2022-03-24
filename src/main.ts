import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import { createPinia } from 'pinia'
import { localCache } from './store/plugins/localCache'

const app = createApp(App)
const pinia = createPinia()
pinia.use(localCache)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
