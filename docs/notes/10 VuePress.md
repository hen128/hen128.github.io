# VuePress

Vue 驱动的静态网站生成器   

## 安装

官网教程：https://vuepress.vuejs.org/zh/guide/getting-started.html

## 部署到gitee

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.zengweihao.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到gitee
git push -f https://gitee.com/hen128/hen128.git master

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```