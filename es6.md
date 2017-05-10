课前了解的内容
--

symbol是ES6新添加的的数据类型，主要特点是区别任何数据类型，建立在原来的数据类型基础上的区别

### ES6之前有哪些数据类型
- 基本数据类型

1. 字符串 string
2. 数字 number
3. 布尔值 boolean
4. null
5. undefined

- 引用数据类型

1. 数组 object
2. 对象 array
3. 函数 function

### 数据类型判断

- typeof 数据

```
const str = '我是数据类型';
console.log(typeof str)  // string

```

- 数据 instance 数据类型

```
const str = '我是数据类型';
console.log(str instance String) // true

```
- Object.prototype.toString.call(数据)

```
const str = '我是数据类型';
console.log(Object.prototype.toString.call(str)) // [Object string]

```
### 数据类型之间转换

#### 字符串 ====》 数组
```
const str = '123456';
console.log(str.split('')) // ['1','2','3','4','5','6']

```
#### 数组 =====》 字符串
```
const arr = ['1','2','3','4','5','6'];
console.log(arr.join('')) // 123456
```

Symbol数据类型
--
Symbol是一种新添加的原始数据类型，是独一无二的

如何生成symbol数据类型，利用Symbol方法，就可以生成
```
const sym = Symbol();
typeof sym  // symbol

```
#### 注意点
1. 两个同样的symbol是`不相等`的，这个有点像NaN
```
const s1 = Symbol('s1');
const s2 = Symbol('s2');
if(s1===s2){
	console.log('相等哦')
}else{
	console.log('不相等哦')
}
```
2. 可以将symbol转化为string，boolean，但是不能转化为数值
```
const s1 = Symbol('s1');
s1.toString() // "symbol('s1')"
```
3. symbol不能与其他类型进行运算
```
const s1 = Symbol('my symbol');
const str = "your symbol"+ s1   
// TypeError: can't convert symbol to string

`your symbol is ${s1}`
// TypeError: can't convert symbol to string
```

#### symbol可以用来做属性
symbol用来做属性的时候，必须用[]包裹
```
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

```
上面代码通过方括号结构和Object.defineProperty，将对象的属性名指定为一个 Symbol 值。

> 注意，Symbol 值作为对象属性名时，不能用点运算符。

关于ES6语法，我想说这么几点，目前把握住几种常见的特征






























