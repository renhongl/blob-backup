---
title: 计算机算法之---排序
date: 2019-04-14 21:16:52
tags: 计算机算法

---



## 快速排序

* 快速排序（英语：Quicksort），又称划分交换排序（partition-exchange sort），简称快排，一种排序算法，最早由东尼·霍尔提出。

* 快速排序使用**分治法**（Divide and conquer）策略来把一个序列（list）分为两个子序列（sub-lists）。

* 步骤为：
	1. 从数列中挑出一个元素，称为“基准”（pivot），

	2. 重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。

	3. 递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。

	4. 递归到最底部时，数列的大小是零或一，也就是已经排序好了。这个算法一定会结束，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。

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
## 冒泡排序
* 冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。

* 它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。

* 这个算法的名字由来是因为越大的元素会经由交换慢慢“浮”到数列的顶端（升序或降序排列），就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。

    ```js
    /**
    * 冒泡排序
    * 取前一个和后一个值比较，前者大则交换
    * 第一次循环结束，最后一个值为最大
    * 数组有多长，外层循环多少次
    */

    const bubbleSort = (arr) => {
      for (let i = 0; i < arr.length; i++) {//控制循环次数
        for (let j = 0; j < arr.length - i; j++) {//循环一次，最后一位最大，下次不用再循环
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
      }
      return arr;
    }
    ```
## 选择排序
* 选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法。
    ```js
    /**
    * 选择排序
    * 首先将最小下标设为第一个值得下标
    * 依次取后面的值与之相比比，如果更小，将最小下标设为该值的下标
    * 第一次循环结束，将数组第一位值与最小下标对应的值交换
    * 第一次循环结束，第一个值为最小值
    */
    const selectSort = (arr) => {
      for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      return arr;
    }
    ```
    
## 归并排序
* 归并排序（MERGE-SORT）是建立在归并操作上的一种有效的排序算法,该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。
    ```js
    //将数组分治， 将分治的数组排序，将有序的数组合并
    const merge = (left, right) => {
    	let result = [];
        while(left.length > 0 && right.length > 0) {
        	if (left[0] < right[0]) {
            	result.push(left.shift());
            } else {
            	result.push(right.shift());
            }
        }
        return result.concat(left, right);
    }
    
    const mergeSort = (arr) => {
    	if (arr.length <=1) {
        	return arr;
        }
        let midIndex = Math.floor(arr.length / 2);
        let left = arr.slice(0, midIndex);
        let right = arr.slice(midIndex);
        return merge(mergeSort(left), mergeSort(right));
    }
    ```

## 直接插入排序
* 直接插入排序，指每次从无序表中取出第一个元素，把它插入到有序表的合适位置，使有序表仍然有序。具体方法是第一趟比较前两个数，然后把第二个数按大小插入到有序表中； 第二趟把第三个数据与前两个数从前向后扫描，把第三个数按大小插入到有序表中；依次进行下去，进行了(n-1)趟扫描以后就完成了整个排序过程。它是由两层嵌套循环组成的，外层循环标识并决定待比较的数值，内层循环为待比较数值确定其最终位置。直接插入排序是将待比较的数值与它的前一个数值进行比较，所以外层循环是从第二个数值开始的。当前一数值比待比较数值大的情况下继续循环比较，直到找到比待比较数值小的并将待比较数值置入其后一位置，结束该次循环。
    ```js
    //把将要排序的那个依次与前面排好的比较，倒序比较，比前面的小，就往前换
    //循环，知道换到前面比它小
	const insertSort = (arr) => {
      for (let i = 1; i < arr.length; i++) {
        let j = i;
        while(j > 0 && arr[j] < arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          j--;
        }
      }
      return arr;
    }
    ```
    
## 堆排序

## 基数排序