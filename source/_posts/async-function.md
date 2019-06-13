---
title: Async Function
date: 2019-06-13 20:07:38
tags: ES6
---



# Callback， Promise, Async的使用区别
* 普通情况下，遇到异步情况，可以使用callback的方式，在拿到数据后执行回调函数
    ```js
    import axios from 'axios';
    const url = 'https://www.apiopen.top/weatherApi?city=成都';
    const getWeatherByCallback = (url, callback) => {
      axios.get(url).then(json => {
        callback(json);
      });
    }
    getWeatherByCallback(url, (data) => {
      console.log(JSON.stringify(data));
    });
    ```
* 回调方法太多会造成很多问题，所以我们会使用`.then()`的方式
* 那么就需要Promise容器的支持
    ```js
    import axios from 'axios';
    const url = 'https://www.apiopen.top/weatherApi?city=成都';
    const getWeatherByPromise = (url) => {
      return new Promise((resolve, reject) => {
        try{
          axios(url).then(json => {
            resolve(json);
          });
        } catch(e){
          reject(e);
        }
      });
    }
    getWeatherByPromise(url).then(json => {
      console.log(JSON.stringify(json));
    });
    ```
* 把异步的写法改成同步的写法，就需要使用async
* async一旦遇到await就会返回，返回的是Promise对象
* return 返回的值就是then中的参数
    
    ```js
    import axios from 'axios';
    const url = 'https://www.apiopen.top/weatherApi?city=成都';
    const getWeatherByPyAsync = async (url) => {
      return await axios.get(url);
    }
    getWeatherByPyAsync(url).then(json => {
      console.log(JSON.stringify(json));
    });
    ```