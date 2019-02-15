---
title: Promise
date: 2017-06-20 20:07:38
tags: ES6
---



# Promise

Promise是异步编程的一种解决方案，它是一个容器，里面保存着某个将来才会结束的事件。

**通过异步操作的结果，决定它是哪种状态。**

**pending ---> fulfilled   或者 pending ---> rejected**



* 基本使用

  ```js
  const getData = function(url) {
    return new Promise((resolve, reject) => {
      try{
        setTimeout(() => {
          console.log('data loaded');
          resolve('get ' + url + ' data successfully');
        }, 2000);
      }catch(e){
        reject(new Error('error'));
      }
    });
  }

  getData('test.json').then((data) => {
    console.log(data);
  });

  ```

* 异步加载图片

  ```js
  const loadImage = function(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          setTimeout(() => {
            resolve('img loaded');
          }, 2000);
        };
        img.src = url;
    });
  }

  const imgURL = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=628594730,4098634647&fm=27&gp=0.jpg';
  document.body.innerHTML = 'loading...';
  loadImage(imgURL).then(data => {
    const img = document.createElement('img');
    img.style.width = '100px';
    img.style.height = '100px';
    img.src = imgURL;
    document.body.innerHTML = '';
    document.body.appendChild(img);
  });
  ```

* Ajax请求

  ```js
  const getData = function(url) {
    return new Promise((resolve, reject) => {
    	const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
    	};
      const client = new XMLHttpRequest();
      client.open('GET', url);
      client.responseType = 'json';
      client.onreadystatechange = handler;
      client.setRequestHeader('Accept', 'application/json');
      client.send();
    });
  }

  getData('test.json').then(data => {
    console.log(data);
  });
  ```

* 应总是使用第一个then获取resolve状态的结果，使用catch获取错误的结果

  ```js
  getData('test.json').then(data => {
    console.log(data);
  }).catch(e => {
    console.log(e);
  });
  ```

* Promise.all()用于将多个Promise实例，包装成一个新的Promise实例

  ```js
  const p = Promise.all([p1, p2, p3]);
  ```

  1. p1, p2, p3的状态都变成fulfilled, p也会变成fulfilled，p1, p2, p3的返回值组成一个数组传递给p的回调函数。
  2. p1, p2, p3中只要有一个被rejected，p的状态就变成rejected, 第一个被rejected的实例的返回值，会传递给p的回调函数。

* Promise.race()也是将多个Promise实例包装成一个新的Promise实例

  1. p1, p2, p3只要有一个先改变状态，p的状态就跟着改变。

