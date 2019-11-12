---
title: Generator函数
date: 2017-07-10 21:16:52
tags: ES6
---

# 基本用法

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hwg = helloWorldGenerator();
hwg.next();//{value: 'hello', done: false}
hwg.next();//{value: 'world', done: false}
hwg.next();//{value: 'ending',  done: true}
hwg.nexe();//{value: undefined, done: true}
```

<!-- more -->