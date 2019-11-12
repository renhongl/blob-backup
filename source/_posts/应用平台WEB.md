---
title: 应用平台WEB
date: 2016-11-24 19:51:29
tags:
	- 分享
	- Javascript

---


![ap](/images/homeAndRoom.png)

# 简介

项目涉及技术：RequireJS, Vue.js, NodeJS, Express, MongoDB, Bootstrap, WebSocket, JQuery, ES2015。

<!-- more -->

应用平台WEB版，是为了做一个网页版的APP store，也就是可以扩展出其他应用的一个平台。目前平台除了搭建了基本的结构之外，还做了一个简单的一对一聊天应用和简单的博客系统。下面将进行简单的介绍，源代码可在demo大师上下载：[源码](http://www.demodashi.com/demo/12539.html)，[github点赞](https://github.com/renhongl/ailiao)。
# 图文介绍

![ap](/images/signIn.png)

这是登录页面，可以使用用户名和验证了的邮箱登录。

![ap](/images/signUp.png)

这是注册页面，很简单的注册一下。 

![ap](/images/resetPwd.png)

这是重置密码页面，需要通过验证邮箱的随机码，来实现重置密码。主要是通过后台服务器向邮箱发送信息。

![ap](/images/chatHome.png)

这是主模块，包含登录用户的信息显示，并且可以随意设置。可以修改头像，设置状态，还可以添加邮箱，设置是否有消息提示音和提示框。还有就是显示自己的好友分组信息。可以任意修改分组。

![ap](/images/homeAndRoom.png)

图的右边就是聊天的窗口，可以同时和多个人聊天，都会列在左边，点击就能切换聊天对象。窗口可以通过关闭所有聊天对象来关闭，或者通过右上角关闭按钮关闭。消息中可以发送一些表情。可以发送抖动窗口的消息。

![ap](/images/docs.png)

这个应用是聊天主页的按钮点击出来的，可以显示一些简单的文档，并且可以点击喜欢某个文档，以及添加简单的评论信息。

# 后端部分代码介绍

## Email.js

用于发送邮件

  ```js
  'use strict';
	const nodemailer = require('nodemailer');
	const Config = require('./Config');

	class Email {
		constructor(to, subject, text, html) {
			this.config = {
				service: '126',
				auth: {
					user: Config.EMAIL_SERVER,
					pass: Config.EMAIL_PWD            
				}
			};
			this.mailOptions = {
				from: Config.EMAIL_SERVER,
				to: to,
				subject: subject,
				text: text,
				//html: html
			};
			this._send();
		}

		_send() {
			let transporter = nodemailer.createTransport(this.config);
			transporter.sendMail(this.mailOptions, function (error, info) {
				if (error) {
					return console.log(error);
				}
				console.log('Message sent: ' + info.response);
				transporter.close();
			});
		}
	}

	module.exports = Email;
  ```


## Server.js
作为服务器，并且是Websocket的父类。


  ```js
  'use strict';
  const express = require('express');
  const http = require('http');
  const socket = require('socket.io');
  const Router = require('./Router');
  const bodyParser = require('body-parser');

  class Server{
      constructor(port){
        this.port = port;
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socket.listen(this.server);
        this._run();
      }
    _run(){
        this.server.listen(this.port);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(__dirname.replace(/server\\core/, 'app')));
        new Router(this.app);
        console.log('HTTP listening: 127.0.0.1:' + this.port);
    }
 }

 module.exports = Server;
  ```


## User.js
和用户相关的所有接口都在这里。下面是一个获取验证码的接口，在获取请求后，会随机生成五位数验证码，发送到用户的邮箱中，并且在生成验证码的同时，会调用删除验证码的方法，在一定时间内将此验证码删除，那么用户就不能再使用此验证码修改密码了。

```js
_getCode(){
  this.app.get('/getCode', (req, res) => {
    let email = req.query.email;
    let code = '';
    for(let i = 0; i < 5; i++){
      code += Math.floor(Math.random() * 10);
    }
    let queryData = {
      email: email
    };
    let updateData = {
      code: code
    };
    let callback = (db) => {
      let collection = db.collection(this.userCollection);
      collection.updateOne(queryData, {$set: updateData}, (err, result) => {
        assert.equal(null, err);
        db.close();
        if(result.result.n === 1){
          new Email(email, '重置密码', '你的验证码是：' + code);
          this._removeCode(email);
          res.send({status: 'success', text: '验证码已发往你的邮箱，请查收。30分钟内有效。'});
        }else{
          res.send({status: 'error', text: '没有此邮箱，或许你需要注册账号。'});
        }
      });
    };
    new MongoDB(this.currentDB, callback);
  });
}```


# 前端部分代码介绍

前端模块化采用的是RequireJS，AP_WEB2.0会使用Webpack,那时候会使用ES2015的模块管理。前端的代码较多，这里主要介绍下自己写的特别的功能。QueryString.js用户获取url上的参数信息。

  ```js
  define([], function() {
    'use strict';
    class QueryString {
      constructor(){
        let search = window.location.search.substring(1).split('&');
        let tempGroup = [];
        for (let p of search) {
          tempGroup.push(p.split('='));
        }
        this.params = new Map(tempGroup);
      }
      getValue(name){
        return this.params.get(name);
      }
    }
    let queryString = new QueryString();
    return queryString;
  });
  ```

## Draggable.js

用于添加拖动功能，在创建时，传入需要拖动的元素，这个元素就能拖动了。

  ```js
  define([], function() {
    'use strict';
    class Draggable {
      constructor($container) {
        this.$container = $container;
        for (let subContainer of $container.children()) {
          this._handleEvents($(subContainer));
        }
      }
      
      _handleEvents($subContainer) {
        $subContainer.on('mousedown', (e) => {
          if (!$(e.target).hasClass('button')) {
            this._handleMousedown(e);
          }
        });
        $(document).on('mousemove', (e) => {
          if (!$(e.target).hasClass('button')) {
            this._handleMousemove(e);
          }
        });
        $(document).on('mouseup', (e) => {
          if (!$(e.target).hasClass('button')) {
            this._handleMouseup(e);
          }
        });
      }
      
      _handleMousedown(e) {
        let {left, top} = this.$container.css(['left', 'top']);
        this.offsetX = this._parseStr(left) - e.clientX;
        this.offsetY = this._parseStr(top) - e.clientY;
        this.mouseDown = true;
      }
      
      _handleMousemove(e) {
        $(e.target).css('cursor', 'url(/images/m1.cur),default !important');
        if (this.mouseDown) {
          let x = e.clientX;
          let y = e.clientY;
          let positionX = x + this.offsetX;
          let positionY = y + this.offsetY;
          this.$container.css({
            left: positionX,
            top: positionY,
          });
        }
      }
      
      _handleMouseup(e) {
        $(e.target).css('cursor', 'url(/images/m1.cur),default !important');
        this.mouseDown = false;
      }
      
      _parseStr(str) {
        if(typeof str !== 'string'){
          str += ''; 
        }
        return Number(str.split('px')[0]);
      }
    }
    
    return Draggable;
  });
 ```

## Rain.js

用于添加鼠标点击效果，创建之后，在整个网页中，除了class中有button的元素，其他都会在点击时，出现像雨滴落在地上的效果。

  ```js
  define([], function() {
    'use strict';
    class Rain {
      constructor() {
        this.settings = {
          width: 10,
          height: 10,
          borderColor: '#c6cac9',
          opacity: 0.7,
          borderRadius: 5,
          borderWidth: 5,
          maxWidth: 70,
          widthOffset: 2,
          radiusOffset: 1,
          opacityOffset: 0.05,
          borderOffset: 1,
          position: 'fixed',
          zIndex: 100,
          borderStyle: 'solid',
          class: 'rain',
        };
        this._handleEvents();
      }
      
      _handleEvents() {
        let settings = this.settings;
        $(document).on('click', (e) => {
          if($(e.target).hasClass('button')){
            return;
          }
          let $rain = $('<div>').attr('class', settings.class).css({
            position: settings.position,
            zIndex: settings.zIndex,
            borderStyle: settings.borderStyle,
          });
          $('body').append($rain);
          let x = e.clientX;
          let y = e.clientY;
          this._initRain($rain, x, y);
          this._updateRain($rain, x, y);
        });
      }
      
      _updateRain($rain, x, y) {
        let settings = this.settings;
        let rainThread = setInterval( () => {
          let {width, height,top, left, opacity, borderWidth, borderRadius} = $rain.css(['width', 'height','top', 'left', 'opacity', 'borderWidth', 'borderRadius']);
          $rain.css({
            width: this._parseStr(width) + settings.widthOffset,
            height: this._parseStr(height) + settings.widthOffset,
            top: y - this._parseStr(height) / 2,
            left: x - this._parseStr(width) / 2,
            opacity: this._parseStr(opacity) - settings.opacityOffset,
            borderWidth: this._parseStr(borderWidth) + settings.borderOffset,
            borderRadius: this._parseStr(borderRadius) + settings.radiusOffset,
          });
          if (this._parseStr(width) > settings.maxWidth) {
            clearInterval(rainThread);
            $rain.remove();
          }
        }, 10);
      }
      
      _initRain($rain, x, y) {
        let settings = this.settings;
        $rain.css({
          width: settings.width,
          height: settings.height,
          borderColor: settings.borderColor,
          opacity: settings.opacity,
          borderRadius: settings.borderRadius,
          borderWidth: settings.borderWidth,
          top: y - this._parseStr(settings.height) / 2,
          left: x - this._parseStr(settings.width) / 2,
        });
      }
      
      _parseStr(str){
        if(typeof str !== 'string'){
          str += ''; 
        }
        return Number(str.split('px')[0]);
      }
      
    }
    
    return Rain;
  });
 ```


## Message.js
最后一个要介绍的是Message.js，它是一个全局提示的工具，项目中使用它做ajax返回信息的控制，做聊天室消息预览等。当有一些信息要发送给用户时，会在浏览器的右上角出现对话框，包含信息标题，信息内容等。并且分为几种类型的提示，不同类型会有不同主题的对话框出现。由于代码太多，这里只列出了它的构造方法。

  ```js
  constructor(type, content) {
    this.title = '';
    this.content = content;
    this.showTime = 5000;
    this.clearTime = 1000;
    this.clearThread = null;
    this.timeThread = null;
    this.$Message = $('<div>').css({
      color: '#fff',
      borderRadius: 5,
      width: 300,
      display: 'none',
      zIndex: 110,
      margin: '2px 5px',
      clear: 'both',
      float: 'right',
      position: 'relative',
      boxShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
      opacity: 0.9,
    }).addClass('message');
    
    this.$icon = $('<i>').css({
      display: 'inline-block',
      float: 'left',
      marginLeft: 10,
      width: 20,
      textAlign: 'center',
      fontSize: '1.2em',
    }).addClass('msgIcon').appendTo(this.$Message);
    
    this.$title = $('<div>').css({
      height: '45%',
      width: 260,
      float: 'right',
      fontSize: '1.2em',
    }).addClass('msgTitle').appendTo(this.$Message);
    
    this.$time = $('<span>').css({
      position: 'absolute',
      top: 2,
      right: 2,
      fontSize: '0.7em',
    }).addClass('msgTime').appendTo(this.$Message);
    
    this.$content = $('<div>').css({
      float: 'right',
      height: '56%',
      width: 260,
      paddingBottom: 5,
      paddingRight: 5,
      fontSize: '0.8em',
    }).addClass('msgContent').appendTo(this.$Message);
    
    switch (type) {
      case 'infor':
        this.title = '提示';
        this._infor();
        break;
      case 'success':
        this.title = '成功';
        this._success();
        break;
      case 'error':
        this.title = '错误';
        this._error();
        break;
      case 'warning':
        this.title = '警告';
        this._warning();
        break;
      case 'message':
        this._message();
        break;
      default:
        break;
  }
 ```

# 总结
写代码很重要，调试也很重要，好的调试方法，可以更快的发现、解决问题。正视错误，用积极的态度去处理错误，会提升自己面临问题时的处理能力。