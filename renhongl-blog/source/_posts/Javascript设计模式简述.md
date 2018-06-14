---
title: Javascript设计模式简述
date: 2017-04-25 21:25:12
tags:
	- Javascript
---

示例代码：[点击这里](https://github.com/renhongl/Summary/tree/master/demo/mode-demo)。

设计模式的主题总是把不变的事物和变化的事物分离开来。
<!--more-->

### 鸭子类型

如果它走起来像鸭子，叫起来也像鸭子，那么它就是鸭子。

### 多态

* 多态的思想是把“做什么”和“谁去做”分离开来。

* 多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句。

* 多态的最根本好处在于，你不必再像的对象询问“你是什么类型”而后根据得到的答案调用对象的某个行为，
你只管调用该行为就是了，其他的一切多态机制都会为你安排妥当。

### 封装
* 封装的目的是将信息影藏。
* 一般而言，封装是指封装数据和封装实现。
* 更广义的封装，还包括封装类型和封装变化。

#### this
* 作为对象的方法调用。
        
        let obj = {
            a: 1,
            getA: function() {
                console.log(this === obj);//true
                console.log(this.a);//1
            }
        };
        obj.getA();

* 作为普通函数调用。

        window.name = 'global';
        let getName = function() {
            return this.name;
        }
        console.log(getName());//global

        //or

        window.name = 'global';
        let myObj = {
            name: 'renhong',
            getName: function() {
                return this.name;
            }
        }
        var getName = myObj.getName;//普通函数调用
        console.log(getName());//global

        console.log(myObj.getName());//renhong, 对象的方法调用

* 构造器调用。当用new运算符调用函数时，该函数总会返回一个对象，构造器里的this就指向这个对象。

        let MyClass = function() {
            this.name = 'renhong';
        }
        let obj = new MyClass();
        console.log(obj.name);//renhong

        //如果构造器显示返回一个对象，那么new之后返回的是这个对象，而不是this。

        let MyClass = function() {
            this.name = 'renhong',
            return {
                name: 'mogu'
            }
        }
        let obj = new MyClass();
        console.log(obj.name);//mogu

* call和apply调用。用于动态的改变传入函数的this。

        let obj1 = {
            name: 'renhong',
            getName: function() {
                return this.name;
            }
        }

        let obj2 = {
            name: 'mogu'
        }

        console.log(obj1.getName());//renhong
        console.log(obj1.getName.call(obj2));//mogu

#### call和apply
* 作用一模一样，区别只在于传入参数的形式不同。
* apply接受两个参数，第一个参数指定函数体内部的this指向。第二个参数是一个数组或者类数组，这些元素全部作为参数传递给被调用的函数。

        let func = function(a, b, c) {
            console.log([a, b, c]);//[1, 2, 3]
        }
        func.apply(null, [1, 2, 3]);

* call 传入的参数是不固定的，第一个参数同样是代表函数体内的this指向，从第二个参数开始，每个参数一次被当做被调用的函数的参数传入。

        let func = function(a, b, c) {
            console.log([a, b, c]);//[1, 2, 3]
        }
        func.call(null, 1, 2, 3);

* 为什么要使用call和apply？

        //改变this指向
        //---------例子1
        let obj1 = {
            name: 'renhong'
        }
        let obj2 = {
            name: 'mogu'
        }
        window.name = 'window';
        let getName = function() {
            this.name;
        }
        getName();//window
        getName.call(obj1);//renhong
        getName.call(obj2);//mogu

        //---------例子2
        let func = function() {
            console.log(this.id);
        }
        document.getElementById('div1').onclick = function() {
            console.log(this.id);//div1
            func();//undefined，指向window
            func.call(this);//div1，指向这个this
        }

        //---------例子3
        class Controller{
            constructor() {
                let type = 'dialog';
                this.name = 'controller';
                renderControl();
                handleEvents.call(this);
                renderDialog.call(this, type);
            }
        }
         
        function renderControl() {
            console.log(this.name);//undefined，this指向window
        }

        function handleEvents() {
            console.log(this.name);//controller
        }

        function renderDialog(type) {
            console.log(type);//dialog
        }

        //借用其他对象的方法
        //类数组对象arguments，没有push的方法，不能将元素push进去。我们首先调用数组的push方法，再手动将push方法内部的this指向改为arguments，就帮助arguments实现了push功能。
        (function() {
            Array.prototype.push.call(arguments, 3);
            console.log(arguments);//[1, 2, 3]
        })(1, 2);



### 闭包

闭包是一个非常强大的特性，但人们对其也有诸多误解。一种耸人听闻的说法是闭包会造成内存泄漏，所以要尽量减少闭包的使用。

局部变量本来应该在函数退出的时候被解除饮用，但如果局部变量被封闭在闭包形成的环境中，那么这个局部变量就能一直生存下去。从这个意义上看，闭包的确会使一些数据无法被及时销毁。使用闭包的一部分原因是我们选择主动把一些变量封闭在闭包中，因为可能在以后还需要使用这些变量，把这些变量放在闭包中和放在全局作用域，对内存方面的影响是一致的。


跟闭包和内存泄漏有关系的地方是，使用闭包的同时，比较容易形成循环引用，如果闭包的作用域链中保存着一些DOM节点，这时候有可能造成内存泄漏。但这并非闭包问题，也并非Javascript问题。

**注：** 当代码中需要全局变量时，可以使用闭包，将这个变量封装在一个函数中，那这个函数就封装了一个独立的功能，不再依赖外部的变量。

### 函数柯里化（function currying）

currying又称部分求值。一个currying的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚传入的参数在函数形成的闭包中被保存起来。待到函数真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。

### uncurrying

当我们调用对象的某个方法时，其实不用去关心该对象原本是否被设计为拥有这个方法，这是动态类型语言的特点，也是常说的鸭子类型思想。

同理，一个对象也未必只有使用它自身的方法。通过call和apply方法可以让对象去借用一个原本不属于它的方法。


### 降频

在一些情况下，函数的触发不是由用户直接控制的，在这些情景下，函数可能被非常频繁的调用，而造成大的性能问题。

例如在window的resize事件中，或者在div拖动事件中，会频繁的触发这些事件，并且DOM相关的操作非常消耗性能，这时浏览器可能会出现卡顿现象。

以上现象我们可以使用setTimeout来实现每隔固定时间来触发事件，如果过于频繁，将忽略那次的事件。

代码流程：

    var resize = function(callback, interval) {
        var timer,
            firstTime = true;
        return function() {
            var args = arguments,
                self = this;
            if(firstTime) {
                callback.apply(self, args);
                return false;
            }
            if(timer) {
                return false;
            }
            timer = setTimeout(function() {
                clearTimeout(timer);
                timer = null;
                callback.apply(self, args);
            }, interval || 500)
        }
    };

    window.onresize = resize(function() {
        console.log('resized', Date.now());
    }, 1000);





### 原型模式

类并不是必须的，对象未必需要从类中创建而来，一个对象是通过克隆另外一个对象所得到的。

原型模式不但是一种设计模式，也被称为一种编程泛型。

ECMAScript5提供了Object.create方法，可以用来克隆对象。

但是create方法性能不如 var obj = {} 或者 var obj = new Object();

以上两种替代方式，内部都是克隆原型而得到对象。

**注：** Javascript中的根对象是Object，所有的对象都从根对象克隆而来。

### 单例模式

保证一个类仅有一个实例，并提供一个访问它的全局访问点。

推荐使用惰性单例的方式创建，即在需要时才创建单例对象。并且需要把不变的部分隔离出来，把管理单例的逻辑和创建对象的逻辑分开，这两个方法可以独立变化而不互相影响。当它们连接在一起时，就完成了创建唯一实例对象的功能。

        

    //以下是基本实现方法，但是并没有实现：
    //"并且需要把不变的部分隔离出来，把管理单例的逻辑和创建对象的逻辑分开，
    //这两个方法可以独立变化而不互相影响。当它们连接在一起时，就完成了创建唯一实例对象的功能。"
    //的功能。因为再加一个单例元素时，需要修改管理单利的类。SingletonDOM只是为CreateDOM而生的管理类。

    export class SingletonDOM{
        constructor() {
            this.createDOM = new CreateDOM;
        }

        create() {
            if (!this.instance) {
                return this.instance = this.createDOM.create();
            }
            return this.instance;
        }
    }

    export class CreateDOM{
        create(type) {
            return document.createElement(type || 'div');
        }
    }

    export class CreateButton{
        create() {
            return document.createElement('button');
        }
    }

    //通用管理单例的类。

    export class GetSingleton{
        constructor(ClassName) {
            this.obj = new ClassName();
        }

        create() {
            if (!this.instance) {
                return this.instance = this.obj.create();
            }
            return this.instance;
        }
    }

### 策略模式

定义一系列的算法，把它们一个个封装起来，并且使它们可以互相替换。

一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过程。第二个部分是环境类context，context接受客户的请求，随后把请求委托给某一个策略类。

策略模式可以消除程序中大片的条件分支语句。

        

    class LevelA{
        calculate(salary) {
            return salary * 2;
        }
    }

    class LevelB{
        calculate(salary) {
            return salary * 3;
        }
    }

    class LevelC{
        calculate(salary) {
            return salary * 4;
        }
    }

    export class GetBonus{
        constructor() {
            this.calculateMapping = {
                A: new LevelA(),
                B: new LevelB(),
                C: new LevelC()
            }
        }

        calculate(type, salary) {
            return this.calculateMapping[type].calculate(salary);
        }
    }

### 代理模式

代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。

代理和本体接口保持一致，那么用户可以放心的请求代理，他只关心是否得到想要的结果；在任何使用本体的地方都可以替换成使用代理。

虚拟代理：例如实现图片预加载、合并http请求。

缓存代理：例如缓存ajax异步请求的数据，下次再打开同一页的时候，便可以直接使用之前的数据。

        




    export class LoadImage{
        setUrl(url, target) {
            target.src = url;
        }
    }

    export class LoadImageProxy{
        constructor() {
            this.loadImage = new LoadImage();
        }

        setUrl(url, target) {
            this.loadImage.setUrl('./image/p2.gif', target);
            let img = new Image();
            img.onload = () => {
                setTimeout(() => {
                    this.loadImage.setUrl(url, target);
                }, 2000);
            }
            img.src = url;
        }
    }

    export class LoadData{
        constructor() {
            this.data = {
                renhong: {
                    name: 'renhongl',
                    age: 18
                },
                mogu: {
                    name: 'mogu',
                    age: 19
                }
            };
        }

        load(name, callback) {
            setTimeout(() => {
                callback(this.data[name]);
            }, 2000);
        }
    }

    export class LoadDataProxy{
        constructor() {
            this.loadData = new LoadData();
            this.cache = {};
        }

        load(name, callback) {
            if (!this.cache[name]) {
                this.loadData.load(name, (data) => {
                    this.cache[name] = data;
                    callback(data);
                });
            } else {
                callback(this.cache[name]);
            }
        }
    }



















### 迭代器模式

迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。

内部迭代器在调用的时候非常方便，外界不用关心迭代器内部的实现，跟迭代器的交互也仅仅是一次初始调用，但这也刚好是内部迭代器的缺点。

外部迭代器增加了一些调用的复杂度，但相对也增强了迭代器的灵活性，我们可以手工控制迭代的过程或者顺序。

中止迭代器可以像普通for循环中的break一样，提供一种跳出循环的方法。

### 发布-订阅模式

又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。

推荐使用全局的发布-订阅对象，并且增加可以先发布再订阅的方法，以及实现命名空间的功能。

* 具体写法：使用Map将话题和要执行的回调方法一一对应的存下来，即订阅。在发布这个话题时，使用发布的参数，执行这个话题的回调方法。
* 订阅前发布：在发布某个话题时，如果这个话题尚未被订阅，那么将这个话题存储起来，等订阅之后，立即发布。那么，在写代码时，就不会发生发布在订阅之前，导致功能不能被触发的问题。
* 命名空间：如果整个项目都使用了此模式，很容易在没有命名空间的情况下混淆话题。
* 基本写法：

        class Observer{
            constructor() {
                this.topicMapping = {};
                this.publishStore = {};
            }

            subscribe(...args) {
                let topic = args.shift();
                let callback = args.shift();
                if (!this.topicMapping[topic]) {
                    this.topicMapping[topic] = [];
                }
                this.topicMapping[topic].push(callback);
                console.log(`subscribed topic ${topic}`);
                //check if had subscribed
                if (this.publishStore[topic]) {
                    console.log(`trigger topic ${topic} immediately`);
                    this.publish(topic, this.publishStore[topic]);
                    delete this.publishStore[topic];
                }
            }

            publish(...args) {
                let topic = args.shift();
                if (this.topicMapping[topic]) {
                    this.topicMapping[topic].forEach((v, k) => {
                        v.apply(null, args);
                    });
                } else {
                    console.log(`no topic: ${topic} has been subscribed, this publish will store here, after subscribe, will trigger`);
                    this.publishStore[topic] = args;
                }
            }

            unsubscribe(...args) {
                let topic = args.shift();
                let callback = args.shift();
                if (this.topicMapping[topic]) {
                    delete this.topicMapping[topic];
                    if (callback instanceof Function) {
                        callback(args);
                    }
                } else {
                    console.log(`no topic ${topic} has been subscribe, so no need unsubscribe.`);
                }
            }
        }

        export default Observer;



### 命令模式

命令模式最常见的应用场景是：有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。此时希望用一种松耦合的方式来设计程序，使得请求发送者和请求接收者能够消除彼此之间的耦合关系。

### 组合模式

组合模式将对象组合成树形结构，以表示“部分-整体”的层次结构。除了用来表示树形结构之外，组合模式的另一个好处是通过对象的多态性表现，使得用户对单个对象和组合对象的使用具有一致性。

### 模板方法模式

假如我们有一些平行的子类，各个子类之间有一些相同的行为，也有一些不同的行为。如果相同和不同的行为都混合在各个子类的实现中，说明这些相同的行为会在各个子类中重复出现。但实际上，相同的行为可以被搬到另外一个单一的地方，模板方法就是为解决这个问题而生的。

在模板方法中，可以使用钩子方法来隔离变化。我们在父类种容易变化的地方放置钩子，钩子可以有一个默认的实现，究竟要不要挂钩，这由子类自行决定。

模板方法模式是一种典型的通过封装变化提高系统扩展性的设计模式。子类的方法种类和执行顺序都是不变的，所以我们把这部分逻辑抽象到父类的模板方法中，而子类的方法具体怎么实现则是可变的，把这部分变化的逻辑封装到子类中。

### 享元模式

享元模式是一种用于性能优化的模式。享元模式的核心是运用共享技术来有效支持大量细粒度的对象。

使用享元模式的关键是如何区别内部状态和外部状态，可以被对象共享的属性通常被划分为内部状态。

### 职责链模式

### 中介者模式

### 装饰者模式

### 状态模式

### 适配器模式