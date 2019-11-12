---
title: 计算机算法之---数据结构-栈
date: 2019-04-18 21:16:52
tags: 计算机算法

---

## 描述
* 栈是限定仅在表尾进行插入和删除操作的线性表。“栈”者，存储货物或供旅客住宿的地方，可引申为仓库、中转站，引入到计算机领域里，就是指数据暂时存储的地方，所以才有进栈、出栈的说法。
* 栈作为一种数据结构，是一种只能在一端进行插入和删除操作的特殊线性表。它按照后进先出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据（最后一个数据被第一个读出来）。栈具有记忆作用，对栈的插入与删除操作中，不需要改变栈底指针。
* 栈是允许在同一端进行插入和删除操作的特殊线性表。允许进行插入和删除操作的一端称为栈顶(top)，另一端为栈底(bottom)；栈底固定，而栈顶浮动；栈中元素个数为零时称为空栈。插入一般称为进栈（PUSH），删除则称为退栈（POP）。栈也称为后进先出表。
* 栈可以用来在函数调用的时候存储断点，做递归时要用到栈！

<!-- more -->

## 实现接口
* 从尾部插入`append(value)`
* 从尾部删除`pop()`

## 链式存储例子

```js
class Node {
    constructor(value) {
        this._value = value;
        this.next = null;
    }

    getValue() {
        return this._value;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._size = 0;
    }

    getSize() {
        return this._size;
    }

    toString() {
        if (this._head === null) {
            return '';
        }
        let result = '';
        let curr = this._head;
        while (curr !== null) {
            result += curr.getValue() + ', ';
            curr = curr.next;
        }
        return result;
    }

    append(value) {
        if (this._head === null) {
            this._head = new Node(value);
            this._size++;
            return;
        }
        let curr = this._head;
        while (curr) {
            if (curr.next === null) {
                curr.next = new Node(value);
                this._size++;
            }
            curr = curr.next;
        }
    }

    pop() {
        if (this._size === 0) {
            return null;
        }
        let curr = this._head;
        let before = null;
        for (let i = 0; i < this._size - 1; i++) {
            before = curr;
            curr = curr.next;
        }
        before.next = null;
        this._size--;
        return curr.getValue();
    }

    getItem(index) {
        if (this._size === 0) {
            return null;
        }
        if (index < 0 || index >= this._size) {
            return console.log('Index out of range');
        }
        if (index === 0) {
            return this._head.getValue();
        }
        let curr = this._head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.getValue();
    }
}
```