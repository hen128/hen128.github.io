# Uni-app

### 阻止冒泡

`stop`

```html
<!-- 阻止单击事件继续传播 -->
<view @click.stop="doThis"></view>
```

### 路由

#### uni.switchTab(OBJECT)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

```js
uni.switchTab({
	url: '/pages/index/index'
});
```

注意：路径后不能带参数！

### 动态设置导航标题

`setNavigationBarTitle`

```js
uni.setNavigationBarTitle({
	title: '新的标题'
});
```

### 页面通信

监听事件-我的页面

```js
// 我的页面  
onLoad(){  
    // 监听事件  
    uni.$on('login',(usnerinfo)=>{  
        this.usnerinfo = usnerinfo;  
    })  
},  
onUnload() {  
    // 移除监听事件  
        uni.$off('login');  
 },
```

触发事件-登录页面

```js
// 登陆页面  
uni.$emit('login', {  
   avatarUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/10.jpg',  
   token: 'user123456',  
   userName: 'unier',  
   login: true  
});
```

注意：如果页面没有打开，将不能 注册监听事件 `uni.$on` 和 `uni.$once` 。  

组件间也可使用，子组件在`mounted(){}`中设置监听事件

### midButton的用法

`pages.json`

```
"tabBar": {
		"midButton": {
			"width": "80px",
			"height": "50px",
			"text": "文字",
			"iconPath": "static/image/midButton_iconPath.png",
			"iconWidth": "24px",
			"backgroundImage": "static/image/midButton_backgroundImage.png"
		}
	},
```

`app.vue`

```
  onLaunch() {
    uni.onTabBarMidButtonTap(() => {
          uni.navigateTo({
              url: "/pages/midTabBar/midTabBar",
              animationType: "slide-in-bottom",
              animationDuration: 150
          })
    })
  },
```

缺点：不支持微信小程序

## 扩展组件

### [uni-sass辅助样式](https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html)

#### 变量

```css
/* 需要放到文件最上面 */
@import '@/uni_modules/uni-scss/variables.scss';

/*
 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值
 */
// 主色
$uni-primary: #2979ff;
$uni-primary-disable:mix(#fff,$uni-primary,50%);
$uni-primary-light: mix(#fff,$uni-primary,80%);

// 辅助色
// 除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。
$uni-success: #18bc37;
$uni-success-disable:mix(#fff,$uni-success,50%);
$uni-success-light: mix(#fff,$uni-success,80%);

$uni-warning: #f3a73f;
$uni-warning-disable:mix(#fff,$uni-warning,50%);
$uni-warning-light: mix(#fff,$uni-warning,80%);

$uni-error: #e43d33;
$uni-error-disable:mix(#fff,$uni-error,50%);
$uni-error-light: mix(#fff,$uni-error,80%);

$uni-info: #8f939c;
$uni-info-disable:mix(#fff,$uni-info,50%);
$uni-info-light: mix(#fff,$uni-info,80%);

// 中性色
// 中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
$uni-main-color: #3a3a3a; 			// 主要文字
$uni-base-color: #6a6a6a;			// 常规文字
$uni-secondary-color: #909399;	// 次要文字
$uni-extra-color: #c7c7c7;			// 辅助说明

// 边框颜色
$uni-border-1: #F0F0F0;
$uni-border-2: #EDEDED;
$uni-border-3: #DCDCDC;
$uni-border-4: #B9B9B9;

// 常规色
$uni-black: #000000;
$uni-white: #ffffff;
$uni-transparent: rgba($color: #000000, $alpha: 0);

// 背景色
$uni-bg-color: #f7f7f7;

/* 水平间距 */
$uni-spacing-sm: 8px;
$uni-spacing-base: 15px;
$uni-spacing-lg: 30px;

// 阴影
$uni-shadow-sm:0 0 5px rgba($color: #d8d8d8, $alpha: 0.5);
$uni-shadow-base:0 1px 8px 1px rgba($color: #a5a5a5, $alpha: 0.2);
$uni-shadow-lg:0px 1px 10px 2px rgba($color: #a5a4a4, $alpha: 0.5);

// 蒙版
$uni-mask: rgba($color: #000000, $alpha: 0.4);
```

#### 间距

使用间距辅助类对元素快速应用 `margin` 或 `padding` 样式， 范围是从 0 到 16。

规则为 `uni-${property}${direction}-${size}`

- t - 应用 margin-top 和 padding-top 的间距
- r - 应用 margin-right 和 padding-right 的间距
- b - 应用 margin-bottom 和 padding-bottom 的间距
- l - 应用 margin-left 和 padding-left 的间距
- x - 应用 *-left 和 *-right 的间距
- y - 应用 *-top 和 *-bottom 的间距
- a - 在所有方向应用该间距

```html
<view class="uni-mt-2"></view>
```

注意：**size** 以`4px`增量控制间距属性。