# React 18

------


> git规范：
>
> ```
> feat - 新功能 feature
> fix - 修复 bug
> docs - 文档注释
> style - 代码格式(不影响代码运行的变动)
> refactor - 重构、优化(既不增加新功能，也不是修复bug)
> perf - 性能优化
> test - 增加测试
> chore - 构建过程或辅助工具的变动
> revert - 回退
> build - 打包
> ```
>
> 代办：
>
> 小案例：
> 列表过滤：https://zh-hans.reactjs.org/learn/sharing-state-between-components
> 相同位置的相同组件会使得 state 被保留下来 ：https://zh-hans.reactjs.org/learn/preserving-and-resetting-state
> useRef练习：https://zh-hans.reactjs.org/learn/referencing-values-with-refs

# 基础

## 事件

阻止默认事件

```js
event.preventDefault()
```

阻止事件冒泡

```js
event.stopPropagation()
```

## 样式 className和 LineStyle

### 写法一

```jsx
编写：
.sty1{//和普通CSS一样定义class选择器
    background-color: red;
    color: white;
    font-size: 40px;
}

导入：
import './style.css';

调用：
<div className="sty1">看背景颜色和文字颜色</div>
```

### 写法二

```jsx
导入：
import StyleOther from  './styleother.css';

调用：
<div className={StyleOther.sty2}>看背景颜色和文字颜色</div>
```

### 写法三

```jsx
在JSX中定义：
let backAndTextColor = {
    backgroundColor:'red',
    color:'white',
    fontSize:40
};

调用：
<div style={backAndTextColor}>看背景颜色和文字颜色</div>

或者：
<div style={{backgroundColor:'red',color:'white',fontSize:40}}>看背景颜色和文字颜色</div>
```

### 导入背景图(Vite)

```jsx
// 导入
import bgPic from '@/assets/bg.jpg'

// 定义变量
const bgStyle = {
    backgroundImage: 'url(' + bgPic + ')'
}

// 使用
<div style={bgStyle}></div>
// 或者
<div style={{ backgroundImage: 'url(' + bgPic + ')' }}></div>
```



## 路由守卫(react-router-dom)

`App.tsx`

```tsx
import { useEffect } from 'react'
import { Button, Space, message } from 'antd'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from "./router"

const ToLogin = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
    // 加载完组件之后执行这里的代码
    navigateTo("/login")
    message.warning("您还没有登录，请登录后再访问！")
  }, [])
  return <div></div>
}

// 建立 路由守卫
const BeforeRouterEnter = () => {
  const outlet = useRoutes(router)
  const location = useLocation()
  let token = localStorage.getItem('token')
  // 未登录则跳转登录页
  if (!token && location.pathname != '/login') {
    // 这里不能直接用 useNavigate 来实现跳转 ，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToLogin />
  }

  return outlet
}

function App() {
  return (
    <div className="App">
      <BeforeRouterEnter />
    </div>
  )
}

export default App
```



## 嵌套路由(react-router-dom)

```tsx
import React, { lazy } from "react"
// Navigate重定向组件
import { Navigate } from "react-router-dom"

import Layout from "@/layout"
import Login from "@/views/Login"
// const Login = lazy(() => import("@/views/Login"))
const Home = lazy(() => import("@/views/Home"))
const About = lazy(() => import("@/views/About"))
const NotFount = lazy(() => import("@/views/404"))

// 报错A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.
// 懒加载的模式的组件的写法，外面需要套一层 Loading 的提示加载组件
const withLoadingComponent = (children: JSX.Element) => (
    <React.Suspense fallback={<div className="text-center">Loading...</div>}>
        {children}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" /> // 重定向
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: withLoadingComponent(<Home />)
            },
            {
                path: "/about",
                element: withLoadingComponent(<About />) 
            }
        ]
    },
    {
        path: "/login",
        // element: withLoadingComponent(<Login />)
        element: <Login />
    },
    {
        path: "*",
        element: withLoadingComponent(<NotFount />)
    }
]

export default routes
```



## 路由传值

```
暂无处理！
```



## 父子传值

`index.tsx`

```tsx
import { SetStateAction, useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import { Divider ,Space} from 'antd'

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

const View: React.FC = () => {
    const [to, setTo] = useState(contacts[0]);
    return (
        <>
            <Divider orientation="left">父子传值</Divider>
            <Space>
                <ContactList
                    contacts={contacts}
                    selectedContact={to}
                    onSelect={(contact: SetStateAction<{ name: string; email: string; }>) => setTo(contact)}
                />
                <Chat contact={to} />
            </Space>
        </>
    )
}

export default View
```

`Chat.tsx`

```tsx
import { useState } from 'react';
import { Button } from 'antd'

export default function Chat({ contact }:any) {
    const [text, setText] = useState('');
    return (
        <section className="chat">
            <textarea
                value={text}
                placeholder={'Chat to ' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <Button>发送给 {contact.email}</Button>
        </section>
    );
}
```

`ContactList`

```tsx
import { Button } from 'antd'

export default function ContactList({
    selectedContact,
    contacts,
    onSelect
}: any) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map((contact: any) =>
                    <li key={contact.email}>
                        <Button onClick={() => {
                            onSelect(contact);
                        }}>
                            {contact.name}
                        </Button>
                    </li>
                )}
            </ul>
        </section>
    );
}
```

注意：组件中传参`({children , props})` 中`children`代表子组件。

疑问：插槽的使用？

# Vite(脚手架的使用)

## 安装

生成脚手架

```shell
npm init vite
```

修改package.json中的包：

```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^7.2.8",
    "react-router-dom": "^6.3.0",
    "redux": "^4.1.2"
},
```

修改package.json启动命令：

```json
"scripts": {
    "dev": "vite --host --port 3002",
    "build": "tsc && vite build",
    "preview": "vite preview"
}
```



## 配置项目路径别名

目前ts对@指向src目录的提示是不支持的，vite默认也是不支持的。 所以需要手动配置@符号的指向 在vite.config.ts中添加配置：

`vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})

```

配置路径别名的提示，虽然现在路径别名已经有了，但是在文件中输入@是没有提示路径的 需要我们在tsconfig.json中：添加两项配置

`tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
}
```

# Ant Design 5.0引入

新特性：默认支持按需加载

安装

```shell
npm install antd --save
# or
yarn add antd
```

使用

```tsx
import React from 'react';
import { DatePicker } from 'antd';

const App = () => {
  return <DatePicker />;
};

export default App;
```

# Windi CSS引入(Vite)

指导：https://windicss.org/integrations/vite.html

安装

```shell
npm i -D vite-plugin-windicss windicss
```

`vite.config.ts`

```typescript
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

`main.tsx`

```typescript
import 'virtual:windi.css'
```

`windi.config.ts`

```typescript
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
  plugins: [formsPlugin],
})
```

