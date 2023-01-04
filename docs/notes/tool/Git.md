# Git

## 命令

```sh
# 强制推送
git push -f 
# 强制推送到仓库
git push -f https://gitee.com/<USERNAME>/<USERNAME>.git master 
# 推送到分支
git push -f https://gitee.com/<USERNAME>/<USERNAME>.git master:<分支名>
```



## git pull 报错

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