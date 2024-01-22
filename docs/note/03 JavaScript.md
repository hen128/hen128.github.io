# JavaScript

## 数组

### 数组去重

1. 通过返回原数组filter过滤出首次出现item，从而获得去重后的新数组。

    ```js
    let arr1 = [1, 2, 4, 4, 2, 5]

    function removeRepeat(arr) {
      return arr.filter((item, index, array) => array.indexOf(item) === index)
    }

    console.log(removeRepeat(arr1))
    ```

2. 通过ES6 Set

   Set中的元素只会出现一次，是唯一的，将原数组存入到Set，然后通过拓展运算符赋值给新数组，得到去重的数组
   
   ```
   let arr2 = [1,2,4,4,2,5]
   let newArr2 = [...new Set(arr2)]
console.log(newArr2) 
   ```
   

3. 采用对象访问属性的方法，判断属性值是否存在，如果不存在就添加

   ```js
   var arr = [{
      key: '01',
      value: '乐乐'
     }, {
      key: '02',
      value: '博博'
     }, {
      key: '03',
      value: '淘淘'
     },{
      key: '04',
      value: '哈哈'
     },{
      key: '01', // 重复的
      value: '乐乐'
     }];
     // 方法1：利用对象访问属性的方法，判断对象中是否存在key
     var result = [];
     var obj = {};
     for(var i =0; i<arr.length; i++){
      if(!obj[arr[i].key]){
        result.push(arr[i]);
        obj[arr[i].key] = true;
      }
     }
     console.log(result); // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]
   ```

4. 采用数组中的reduce方法，遍历数组，也是通过对象访问属性的方法

   ```
   var arr = [{
      key: '01',
      value: '乐乐'
     }, {
      key: '02',
      value: '博博'
     }, {
      key: '03',
      value: '淘淘'
     },{
      key: '04',
      value: '哈哈'
     },{
      key: '01', // 重复的
      value: '乐乐'
     }];
     
   // 利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
   var obj = {};
   arr = arr.reduce(function(item, next) {
   obj[next.key] ? '' : obj[next.key] = true && item.push(next);
   return item;
   }, []);
   console.log(arr); // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]
   ```

5. 方法5

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body>
       <script>
         let data = [
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "临床营养科",
             textField_lrg23o3l: "医技科室",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "核医学科",
             textField_lrg23o3l: "医技科室",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "输血科",
             textField_lrg23o3l: "医技科室",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "药学科",
             textField_lrg23o3l: "医技科室",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "病理科",
             textField_lrg23o3l: "医技科室",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "医学影像科",
             textField_lrg23o3l: "医技科室",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "一级",
             textField_lr77un5o: "检验科",
             textField_lrg23o3l: "医技科室",
             selectField_lr77un5n_id: "一级",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "中医科",
             textField_lrg23o3l: "其它",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "康复医学科",
             textField_lrg23o3l: "其它",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "二级",
             textField_lr77un5o: "重症医学科",
             textField_lrg23o3l: "其它",
             selectField_lr77un5n_id: "二级",
           },
           {
             selectField_lr77un5n: "未评级",
             textField_lr77un5o: "麻醉科",
             textField_lrg23o3l: "其它",
             selectField_lr77un5n_id: "未评级",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "皮肤性科",
             textField_lrg23o3l: "其它",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "急诊科",
             textField_lrg23o3l: "其它",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "一级",
             textField_lr77un5o: "小儿外科",
             textField_lrg23o3l: "儿科",
             selectField_lr77un5n_id: "一级",
           },
           {
             selectField_lr77un5n: "一级",
             textField_lr77un5o: "小儿内科",
             textField_lrg23o3l: "儿科",
             selectField_lr77un5n_id: "一级",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "产科",
             textField_lrg23o3l: "妇产科",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "妇科",
             textField_lrg23o3l: "妇产科",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "乳腺外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "甲状腺外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "一级",
             textField_lr77un5o: "烧伤整形科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "一级",
           },
           {
             selectField_lr77un5n: "一级",
             textField_lr77un5o: "神经外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "一级",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "骨科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "胸外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "心脏血管外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "泌尿外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "肝胆外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "胃肠外科",
             textField_lrg23o3l: "外科",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "二级",
             textField_lr77un5o: "神经内科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "二级",
           },
           {
             selectField_lr77un5n: "二级",
             textField_lr77un5o: "风湿免疫科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "二级",
           },
           {
             selectField_lr77un5n: "未评级",
             textField_lr77un5o: "肾内科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "未评级",
           },
           {
             selectField_lr77un5n: "一级",
             textField_lr77un5o: "血液内科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "一级",
           },
           {
             selectField_lr77un5n: "二级",
             textField_lr77un5o: "消化内科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "二级",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "内分泌科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "三甲",
           },
           {
             selectField_lr77un5n: "三级",
             textField_lr77un5o: "心血管内科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "三级",
           },
           {
             selectField_lr77un5n: "三甲",
             textField_lr77un5o: "呼吸与重症医学科",
             textField_lrg23o3l: "内科",
             selectField_lr77un5n_id: "三甲",
           },
         ]
   
         function didFetch(content) {
           console.log("data:", data)
           list = data
             .filter(
               (obj, index) =>
                 data.findIndex(
                   item => item.textField_lrg23o3l === obj.textField_lrg23o3l
                 ) === index
             )
             .map(v => {
               return {
                 label: v.textField_lrg23o3l,
                 value: v.textField_lrg23o3l,
                 children: [],
               }
             })
   
           data.forEach(e => {
             let listIndex = list.findIndex(
               item => item.value === e.textField_lrg23o3l
             )
             list[listIndex].children.push({
               label: e.textField_lr77un5o,
               value: e.textField_lr77un5o,
             })
           })
           console.log("list:", list)
         }
   
         didFetch(data)
       </script>
     </body>
   </html>
   ```

   

### 扁平化

扁平化就是将多层嵌套的数组转成一层 [1, [2, [3]]]  => [1, 2, 3]

1. 使用数组自带的flat方法

   ```js
   let arr1 = [1, [2, [3]]]
   
   let arr2 = arr1.flat(2)
   console.log(arr2) // [ 1, 2, 3 ]
   ```

2. 使用while循环，通过原数组的some方法判断item是否为数组，若为数组则继续循环，循环过程中，解构原数组，并通过concat方法合并赋值

   ```js
   let arr1 = [1, [2, [3]]]
   
   function myFlat(arr){
       while(arr.some(item=>Array.isArray(item))){
           arr = [].concat(...arr)
       }
       return arr
   }
   let arr3 = myFlat(arr1)
   console.log(arr3) // [ 1, 2, 3 ]
   ```

   ### 浅拷贝、深拷贝

   - 浅拷贝是指拷贝一层，基本数据拷贝值，引用类型拷贝内存地址。
     - Object.assign({},obj)
     - slice()
     - concat()
     - 拓展运算符

   - 深拷贝是开辟一个新的栈，对应不同的地址。

     深拷贝可以使用JSON.stringify()实现

     注意：使用JSON.stringify()弊端：

     ```js
     // 弊端 会忽略undefined、symbol和函数
     const obj3 = {
         name: 'A',
         name1: undefined,
         name3: function() {},
         name4:  Symbol('A')
     }
     const obj4 = JSON.parse(JSON.stringify(obj3));
     console.log(obj4); // {name: "A"}
     ```

     手写深拷贝代码：

     ```
     
     ```

     

   

   

## apply

## 操作动画 Web Animation API

```js
onst keyframes = [
  { transform: 'translateX(0)' ,offset: 0.1},
  { transform: 'translateX(-60%)' ,offset: 0.9},
  { transform: 'translateX(0)' ,offset: 1},
]
const options = {
  duration: 8000,
  iterations: Infinity
}

const element = document.querySelector('.animate');
const webAnimation = element.animate(keyframes, options);
```



## findIndex() 查找数组中对象索引

用于在数组中查找对象对象的索引，事例如下：

```js
const ages = [3, 10, 17, 23, 52, 20];
let index = ages.findIndex( age => age > 18);
console.log(index);
```

## encodeURIComponent()函数在url传参中的作用和使用方法

来源：https://cloud.tencent.com/developer/article/1736258

为什么使用 `encodeURIComponent()` ?

在使用 URL 传参的时候，如果参数中有空格等特殊字符，浏览器可能只会读取到空格面前的内容，导致部分数据丢失。

可以使用 `encodeURIComponent()` 方法，将这些特殊字符进行转义，这样就可以正常读取了。

定义和用法：

`encodeURIComponent()` 函数可把字符串作为 URI 组件进行编码。

语法：

```javascript
encodeURIComponent(URIstring)
```

参数：

`URIstring`必需。一个字符串，含有 URI 组件或其他要编码的文本。

返回值：

`URIstring` 的副本，其中的某些字符将被十六进制的转义序列进行替换。

注意：

1、该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

2、其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

3、请注意 `encodeURIComponent()` 函数 与 `encodeURI()` 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 `encodeURIComponent()` 函数将转义用于分隔 URI 各个部分的标点符号。

应用：

如果我们要将一个对象通过 URL 进行传输，可以将对象转成字符串，再用 `encodeURIComponent()` 函数进行转义：

```javascript
encodeURIComponent(JSON.stringify(cardOBJ))
```

然后将接收的参数转换成对象：

```javascript
JSON.parse(decodeURIComponent(params.cardOBJ))
```

这里的：

`decodeURIComponent()` 用于对 `encodeURIComponent()` 进行反转义。

`JSON.stringify()` 方法用于将 JavaScript 值转换为 JSON 字符串。

`JSON.parse()` 方法用于将一个 JSON 字符串转换为对象。



##  正则

```js
/**
 * Created by jiachenpan on 16/11/18.
 */

const validUsername = (str) => {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

function valid(reg) {
  return function (str) {
    reg.lastIndex = 0
    return reg.test(str)
  }
}

/* 合法uri*/
const validateURL = valid(
  /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
)

/* 小写字母*/
const validateLowerCase = valid(/^[a-z]+$/)

/* 大写字母*/
const validateUpperCase = valid(/^[A-Z]+$/)

/* 大小写字母*/
const validateAlphabets = valid(/^[A-Za-z]+$/)

// 校验邮箱
const validateEmail = valid(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

// 校验手机号码
const validateMobilePhone = valid(
  /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/g
)

// 校验电话号码
const validateTelephone = valid(/\d{3}-\d{8}|\d{4}-\d{7}/g)

// 校验联系方式(手机号码或电话号码)
const validateContactsTel = (str) => {
  return validateMobilePhone(str) || validateTelephone(str)
}

// 校验营业执照编号/统一社会信用代码
const validateUscId = valid(/^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/)

// 校验内地身份证
const validIdCard = valid(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)

// 校验香港身份证
const validHongKongCard = valid(/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/)

// 校验身份证
const validateIdCard = (str) => {
  return validIdCard(str) || validHongKongCard(str)
}

// 新能源车牌校验
const EnergyVehicleReg =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
const validateNewEnergyVehicle = valid(EnergyVehicleReg)

// 普通车牌号校验
const vehicleReg =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
const validateNormalVehicle = valid(vehicleReg)

// 校验车牌号
const validateVehicle = (vehicleNumber) => {
  return validateNormalVehicle(vehicleNumber) || validateNewEnergyVehicle(vehicleNumber)
}

export {
  validUsername,
  validateURL,
  validateLowerCase,
  validateUpperCase,
  validateAlphabets,
  validateEmail,
  validateMobilePhone,
  validateTelephone,
  validateContactsTel,
  validateUscId,
  validIdCard,
  validHongKongCard,
  validateIdCard,
  validateNormalVehicle,
  validateNewEnergyVehicle,
  validateVehicle
}
```

