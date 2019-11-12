
---
title: Flux
date: 2018-05-10 21:16:52
tags: Redux
---



# Flux是什么？



* 一种架构思想。
* 专门解决软件的结构问题。

<!-- more -->

# 传统MVC

![](https://res.infoq.com/news/2014/05/facebook-mvc-flux/en/resources/flux-react-mvc.png)

# Flux

![](https://res.infoq.com/news/2014/05/facebook-mvc-flux/en/resources/flux-react.png)

由图可见，Flux是单向数据流动。
1. 用户访问View
1. View发出Action
1. 派发器发出Action, 要去Store进行更新
1. Store更新数据, 提醒View需要更新页面
1. View更新页面

# 基本概念
Flux将应用分成四个部分。
* View: 视图层
* Action: 动作，视图层发出的消息，比如鼠标点击
* Dispatcher: 派发器，用来接收Actions，执行回调函数
* Store: 数据层，用来存放应用的状态，一旦发生改变，就提醒View更新页面








