# 基于Koa.js+Vue+MySQL的博客系统

地址🧭 [https://gitee.com/hen128/blog](https://gitee.com/hen128/blog)

关键词：Vue，Koa，mysql

技术栈：

前端：Vue + Element-UI + SCSS + axios +  ECharts

后端：Koa.js + MySQL + Sequelize + koa2-cors（跨域） + jsonwebtoken（token) + pm2（部署) 

## 客户端

首页

![image-20230725084424526](./assets/typora_2023-07-25_20230725084424.png)

详情页（毛玻璃效果）

![image-20230725084701299](./assets/typora_2023-07-25_20230725084701.png)

评论列表

![image-20230725084949063](./assets/typora_2023-07-25_20230725084949.png)

![image-20230725085005138](./assets/typora_2023-07-25_20230725085005.png)

标签分类

![image-20230725085052154](./assets/typora_2023-07-25_20230725085052.png)

时间轴

![image-20230725085148127](./assets/typora_2023-07-25_20230725085148.png)

留言

![image-20230725085310912](./assets/typora_2023-07-25_20230725085311.png)

关于（炫酷的卡片旋转效果）

![image-20230725085408661](./assets/typora_2023-07-25_20230725085409.png)

登录

![image-20230725085510827](./assets/typora_2023-07-25_20230725085511.png)

搜索

![image-20230725085702862](./assets/typora_2023-07-25_20230725085703.png)

黑夜模式

![image-20230725085819723](./assets/typora_2023-07-25_20230725085819.png)

### 适配移动端

首页

<img src="./assets/typora_2023-07-25_20230725090115.png" alt="image-20230725090114863" style="zoom: 33%;" />

<img src="./assets/typora_2023-07-25_20230725090440.png" alt="image-20230725090439993" style="zoom:33%;" />

详情页

<img src="./assets/typora_2023-07-25_20230725090229.png" alt="image-20230725090229487" style="zoom:33%;" />

评论

<img src="./assets/typora_2023-07-25_20230725090350.png" alt="image-20230725090350430" style="zoom:33%;" />

留言

<img src="./assets/typora_2023-07-25_20230725090516.png" alt="image-20230725090516210" style="zoom:33%;" />

## 后台管理

登录

![image-20230725092302692](./assets/typora_2023-07-25_20230725092303.png)

仪表盘

![image-20230725091613346](./assets/typora_2023-07-25_20230725091613.png)

标签管理

![image-20230725091658981](./assets/typora_2023-07-25_20230725091659.png)

文章列表

![image-20230725091723780](./assets/typora_2023-07-25_20230725091724.png)

编辑

![image-20230725091752110](./assets/typora_2023-07-25_20230725091752.png)

![image-20230725091806727](./assets/typora_2023-07-25_20230725091807.png)

评论列表

![image-20230725091844747](./assets/typora_2023-07-25_20230725091845.png)

留言列表

![image-20230725091908216](./assets/typora_2023-07-25_20230725091908.png)

用户管理

![image-20230725091951171](./assets/typora_2023-07-25_20230725091951.png)

管理员

![image-20230725092100803](./assets/typora_2023-07-25_20230725092101.png)

管理员权限

![image-20230725092122545](./assets/typora_2023-07-25_20230725092122.png)

## 后端接口

### 数据库设计

![image-20230725104639527](./assets/typora_2023-07-25_20230725104640.png)

![image-20230725104734631](./assets/typora_2023-07-25_20230725104735.png)

![image-20230725104759131](./assets/typora_2023-07-25_20230725104759.png)

![image-20230725104829223](./assets/typora_2023-07-25_20230725104829.png)

![image-20230725104855152](./assets/typora_2023-07-25_20230725104855.png)

![image-20230725104918591](./assets/typora_2023-07-25_20230725104918.png)

### 接口设计

使用Postman 导入`附件` 中的`博客接口 v2.0.0.postman_collection.json`，即可看到如下效果

![image-20230725105913306](./assets/typora_2023-07-25_20230725105913.png)

## 启动

安装依赖

```
npm install
```

运行

```
npm run dev
```

注意：运行`server` 之前，先运行`file` ！！

## 附件

![image-20230725110309927](./assets/typora_2023-07-25_20230725110310.png)

配置项

![image-20230725110640710](./assets/typora_2023-07-25_20230725110641.png)