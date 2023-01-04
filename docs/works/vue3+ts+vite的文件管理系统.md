# Vue3+Ts+Vite的文件管理系统

![image-20221230200045801](https://gitee.com/hen128/storage/raw/master/typora/2022-12-30%20200047.png)

## 概述

**技术栈**：Koa，Vue3，TypeScript，Vite，Element-Plus、Windi.css..

**主要功能**：文件上传、预览、图床、管理、下载



**特点**：

1. Office在线预览
2. 图床



**不足（待解决的问题）**：线上访问时，文件的上传、查询、删除存在延迟（未排除是服务器内存问题）



**gitee**：https://gitee.com/hen128/file-cloud

**在线预览地址**：https://cloud.zengweihao.cn

持续更新~



## 启动

前端：

```
npm i

npm run dev

```

后端：

```
同上
```



## 说明

- server目录存放服务端代码

  ![image-20221230195812923](https://gitee.com/hen128/storage/raw/master/typora/2022-12-30%20195814.png)

- server/config/config.js 配置数据库等信息

  ![image-20221230195828782](https://gitee.com/hen128/storage/raw/master/typora/2022-12-30%20195830.png)

- 数据表文件

  ![image-20221230195845035](https://gitee.com/hen128/storage/raw/master/typora/2022-12-30%20195846.png)
