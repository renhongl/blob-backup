---
title: 排序
date: 2019-01-14 21:16:52
tags: 计算机算法
---

# 排序
* 快速排序
	```js
    /**
    * 快速排序
    * 取第一个值，作为中间值，与余下的一次比较
    * 比中间值小的，放左边数组
    * 比中间值大的，放右边数组
    * 递归调用，直到每个数组只剩一个元素，返回该数组
    */
    
    export  const quickSort = (arr) => {
        if(arr.length <=1){
            return arr
        }
        let mid = arr[0];
        let left =[];
        let right =[];
        for (let i =1; i<arr.length; i++){
            if(arr[i]<mid){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([mid],quickSort(right));
    }
    ```
* 冒泡排序

    ```js
    /**
    * 冒泡排序
    * 取前一个和后一个值比较，前者大则交换
    * 第一次循环结束，最后一个值为最大
    * 数组有多长，外层循环多少次
    */

    export  const bubbleSort = (arr) => {
        for (let i = arr.length - 1; i >=0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
    ```
* 选择排序
    ```js
    /**
    * 选择排序
    * 首先将最小下标设为第一个值得下标
    * 依次取后面的值与之相比比，如果更小，将最小下标设为该值的下标
    * 第一次循环结束，将数组第一位值与最小下标对应的值交换
    * 第一次循环结束，第一个值为最小值
    */

    export  const selectSort = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            let k = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[k]) {
                    k = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }
        return arr;
    }
    ```