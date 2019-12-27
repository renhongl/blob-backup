---
title: React Hook深入浅出
date: 2019-12-27 15:10:52
tags: React

---


## 什么是Hooks

Hooks是一堆函数，让你能够在函数组件中使用React的状态和生命周期功能。

Hooks是React 16.8新加的功能。

<!-- more -->

开始前，需要注意以下几点：
* Hooks不是必须学习和使用的
* Hooks100%向后兼容
* React不会移除类组件
* Hooks不会替代你所知的关于React的概念
* React提供了一些内建的Hooks，并且允许创建自己的Hooks

## 为什么需要Hooks
* 组件之间难以重用状态逻辑
* 复杂的组件变得难以理解
* 类会迷惑机器和开发人员

## 什么时候使用Hook
当你写了一个函数组件，然后你认为你需要添加一些State，之前你不得不把它改成类组件。现在，你在现有的函数组件中通过使用Hook就可以完成该功能。

## 使用State Hook
State Hook让你可以在函数组件中定义和使用State。

声明状态变量和设置状态的函数：`const [count, setCount] = useState(0)`。

`count`是新添加的State，`setCount`是用来设置新State的函数，`0`代表State的默认值。

下面来看一个完整例子：

```js
import React, { useState } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```


## 使用Effect Hook
Effect Hook让你可以在函数组件中使用类似生命周期函数的功能（例如：componentDidMount）。

### `componentDidUpdate`：

```js
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### `componentDidMount`和`componentWillUnmount`：

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

### 提升性能，只在关心的变量更新时执行：

```js
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 只在组件挂载时执行一次，更新状态不执行。类似`componentDidMount`：

```js
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component Did Mount");
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## 创建自己的Hooks
创建自己的Hooks，让你将组件逻辑提取成可重用的函数。

* 一个自定义的Hook，是一个JavaScript函数，并且名字是使用`use`开头。

### 例如：
```js
import React, { useState, useEffect } from 'react';
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
  return isOnline;
}
```

### 使用自定义的Hook
```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);
  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);
  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

## 使用Hooks的规则

* 只在最高层使用Hooks， 不在循环，判断或者嵌套函数中使用。
* 只在React函数组件中使用Hooks，不要在普通的JavaScript函数中使用。

## 内建的Hooks
基本的Hooks: `useState`， `useEffect`， `useContext`。
额外的Hooks: `useReducer`， `useCallback`， `useMemo`等等。

## 参考文献
[React官方文档](https://reactjs.org)
[Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)