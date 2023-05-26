# Sequelize

[官网]: https://www.sequelize.com.cn/

## 关联 `include`

```js
// 建立关联
Profile.belongsTo(User)

User.findAndCountAll({
  include: [
    { model: Profile, where: { active: true } attributes:[]}
  ],
})
```

嵌套关联

```js
include: [{
    model: DB.note,
    include:[
        {
            model: DB.user,
            attributes: ['id', 'name', 'avatar']
        }
    ]
}]
```



## 属性 `attributes`

排除属性

```
attributes: { exclude: ['password'] }
```



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
