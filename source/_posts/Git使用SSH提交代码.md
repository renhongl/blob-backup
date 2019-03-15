---
title: Git使用SSH提交代码
date: 2016-12-14 21:28:09
tags:
    - Git
---

# 简介

如果经常提交代码，每次都要输入密码就很麻烦，使用SSH连接后，就不用输入密码了。

- 配置全局用户名和邮箱：
	- `git config --global user.name "renhongl"`
	- `git config --global user.email "1075220132@qq.com"`
- 先检查本地有没有ssh key设置，查看~/这个文件夹下有没有.ssh文件夹，有的话就删除掉。
- 在~路径下生成新的ssh key:
	- `ssh-keygen -t rsa -C "1075220132@qq.com"`
- 三次回车后就生成了ssh key，在~/.ssh/文件夹下面，复制id_rsa.pub这个文件里所有的内容，粘贴到GitHub网站settings/keys里面，保存。
- 测试ssh key是否配置成功：
	- `$ ssh -T git@github.com`
- 然后输入yes,如果出现 "Hi xxx! You've successfully authenticated, but GitHub does not provide shell access."就表示配置好了。
- 配置完成后，在Github上克隆项目时，使用SSH方式，远程地址就设置成SSH方式了，push的时候就不用输入密码了。