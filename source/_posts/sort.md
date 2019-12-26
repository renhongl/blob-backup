---
title: 算法-排序
date: 2019-04-14 21:16:52
tags: 数据结构与算法

---



## 快速排序 

快速排序（Quick Sort），又称划分交换排序（partition-exchange sort），简称快排，一种排序算法，最早由东尼·霍尔提出。

快速排序使用**分治法**（Divide and conquer）策略来把一个序列（list）分为两个子序列（sub-lists）。

<!-- more -->

### 步骤
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
冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。

它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。

这个算法的名字由来是因为越大的元素会经由交换慢慢“浮”到数列的顶端（升序或降序排列），就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。

```js
/**
 * 冒泡排序
 * 取前一个和后一个值比较，前者大则交换
 * 第一次循环结束，最后一个值为最大
 * 数组有多长，外层循环多少次
 */
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) { //控制循环次数
        for (let j = 0; j < arr.length - i; j++) { //循环一次，最后一位最大，下次不用再循环
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```
## 选择排序
选择排序（Selection Sort）是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法。

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
归并排序（Merge Sort）是建立在归并操作上的一种有效的排序算法,该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。

```js
//将数组分治， 将分治的数组排序，将有序的数组合并
const merge = (left, right) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

/**
 * 归并排序
 * 将数组递归分成左右两个数组，直到数组只剩一个元素
 * 将分完的数组，依次按大小合并
 */
const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let midIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIndex);
    let right = arr.slice(midIndex);
    return merge(mergeSort(left), mergeSort(right));
}
```

## 直接插入排序
直接插入排序，指每次从无序表中取出第一个元素，把它插入到有序表的合适位置，使有序表仍然有序。具体方法是第一趟比较前两个数，然后把第二个数按大小插入到有序表中； 第二趟把第三个数据与前两个数从前向后扫描，把第三个数按大小插入到有序表中；依次进行下去，进行了(n-1)趟扫描以后就完成了整个排序过程。它是由两层嵌套循环组成的，外层循环标识并决定待比较的数值，内层循环为待比较数值确定其最终位置。直接插入排序是将待比较的数值与它的前一个数值进行比较，所以外层循环是从第二个数值开始的。当前一数值比待比较数值大的情况下继续循环比较，直到找到比待比较数值小的并将待比较数值置入其后一位置，结束该次循环。

```js
/**
 * 直接插入排序
 * 把将要排序的那个依次与前面排好的比较，倒序比较，比前面的小，就往前换
 * 循环，知道换到前面比它小
 */
const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
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
堆排序(Heap Sort)是利用堆这种数据结构而设计的一种排序算法，堆排序是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。首先简单了解下堆结构。

堆排序的基本思想是：将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。
### 步骤
1. 构造初始堆。将给定无序序列构造成一个大顶堆（一般升序采用大顶堆，降序采用小顶堆)。
2. 将堆顶元素与末尾元素进行交换，使末尾元素最大。然后继续调整堆，再将堆顶元素与末尾元素交换，得到第二大元素。如此反复进行交换、重建、交换。
3. 反复执行调整+交换步骤，直到整个序列有序。

```js
//堆排序使用的创建顶堆
const createMaxHeap = (arr, len) => {
    const create = (arr, i, len) => {
        let maxIndex = i;
        let left = 2 * i;
        let right = 2 * i + 1;
        if (left < len && arr[maxIndex] < arr[left]) {
            maxIndex = left;
        }
        if (right < len && arr[maxIndex] < arr[right]) {
            maxIndex = right;
        }
        let temp = arr[maxIndex];
        arr[maxIndex] = arr[i];
        arr[i] = temp;
    }
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        create(arr, i, len);
    }
}

/**
 * 堆排序
 * 循环创建最小堆，依次取出堆顶元素
 */
const heapSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        createMaxHeap(arr, i + 1);
        let max = arr[0];
        arr[0] = arr[i];
        arr[i] = max;
    }
    return arr;
}
```

## 基数排序
基数排序（Radix Sort）属于“分配式排序”（distribution sort），又称“桶子法”（bucket sort）或bin sort，顾名思义，它是透过键值的部份资讯，将要排序的元素分配至某些“桶”中，藉以达到排序的作用，基数排序法是属于稳定性的排序，其时间复杂度为O (nlog(r)m)，其中r为所采取的基数，而m为堆数，在某些时候，基数排序法的效率高于其它的稳定性排序法。

```js

/**
 * 基数排序
 */
export const radixSort = (arr, maxDigit) => {
    let counter = [];
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j++) {
            let bucket = parseInt((arr[j] % mod) / dev);
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null;
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}
```

## 希尔排序
希尔排序(Shell's Sort)是插入排序的一种又称“缩小增量排序”（Diminishing Increment Sort），是直接插入排序算法的一种更高效的改进版本。希尔排序是非稳定排序算法。该方法因D.L.Shell于1959年提出而得名。

希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。

```js
/**
 * 希尔排序
 * 循环递减增量， 直到小于1
 * 将数组元素按增量分组
 * 将每一组的数据使用直接插入的方式排序
 */
const shellSort = (arr) => {
    //不断减小间隔，直到间隔为1
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        //这里有待解释
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            //将以间隔分组的数据，使用直接插入排序的方式排序
            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                let temp = arr[j];
                arr[j] = arr[j - gap];
                arr[j - gap] = temp;
                j -= gap;
            }
        }
    }
    return arr;
}
```

## 计数排序

计数排序（Count Sort）是一种不基于比较的排序方法。

计数排序的思路是这样的，对于每一个待排序元素a，如果知道了待排序数组中有多少个比它小的数，那么就可以直接知道在排序后的数组中 a 应该在什么位置上。比如，如果一个数组中有3个数是比a小的，那么，在排序后的数组里，a必然会出现在第4位。

现在问题转化成，对于待排序数组里的一个数，如何能快速知道比它小的数字有多少个。要解决这个问题，我们不能使用比较的办法，那样时间复杂度是无法降下来，只有换一个思路，以空间换时间。因为n个数的取值范围是 0~n，所以，不妨使用一个大小为 n 的数组来统计从0到n，每个数在待排序数组中出现的次数。这个数组类似于直方图数组，因为这种方式也被称做是基于统计的排序。直方图统计的思路简单清晰，在很多题目中都会有出现，一定要熟练掌握这种技巧。

```js
/**
 * 计数排序
 */
export const countingSort = (arr, maxValue) => {
    let bucket = new Array(maxValue + 1);
    let sortedIndex = 0;
    let arrLen = arr.length;
    let bucketLen = maxValue + 1;

    for (let i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (let j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}
```

## 结语
关于算法分析总结的文章请前往：[排序算法分析](https://renhongl.github.io/2019/04/13/排序算法分析/)







