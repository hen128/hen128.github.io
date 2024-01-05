# Mac配置

## 安装Homebrew

- Homebrew
- git
- n （替代nvm，功能及命令和nvm相似)
- Node

什么是Homebrew?

```
macOS的软件安装工具，需要用到它来安装git。
```

## 安装node

如需安装n，则应该卸载之前的node。

**步骤**

先安装Homebrew，再通过brew安装git。

先安装n，再通过n安装node。

## 安装mysql

参考文章：

https://zhuanlan.zhihu.com/p/114520585

https://juejin.cn/post/7020737412955373598

```
brew install mysql@版本号

mysql	 --version 查看是否安装成功
```

开启服务：

```
brew services start mysql@5.7
```

### brew安装MongoDB

参考文章：

[菜鸟教程](https://www.runoob.com/mongodb/mongodb-osx-install.html)

- 安装

  ```
  brew tap mongodb/brew
  brew install mongodb-community@4.4
  ```

- 安装信息

  ```
  配置文件：/usr/local/etc/mongod.conf
  日志文件路径：/usr/local/var/log/mongodb
  数据存放路径：/usr/local/var/mongodb
  ```

- 运行

  brew 启动

  ```
  brew services start mongodb-community@4.4
  ```

  brew 停止

  ```
  brew services stop mongodb-community@4.4
  ```

  
