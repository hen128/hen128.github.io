# 基于uni-app的小红书系统

地址🧭 [https://gitee.com/hen128/uni-app-redbook](https://gitee.com/hen128/uni-app-redbook)

## 写在前言

**关键词**

Uni-app，Vue，React 18，Node.js，小红书

![image-20230709220834636](https://cloud.zengweihao.cn/typora/2023-07-09/20230709220834.png)

## 小程序功能及页面

### 首页

![image-20230519144419128](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711.png)

### 发布页

![image-20230519150819177](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-1.png)

上传图片

![image-20230519145240390](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-2.png)

选择输入的话题

![image-20230519145312806](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-3.png)

点击发表笔记，即可在首页看到效果

![image-20230519145359866](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-4.png)



### 消息页

![image-20230519145115213](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-5.png)

### 我的页

![image-20230519145621261](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-6.png)

点击关注，可看到关注的用户

![image-20230519145710721](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-7.png)

点击用户头像，可跳转到用户页

![image-20230519145902344](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-8.png)



编辑资料，可进行更改头像、用户等操作

![image-20230519145757117](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-9.png)

### 设置页

![image-20230519150714212](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-10.png)

更改密码

![image-20230519150550484](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-11.png)

设置密码

![image-20230519150425286](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-12.png)



### 搜索页

![image-20230519150958210](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-13.png)

![image-20230519152925643](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-14.png)

### 笔记页

![image-20230519151308579](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-15.png)

查看评论

![image-20230519151334844](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-16.png)

点赞收藏

![image-20230519151357403](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-17.png)

![image-20230519151454098](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-18.png)

关注

![image-20230519151414679](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-19.png)

可在关注列表看到该用户

![image-20230519151544322](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-20.png)

### 注册页

![image-20230519151218897](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-21.png)

### 关注-粉丝页

![image-20230522153431210](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-22.png)

## 后台管理功能及页面

### 登录

账号：admin，密码：admin

![image-20230519152100981](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-23.png)

### 笔记审核

![image-20230519152125233](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-24.png)

点击可展开笔记详情

![image-20230519152217022](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-25.png)

审核笔记

![image-20230519152311199](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-26.png)

用户将收到审核意见

![image-20230519152436016](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-27.png)

![image-20230519152455777](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-28.png)

### 用户管理

![image-20230519152538246](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-29.png)

## 启动命令

`server`后端：

```
npm run dev
```

因采用了ORM工具（Sequelize)，若更改数据库表设计，需在该目录底下运行下命令，以同步表结构

```
npm run model
```

`client`客户端（小程序）：

采用HBuilder X 运行在小程序模拟器

`admin`后台管理：

```
npm run dev
```

## 技术方案

`server`后端：基于Node.js的Koa框架，数据库采用MySQL

`client`客户端（小程序）：Uni-app，基于Vue 2

`admin`后台管理：React 18，采用Ant Design组件库

## 附件

![image-20230519154843726](https://cloud.zengweihao.cn/typora/2023-07-09/20230709212711-30.png)

- redbook.postman_collection.json：适用于**Postman**
- redbook.sql：数据库

## 结尾

更新于2023/5/19，持续更新~
