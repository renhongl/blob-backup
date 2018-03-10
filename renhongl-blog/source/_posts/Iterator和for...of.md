
---
title: Iterator和for...of
date: 2017-06-16 20:29:38
tags: ES6
---



## Iterator 和 for...of循环

### Iterator（遍历器）

为各种不同的数据结构提供统一的访问机制。

任何数据结构只要部署了Iterator接口，就可以完成遍历操作。

遍历操作：依次处理该数据结构的所有成员。

<!--more-->


### 遍历过程

1. 创建一个指针对象，指向当前数据结构的起始位置。

2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

3. 第二次调用指针对象的next方法，可以将指针指向数据结构的第二个成员。

4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置。

   ​

### for...of循环

使用for...of循环遍历某种数据结构时，该循环会自动寻找这种数据结构默认的遍历器接口。

默认的遍历器接口部署在数据结构的Symbol.iterator属性上。

即只要一个数据结构具有Symbol.iterator属性，就认为是可遍历的(iterable)。

Symbol.iterator属性是一个函数，执行这个函数会返回一个遍历器。



### 原生具备Iterator接口的数据结构

* Array
* Map
* Set
* String
* TypedArray
* arguments
* NodeList



### 除了for...of，其他会调用默认遍历器接口的情况

1. 结构赋值
2. 扩展运算符
3. yield*
4. Array.from()
5. Map(), Set(), WeakMap(), WeakSet()
6. Promise.all()
7. Promise.race()



### Iterator接口最简单实现

为Symbol.iterator创建一个Generator函数。