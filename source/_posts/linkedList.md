---
title: 数据结构-链表
date: 2019-04-18 21:16:52
tags: 数据结构与算法

---

## 描述
* 链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer)。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而顺序表相应的时间复杂度分别是O(logn)和O(1)。
* 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。
* 在计算机科学中，链表作为一种基础的数据结构可以用来生成其它类型的数据结构。链表通常由一连串节点组成，每个节点包含任意的实例数据（data fields）和一或两个用来指向上一个/或下一个节点的位置的链接（"links"）。链表最明显的好处就是，常规数组排列关联项目的方式可能不同于这些数据项目在记忆体或磁盘上顺序，数据的访问往往要在不同的排列顺序中转换。而链表是一种自我指示数据类型，因为它包含指向另一个相同类型的数据的指针（链接）。链表允许插入和移除表上任意位置上的节点，但是不允许随机存取。链表有很多种不同的类型：单向链表，双向链表以及循环链表。

<!-- more -->

## 实现例部分接口
* 获取长度`getSize()`
* 获取所有值的快照`toString()`
* 在尾部添加`append(value)`
* 在头部添加`unshift(value)`
* 在指定位置添加`insert(index, value)`
* 在尾部删除`pop()`
* 在头部删除`shift()`
* 在指定位置删除`remove(index)`
* 获取指定位置的值`getValue(index)`
    
## 主要算法分析
* 需要创建一个`Node`类，作为链表的节点
* 在插入删除时，先遍历找到操作的位置，然后通过修过`next`指向的位置，其他值的位置保持不变
* 所以链表增删非常容易，不会影响其他节点。但是读取值，需要依次遍历找到。

## 示例代码
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

    unshift(value) {
        if (this._head === null) {
            this._head = new Node(value);
            this._size++;
            return;
        }
        let currHead = this._head;
        this._head = new Node(value);
        this._head.next = currHead;
        this._size++;
    }

    insert(index, value) {
        if (index < 0 || index > this._size) {
            return console.log('Index out of range');
        }
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this._size) {
            return this.append(value);
        }
        let curr = this._head;
        let temp = null;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        let newNode = new Node(value);
        newNode.next = curr.next;
        curr.next = newNode;
        this._size++;
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

    shift() {
        if (this._size === 0) {
            return null;
        }
        let head = this._head;
        this._head = head.next;
        this._size--;
        return head.getValue();
    }

    remove(index) {
        if (index < 0 || index >= this._size) {
            return console.log('Index out of range');
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this._size - 1) {
            return this.pop();
        }
        let curr = this._head;
        let before = null;
        for (let i = 0; i < index; i++) {
            before = curr;
            curr = curr.next;
        }
        before.next = curr.next;
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

## 测试代码
```js
let l = new LinkedList();
console.log(l.toString());
l.insert(0, 43);
l.insert(0, 61);
l.insert(0, 65);
l.insert(0, 67);
l.insert(0, 143);
l.insert(0, 261);
l.insert(0, 365);
l.insert(0, 467);
console.log(l.toString());
console.log(l.getSize());
console.log(l.pop());
console.log(l.toString());
console.log(l.shift());
console.log(l.toString());
console.log(l.getSize());
console.log(l.remove(5));
console.log(l.toString());
console.log(l.getItem(3));
```