# 基于Koa+Vue2+MySQL的博客系统

地址🧭 [https://gitee.com/hen128/blog](https://gitee.com/hen128/blog)

关键词：Md 文章，Vue，Koa，mysql

## 组成

### [博客客户端](https://gitee.com/hen128/blog-client)

基于Vue2 + Element-UI

在线访问地址 https://zengweihao.cn

gitee: https://gitee.com/hen128/blog-client

### [后台管理](https://gitee.com/hen128/blog-admin)

基于Vue2 + Element-UI + echarts

在线访问地址 https://admin.zengweihao.cn

gitee: https://gitee.com/hen128/blog-admin


### [后端服务](https://gitee.com/hen128/blog)

基于Koa + mysql + Sequelize

在线访问地址 https://server.zengweihao.cn

gitee: https://gitee.com/hen128/blog

### [文件云](https://gitee.com/hen128/file-cloud)

用于文件上传、存储、浏览等功能

gitee: https://gitee.com/hen128/file-cloud

## 文档

位于 gitee: https://gitee.com/hen128/blog 目录下doc

## 启动

1. 启动mysql，运行blog_v2.sql

2. 配置更改在：

   

3. 由于用到Sequelize，更改表结构后，需要在server根目录下执行`npm run model`

4. 博客接口端口默认3000，文件云端口默认3001

5. 四个项目统一都是：

- `npm install`
- `npm run dev`

## 持续更新~