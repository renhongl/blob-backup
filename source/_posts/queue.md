---
title: 计算机算法之---数据结构-队列
date: 2019-04-18 21:16:52
tags: 计算机算法

---

## 描述
* 队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。

<!-- more -->

## 实现接口
* 在头部取出`shift()`
* 在尾部插入`append(value)`

##  链式存储例子
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

    shift() {
        if (this._size === 0) {
            return null;
        }
        let head = this._head;
        this._head = head.next;
        this._size--;
        return head.getValue();
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