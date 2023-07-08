# TypeScript

## 安装

安装编译环境

```
# 安装命令
npm install typescript -g
# 查看版本
tsc --version
```

安装运行环境

```
npm install ts-node -g
```

另外，ts-node需要依赖tslib和@types/node两个包：

```
npm install tslib @types/node -g
```

运行

```
ts-node math.ts
```

## 类型

### 基本类型

**string**

**number**

**boolean**

只有两个取值：true和false

**Array**

数组类型的定义有两种：

```typescript
const names: string[] = ["abc","abc"]
const names2: Array<string> = ["abc","abc"]
```

**object**

object对象类型可以描述一个对象：

```typescript
const myInfo: object = {
	name: "why",
	age: 18
}
```

但是从myinfo中我们不能获取数据，也不能设置数据

**Symbol**

通过symbol可以在对象中定义相同的名称

**null** 和 **undefined**

```
let n:null = null
let u:undefined = undefined
```

**any**

**unknown**

用于描述类型不确定的变量

**void**

void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型

**never**

**tuple**

tuple是元组类型

tuple和数组的区别：

首先，数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组中）

其次，元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型。

### 可选类型

对象类型可以指定哪些属性是可选的，可以在属性的后面添加一个?

```
const obj = {
	name:string,
	age?:number
}
```

### 联合类型

TypeScript的类型允许我们使用多种运算符，从现有类型中构建新类型

```
function fun（id:number|string){
	...
}
fun(10)
fun("abc")
```

### 缩小联合

```
function fun(id:number|string){
	if(typeof id === 'string'){
		...
	}else{
		...
	}
}
```

### 类型别名

```
type Point = {
	x:number
	y:number
}
function printPoint(point:Point){
	...
}
```

### 类型断言 `as`

有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言（Type Assertions)

![image-20230524114306664](https://cloud.zengweihao.cn/typora/2023-05-24/20230524114308.png)

### 非空类型断言 `！`

当我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言。

![image-20230524114235614](https://cloud.zengweihao.cn/typora/2023-05-24/20230524114249.png)

### 可选链 ES11(ES2020)增加的特性

```
type Person = {
	name:string
	friend?:{
		name:string
		age?:number
	}
}

const info:Person = {
	...
}

console.log(info.friend?.name)
```

### `??` 和 `!!`

![image-20230524145410664](https://cloud.zengweihao.cn/typora/2023-05-24/20230524145412.png)

### 字面量类型

![image-20230524145522601](https://cloud.zengweihao.cn/typora/2023-05-24/20230524145524.png)

### 字面量推理

![image-20230524145756749](https://cloud.zengweihao.cn/typora/2023-05-24/20230524145758.png)

## 函数

### 函数类型

![image-20230524150707370](https://cloud.zengweihao.cn/typora/2023-05-24/20230524150709.png)

### 默认参数

```typescript
function foo(x:number,y:number = 6){
	console.log(x,y)
}
foo(10)
```

### 剩余参数

```typescript
function sum(...nums:number[]){
	let total = 0
	for (const num of nums){
		total += num
	}
	return total
}

const result1 = sum(10,20,30)
```

### 重载

```typescript
function getLen(a:string):number;
function getLen(a:any[]):number;
function getLen(a:any){
	return a.length
}
```

## 类 `class`

```typescript
class Person {
	name!:string
	age:number
	
	constructor(name:string,age:number){
		this.age = age
	}
	
	running(){
		console.log(this.name + " running")
	}
	eating(){
		console.log(this.name + " eating")
	}
}
```

类可以有自己的构建函数constructor，当我们通过new关键字创建一个示例时，构造函数会被调用；

类中可以有自己的函数，定义的函数称之为方法。

### 继承

我们使用extend关键字实现继承，子类中使用super来访问父类。

```typescript
class Student extends Person{
	sno:number
	
	constructor(name:string,age:number,son:number){
		super(name,age)
		this.sno = sno
	}
	
	studing(){
		console.log(this.name + " studing")
	}
	eating(){
		console.log("student eating")
	}
	running(){
		super.running()
		console.log("student running")
	}
}
```

Student类中有自己的属性和方法，并且会继承Person的属性和方法；

在构造函数中，我们可以通过super来调用父类的构造方法，对父类的属性进行初始化。

### 成员修饰符 `public` `private` `protected`

![image-20230524153456264](https://cloud.zengweihao.cn/typora/2023-05-24/20230524153458.png)

### 只读属性 `readonly`

![image-20230524153547023](https://cloud.zengweihao.cn/typora/2023-05-24/20230524153548.png)

### getters/setters

![image-20230524153625691](https://cloud.zengweihao.cn/typora/2023-05-24/20230524153627.png)

### 静态成员

![image-20230524153849024](https://cloud.zengweihao.cn/typora/2023-05-24/20230524153850.png)

## 接口 `interface`

```typescript
type Point = {
	x:number
	y:number
}
```

```typescript
interfacr Point {
	x:number
	y:number
}
```

### 只读属性

![image-20230524154349613](https://cloud.zengweihao.cn/typora/2023-05-24/20230524154351.png)

### 索引类型

前面我们使用interface来定义对象类型，这个时候其中的属性名、类型、方法都是确定的，但是有时候我们会遇 到类似下面的对象：

![image-20230524154507733](https://cloud.zengweihao.cn/typora/2023-05-24/20230524154509.png)

### 接口继承

接口和类一样是可以进行继承的，也是使用extends关键字。

![image-20230524154644734](https://cloud.zengweihao.cn/typora/2023-05-24/20230524154646.png)

### 接口的实现

![image-20230524154727443](https://cloud.zengweihao.cn/typora/2023-05-24/20230524154729.png)

### interface和type区别

![image-20230526151045839](https://cloud.zengweihao.cn/typora/2023-05-26/20230526151048.png)

## 泛型

![image-20230526152015424](https://cloud.zengweihao.cn/typora/2023-05-26/20230526152017.png)

![image-20230526152027826](https://cloud.zengweihao.cn/typora/2023-05-26/20230526152029.png)

![image-20230526152047891](https://cloud.zengweihao.cn/typora/2023-05-26/20230526152049.png)

## 声明

### 声明文件

`.d.ts`

是用来做类型的声明(declare)。 它仅仅用来做类型检测，告知typescript我们有哪 些类型。

**那么typescript会在哪里查找我们的类型声明呢？**

- 内置类型声明 ；
- 外部定义类型声明；
- 自己定义类型声明；

### 声明模块

```
declare module '模块名'{
	export ...
}
```

比如在开发vue的过程中，默认是不识别我们的.vue文件的，那么我们就需要对其进行文件的声明；

```typescript
declare module '*.vue' {
	import {DefineComponent} from 'vue'
	const component: DefineComponent
	
	export default component
}
```

比如在开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明；

```typescript
declare module '*.jpg' {
	const src: string
	export default src
}
```

## 配置

`tsconfig.json`文件

tsconfig.json是用于配置TypeScript编译时的配置选项：https://www.typescriptlang.org/tsconfig

## 问题汇总

### script标签没有添加lang="ts"就会报错

```
Virtual script not found, may missing <script lang="ts"> / "allowJs": true / jsconfig.json. 
```

解决`tsconfig.json`

```json
"compilerOptions": {
	"allowJs": true,
}
```
