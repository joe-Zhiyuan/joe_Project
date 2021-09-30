import { createApp } from 'vue'
// 挂载Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'
import App from './App.vue'
// 挂载路由配置
import router from './router/index'
// 挂载Vuex配置
import store from './store/index'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')

// createApp(App).use(store).mount('#app')
