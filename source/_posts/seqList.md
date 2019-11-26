---
title: 数据结构-顺序表
date: 2019-04-17 21:16:52
tags: 数据结构与算法

---

## 描述
* 顺序表是在计算机内存中以数组的形式保存的线性表，线性表的顺序存储是指用一组地址连续的存储单元依次存储线性表中的各个元素、使得线性表中在逻辑结构上相邻的数据元素存储在相邻的物理存储单元中，即通过数据元素物理存储的相邻关系来反映数据元素之间逻辑上的相邻关系，采用顺序存储结构的线性表通常称为顺序表。顺序表是将表中的结点依次存放在计算机内存中一组地址连续的存储单元中。

<!-- more -->

## 实现了部分接口
* 获取长度`getLength()`
* 清空`clear()`
* 判断是否未空表`isEmpty()`
* 在尾部插入`append(value)`
* 在指定位置插入`insert(index, value)`
* 从尾部取出值`pop()`
* 从指定位置删除`remove(index)`
* 从指定位置获取值`getItem(index)`
* 从值获得该值得位置`locate(value)`
* 获得所有值的快照`toString()`

## 主要算法分析
* 在添加数据时，先将要添加位置及其后面的数据往后移，再将要添加的数据添加在指定位置
* 在删除数据时，将该位置及其后面的数据往前移
* 所以顺序表易于读取，从数组索引即可读取，增删耗时较多。

## 示例代码
```js
class SequenceList {
    constructor() {
        this._list = [];
    }

    append(value) {
        this._list[this._list.length] = value;
    }

    // 插入算法：
    // 增加数组长度
    // 从插入位置到末尾，倒序遍历，将前一个值赋值给后一个值
    // 将插入位置的值，替换成给定的值
    insert(index, value) {
        if (this._list.length === 0) {
            return this._list = [value];
        }
        if (this._list.length === index) {
            return this._list[this._list.length] = value;
        }
        if (this._list.length < index) {
            return;
        }
        for (let i = 0; i < this._list.length; i++) {
            if (i === index) {
                for (let j = this._list.length; j >= i; j--) {
                    this._list[j] = this._list[j - 1];
                }
                this._list[index] = value;
            }
        }
    }

    getLength() {
        return this._list.length;
    }

    clear() {
        this._list = [];
    }

    isEmpty() {
        return this._list.length === 0;
    }

    toString() {
        let result = '';
        for (let i = 0; i < this._list.length; i++) {
            result += this._list[i] + ', ';
        }
        return result;
    }

    getItem(index) {
        if (index < 0 || index >= this._list.length) {
            return null;
        }
        return this._list[index];
    }

    locate(value) {
        for (let i = 0; i < this._list.length; i++) {
            if (this._list[i] === value) {
                return i;
            }
        }
        return -1;
    }

    pop() {
        let last = this._list[this._list.length - 1];
        this._list.length = this._list.length - 1;
        return last;
    }

    // 删除算法：
    // 从给定位置，到数组最后，顺序遍历，将后一个值赋值给前一个值
    remove(index) {
        if (index === this._list.length - 1) {
            let last = this._list[this._list.length - 1];
            return this._list.length = this._list.length - 1;
        }
        for (let i = 0; i < this._list.length; i++) {
            if (i === index) {
                for (let j = i; j < this._list.length - 1; j++) {
                    this._list[j] = this._list[j + 1];
                }
                this._list.length = this._list.length - 1;
                return this._list;
            }
        }
        return this._list;
    }
}
```