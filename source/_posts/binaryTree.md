---
title: 计算机算法之---数据结构-二叉树
date: 2019-04-22 21:16:52
tags: 计算机算法

---

## 描述
* 在计算机科学中，二叉树是每个结点最多有两个子树的树结构。通常子树被称作“左子树”（left subtree）和“右子树”（right subtree）。二叉树常被用于实现二叉查找树和二叉堆。
* 一棵深度为k，且有2^k-1个节点的二叉树，称为满二叉树。这种树的特点是每一层上的节点数都是最大节点数。而在一棵二叉树中，除最后一层外，若其余层都是满的，并且最后一层或者是满的，或者是在右边缺少连续若干节点，则此二叉树为完全二叉树。具有n个节点的完全二叉树的深度为floor(log2n)+1。深度为k的完全二叉树，至少有2k-1个叶子节点，至多有2k-1个节点。

<!-- more -->

## 实现接口
* 中序遍历`inOrder(callback, node)`
* 先序遍历`preOrder(callback, node)`
* 后序遍历`postOrder(callback, node)`
* 层级遍历`levelOrder(callback, node)`
* 插入数据`insert(data, node)`
* 删除数据`remove(data, node)`
* 二叉树所有数据的快照`toString()`

## 主要算法分析
* 中序遍历就是先遍历左子树，如果左子树还有子树，就继续遍历其子树，并且先遍历左子树
* 先序遍历和后序遍历类似，只是遍历每个节点左根右节点时，使用不同的顺序
* 层级遍历是从根节点一层一层往下遍历 

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
            if (data <= node.data) {
                if (!node.left) {
                    node.left = new Node(data);
                } else {
                    this.insert(data, node.left);
                }
            } else {
                if (!node.right) {
                    node.right = new Node(data);
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
//初始化数据，测试各种遍历方法
bt._root = {
    data: 43,
    left: {
        left: {
            data: 112,
            left: {
                data: 654,
                left: null,
                right: null
            },
            right: {
                data: 89,
                left: {
                    data: 94,
                    left: null,
                    right: null
                }
            }
        },
        right: null,
        data: 65
    },
    right: {
        left: null,
        right: null,
        data: 756
    }
}

bt.inOrder((node) => console.log(node.data));
bt.preOrder((node) => console.log(node.data));
bt.postOrder((node) => console.log(node.data));
bt.levelOrder((node) => console.log(node.data));
//测试插入和删除方法
bt.insert(35, bt._root);
bt.insert(52, bt._root);
bt.insert(21, bt._root);
bt.insert(11, bt._root);
bt.insert(16, bt._root);
bt.insert(87, bt._root);
console.log(bt.toString());
bt.remove(52);
console.log(bt.toString());
```
