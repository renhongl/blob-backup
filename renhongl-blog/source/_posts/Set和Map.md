---
title: Set 和 Map
date: 2017-07-13 21:16:52
tags: ES6
---



# Set

类似于数组的数据结构，成员的值都是**唯一**的。



1. 基本写法

   ```js
   const set =  new Set([1, 2, 3, 4]);

   ```

2. 数组去重

   ```js
   let a = [1, 2, 2, 3, 5, 5];
   a = [...new Set(a)];//[1, 2, 3, 5]

   ```

3. 实例的属性和方法

   ```js
   let a = new Set();
   a.add(1).add(3).add(10);
   a.size;//3
   a.has(10);//true
   a.delete(10);
   a.has(10);//false
   a.clear();
   a.size;//

   ```

4. 遍历操作

   * keys(): 返回键名的遍历器
   * values(): 返回键值得遍历器
   * entries(): 返回键值对的遍历器
   * forEach(): 使用回调函数遍历每个成员



# Map

解决Object只能使用字符串当做键的问题。

如果需要键值对的数据结构，Map比Object更合适。

1. 基本写法

   ```js
   let items = [
     ['name', 'lrh'],
     ['age', 18]
   ];
   const map = new Map(items);

   ```

2. 实例的属性和方法

   ```js
   map.size;//2
   map.set('gender', 'male').set('experience', 3);
   map.get('gender');//male
   map.has('experience');//true
   map.delete('age')//true
   map.clear();
   map.size;//0

   ```

3. 遍历操作

   * keys()

   * values()

   * entries() 默认的遍历器接口

   * forEach()

     ​