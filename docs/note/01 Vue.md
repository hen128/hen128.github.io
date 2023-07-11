# Vue的笔记

## 解决重复点击相同导航报错

```js
、import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```

## filter管道

```js
<template slot-scope="scope">
   {{ scope.row.status | statusFilter }}
</template>

filters: {
    statusFilter(status) {
        const statusMap = {
            1: "未确认",
            2: "已确认",
        };
        return statusMap[status];
    },
},
```

##  watch监听路由变化

```js
watch: {
        '$route.path': (newVal, oldVal) =>{
        //    RouteGurad(newVal)
        console.log(newVal)
        }
    }

watch: {
    $route(to, from) {
      console.log(to.path)
    },
  },
```

## 监听对象变化

当对象中的值变化时，普通的监听无效。面对这种情况有两种解决方法，一重新赋值对象，二深层次监听

```js
// store.js
  state: {
    isLogin: false,
    admin: {
      userId: '',
      name: '',
      email: '',
      admin: '',
    }
  },

// 方法一 watch 深层次监听
  '$store.state.admin': {
      handler(value) {
        if (value.userId) {
          this.getMsgPerson()
        }
      },
      immediate: true,
      deep: true
    }

// 方法二 重新赋值对象
  mutations: {
    login(state, payload) {

      state.admin = payload // 重新赋值对象，只改变值则无法监听

      /* state.admin.userId = payload.userId
      state.admin.name = payload.name
      state.admin.email = payload.email
      state.admin.admin = payload.admin */

      state.isLogin = true
    },
 }
```

## computed计算属性

```js
const fullName1 = computed(()=>{
	return user.firstName + '_' + user.lastName
})

const fullName2 = computed({
	get(){
		return user.firstName + '_' + user.lastName
	},
	set(val:string){
		const names = val.split('_')
		user.firstName = names[0]
		user.lastName = names[1]
	}
})
```

## 页面刷新优解

```js
https://blog.csdn.net/weixin_43885417/article/details/91310674

## App.vue 写入
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true, //控制视图是否显示的变量
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true //再打开
      })
    },
  },
}
</script>

// 页面刷新
this.reload();
```

## 获取滚动条到底部距离

```js
onMounted(() => {
	window.onscroll = function () {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        //变量windowHeight是可视区的高度
        var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
        //变量scrollHeight是滚动条的总高度
        var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
        //滚动条到底部的条件
        if (scrollTop + windowHeight == scrollHeight) {
        //写后台加载数据的函数
            console.log(
                '距顶部' +
                scrollTop +
                '可视区高度' +
                windowHeight +
                '滚动条总高度' +
                scrollHeight
            )
        }
	}
})
```

## 深度选择器

```css
:deep(.class){...}

::v-deep .class{...}
```

## 组件通讯



# Vue3

## watch监听

```js
//方法一 监视---监视指定的数据
watch(user,({firstName,lastName}) => {
	fullName3.value = firstName + '_' + lastName
},{immediate:true,deep:true})

// 方法二 监视，不需要配置immediate，本身默认就会进行监视，(默认会执行一次)
watchEffect(()=>{
	fullName3.value = user.firstName + '_' + user.lastName
})

// 可监视多个数据
watch([user.firstName,user.lastName,fullName],()=>{
	...
})

// 监视非响应式数据
watch([()=>user.firstName,()=>user.lastName,fullName3],()=>{
	console.log('====')
})

// 监听路由
watch(
   () => proxy.$route.path,(n,o) => {
        state.activeIndex = n
        console.log('监听到变化' + state.activeIndex)
     }
 )
```

## axios封装


```js
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';

let loading: any;

const startLoading = () => {

  interface Options {
    lock: boolean;
    text: string;
    background: string;
  };

  const options: Options = {
    lock: true,
    text: "加载中...",
    background: 'rgba(0,0,0,0.7)'
  }
  loading = ElLoading.service(options);
}

const endLoading = () => {
  loading.close();
}

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // 加载
  startLoading();
  return config;
})


// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
  // 结束loading
  endLoading();
  return response;
}, error => {
  // 结束loading
  endLoading();
  // 错误提醒
  return Promise.reject(error);
})

export default axios;
```
