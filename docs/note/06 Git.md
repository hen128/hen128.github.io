# Git

## 常用命令

```sh
# 强制推送
git push -f 
# 强制推送到仓库
git push -f https://gitee.com/<USERNAME>/<USERNAME>.git master 
# 推送到分支
git push -f https://gitee.com/<USERNAME>/<USERNAME>.git master:<分支名>

# 查看配置信息
git config --list

# 修改本地分支名称
git branch -m oldName newName
```

## 创建本地分支

```sh
创建本地分支，然后切换到dev分支

$ git checkout -b dev
git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：

$ git branch dev
$ git checkout dev
```

## 回退

```sh
# 查看版本号
git log
# 回退
git reset 版本号
# 再手动修改，push，可采取强制push
git push -f
```

## 合并

```sh
# 切换到目标分支
git checkout 目标分支
# 选择需要合并的分支名
git merge 分支名
```

## 删除分支

```
# 删除本地分支
git branch -d <branch>

-D 为强制删除
```

### 退出 git log

按下 `q` 键。

### 保存到暂存

```
git stash
```



## 提交规范

**1.按功能模块一次提交多个文件，提交要有注释**，例如执行git commit -m ‘feat：登录校验’

| 类型     | 说明                             |
| -------- | -------------------------------- |
| feat     | 添加新功能                       |
| fix      | 修复bug                          |
| docs     | 修改文档                         |
| style    | 修改样式，不影响业务代码         |
| refactor | 重构                             |
| perf     | 改进性能的代码更改               |
| test     | 添加单元测试                     |
| chore    | 常规改动、构建过程或辅助工具变动 |

## 配置

## .gitignore

语法

```
空格不匹配任意文件，可作为分隔符，可用反斜杠转义
开头的文件标识注释，可以使用反斜杠进行转义
! 开头的模式标识否定，该文件将会再次被包含，如果排除了该文件的父级目录，则使用 ! 也不会再次被包含。可以使用反斜杠进行转义
/ 结束的模式只匹配文件夹以及在该文件夹路径下的内容，但是不匹配该文件
/ 开始的模式匹配项目跟目录
如果一个模式不包含斜杠，则它匹配相对于当前 .gitignore 文件路径的内容，如果该模式不在 .gitignore 文件中，则相对于项目根目录
** 匹配多级目录，可在开始，中间，结束
? 通用匹配单个字符
* 通用匹配零个或多个字符
[] 通用匹配单个字符列表
```

示例

```
bin/: 忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
/bin: 忽略根目录下的bin文件
/*.c: 忽略 cat.c，不忽略 build/cat.c
debug/*.obj: 忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj
**/foo: 忽略/foo, a/foo, a/b/foo等
a/**/b: 忽略a/b, a/x/b, a/x/y/b等
!/bin/run.sh: 不忽略 bin 目录下的 run.sh 文件
*.log: 忽略所有 .log 文件
config.php: 忽略当前路径的 config.php 文件
```

**.gitignore规则不生效**

.gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。

解决方法就是先把本地缓存删除（改变成未track状态），然后再提交:

```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```



1. git pull 报错

```
error: Your local changes to the following files would be overwritten by merge:

一、保存本地修改
    git stash  
    git pull origin master  
    git stash pop  
二、不想保留本地修改
	git reset --hard 
	git pull origin master

```

2. 报错：fatal: unable to access 'https://github.com/hen128/test.git/': OpenSSL SSL_read: Connection was reset, errno 10054

原因：网络访问超时，这时候我们可以在终端选择使用设置代理和取消代理的命令解决。

设置代理

```
git config --global https.proxy
```

取消代理

```
git config --global --unset https.proxy
```

重新推送

```
git push
```

成功解决！