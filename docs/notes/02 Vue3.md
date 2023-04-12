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
