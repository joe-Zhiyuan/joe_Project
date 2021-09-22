import { createApp } from 'vue'
import App from './App.vue'
// 挂载路由配置
import router from './router/index'
// 挂载Vuex配置
import store from './store/index'
// 挂载Element Plus
import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router, store, ElementPlus).mount('#app')
// createApp(App).use(store).mount('#app')
