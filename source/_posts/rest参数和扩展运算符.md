---
title: rest参数和扩展运算符
date: 2017-06-12 19:42:01
tags: ES6
---


# 什么是rest参数

用于获取函数的多余参数，这样就不用使用arguments对象了，该变量将多余的参数放入数组中。

语法：`...args`

<!-- more -->

* 利用rest参数，可以向函数传入任意数量的参数

  ```js
  function add(...args) {
    let total = 0;
    for (let key of args) {
      total += key;
    }
    return total;
  }

  add(3, 5, 8);//16
  add(3, 1);//4

  ```

* 使用rest参数代替arguments

  ```js
  function sortNumbers() {
    Array.prototype.slice.call(arguments).sort();
  }

  function sortNumbers(...args) {
    args.sort();
  }
  ```

* rest参数之后不能再有参数，即rest参数只能是最后一个参数





## 扩展运算符

* 好比rest参数的逆运算，将一个数组转换为用逗号分隔的序列。语法：`...[arr]`

  **在圆括号中成为参数序列：（...[1, 2, 3, 4]）=> (1, 2, 3, 4) **

  **在方括号中成为新数组：[1, 2, ...[3, 4, 5]] => [1, 2, 3, 4, 5]**

* 可以用来替代函数的apply方法:

  ```js
  //ES5写法-----apply方法第一个参数是上下文，第二个参数是方法的参数列表，但是是装在同一个数组里面。
  function f(x, y, z) {
    //...
  }
  var args = [0, 1, 2];
  f.apply(null, args);
   
  //ES6写法
  function f(x, y, z) {
    //...
  }
  let args = [1, 2, 3];
  f(...args);
  ```

* 求数组最大值:

  ```js
  //ES5写法
  Math.max.apply(null, [23, 12, 54]);

  //ES6写法
  Math.max((...[23, 12, 54]));
  //等同于求max方法的参数的最大值
  Math.max(23, 12, 54)
  ```

* 将一个数组的所有元素一次添加到另一个数组

  ```js
  //ES5写法
  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  Array.prototype.push.apply(arr1, ar2);

  //ES6的写法----因为push可以接受若干参数一次添加进数组，如果传入的是一个数组，那么这个数组就被当做整体添加就一个元素了。
  arr1.push(...arr2);
  ```

* 复制数组

  ```js
  //ES5写法----concat用于连接两个数组，然后返回一个新数组，那么这两个数组就不是指向同一个地址了。
  const a1 = [1, 3];
  const a2 = a1.concat();

  //ES6写法
  const a1 = [1, 2];
  const a2 = [...a1];//创建了新数组，填入了a1的所有项
  ```

* 合并数组

  ```js
  //ES5写法
  [1, 2].concat(more);
  var arr1 = [1, 2];
  var arr2 = [3, 4];
  var arr3 = [5, 6];
  arr1.concat(arr2, arr3);

  //ES6写法
  [1, 2, ...more];
  [...arr1, ...arr2, ...arr3];

  ```

* 将实现了Iterator接口的对象，转化为数组


  ```js
  //类数组对象
  let nodeList = document.querySelectorAll('div');
  let arr1 = [...nodeList];

  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    'length': 3
  };
  let arr2 = [...arrayLike];// TypeError: Cannot spread non-iterable object.
  //arrayLike没有部署Iterator接口，所以不能使用扩展运算符，可以使用Array.from将其装换为数组

  ```

* Map和Set也实现了Iterator接口

  ```js
  let map = new Map([
    [0, 'a'],
    [1, 'b'],
    [2, 'c']
  ]);
  let arr1 = [...map.keys()];//[1, 2, 3]
  let arr2 = [...map.values()];//[a, b, c]
  let arr3 = [...map.entries()];//[[1, 'a'], [2, 'b'], [3, 'c']]
  ```

* Generator函数运行后，返回一个遍历器对象，因此也可以用扩展运算符

  ```js
  const go = function* () {
    yield 1;
    yield 2;
    yield 3;
  };

  [...go()]//[1, 2, 3]
  ```

  ​