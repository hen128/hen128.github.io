# Koa

![image-20221230194124586](https://gitee.com/hen128/storage/raw/master/typora/2022-12-30%20194126.png)

# 常规

## 请求参数

`ctx.params`

```js
router.get('/package/:aid/:cid',async (ctx)=>{
    //获取动态路由的传值
    console.log(ctx.params);  //{ aid: '123', cid: '456' }
    ctx.body="详情";
})
```

`ctx.request.query`

```js
// url?color=blue&size=small
{
  color: 'blue',
  size: 'small'
}
```

`ctx.request.body`

```js
post
```

## 路由封装

```
暂无 两种方法
```

## 文件下载跨域

```js
// Koa2与fetch的简单文件流下载例子
router.post('/download', async function (ctx, next) {
    const filePath = path.join(__dirname, 'test.xlsx');
    let file = fs.createReadStream(filePath);
    try {
      await new Promise((resolve, reject) => {
        file.on('open', function () {
          // 没有特定类型的二进制文件，使用 application/octet-stream
          ctx.set('content-type', 'application/octet-stream');
          ctx.body = file;
          resolve();
        });
        file.on('error', function (err) {
          reject(err);
        })
      });
    } catch (e) {
      console.error(e);
      next();
    }
  });

/******************** 前端页面 ********************/
const btn = document.getElementById('download');
btn.onclick = function() {
  fetch('http://localhost:3000/exportInquiry', {
    method: 'post'
  })
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      // 返回一个使用 Blob 解决的 promise
      return res.blob();
    })
    .then(blob => {
      // 创建 URL 的 Blob 对象
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "filename.xlsx";
      // 兼容旧版本火狐浏览器，将 a 标签插入 DOM 中
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch(err => {
      console.error('Fetch error occurred.', err);
    });
}
```



## 访问静态资源

```js
// 安装koa-static
npm i koa-static
// 引入
const  path = require('path')
const static = require('koa-static')
// 获取静态资源文件夹
app.use(static(path.join(__dirname+'/assets')))
...
app.use(router.routes(),router.allowedMethods())
```

## token颁发和解析

```js
// 安装koa-bodyparser 与 jsonwevtoken
npm i koa-bodyparser -S
npm i jsonwebtoken -S // 用于生成token

 /******* 颁发 ********/
在用户登录的路由中使用jwt.sign 来生成token,一共定义三个参数，第一个 是存入token的信息，第二个是密钥，第三个是保存的时间，最后返回token，要在前面加Bearer

const jwt = require('jsonwebtoken')
const token = jwt.sign({account:1234,pwd:"2345"},'secret',{expiresIn:3600})
let obj = {
	token,
	msg:'登录成功'
}

/******* 解析 ********/
const payload = {id:user.id,name:user.name,avatar:user.avatar}
const token = jwt.sign(payload,keys.secretOrkey,{expiresIn:3600})

ctx.status = 200
ctx.body = {success:true,token:"Bearer " + token}

```



## 跨域 `koa2-cors`

```js
// 简略
var cors = require('koa2-cors');
app.use(cors())

// 配置
app.use(cors({
  origin: function (ctx) {
 	if (ctx.url === '/goods') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:8080'; // 指定域名
      	return ctx.header.origin // 实现所有跨域
    },
    methods:['GET','POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
```

## 加密 `crypto`

```js
npm i crypto -S

const crypto = require('crypto')

const useMd5 = (str) => {
    const md5 = crypto.createHash('md5')
    const result = md5.update(str).digest('hex') //hex表示拿到最终为十六进制
    return result
}

module.exports = useMd5

```



# 脚手架 ：Koa2-generator

```shell
npm i koa2-generator -g
koa2 projectName 
```



# A&Q

## node+mysql数据库时区显示正确，查询却显示另一个时区

```js
修改数据库配置
dateStrings: true //修改日期格式 强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回

var mysqlConfig = {
    host: 连接数据库所在的主机名. (默认: localhost)  
    port: 连接端口. (默认: 3306)  
    localAddress: 用于TCP连接的IP地址. (可选)  
    socketPath: 链接到unix域的路径。在使用host和port时该参数会被忽略.  
    user: MySQL用户的用户名.  
    password: MySQL用户的密码.  
    database: 链接到的数据库名称 (可选).  
    charset: 连接的字符集. (默认: 'UTF8_GENERAL_CI'.设置该值要使用大写!)  
    timezone: 储存本地时间的时区. (默认: 'local')  
    stringifyObjects: 是否序列化对象. See issue #501. (默认: 'false')  
    insecureAuth: 是否允许旧的身份验证方法连接到数据库实例. (默认: false)  
    typeCast: 确定是否讲column值转换为本地JavaScript类型列值. (默认: true)  
    queryFormat: 自定义的查询语句格式化函数.  
    supportBigNumbers: 数据库处理大数字(长整型和含小数),时应该启用 (默认: false).  
    bigNumberStrings: 启用 supportBigNumbers和bigNumberStrings 并强制这些数字以字符串的方式返回(默认: false).   
    dateStrings: 强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回，而不是一javascript Date对象返回. (默认: false)  
    debug: 是否开启调试. (默认: false)  
    multipleStatements: 是否允许在一个query中传递多个查询语句. (Default: false)  
    flags: 链接标志. 
} 
```