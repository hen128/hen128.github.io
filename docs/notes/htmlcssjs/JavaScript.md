# JavaScript

## 基础

`split() ` 把一个字符串分割成字符串数组

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