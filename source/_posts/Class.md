---
title: Class
date: 2017-06-14 19:16:52
tags: ES6
---


# 什么是Class

Javascript没有类的概念，要生成一个实例对象，是通过构造函数。

<!-- more -->

# 传统写法：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
  return '(' + this.name + ', ' + this.age + ')';
}

Person.prototype.getName = function() {
  return this.name;
}

let p = new Person('lrh', 18);
p.toString();//"(lrh, 18)"
p.getName();//"lrh"
```

# 使用ES6的Class语法:

```js
class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  toString() {
    return '(' + this.name + ', ' + this.age + ')';
  }
  
  getName() {
    return this.name;
  }
}

let p = new Person('lrh', 19);
p.toString();//"(lrh, 18)"
p.getName();//"lrh"
```

# 私有方法:

1. 使用**下划线**" _ "区别方法名，但是外部还是可以调用这个方法。

    ```js
     class Person{
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      
      _getAge() {
        return this.age;
      }
      
      getInfor() {
        return this.name + ', ' + this._getAge();
      }
    }
    let p = new Person('lrh', 18);
    p.getInfor();//"lrh, 18"
    ```

2. 将私有方法移出类，因为在类中方法都是对外可见的。

     ```js
     class Person{
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
       
       getInfor() {
         return this.name + ', ' + getAge.call(this);
       }
     }
     
     function getAge() {
       return this.age;
     }
     
     let p = new Person('lrh', 19);
     p.getInfor();
     p.getAge();//TypeError: p.getAge is not a function
     ```

3. 利用Symbol的唯一性，设置私有变量。

     ```js
     const getAge = Symbol();
     
     class Person{
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
       
       [getAge]() {
         return this.age;
       }
       
       getInfor() {
         return this.name + ', ' + this[getAge]();
       }
     }
     
     let p = new Person('lrh', 18);
     p.getInfor();
     ```

   ​

# 私有属性

1. 使用#表示，但是还只是提案，babel都不支持。

     ```js
     class Person{
       #type = 'Student';
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
       
       getInfor() {
         return this.name + ', ' + this.age + ', ' + this.#type; 
       }
     }
     
     let p = new Person('lrh', 18);
     p.getInfor();
     ```

# 取值函数（getter）和存值函数（setter）

1. 拦截了该属性的存取行为。

   ```js
   //getter，setter对应的属性应该是一个_开头的私有属性，只有使用getter，setter的方式可以读取和修改
   class Person{
     constructor(name, age, gender) {
       this.name = name;
       this.age = age;
       this._gender = gender;
     }
     
     get gender() {
       console.log('getter');
       return this._gender;
     }
     
     set gender(value) {
       console.log('setter');
       this._gender = value;
     }
   }

   let p = new Person('lrh', 18, 'male');
   p.gender;
   p.gender = 'female';
   p.gender;
   ```

   ​

# 静态方法

1. 在方法前加上static关键字，this指向类而不是实例。只能通过类调用。

   ```js
   class Person{
     static getRandom() {
     	return Math.random();
     }
   	
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
   }

   Person.getRandom();//0.36116181991876695
   ```

# 静态属性与实例属性

1. 是ES7的提案，需要安装ES7的转码：`npm install --save-dev babel-preset-stage-2`

   ```js
   //实例属性
   class Person{
     type = 'Student';
     constructor() {
       console.log(this.type);
     }
   }
   new Person();//Student

   //静态属性
   class Person{
     static type = 'Student';
     constructor() {
       console.log(Person.type);
     }
   }
   new Person();//Student
   ```

   ​