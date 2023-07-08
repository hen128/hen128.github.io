# Nuxt实战

## 集成Element-Plus

官方提供示例：[Nuxt 3中element-plus的入门示例](https://github.com/element-plus/element-plus-nuxt-starter)

默认集成 Pinia+UnoCSS+VueUse

![image-20230116211432353](https://cloud.zengweihao.cn/typora/2023-01-16/20230116211444.png)

### 安装

```Bash
pnpm add -D element-plus @element-plus/icons-vue unplugin-element-plus
```

### 配置

修改`nuxt.config.ts`如下

```TypeScript
import ElementPlus from 'unplugin-element-plus/vite'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
  // build
  build: {
    transpile: ['element-plus/es'],
  },
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    plugins: [ElementPlus()],
  },
  // auto import components
  components: true,
})
```

修改`app.vue`如下

```vue
<template>
  <NuxtPage />
</template>

<script setup>
// 服务端渲染需要提供一个id
import { ID_INJECTION_KEY } from 'element-plus'
provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})
</script>
```

### 使用

```Vue
<template>
  <div>
    <h1 class="text-red-600">Index Page</h1>
    <el-button class="m-4">Hello</el-button>
  </div>
</template>

<script setup>
import { ElButton } from "element-plus";
</script>

<style scoped></style>

```

## 集成WindiCSS

[Nuxt3官方文档](https://nuxt.com/modules/windicss)

### 安装

```shell
yarn add nuxt-windicss -D
# npm i nuxt-windicss -D
```

### 配置

`nuxt.config.ts`

```typescript
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
  ],
})

```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "types": [
      "nuxt-windicss"
    ]
  }
}
```
