---
title: MongoDB安装
date: 2017-01-05 22:11:56
tags:
    - Mongo
---
记录一些和Mongo DB有关的笔记（部分修改自runoob）。
<!--more-->

### 安装Mongo后的基本配置
MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。
在本教程中，已经在C：盘 安装了 mongodb，现在创建一个data的目录然后在data目录里创建db目录。

    c:\>cd c:\

    c:\>mkdir data

    c:\>cd data

    c:\data>mkdir db

    c:\data>cd db

    c:\data\db>

也可以通过window的资源管理器中创建这些目录，而不一定通过命令行。

为了从命令提示符下运行MongoDB服务器，必须从MongoDB目录的bin目录中执行mongod.exe文件。为了方便，可以将mongod.exe添加到环境变量中。

    mongod.exe --dbpath c:\data\db

如果执行成功，会输出如下信息：

    2015-09-25T15:54:09.212+0800 I CONTROL  Hotfix KB2731284 or later update is not
    installed, will zero-out data files
    2015-09-25T15:54:09.229+0800 I JOURNAL  [initandlisten] journal dir=c:\data\db\j
    ournal
    2015-09-25T15:54:09.237+0800 I JOURNAL  [initandlisten] recover : no journal fil
    es present, no recovery needed
    2015-09-25T15:54:09.290+0800 I JOURNAL  [durability] Durability thread started
    2015-09-25T15:54:09.294+0800 I CONTROL  [initandlisten] MongoDB starting : pid=2
    488 port=27017 dbpath=c:\data\db 64-bit host=WIN-1VONBJOCE88
    2015-09-25T15:54:09.296+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/W
    indows Server 2008 R2
    2015-09-25T15:54:09.298+0800 I CONTROL  [initandlisten] db version v3.0.6
    ……

### 将MongoDB作为服务启动

请注意，必须有**管理权限**才能运行下面的命令。执行以下命令将MongoDB服务器作为Windows服务运行：

    mongod.exe --bind_ip 127.0.0.1 --logpath C:\data\dbConf\mongodb.log --logappend --dbpath 
    C:\data\db --port 27017 --serviceName mongo --serviceDisplayName mongo --install

参数说明：

    --bind_ip 绑定服务IP，若绑定127.0.0.1，则只能本机访问，不指定默认本地所有IP
    --logpath	定MongoDB日志文件，注意是指定文件不是目录
    --logappend	使用追加的方式写日志
    --dbpath	指定数据库路径
    --port	指定服务端口号，默认端口27017
    --serviceName	指定服务名称
    --serviceDisplayName	指定服务名称，有多个mongodb服务时执行。
    --install	指定作为一个Windows服务安装。

再次强调，必须使用通过管理员方式打开的控制台，才能成功。如果不知道怎么通过管理员身份打开控制台，请进入c:/Windows/System32/找到cmd.exe，右键点击使用管理员身份运行。

安装完之后，继续运行：

    net start mongo (mongo是刚才的服务名称)

如果出现类似**启动服务成功**的提示，那么就完成了；如果出现**没有此服务**的提示，那就是没有安装成功，需要检查以上步骤。

### MongoDB后台管理 Shell
安装完成后，想要测试数据库是否可以连接，可以使用MongoDB自带的js shell，打开一个cmd，输入`mongo`即可连接。

