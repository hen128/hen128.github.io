# Windi CSS

![image-20221230170609219](https://gitee.com/hen128/storage/raw/master/typora/2022-12-30%20170611.png)

## 文档

官网：https://windicss.org/

带有中文翻译的旧版本：https://www.tailwindcss.cn

## 配置
### Vite

语法提示需安装vscode插件 WindiCSS IntelliSense

windi.config.ts 该文件必须在根目录下
```ts
import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    safelist: 'p-3 p-4 p-5',
    theme: {
        extend: {
            colors: {
                teal: {
                    100: '#096',
                },
            },
        },
    },
    extract: {
        include: ['src/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },
    plugins: [formsPlugin],
})


```

vite.config.ts
```ts
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    WindiCSS(),
  ]
})
```

main.ts
```ts
import 'virtual:windi.css'
```