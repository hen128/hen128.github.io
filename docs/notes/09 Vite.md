# Vite

## 创建项目

```
npm init @vitejs/app (可选择ts)

## 根据模板构建
npm create @vitejs/app notepad --template vue

## 安装项目生产依赖
npm add vue-router@next vuex@next element-plus axios -S

## 安装项目开发依赖
npm add sass -D
```

## 热加载失效

- 检查路由，path和name大小写需一致
- vite.config.js

## 起别名

```
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('/src')
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
```

