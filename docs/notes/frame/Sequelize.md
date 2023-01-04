# Sequelize

![image-20221231104031587](https://gitee.com/hen128/storage/raw/master/typora/2022-12-31%20104033.png)

[官网]: https://www.sequelize.com.cn/

## 插件：sequelize-auto 

```js
## 安装
npm i sequelize-auto -D

## package.json 添加启动项 npm run models
"scripts": {
  "models": "node xxx/sequelize-auto.js"
}

## sequelize-auto.js
const SequelizeAuto = require('sequelize-auto')
const { host, user, password, database, dialect, port } = require('...')

const options = {
  host,
  dialect,
  directory: './models',  // 指定输出 models 文件的目录
  port,
  additional: {
    timestamps: false
  }
}
const auto = new SequelizeAuto(database, user, password, options)

auto.run(err => {
  if (err) throw err
})

## DB.js
const Sequelize = require('sequelize')
const initModels = require('../models/init-models')
const { host, user, password, database, dialect } = require('...')
const sequelize = new Sequelize(database, user, password, { host, dialect, define: { timestamps: false } })

module.exports = initModels(sequelize)

## 使用
const DB = require('../utils/DB')
const userInfo = await DB.User.findOne({ isDelete: 0 })
```
