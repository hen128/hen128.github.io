# Nuxt3

[Nuxt3中文官网](https://nuxt.com.cn)

转载于[【技术胖】Nuxt3从零到实战手把手  免费视频图文教程](https://jspang.com/article/86#toc12)

## 简介

Nuxt3是基于Vue3发布的SSR框架，也是Vue全家桶系列的一员。

## 安装

创建Nuxt项目

```shell
npx nuxi init <project-name>
```

`npx`是npm新增的命令，上述命令相当于

```shell
# 第一步
npm i nuxi
# 第二步
nuxi init <project-name>
```

假若安装失败，可到https://github.com/nuxt/starter/tree/v3下载压缩包。

启动

```shell
# 安装依赖
npm install 或者 yarn install
npm run dev 或者 yarn dev
```

## 目录结构

```json
- .nuxt               // 自动生成的目录，用于展示结果
- node_modules        // 项目依赖包存放目录
- .gitignore          // Git的配置目录，比如一些文件不用Git管理就可以在这个文件中配置
- app.vue             // 项目入口文件，你可以在这里配置路由的出口
- nuxt.config.ts      // nuxt项目的配置文件 ，这个里边可以配置Nuxt项目的方法面面
- package-lock.json   // 锁定安装时包的版本，以保证其他人在 npm install时和你保持一致
- package.json        // 包的配置文件和项目的启动调式命令配置
- README.md           // 项目的说明文件
- tsconfig.json       // TypeScript的配置文件
```

随着我们的开发目录也会越来越多，比如常用的还有下面三个目录。

```json
- pages               // 开发的页面目录
- components          // 组件目录
- assets              // 静态资源目录
- layouts             // 项目布局目录
```

## 编写Hello World程序

通过上面的学习，我们知道了`App.vue` 这个文件是项目的入口文件。用VSCode打开文件，可以看到文件的基础结构。

```html
<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
```

其中`<NuxtWelcom />` 就是一个框架自带的组件，我们直接删除就可以，不用纠结删除这个组件。删除后，在 `\components` 目录下新建一个文件，叫做`HelloWorld.vue` 然后编写下面的代码。

```html
<template>
  <div class="">
    <h1>Hello World</h1>
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

然后再回到`app.vue`文件中直接写入这个 `HelloWorld`组件.

```html
<template>
  <div>
    <hello-world />
  </div>
</template>
```

打开VSCode的内置终端，然后输入 `npm run dev` 或 `yarn dev` 就可以启动调试服务了。 打开浏览器，在地址栏输入[http://localhost:3000/](http://localhost:3000/) 就可以看到 HelloWord效果了。

## 页面和约定路由的使用

Nuxt3的一个特点就是**约定式开发**，讲究的是约定大于配置。这种开发形式就是按照框架的约定进行开发。我们按照框架约定新建一个`pages` 的文件夹，然后新建一个文件`Demo1.vue` 。注意，上面这两个步骤，就是约定开发，你必须这么作，否则框架就不认为你是一个页面。

```html
<template>
  <div class=""><h1>Demo01</h1></div>
</template>
```

### 约定路由

当一个页面建立好以后，如何能访问到这个页面 ? 也是一个不能忽视的问题。既然是约定开发，肯定是有一个约定的。 首先第一步，我们需要在项目根目录下的`app.vue`文件中，使用 `<Nuxtpage>` 标签，这就相当于路由的出口了。

```html
<template>
  <div>
    <hello-world />
    <NuxtPage></NuxtPage>
  </div>
</template>
```

比如我们现在这个页面，想要访问到，其实只要在地址栏输入下面的地址就可以了。

```JSON
http://localhost:3000/demo1
```

但是如果你使用原来的` http://localhost:3000`就又访问，会显示404，这时候你可以新建一个 `index.vue` 页面。

```html
<template>
  <div class=""><h1>Index Page</h1></div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

这时候在访问` http://localhost:3000`就可以访问到页面了。

### NuxtLink标签的使用

Nuxt框架不鼓励我们使用`<a>` 标签进行跳转，而是使用`<NuxtLink></NuxtLink>`标签进行跳转。比如我们要从 `index.vue`页面跳转到`demo1.vue`页面，就可以使用下面的代码进行跳转。

```html
<template>
  <div class="">
    <h1>Index Page</h1>
    <NuxtLink to="/demo1">Demo1.vue</NuxtLink>
  </div>
</template>
```

## 动态路由的使用

### 单参数的传递

单参数的传递只要在页面的文件名中用`[ ]`扩起来就可以了。比如新建一个页面，叫做 `demo2-[id].vue`。

```JSON
-| pages/
---| index.vue
---| demo2-[id].vue
```

也就是说我们使用`[ ]`的形式就可以设置一个页面的传参。参数接收可以使用 `$route.params.id`的形式。

```html
<template>
  <div class="">获取的id:{{ $route.params.id }}</div>
</template>

<script setup>
import { } from "vue";
</script>

<style scoped></style>
```

我们去首页制作一个链接。

```html
<template>
  <div class="">
    <h1>Index Page</h1>
    <NuxtLink to="/demo1">Demo1.vue</NuxtLink> <br />
    <NuxtLink to="/demo2-38">Demo2.vue</NuxtLink>
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

这时候再到浏览器预览一下，调整后能得到ID，可以了

### 在script里获取参数

上面只是在页面中获取了参数，实际作用并不大。工作中获取参数后，都要进行业务逻辑的处理，所以在`<script>`标签里获取参数，才是真实的开发需求。

```html
<template>
  <div class="">获取的id:{{ id }}</div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
</script>

<style scoped></style>
```

上面的代码通过`useRoute( )` 获得了 `route` 然后通过ref让`template`可用。

### 多参数的获取

有人说是不是再写一个括号就可以传递多一个参数了，这种是不行的。如果你要传递是两个参数。你需要建立一个文件夹，然后在文件夹上使用`[ ]`来确定参数。比如我们要传递一个name的参数过来。就需要把目录和文件建立成这样。

```JSON
-|  pages/
---| index.vue
---| goods-[name]/
-----| demo2-[id].vue
```

然后修改一些`demo2-[id].vue`的文件，修改获取的参数。

```html
<template>
  <div class="">获取的id:{{ id }}</div>
  <div class="">获取的name:{{ name }}</div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
const name = ref(route.params.name);
</script>

<style scoped></style>
```

再到`index.vue` 修改链接，传递两个参数。

```html
<NuxtLink to="/goods-jspang/demo2-38">Demo2.vue</NuxtLink>
```

## 嵌套路由的使用

掌握了动态路由后，我们还需要对嵌套路由有所了解。嵌套路由就是路由是两级，但是程序员的页面是一个。也就是说有父级页面，也有子集页面。类似我们的页面嵌套。

### 如何建立一个嵌套路由

嵌套路由的建立非常容易，用一句话解释为：目录和文件名同名，就制作了一个嵌套路由。
 制作一个嵌套路由页面一般需要三步：

1. 建立嵌套路由的文件夹（约定大于配置）
2. 创建和文件夹相同名称的文件（父页面）
3. 在新建文件夹下任意创建子页面

```text
|--pages
|----parent/
|------child.vue
|----parent.vue
```

 先在`\pages`目录下，新建一个文件夹 `parent` ，然后在pages目录下再建立一个`parent.vue`的文件。文件建立好之后，编写代码。

```html
<template>
  <div class="">Parent Page</div>
  <!-- 子页面的出口-->
  <NuxtChild></NuxtChild>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

这里的`<NuxtChild>`就是嵌套路由的出口，所以如果是嵌套路由，就必须要加上这个标签。这是Nuxt的一个内置组件。 有了父页面之后，在新建的`parent`文件夹下，再建立一个 `child.vue`子页面。然后编写代码。

```html
<template>
  <div class="">Child Page</div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

然后为了看到效果，我们还需要一个路由链接过来。直接到`index.uve`增加路由链接。

```html
<NuxtLink to="/parent/child">/parent/child</NuxtLink><br />
```

做完这部，我们就可以到浏览器预览一下效果了。

### 多个子页面的制作

这时候小伙伴可能会有疑问了，如果我有多个子页面要如何作那？方法其实和制作一个单页面是相同的。在
 `\pages\parent\`文件夹下面再新建一个文件 `two.vue`。然后编写代码。

```html
<template>
  <div class="">Two Page</div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

写完后再到`index.vue`页面，增加导航路由。

```html
<NuxtLink to="/parent/two">/parent/two</NuxtLink><br />
```

然后去浏览器查看结果。

## 自定义路由

文件路径`app/router.options.ts`

```typescript
import type {RouterConfig} from '@nuxt/schema'

export default<RouterConfig> {
    routes:(_routes)=>[
        ..._routes,
        {
            name:'home',
            path:'/',
            component:()=>import('~/pages/home.vue')
        }
    ]
}
```



## 布局模板 让开发高效起来

布局模板的作用就是你先定义好一个布局页面，然后提取一些通用的UI或代码到可重用的模板中，提高代码复用性，从而降低代码的复杂度，让代码重用性提高。
 简单说就是把一些通用的UI代码代码提出来，然后放在一个模板里，使用这个模板的每个页面都拥有这些代码UI了。

### 创建布局模板和使用模板

比如现在新建一个文件夹`\layouts`然后再里边写编写一个 `defalut.vue`文件，代码如下。

```html
<template>
  <div>
    我是布局模板，default.vue
    <slot />
  </div>
</template>
```

上边这段代码就相当于你创建了一个布局模板。有了这个模板后，可以在任何你想要使用的页面中用`<NuxtLayout>`标签为页面赋予模板中的内容。比如我们想在每个页面中都赋予这个模板中的内容，就可以在 `app.vue` 页面中使用这个标签。

```html
<template>
  <NuxtLayout name="default">
    <div>
      <hello-world />
      <NuxtPage></NuxtPage>
    </div>
  </NuxtLayout>
</template>
```

这样每个页面都会有布局模板中的效果，因为`app.vue`是每个页面的出口。

### 增加多个插槽

修改`default.vue`布局模板，增加第二个插槽，一个叫做one，一个叫做two。

```html
<template>
  <div>
    我是布局模板，default.vue
    <slot name="one" />
    ---------
    <slot name="two" />
  </div>
</template>
```

这样编写，一个模板中就有了两个插槽，你可以在页面中通过`<template #xxx>`的形式来指定对应的模板插槽。 在`index.vue`中使用多个 `<template>` 配合模板实现多插槽。

```html
<template>
  <NuxtLayout name="default">
    <template #one>
      <div class="">
        <h1>Index Page</h1>
        <NuxtLink to="/demo1">Demo1.vue</NuxtLink> <br />
        <NuxtLink to="/goods-jspang/demo2-38">Demo2.vue</NuxtLink><br />
        <NuxtLink to="/parent/child">/parent/child</NuxtLink><br />
        <NuxtLink to="/parent/two">/parent/two</NuxtLink><br />
      </div>
    </template>
    <template #two> 我是two中的内容 </template>
  </NuxtLayout>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

注意上面的页面就精确的对应了模板的插槽。如果你作的页面都非常相似，可以好好的利用这个模板布局。
 这个插槽也可以是多个，只要名字对应正确就可以实现。

##  组件的编写

### Nuxt3中创建一个组件

Nuxt3的所有自定义组件，必须写在`components`目录下，写在这个目录下他会自动加载到页面中，而不用我们自己不断的重复引入到每个页面中。
 比如现在要创建一个`<TheFooter/>` 的组件，我们在项目跟目录建立一个文件夹`components` ，然后建立一个文件`TheFooter.vue`。

```html
//目录结构
-|components
----|TheFooter.vue
```

然后在vscode中打开文件，编写下面的代码。

```html
<template>
  <h1>The Footer Box</h1>
</template>
```

这段代码只有一个`<h1>` 标签，在页面中显示出了 `The Footer Box` 。写好组件后，你可以到任何的页面（page）中进行使用。比如在首页使用他们。 打开`/pages/Index.vue`页面，然后在最下面加入这个组件。

```html
<template>
  <NuxtLayout name="default">
    <template #one>
      <div class="">
        <h1>Index Page</h1>
        <NuxtLink to="/demo1">Demo1.vue</NuxtLink> <br />
        <NuxtLink to="/goods-jspang/demo2-38">Demo2.vue</NuxtLink><br />
        <NuxtLink to="/parent/child">/parent/child</NuxtLink><br />
        <NuxtLink to="/parent/two">/parent/two</NuxtLink><br />
      </div>
    </template>
    <template #two>
      <div>我是two中的内容</div>
      <TheFooter />
    </template>
  </NuxtLayout>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

这时候你到浏览器中就可以看到我们刚写的`<TheFooter/>` 组件起作用了。

### 在布局模板中使用组件

底部，其实是每个页面都需要包括的组件，拿我们可以直接把这个组件放到`布局模板`里是非常合适的选择。在布局模板中使用组件和在普通页面中使用组件没有太大的差别，直接使用就可以了。
 这里我们就在`\layouts\default.vue`布局模板中使用。

```html
<template>
  <div>
    我是布局模板，default.vue
    <slot name="one" />
    ---------<br />
    <slot name="two" />
    <TheFooter />
  </div>
</template>
```

这时候每个使用了`default.vue`这个布局模板的页面就会有`<TheFooter />`这个组件的存在了。

### 组件名称的约定

我说了很多会了Nuxt3是约定大于配置的开发模式，所以我们要了解Nuxt3框架对于组件名字的约定。比如按照以前的经验，这个`<TheFooter/>` 组件，习惯写成 `<the-footer />` 我们测试一下，如果你这样写在页面里也是生效的。

```html
/layouts/default.vue
<template>
  <div>
    我是布局模板，default.vue
    <slot name="one" />
    ---------<br />
    <slot name="two" />
    <TheFooter />
    <the-footer />
  </div>
</template>
```

但是个人建议，你尽量使用大写，因为这样可以区分哪些是自定义组件，哪些是原生的HTML标签。
 我说了这是个人建议，但不是必须的。你也可以编写一个`the-header.vue` 的组件，然后用 `<the-header/>` 的形式使用这个组件也是完全可以的。例如下面的两端代码。 在`/components`文件夹下面，新建一个页面 `the-header.vuer`

```html
<template>
  <h1>The Header Box</h1>
</template>
```

然后回到layouts文件夹下的defalut.vue下使用。

```html
<template>
  <div>
    <the-header />
    我是布局模板，default.vue
    <slot name="one" />
    ---------<br />
    <slot name="two" />
    <TheFooter />
    <the-footer />
  </div>
</template>
```

也是完全可以使用的。由此看来Nuxt3对于组件的使用还是非常方便的，你只要符合自己的习惯就好。

## 层级组件、懒加载组件的使用

多层级组件看似好像很复杂，也可能是我表述的不对，其实多层级组件就是把一个组件放在一个文件夹里。在实际工作中组件会非常多，所以会把组件分门别类的放置。那这种有层级的组件，我们要如何引用那。
 比如在` components`文件夹下面，新建一个 `test`文件夹，然后在test文件夹下面再创建一个 `MyButton.vue`文件。

```html
<template>
  <div class=""><button>MyButton</button></div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

写完这个组件后，最关键的一步，就是在页面里如何引用到这个组件。方法很简单，只要在这个页面的前面加上文件夹的名称就可以了。我们的目录结构如下：

```html
--|components
----|test
------|MyButton.vue
```

那引用组件的方法就是这样的。

```html
<TestMyButton />
```

如果有很多层级，我们也依照这个规律，加入前缀就可以实现多层级组件的引用了。
 这种设计的目的是让框架可以应对复杂项目和多组件的需求，让我们的组件更加有条例。

### 组件的懒加载

如果在组件名前面加上`Lazy`前缀，则可以按需懒加载该组件。懒加载组件的目的是在项目打包的时候包更小。简单理解可以理解为只有在组件显示在页面上时才进行加载。 比如我们现在要做一个文本，这个文本只有在` show`的值为 true的时候才会显示。然后其他时候他不显示。

```html
<lazyText v-if="show" />
```

这时候我们就可以使用懒加载组件。如果不总是需要该组件，这将特别有用。
 在`components`文件夹下，新建一个 `LazyText.vue`的文件，然后编写代码如下。

```html
<template>
  <div class="">Lazy Text Content</div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>
```

有了组件之后，我们在新建一个页面`demo2.vue`。然后用一个按钮来控制这个组件的显示和隐藏。

```html
<template>
  <div class="">
    <lazyText v-if="show" />
    <button @click="handleClick">显示/隐藏</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
const handleClick = () => {
  show.value = show.value ? false : true;
};
</script>

<style scoped></style>
```

然后到浏览器看一下效果，这种就是懒加载组件的使用。这种组件也可以用来优化页面的打开速度，比如你有一个几百行的长列表。直接加载会给服务器造成很大压力，如果在其他内容已经完成后，过1-2秒再加载这个长列表，就会给用户很好的体验。也会减少服务器的压力。
 组件相关的内容还是挺多的，所以我们下节课还是学习Nuxt3组件相关的知识。

##  模块化代码 Composable文件夹的试用

在开发中我们经常会有一些通用的业务逻辑代码，需要模块化管理，这时候就可以试用`Composable` 这个文件夹来编写。比如我们常用的显示当前时间，这种常用的通用代码，就可以编写成一个单独的代码段，然后在每个页面进行使用。

### Composable中创建time.ts的编写

新建一个文件夹`composables` 然后在文件夹里边，新建一个文件`time.ts` ，然后编写下面的代码。这段代码你一定编写过，所以就不给大家讲解里边的具体含义了。你可以直接复制这段代码。

```javascript
export  const getTime=()=>{
  const timezone = 8;
  const offset_GMT = new Date().getTimezoneOffset();
  const nowDate = new Date().getTime();
  const today = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
  const date = today.getFullYear() + "-" + twoDigits(today.getMonth() + 1) + "-" + twoDigits(today.getDate());
  const time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
  const timeString ='当前时间：' + date + '  ' + time;

  return timeString;

}

function twoDigits(val) {
  if (val < 10) return "0" + val;
  return val;
}
```

写完之后，如何在页面中使用呢？在`pages` 文件夹下面，新建一个` \pages\demo3.vue` 的文件，然后你就可以直接在这个页面中使用刚才写的获得时间的方法了。

```html
<template>
  <div class="">{{ time }}</div>
</template>

<script setup>
import { ref } from "vue";
const time = ref(getTime());
</script>

<style scoped></style>
```

打开浏览器就可以获得当前时间了。 你可以把任何你在项目中经常使用的代码，封装到这个文件夹里，实现代码的复用。这个文件夹的功能和组件很相似，只是组件是UI部分的代码复用，而这个是业务逻辑代码的复用。

### composables的引入规则

`composables` 文件夹的引入规则是，**只有顶层文件会被引入**。也就是说我们如果在这个文件下再新建一个文件夹，是不会被引入到 页面中实现代码复用的。 比如下面的文件格式就没办法引入。

```html
--|composables
----|test
------|test.ts
```

但是有一种是例外的，就是我们可以写成下面的这种形式。

```html
--|composables
----|test
------|index.ts
```

我们这里测试一下，新建一个` \test` 文件夹，然后在它的下面再创建一个`index.ts` 文件。写入下面的代码。

```javascript
export const test = ()=>{
  console.log('jspang.com')
}
```

然后回到`Demo3.vue` 页面使用`test( )` 方法，结果是可以使用这个方法的。

```html
<template>
  <div class="">{{ time }}</div>
</template>

<script setup>
import { ref } from "vue";
const time = ref(getTime());
test();
</script>

<style scoped></style>
```

我们在`\test` 文件夹下面，再新建一个`test.ts` 文件，然后编写代码，如下：

```javascript
export const testTwo = ()=>{
  console.log('我是技术胖')
}
```

你会发现，这种形式是不能直接引入到页面当中进行使用的，会直接报错`testTwo is not defined`.也就是找不到这个方法。

## 数据请求

Nuxt3中提供了四种方法：`useAsyncData` 、`useFetch` 、`useLazyFetch` 、`useLazyAsyncData` 。提供的四个方法，都是获取后台数据的，但是使用场景和使用方法有所不同。

### useAsyncData的使用

使用`useAsyncData` 异步获取数据，它可以使用在页面中，组件和插件中。我们先通过这个方法来获取一下服务端的数据。 在pages文件夹下，新建一个页面，然后编写下面的代码。

```html
<template>
  <div class=""></div>
</template>

<script setup>
import {} from "vue";

const res = await useAsyncData("getList", () =>
  $fetch("http://121.36.81.61:8000/getTenArticleList")
);
console.log(res);
</script>

<style scoped></style>
```

$fetch( )方法是nuxt3提供的内置方法，我们直接可以使用。

写完后，可以打开浏览器的调试面包，在`终端`里可以看到返回值是一个对象，对象里有四个属性。

- data: 返回的数据，我们需要的服务器数据就在这个属性里。
- error：是否存在错误，如果存在错误，可以在这个属性中获得，返回的是一个对象。
- pending：这次请求的状态，返回的是布尔值。
- refresh：这个返回的是一个函数，可以用来刷新 handler函数返回的数据。

这个方法的一个特点是，它可以进行很多选项的配置，但是在真实开发中，其实我们用的不多。最常用的就是`lazy` 选项，比如我们设置成`true` 就是需要数据都返回后，才会显示出来 ，简单说就是会阻塞页面。默认是false。 比如要设置lazy为true，就可以这样写。因为我们的数据太少，所以基本看不出来效果。

```javascript
const res = await useAsyncData(
  "getList",
  () => $fetch("http://121.36.81.61:8000/getTenArticleList"),
  {
    lazy: true,
  }
);
```

这个可配置的选项`option` 其实还是挺多的，有七项。如果想详细了解的，可以到官方去看一下，我这里给出地址。https://v3.nuxtjs.org/api/composables/use-async-data

但这些选项在开发中很少被配置，一般都使用默认值。所以Nuxt3又提供了一个简单的方法`useFetch` 。

### useFetch的使用

`useFetch` 可以理解为所有的都选择默认配置的`useAsyncData` 方法。比如还是上面的请求，我们就可以写成下面的形式。

```javascript
const res = await useFetch("http://121.36.81.61:8000/getTenArticleList");
```

这样我们依然可以获取数据，当然也是可以传递参数和配置请求方法的。比如我们要设置请求方法是get，传递id是1, 就可以写成下面的形式。

```javascript
const res = await useFetch("http://121.36.81.61:8000/getTenArticleList", {
  method: "get",
  id: 1,
});
```

现在我们要把获取到的数据，显示在页面上。修改一下程序，定义变量，然后用ref来赋值就可以了。

```html
<template>
  <div class="">{{ list }}</div>
</template>

<script setup>
import { ref } from "vue";

const res = await useFetch("http://121.36.81.61:8000/getTenArticleList");
const list = ref(res.data._rawValue.data);
console.log(res);
</script>

<style scoped></style>
```

这样就可以在页面上看到这些从后端得到的数据了。在实际开发中，我们会把这个数组循环输出，并制作一个精美的列表。
 当我们会使用了`useAsyncData` 和 `useFetch` 这两个方法后，`useLazyAsyncData` 和`useLazyFetch` 也自然会使用了。他们只是把配置选项中的`Lazy` 设置成了true， 也就是会阻塞页面。

## middleware路由中间件

Nuxt3提供了路由中间件的概念，你可以在整个应用使用它，目的是在导航到某一个页面之前，执行一些代码。最常见的路由守卫就可以用这个实现。

### 中间件的基本格式

我们先写一个最简单的中间件，就是在控制台打印`来的页面`，和`要去的页面`。目的是通过最简单的实例来了解中间件的基本格式。 在项目根目录，新建一个`middleware`的文件夹，然后在文件下边新建一个文件`default.global.ts` 的文件。其中的`.global`代表这个中间件是全局的，也就是在每次跳转都会执行下面的代码。

```javascript
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("要去那个页面:"+to.path)
  console.log("来自那个页面:"+from.path)
})
```

写完之后，我们可以到浏览器看一下效果。如果一切正常，你可以看到，这时候你在每次跳转时，都会在终端中打出结果。
 当然我们可以继续编写代码，看看`to` 和`from`里到底都有什么属性。

```javascript
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("要去那个页面:"+to.path)
  console.log(to)
  console.log("来自那个页面:"+from.path)
  console.log(from)
})
```

可以看到里边的内容是非常多的，特别是`to`的时候，你可以根据这些来进行编程。

### 通过中间件 设置路由守卫

当我们了解路由中间件的基本写法后，在增加一些难度，来模仿一下路由守卫。比如我们要访问的页面是`http://localhost:3000/demo1`，现在设置路由守卫，不允许访问，而是跳回到首页。那代码就可以写成下面的样子。

```javascript
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/demo1') {
     console.log('禁止访问这个页面')
     abortNavigation()  //停止当前导航，可以使用error进行报错
     return  navigateTo('/')
  }
})
```

这时候再到浏览器访问`demo1` 页面，已经不能访问了，但其他页面是可以访问的。

### 只对一个页面起作用

上面都是对所有路由起作用的，如果只想中间件对一个特殊页面起作用，也是可以的。只要去掉`.global`的后缀就是可以的。 在`middleware` 文件夹下，新建一个页面，`default.ts`，并编写下面的代码。

```javascript
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Hello JSPang.com")
})
```

这时候它对任何页面都是不起作用的，你需要再去对应的页面里注册一下。去`pages`文件夹，新建一个文件`demo7.vue`。然后需要注册这个页面使用这个中间件，代码如下。

```javascript
<template>
  <div class="">Demo7 Page</div>
</template>

<script setup>
definePageMeta({
  middleware: ["default"],
  // or middleware: 'auth'
});
</script>

<style scoped></style>
```

这样就对这个页面注册了一个专属的导航中间件。

## SEO相关的配置

### Nuxt3中的useHead 和useMeta

Nuxt3中提供了 `useHead`方法来设置SEO需要的内容，用它可以设置HTML中Head的全部内容，所以这也包括meta标签的内容，基本的使用方法也是很简单。 上节课我们新建了一个Nuxt3的项目，这节我们就在上节课的项目中继续。在练习的根目录中下的  page文件夹下，新建一个文件`demo1.vue`，然后使用 `useHead( )`方法来设置头部信息。

```html
<template>
  <div class="">Demo8 Page</div>
</template>

<script setup>
useHead({
  title: " JSPang.com 技术胖的博客",
  viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
  charset: "utf-8",
  meta: [
    { name: "description", content: "技术胖的前端免费视频博客" },
    { name: "keywords", content: "技术胖" },
  ],
});
</script>

<style scoped></style>
```

### 使用template中的标签定义Head

除了使用`useHead( )` 方法外，你还可以直接使用`<template>` 中的的`<head>`来定义SEO相关的属性。
 我们在`/pages` 文件夹下面，新建一个`demo1.vue` 的文件，然后编写下面的代码。

```html
<template>
  <div class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div>技术胖的博客</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const title = ref("技术胖的博客");
</script>
```

从代码中可以看到，我们直接使用了`<Head>`标签，然后在里边还可以使用`<Title>`标签和`<Meta>`标签，可以设置这两个标签后，关于SEO的设置就都可以作了。 我们使用Nuxt的意义就在于可以有很好的SEO效果，所以在你开发的时候，一定要对页面进行标题、描述和关键词的设置和编写。

## Cookie的设置

在网页制作时，经常需要临时保存一些信息到Cookie中，而不是全部都保存到数据库中，这样作能减轻服务器的压力。这节就学习一下Nuxt3中的Cookie操作。

### cookie的作用

先来了解一下Cookie的作用，Cookie最常见的开发作用就是临时记录用户个人信息，比如我们登录了一个网站，然后提醒下次记住信息，下次再浏览这个网站时，就不用登录了。
 这就是cookie起的作用，当我们登录一次后，把登录信息记录在了cookie里，但是这个记录是有时效性的，通过属性可以进行设置。比如你连续7天没登录，那cookie就过期了，再浏览这个网站就需要重新登录了。

### useCookie( )方法的使用

```javascript
const cookie = useCookie(name, options)
```

制作登录太复杂，我们这属于是入门的教程，所以就用Cookie制作一个计数器，让你了解Cookie的使用方法。这里要使用的函数就是`useCookie` ,代码如下。
 在pages 文件夹下，新建一个页面`demo3.vue`

```html
<template>
  <h1>Counter:{{ counter }}</h1>
  <button @click="reset">Reset</button>
  <button @click="add">Add</button>
</template>

<script setup>
const counter = useCookie("counter");
counter.value = counter.value || 0;
const reset = () => {
  counter.value = 0;
};
const add = () => {
  counter.value = counter.value + 1;
};
</script>

<style scoped></style>
```

这段代码的意思，我创建了一个叫做counter的Cookie值，然后取得Cookie值，放到页面上，如果没有Cookie值的时候，就初始化Counter的Cookie值为0。然后我又作了两个按钮，一个是直接将Cookie值设置为0，一个是每点击一次Cookie加1。
 代码编写完成后，可以到浏览器中查看一下效果，你也可以按F12打开浏览器的调试模式，找到`Application` 标签，再找到`Cookie` 选项，就可以看到里边的Cookie值了，这也很好的证明我们的Cookie值设置成功了。

### 常用的相关属性

`useCookie( )`函数，第一个参数是设置Cookie值的名字，第二个参数为选项`option`,我们接着来看有那些可选择配置的Cookie参数。（注意：我这里只说两个常用的）

1. maxAge/expires

这两个参数都是设置Cookie的有效时长的，如果两个参数你都不设置，那Cookie的值在关闭浏览器的时候将会被清空。两个参数的不同是，maxAge的值是一个数字`Number`,而expires的值是一个日期对象`Date object`.
 比如我们希望设置Cookie的过气时间是一个小时，也就是3600秒，那我们的配置就需要这样写。

```javascript
const counter = useCookie("counter",{
  maxAge:3600,
});
```

\2. httpOnly
 这算是一个安全设置，如果把httpOnly设置为true，可以对最常见的XSS攻击起到防范作用。

> 什么是HttpOnly？  HttpOnly是包含在http返回头Set-Cookiew里面的一个附件的flag，所以它是后端服务器对cookie设置的一个附件属性，在生成cookie时使用HttpOnly标志有助于减轻客户端脚本访问收保护cookie的风险。

```javascript
const counter = useCookie("counter",{
  htttpOnly:true,
});
```

\3. secure
 这也是一个安全设置，如果你的网址不是`HTTPS`的，并且把`secure`的值设置为true，那Cookie的值就不会传递给服务端。总的来说还是一个为了服务器安全的设置。

```javascript
const counter = useCookie("counter",{
  secure:true,
});
```

这个需要配置HTTPS 所以不太好演示，这里也就不演示了。
 其余的还有`domain` ,`path` ,`sameSite` ,`encode`,`decode` 这些属性设置，其实都跟安全有关，因为Cookie的设置确实需要考虑安全性，所以根据服务端和app的需求，尽量设置多的安全性参数。

## 服务端接口编写

## 状态管理



## 部署

### 静态托管-仅客户端渲染

如果你不想预渲染你的路由，另一种使用静态托管的方法是在`nuxt.config`配置文件中设置 `ssr`属性为`false`。`nuxi generate`命令会输出一个`.output/public/index.html`入口点和JavaScript包，就像一个经典的客户端Vue.js应用程序一样。

```js
defineNuxtConfig({ 
    ssr: false
})
```

## 引入Pinia