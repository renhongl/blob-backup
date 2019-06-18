---
title: 计算机算法之---数据结构-树
date: 2019-04-19 21:16:52
tags: 计算机算法

---

## 描述
* 在图论中，树（英语：Tree）是一种无向图（undirected graph），其中任意两个顶点间存在唯一一条路径。或者说，只要没有回路的连通图就是树。森林是指互相不交并树的集合。树图广泛应用于计算机科学的数据结构中，比如二叉查找树，堆，Trie树以及数据压缩中的霍夫曼树等等。

## 实现接口
* 深度遍历`deepTravers(callback)`
* 广度遍历`breadthTravers(callback)`
* 给指定节点添加`add(data, toData)`
* 从指定节点删除`remove(data, toData)`
* 判断是否包含给定数据`containes(data, tranvers)`

## 主要算法分析
* 深度遍历：即遍历完这个节点，就去找该节点的子节点
* 广度遍历：即先遍历完该层次的所有节点，再去遍历下一级节点
* 操作节点依赖遍历，所以可以先实现遍历的方法，再实现增删操作

## 示例代码
```js
class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this._root = null;
    }

    add(data, toData) {
        if (toData === null) {
            return this._root = new Node(data);
        }
        let target = this.getNodeByData(toData, this.deepTravers);
        if (target !== null) {
            let newNode = new Node(data);
            newNode.parent = target.data;
            target.children.push(newNode);
        } else {
            console.log(`Can not add to ${toData}`);
        }
    }

    remove(data, toData) {
        let target = this.getNodeByData(toData, this.breadthTravers);
        if (target !== null) {
            let index = 0;
            for (let i = 0; i < target.children.length; i++) {
                if (data === target.children[i].data) {
                    index = i;
                    break;
                }
            }
            return target.children.splice(index, 1);
        } else {
            console.log(`Can not find ${data} from ${toData}`);
        }
    }

    deepTravers(callback) {
        const travers = (node) => {
            callback(node);
            for (let i = 0; i < node.children.length; i++) {
                travers(node.children[i]);
            }
        }
        travers(this._root);
    }

    breadthTravers(callback) {
        let queue = [];
        queue.push(this._root);
        while (queue.length > 0) {
            let curr = queue.shift();
            callback(curr);
            for (let i = 0; i < curr.children.length; i++) {
                queue.push(curr.children[i]);
            }
        }
    }

    containes(data, travers) {
        let contain = false;
        travers.call(this, (node) => {
            console.log(node.data, data);
            if (node.data === data) {
                contain = true;
            }
        });
        return contain;
    }

    getNodeByData(data, travers) {
        let result = null;
        travers.call(this, (node) => {
            if (node.data === data) {
                result = node;
            }
        });
        return result;
    }

    toString() {
        return JSON.stringify(this._root);
    }
}
```


## 测试代码
```js
let tree = new Tree();
tree.add(43, null);
console.log(tree.toString());
tree.deepTravers((node) => console.log('Deep Travers:', node.data));
tree.breadthTravers((node) => console.log('Breadth Travers:', node.data));
console.log('Containes 43:', tree.containes(43, tree.deepTravers));
tree.add(65, 44);
tree.add(65, 43);
tree.add(111, 65);
tree.add(322, 111);
tree.add(453, 43);
console.log(tree.toString());
tree.remove(322, 111);
```