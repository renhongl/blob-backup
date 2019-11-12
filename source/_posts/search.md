---
title: 计算机算法之---查找
date: 2019-04-15 21:16:52
tags: 计算机算法

---




## 顺序查找
* 按照数组顺序一个一个的找下去，直到找到
	```js
    const orderSearch = (source, target) => {
      for (let i = 0; i < source.length; i++) {
        if (source[i] === target) {
          return i;
        }
      }
      return -1;
    }
	```

  <!-- more -->

## 折半查找
* 二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。[1]
	
	```js
    //使用递归
    const binarySearch = (source, left, right, target) => {
        let midIndex = Math.floor((right + left) / 2);
        let mid = source[midIndex];
        if (target === mid) {
        	return midIndex;
        } else if (target < mid) {
        	return binarySearch(source, left, midIndex, target);
        } else if(target > mid){
        	return binarySearch(source, midIndex, right, target);
        }
        return -1;
    }
    
    //不使用递归
    const biSearch = (source, left, right, target) => {
      while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (source[mid] === target) {
          return mid;
        } else if (target < source[mid]) {
          right = mid;
        } else {
          left = mid;
        }
      }
      return -1;
    }
    ```

## 分块查找
* step1 先选取各块中的最大关键字构成一个索引表；

* step2 查找分两个部分：先对索引表进行二分查找或

* 顺序查找，以确定待查记录在哪一块中；

* 然后，在已确定的块中用顺序法进行查找。

## 树形查找

## 散裂查找
* 在进行查找时，在记录的存储位置与它的关键字之间建立一个确定的对应关系h,以线性表中每个元素的关键字K为自变量，通过函数h(K)计算出该元素的存储位置，我们将h函数称为散列函数或哈希函数。这种查找方法称为散列查找。
* 就是常用的js对象的读取？
