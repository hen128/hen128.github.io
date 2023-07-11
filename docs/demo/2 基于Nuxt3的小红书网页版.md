# 基于Nuxt3的小红书网页版（待完成）

地址🧭 [https://gitee.com/hen128/nuxt3-demo](https://gitee.com/hen128/nuxt3-demo)

## 写在前沿

许多功能暂未完成，近期将逐步完善。

关键词：Nuxt、Vue3、MySQL、Sequelize

特点：全栈项目，利用Nuxt3写服务接口，接口代码在`server`目录下，这是Nuxt的约定策略。

![image-20230709221236878](https://cloud.zengweihao.cn/typora/2023-07-09/20230709221237.png)

## 预览

首页：

![image-20230709215424227](https://cloud.zengweihao.cn/typora/2023-07-09/20230709215424.png)

登录：

![image-20230709215631826](https://cloud.zengweihao.cn/typora/2023-07-09/20230709215632.png)

## 初始化项目

```shell
npx nuxi init <project-name>
```

更改`app.vue`

```
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

更改端口`package.json`

```
"scripts": {
    "dev": "nuxt dev --port 3003",
},
```



## 集成Element-Plus

链接：https://nuxt.com/modules/element-plus

安装x

```shell
npm i element-plus @element-plus/nuxt -D
```

配置`nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ }
})
```

使用

```vue
<template>
  <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton>
</template>
```

## 集成Windicss

链接：https://nuxt.com/modules/windicss

安装

```
npm i nuxt-windicss -D
```

配置

```
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
  ],
})
```

Typescript相关配置`tsconfig.json`

```
{
  "compilerOptions": {
    "types": [
      "nuxt-windicss"
    ]
  }
}
```

检验

```vue
<template>
    <div class="w-200px h-200px bg-red-400"></div>
 </template>
```

## 服务端接口编写

链接：https://nuxt.com/docs/guide/directory-structure/server

`server`目录会自动引入接口。

## 集成Sequelize

```shell
npm i sequelize mysql2
```

``server/db.ts`

```typescript
import pkg from 'sequelize'
import { initModels } from '~/server/model/init-models'
const { Sequelize } = pkg

const seq = new Sequelize({
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    database: 'redbook',
    username: 'root',
    password: '123456'
})

export const DB = initModels(seq)
```

下载 sequelize-auto，以同步model

```shell
npm install --save-dev sequelize-auto
```

`package.json`添加新命令

```json
"scripts": {
    "model": "sequelize-auto -l ts -h localhost -d redbook -u root -x 123456 -p 3306 --dialect mysql -o server/model"
 }
```

执行该命令，`model`目录下自动同步表结构

## SEO

链接：https://nuxt.com/docs/getting-started/seo-meta

页面添加

```vue
<Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Style type="text/css" children="body { background-color: green; }" />
</Head>
```

`nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  }
})
```

## 依赖

| 包名   | 功能    |
| ------ | ------- |
| moment | 时间包  |
| ts-md5 | md5加密 |
|        |         |

