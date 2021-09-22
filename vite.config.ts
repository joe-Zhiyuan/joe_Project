import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import {resolve} from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置别名 @指向src目录
      '@': resolve(__dirname, 'src')
    }
  },
  // 设置打包路径
  base: './',
  server: {
    // 设置服务启动端口号
    port: 6510,
    // 设置服务启动自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,

     // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
