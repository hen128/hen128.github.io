# Flex布局复习-骰子

## 单项目

![image-20221227160556106](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160557.png)

```css
.box {
  display: flex;
  justify-content: flex-end;
}
```

![image-20221227160615314](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160616.png)

```
.box {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
```

![image-20221227160633357](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160635.png)

```
.box {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
```

## 双项目

![image-20221227160643095](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160644.png)

```
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

![image-20221227160654321](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160655.png)

```
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
```

![image-20221227160709861](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160711.png)

```
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
```

![image-20221227160722899](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160724.png)

```
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}
```

![image-20221225152526849](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20161351.png)
```
.box {
  display: flex;
  justify-content: space-between;
}

.item:nth-child(2) {
  align-self: flex-end;
}
```

## 三项目

![image-20221227160732386](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160734.png)

```
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}

.item:nth-child(3) {
  align-self: flex-end;
}
```

## 四项目

![image-20221227160746396](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160748.png)

```
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
}
```

![image-20221227160802436](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160804.png)

```
<div class="box">
  <div class="column">
    <span class="item"></span>
    <span class="item"></span>
  </div>
  <div class="column">
    <span class="item"></span>
    <span class="item"></span>
  </div>
</div>
```

```
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
```

## 六项目

![image-20221227160813086](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160814.png)

```
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

![image-20221227160823300](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160825.png)

```
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}
```

![image-20221227160840128](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160841.png)

```
<div class="box">
  <div class="row">
    <span class="item"></span>
    <span class="item"></span>
    <span class="item"></span>
  </div>
  <div class="row">
    <span class="item"></span>
  </div>
  <div class="row">
     <span class="item"></span>
     <span class="item"></span>
  </div>
</div>
```

```
.box {
  display: flex;
  flex-wrap: wrap;
}

.row{
  flex-basis: 100%;
  display:flex;
}

.row:nth-child(2){
  justify-content: center;
}

.row:nth-child(3){
  justify-content: space-between;
}
```

## 九项目

![image-20221227160851245](https://gitee.com/hen128/storage/raw/master/typora/2022-12-27%20160852.png)

```
.box {
  display: flex;
  flex-wrap: wrap;
}
```

## html

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: #232323;
    }

    h2 {
        color: #e7e7e7;
    }

    .box {
        margin: 16px;
        padding: 4px;
        width: 104px;
        height: 104px;
        object-fit: contain;
        background-color: #e7e7e7;
        border-radius: 10px;
        box-shadow:
            inset 0 5px white,
            inset 0 -5px #bbb,
            inset 5px 0 #d7d7d7,
            inset -5px 0 #d7d7d7;
    }

    .item {
        display: block;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin: 4px;
        background-color: #333;
        box-shadow: inset 0 3px #111, inset 0 -3px #555;
    }

    .box2 {
        display: flex;
        justify-content: center;
    }

    .box3 {
        display: flex;
        justify-content: flex-end;
    }

    .box4 {
        display: flex;
        align-items: center;
    }

    .box5 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .box6 {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .box7 {
        display: flex;
        justify-content: space-between;
    }

    .box8 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .box9 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .box10 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    /* 二项目 */
    .box11 {
        display: flex;
    }

    .box11 .item:nth-child(2) {
        align-self: center;
    }

    .box12 {
        display: flex;
        justify-content: space-between;
    }

    .box12 .item:nth-child(2) {
        align-self: flex-end;
    }

    /* 三项目 */
    .box13 {
        display: flex;
    }

    .box13 .item:nth-child(2) {
        align-self: center;
    }

    .box13 .item:nth-child(3) {
        align-self: flex-end;
    }

    /* 四项目 */
    .box14 {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: flex-end;
    }

    .box15 {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }

    .box15 .column {
        flex-basis: 100%;
        display: flex;
        justify-content: space-between;
    }

    .box16 {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }

    .box17 {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-between;
    }

    .box18 {
        display: flex;
        flex-wrap: wrap;
    }

    .box18 .row {
        flex-basis: 100%;
        display: flex;
    }

    .box18 .row:nth-child(2) {
        justify-content: center;
    }

    .box18 .row:nth-child(3) {
        justify-content: space-between;
    }

    /* 九项目 */
    .box19 {
        display: flex;
        flex-wrap: wrap;
    }
</style>

<body>
    <div class="box">
        <span class="item"></span>
    </div>
    <div class="box box2">
        <span class="item"></span>
    </div>
    <div class="box box3">
        <span class="item"></span>
    </div>
    <div class="box box4">
        <span class="item"></span>
    </div>
    <div class="box box5">
        <span class="item"></span>
    </div>
    <div class="box box6">
        <span class="item"></span>
    </div>
    <h2>双项目</h2>
    <div class="box box7">
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box8">
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box9">
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box10">
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box11">
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box12">
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <h2>三项目</h2>
    <div class="box box13">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <h2>四项目</h2>
    <div class="box box14">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box15">
        <div class="column">
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <div class="column">
            <span class="item"></span>
            <span class="item"></span>
        </div>
    </div>
    <h2>六项目</h2>
    <div class="box box16">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box17">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
    </div>
    <div class="box box18">
        <div class="row">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <div class="row">
            <span class="item"></span>
        </div>
        <div class="row">
            <span class="item"></span>
            <span class="item"></span>
        </div>
    </div>
    <h2>九项目</h2>
    <div class="box box19">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
    </div>
</body>

</html>
```

# 参考

[阮一峰：Flex 布局教程：实例篇]: http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

