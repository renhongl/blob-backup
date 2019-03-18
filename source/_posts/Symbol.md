---
title: Symbol
date: 2017-07-14 21:16:52
tags: ES6
---




# 什么是Symbol
Symbol是ES6引入的一种新的原始数据类型，表示独一无二的值。它是JavaScript语言的第七种数据类型:


```js
null, undefined, String, Number, Boolean, Object, Symbol。
```

使用Symbol()函数生成，因为它是一种类似字符串的数据类型，所以不是通过new创建的对象实例。

* 作为属性名，在混合两个对象时，属性值不会被覆盖，因为一个Symbol是唯一的。

  ```js
  //定义属性名和使用属性名时，使用方括号的调用方式。
  let myNameSymbol = Symbol();
  let a = {
    [myNameSymbol]: 'renhongl',
    age: 18
  };

  a[myNameSymbol];//renhongl

  ```

* 定义常量，消灭模式字符串

  ```js
  //bad
  function operator(type) {
    switch(type) {
      case 'add'://魔术字符串
      	//do add
      	break;
   	/*---more code----*/
    }
  }
  operator('add');//魔术字符串

  //not bad
  var operatorType = {
    add: 'add',
    update: 'update',
    remove: 'remove'
  };
  function operator(type) {
    switch(type) {
      case operatorType.add://魔术字符串
      	//do add
      	break;
   	/*---more code----*/
    }
  }
  operator(operatorType.add);

  //因为我们不关心add之后是什么值，可以使用一些方式
  //good
  var operatorType = {
    add: Symbol(),
    update: Symbol(),
    remove: Symbol(),
  };
  function operator(type) {
    switch(type) {
      case operatorType.add://魔术字符串
      	//do add
      	break;
   	/*---more code----*/
    }
  }
  operator(operatorType.add);
  ```

  ​