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

     

   

   

## 基础

```
var str="How are you doing today?";
var n=str.split(" "); 
// How,are,you,doing,today? 

string.split(separator,limit)
separator:可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
limit:可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。\

返回：Array
```

`slice()` 提取字符串的片断

`splice()` 用于添加或删除数组中的元素

```js
array.splice(index,howmany,item1,.....,itemX)
```

`unshift()`向数组的开头添加一个或更多元素，并返回新的长度

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple"); 
// Lemon,Pineapple,Banana,Orange,Apple,Mango
```

## 数组去重

```js
方法一：
采用对象访问属性的方法，判断属性值是否存在，如果不存在就添加。
方法二：
采用数组中的reduce方法，遍历数组，也是通过对象访问属性的方法
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
   key: '01',
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


  // 方法2：利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
  var obj = {};
  arr = arr.reduce(function(item, next) {
   obj[next.key] ? '' : obj[next.key] = true && item.push(next);
   return item;
  }, []);
  console.log(arr); // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]

```