# React 18的笔记

## 事件

阻止默认事件

```js
event.preventDefault()
```

阻止事件冒泡

```js
event.stopPropagation()
```

## CSS

### 样式 className和 LineStyle

写法一

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

写法二

```jsx
导入：
import StyleOther from  './styleother.css';

调用：
<div className={StyleOther.sty2}>看背景颜色和文字颜色</div>
```

写法三

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

## 条件渲染

渲染组件：

```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

或使用`&&`

```jsx
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

## 渲染列表

```jsx
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```



## 路由

### 路由守卫(react-router-dom)

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



### 嵌套路由(react-router-dom)

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



### 路由传值

```
暂无
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



## 嵌套html

使用`dangerouslySetInnerHTML`

```html
<p dangerouslySetInnerHTML={{ __html: record.content }}></p>
```

## useState

### 对象

State 可以保存任何类型的 JavaScript 值，包括对象。但是你不应该直接改变你在 React 状态下持有的对象。相反，当您想要更新一个对象时，您需要创建一个新对象（或复制一个现有对象），然后设置状态以使用该副本。

```jsx
const [position, setPosition] = useState({ x: 0, y: 0 })

// 不推荐
position.x = 5;

// 要替换而不是改变
 setPosition({
     x: e.clientX,
     y: e.clientY
})
```

使用解构

```jsx
 const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }
```

### 数组

https://react.docschina.org/learn/updating-arrays-in-state

数组是另外一种可以存储在 state 中的 JavaScript 对象，它虽然是可变的，但是却应该被视为不可变。同对象一样，当你想要更新存储于 state 中的数组时，你需要创建一个新的数组（或者创建一份已有数组的拷贝值），并使用新数组设置 state。

在 JavaScript 中，数组只是另一种对象。[同对象一样](https://react.docschina.org/learn/updating-objects-in-state)，**你需要将 React state 中的数组视为只读的**。这意味着你不应该使用类似于 `arr[0] = 'bird'` 这样的方式来重新分配数组中的元素，也不应该使用会直接修改原始数组的方法，例如 `push()` 和 `pop()`。

相反，每次要更新一个数组时，你需要把一个**新**的数组传入 state 的 setting 方法中。为此，你可以通过使用像 `filter()` 和 `map()` 这样不会直接修改原始值的方法，从原始数组生成一个新的数组。然后你就可以将 state 设置为这个新生成的数组。

下面是常见数组操作的参考表。当你操作 React state 中的数组时，你需要避免使用左列的方法，而首选右列的方法：

|          | 避免使用 (会改变原始数组)     | 推荐使用 (会返回一个新数组）                                 |
| -------- | ----------------------------- | ------------------------------------------------------------ |
| 添加元素 | `push`，`unshift`             | `concat`，`[...arr]` 展开语法（[例子](https://react.docschina.org/learn/updating-arrays-in-state#adding-to-an-array)） |
| 删除元素 | `pop`，`shift`，`splice`      | `filter`，`slice`（[例子](https://react.docschina.org/learn/updating-arrays-in-state#removing-from-an-array)） |
| 替换元素 | `splice`，`arr[i] = ...` 赋值 | `map`（[例子](https://react.docschina.org/learn/updating-arrays-in-state#replacing-items-in-an-array)） |
| 排序     | `reverse`，`sort`             | 先将数组复制一份（[例子](https://react.docschina.org/learn/updating-arrays-in-state#making-other-changes-to-an-array)） |

## useRef

### 引用值

https://zh-hans.react.dev/learn/referencing-values-with-refs

React 会在每次重新渲染之间保留 ref。但是，设置 state 会重新渲染组件，更改 ref 不会！

| ref                                                     | state                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| `useRef(initialValue)`返回 `{ current: initialValue }`  | `useState(initialValue)` 返回 state 变量的当前值和一个 state 设置函数 ( `[value, setValue]`) |
| 更改时不会触发重新渲染                                  | 更改时触发重新渲染。                                         |
| 可变 —— 你可以在渲染过程之外修改和更新 `current` 的值。 | “不可变” —— 你必须使用 state 设置函数来修改 state 变量，从而排队重新渲染。 |
| 你不应在渲染期间读取（或写入） `current` 值。           | 你可以随时读取 state。但是，每次渲染都有自己不变的 state [快照](https://zh-hans.react.dev/learn/state-as-a-snapshot)。 |

### 操作DOM

https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs

```jsx
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}
```

## useEffect 

https://zh-hans.react.dev/learn/synchronizing-with-effects

*Effects*让你在渲染后运行一些代码。

在组件的顶层调用它，并将一些代码放入 Effect 中：

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
  });
  return <div />;
}
```

## useContext

https://zh-hans.react.dev/reference/react/useContext

相当于上下文的作用。

## useMemo

https://zh-hans.react.dev/reference/react/useMemo

相当于Vue中的computed

## useReducer 

https://zh-hans.react.dev/reference/react/useReducer

状态管理。

## Vite(脚手架的使用)

**安装**

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

**配置项目路径别名**

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

## Ant Design 5.0引入

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

## Table  render绑定事件 

```jsx
  const columns = [
    {
    title: '审核',
    render: (_, record) => (
      <Button onClick={() => { checkNote(record.id, 2) }}>已通过</Button>
    ),
  },
  ]
  
  const checkNote = ()=>{...}
```



## Windi CSS引入(Vite)

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

