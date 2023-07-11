# Mac配置

## 安装

- Homebrew
- git
- n （替代nvm，功能及命令和nvm相似)
- Node

什么是Homebrew?

```
macOS的软件安装工具，需要用到它来安装git。
```

如需安装n，则应该卸载之前的node。

**步骤**

先安装Homebrew，再通过brew安装git。

先安装n，再通过n安装node。

## 安装前端工具

- vite
- Vue-cli
- nuxt
- nodemon
- 以及Tyoora图像上传工具

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

