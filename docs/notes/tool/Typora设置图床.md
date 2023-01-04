# Typora设置图床
## 依赖

1. PicGo-Core：用于文件上传至图床
2. super-prefix：用于时间戳重命名图片（安装这个需要Node.js环境！
3. gitee-uploader：gitee插件

## 步骤

### 下载PicGo

可以通过Typora自动下载，不过，缺点是很慢！所以，我选择npm下载。

```
# 全局安装picgo
npm install picgo -g
# gitee插件安装
picgo install gitee-uploader
```

### 安装super-prefix

```
picgo install super-prefix
```

### gitee设置

1. 新建一仓库，使用README.md初始化，设置为公开。该仓库用于存储图片。
2. 申请gitee**私人令牌**，打开gitee设置中可找到。

### 配置PicGo

进入Picgo文件夹，打开配置文件`config.json`

```json
{
  "picBed": {
    "uploader": "gitee",
    "gitee": {
      "repo": "hen128/storage", // 这里填 “gitee用户名/仓库路径”
      "token": "6093a95103b46653f35b60*****", // 这里填写获得的令牌
      "path": "",
      "customUrl": "",
      "branch": "master" // 这里是分支
    }
  },
  "picgoPlugins": {
    "picgo-plugin-gitee-uploader": true,
    "picgo-plugin-super-prefix": true // 这是是用到的super-prefix插件
  },
  "picgo-plugin-super-prefix": {
    "fileFormat": "YYYY-MM-DD HHmmss" // 这里是文件名格式，可设置
  }
}
```

### Typora设置及测试上传

1. 按照下图进行设置，上传服务选择`Custom Command`，命令为`picgo upload`

![image-20221227155633835](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20155635.png)

## 七牛云

```json
{
  "picBed": {
    "uploader": "qiniu",
    "qiniu": {
      "accessKey": "bsNP9TIwucSds_bBhaJ-v5h0OQ3hULY7MGi",
      "secretKey": "VpP1SgV0VC1QlJTNoF91ltmpl31aVBiyUTi",
      "bucket": "hen", // 空间名，自定义
      "url": "https://cloud.zengweihao.cn",
      "area": "z2", // 区域 华南
      "options": "",
      "path": "typora/" // 目录
    }
  },
  "picgoPlugins": {
    "picgo-plugin-gitee-uploader": true,
    "picgo-plugin-super-prefix": true
  },
  "picgo-plugin-super-prefix": {
    "prefixFormat": "YYYY-MM-DD/",// 前缀
    "fileFormat": "YYYYMMDDHHmmss"
  },
  "picgo-plugin-gitee-uploader": {
    "lastSync": "2023-01-02 03:56:37"
  }
}
```

## SM.MS

### 需要安装插件`smms-user`
```sh
picgo install smms-user
```

```json
{
  "picBed": {
    "current": "smms-user",
    "uploader": "smms-user",
    "smms-user": {
      "Authorization": "7YEIC4Okm3poF8p43jbljnjl"
    },
    "transformer": "path"
  },
  "picgoPlugins": {
    "picgo-plugin-smms-user": true,
    "picgo-plugin-super-prefix": true,
  },
  "picgo-plugin-super-prefix": {
    "fileFormat": "YYYY-MM-DD HHmmss"
  }
}
```

## 参考

https://blog.csdn.net/xunrenbuyu/article/details/121121611
https://blog.csdn.net/qq_44760609/article/details/122265353

