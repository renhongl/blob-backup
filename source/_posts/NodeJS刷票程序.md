---
title: NodeJS刷票程序
date: 2017-01-08 17:07:46
tags:
    - 分享
    - Nodejs
---

![buy_ticket](/images/buyTicket.jpg)


# 简介

这是一个脚本程序，运行在NodeJS环境之上，功能类似360抢票王。

<!-- more -->

# 安装

假设已经安装了node环境，从github上clone下源代码（[源码在这](https://github.com/renhongl/Buy_Ticket)）

运行`npm install`安装依赖

双击run.bat即可

# 效果

控制台每隔30秒打印最新票量信息，如果没有票，显示 **No data found**，如果有，则一一列出来。根目录文件夹也会生成一个log.txt文件，方便查看之前刷票的结果。在有票的时候，还会通过短信告知用户，效果图在文章开始已经列出。



# 发送短信的代码：

  ```js
	var App = require('alidayu-node');
	var app = new App('App Key', 'App Secret');

    var message = JSON.stringify({
        "name": "lrh",
        "trainName": 'D5154',
        "number": '2'
    });

    var smsOptions = {
        sms_free_sign_name: '提示信息',
        sms_param: message,
        rec_num: '81193903',
        sms_template_code: 'SMS_39010188'
    };
    app.smsSend(options);
  ```

这是使用的阿里大于的API，在官网注册账号后，需要创建新应用获取**App Key**和 **App Secret**，接着需要为自己的短信申请签名和模板。申请成功后，就可以用上面的方式来发送短信了。

