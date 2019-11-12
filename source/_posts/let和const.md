
---
title: let和const
date: 2017-06-18 20:15:38
tags: ES6
---


# 不存在变量提升
var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

<!-- more -->


# 暂时性死区
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
在代码块内，使用let命令声明变量之前，该变量都是不可用的。

# 不允许重复声明
不允许在相同作用域内，重复声明同一个变量。

# ES6 的块级作用域
ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

 * 第一种场景，内层变量可能会覆盖外层变量。
 * 第二种场景，用来计数的循环变量泄露为全局变量。

 ## const
 const声明一个只读的常量。一旦声明，常量的值就不能改变。

 const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

 如果真的想将对象冻结，应该使用Object.freeze方法。

 对象及其属性冻结：

```js
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, i) => {
        if ( typeof obj[key] === 'object' ) {
        constantize( obj[key] );
        }
    });
};
```


# 顶层对象

1. 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
2. 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
3. Node 里面，顶层对象是global，但其他环境都不支持。

```js
// 方法一
(typeof window !== 'undefined'
    ? window
    : (typeof process === 'object' &&
        typeof require === 'function' &&
        typeof global === 'object')
        ? global
        : this);

    // 方法二
    var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};
```
