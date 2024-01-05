# CSS的笔记

### 文本`\n`解析换行

使用该样式

```css
.title{
   white-space: pre-wrap;
}
```

对应Windi CSS中的`whitespace-pre-wrap`

### calc

```css
.el-menu {
    height: calc(100vh - 60px);
}
```

### a标签禁用

```
<a style="pointer-events: none;" @click.prevent="updateAddressFn(address)">默认地址</a>
```

### 底部按钮fixed定位

需求：

<img src="https://cloud.zengweihao.cn/typora/2023-08-26/20230826125850.png" alt="image-20230826125849636" style="zoom: 50%;" />

实现：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .page {
        width: 100%;
        height: 100vh;
      }
      .fix-div {
        width: 100%;
        background: red;
        position: fixed;
        bottom: 0;
        left: 0;
      }
      .btn_wrap {
        padding: 10px;
      }
      .btn {
        height: 40px;
        background: burlywood;
      }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="fix-div">
        <div class="btn_wrap">
          <div class="btn">按钮</div>
        </div>
      </div>
    </div>
  </body>
</html>
```

<img src="https://cloud.zengweihao.cn/typora/2023-08-26/20230826125939.png" alt="image-20230826125938579" style="zoom:50%;" />

### 文字省略

- 一行省略

  ```CSS
  span {
    width: 320rpx !important;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
  }
  ```

- 两行省略

  ```css
  .double-line {
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  ```

- 超过元素宽高省略

  ```css
  .over-line {
    height: 65px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  ```

- 字符截取省略

  ```vue
  .assign-line {
    height: 45px;
    word-break: break-all;
  }
  
   methods: {
      handleontent() {
        this.content3 = `${this.content.substring(0, 80)} ...`
        this.content4 = `${this.content2.substring(0, 80)} ...`
      }
    }
  
  <p>字符截取省略</p>
  <div class="box">
    <div class="assign-line" :title="content">
      {{ content3 }}
    </div>
  </div>
  <div class="box">
    <div class="assign-line" :title="content">
      {{ content4 }}
    </div>
  </div>
  ```


### :last-child 与: last-of-type 区别

- :last-child选择器用来匹配父元素中最后一个子元素
- :last-of-type选择器匹配位于同一父元素下特定类型中的最后一个子元素

### 强制换行

word-break:break-all;只对英文起作用，以字母作为换行依据

word-wrap:break-word; 只对英文起作用，以单词作为换行依据

white-space:pre-wrap; 只对中文起作用，强制换行

white-space:nowrap; 强制不换行，都起作用

### flex

- flex-shrink: 0; // 禁止自动压缩
