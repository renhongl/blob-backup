---
title: 计算机算法之---数据结构-堆
date: 2019-04-23 21:16:52
tags: 计算机算法

---


## 描述
* 堆是一类特殊的树，堆的通用特点就是父节点会大于或小于所有子节点。
* 如果一棵有根树的每一个结点至多有两个儿子，那么这棵树称为二叉树。
* 如果一棵二叉树的每一个节点都带着一个值，且父亲的值总是比儿子的值要大，我们称这棵树为大顶二叉堆，如果是父亲比儿子都要小，那就是小顶二叉堆，统称为二叉堆。(其实一般都把二叉两个字省略掉，毕竟通常说的堆都是二叉堆，然而堆不止二叉堆)。这一个良好的性质注定了堆可以用来当作优先队列使用。

## 实现接口
* 中序遍历`inOrder(callback, node)`
* 先序遍历`preOrder(callback, node)`
* 后序遍历`postOrder(callback, node)`
* 层级遍历`levelOrder(callback, node)`
* **按顺序插入数据**`insert(data, node)`，最大的在最上面，这是与二叉树不同的地方
* 删除数据`remove(data, node)`
* 二叉树所有数据的快照`toString()`

## 主要算法分析
* 与二叉树最主要的区别就是，在插入时，根节点的值始终大于左右节点的值。
* 如果插入的值大于根节点的值，那么该值会替换根节点的值，根节点的值会往下插入。

## 示例代码
```js
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this._root = null;
    }

    insert(data, node = this._root) {
        let newNode = new Node(data);
        if (node === null) {
            this._root = newNode;
        } else {
            //如果插入的数据比根节点的数据大
            //那么，将插入数据与根节点数据交换，再进行插入
            if (data > node.data) {
                let temp = data;
                data = node.data;
                node.data = temp;
                this.insert(data, node);
            } else {
                if (!node.left) {
                    return node.left = new Node(data);
                }
                if (!node.right) {
                    return node.right = new Node(data);
                }
                if (node.left && node.left.data <= data) {
                    this.insert(data, node.left);
                } else {
                    this.insert(data, node.right);
                }
            }
        }
    }

    //中序遍历
    inOrder(callback, node = this._root) {
        if (node === null) {
            return;
        }
        if (node.left) {
            this.inOrder(callback, node.left);
        }
        callback(node);
        if (node.right) {
            this.inOrder(callback, node.right);
        }
    }

    //先序遍历
    preOrder(callback, node = this._root) {
        if (node === null) {
            return;
        }
        callback(node);
        if (node.left) {
            this.preOrder(callback, node.left);
        }
        if (node.right) {
            this.preOrder(callback, node.right);
        }
    }

    //后序遍历
    postOrder(callback, node = this._root) {
        if (node === null) {
            return;
        }
        if (node.left) {
            this.postOrder(callback, node.left);
        }
        if (node.right) {
            this.postOrder(callback, node.right);
        }
        callback(node);
    }

    //层级遍历
    levelOrder(callback, node = this._root) {
        if (node === null) {
            return;
        }
        let queue = [];
        queue.push(node);
        while (queue.length > 0) {
            let curr = queue.shift();
            callback(curr);
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
        }
    }

    remove(data, node = this._root) {
        if (node === null) {
            return null;
        }
        if (this._root.data === data) {
            let curr = this._root;
            this._root = null;
            return curr;
        }
        if (node.left) {
            let curr = node.left;
            if (curr.data === data) {
                node.left = null;
                return curr;
            } else {
                this.remove(data, node.left);
            }
        }
        if (node.right) {
            let curr = node.right;
            if (curr.data === data) {
                node.right = null;
                return curr;
            } else {
                this.remove(data, node.right);
            }
        }
    }

    toString() {
        return JSON.stringify(this._root);
    }
}
```

## 测试代码
```js
let bt = new BinaryTree();
bt.insert(35, bt._root);
bt.insert(52, bt._root);
bt.insert(21, bt._root);
bt.insert(11, bt._root);
bt.insert(16, bt._root);
bt.insert(87, bt._root);
bt.insert(100, bt._root);
console.log(bt.toString());
bt.levelOrder((node) => console.log(node.data));
```
