---
layout:     post
title:      Springboot to Server
subtitle:   
date:       2018-05-24
author:     Fairy17
header-img: img/post-bg-ios9-web.jpg
catalog:    true
tags:
    - SpringBoot
    - Server
    - Publish
---

# 服务器上传流程

> 步骤： （1）修改为`war` （2）`install` （3）复制`war` （4）运行命令`java -jar`

## 一、打包  

1. 首先修改`pom.xml`中的代码，把`<packaging></packaging>`中的`jar`改为`war`。  

![image](/image/springboot-to-server/1.png)   

2. 点击右侧边栏的Maven Projects（如没有可以尝试点击IDEA左下角按钮），双击Lifecycle下的`install`即可打包。  

![image](https://raw.githubusercontent.com/fairy17/fairy17.github.io/master/image/springboot-to-server/2.bmp)   

![image](https://raw.githubusercontent.com/fairy17/fairy17.github.io/master/image/springboot-to-server/3.bmp)   

3. 打包后的.war和.war.original文件会出现在Spring Boot工程项目下的target目录。

![image](https://raw.githubusercontent.com/fairy17/fairy17.github.io/master/image/springboot-to-server/4.bmp)   

## 二、部署到服务器

1. 服务器上安装jdk1.8、tomcat7（`apt-get update`）和数据库（已安装）。
![image](https://raw.githubusercontent.com/fairy17/fairy17.github.io/master/image/springboot-to-server/5.bmp)   
2. 通过Winscp等工具上传两个war文件至服务器。
3. 登录服务器，检查是否上传完成。
![image](https://raw.githubusercontent.com/fairy17/fairy17.github.io/master/image/springboot-to-server/6.bmp)   
4. 输入命令java -jar xxx-0.0.1-SNAPSHOT.war，即可运行项目
![image](https://raw.githubusercontent.com/fairy17/fairy17.github.io/master/image/springboot-to-server/7.bmp)   

# 关于screen命令

>服务器连接时，也许需要在Putty对话框结束后，后台也能持续、同时运行一些程序（就像windows多个窗口一样）。通常Putty在关闭后都会发送SIGRUP信号，从而停止当前程序的执行。因此，我们需要screen命令。（norup命令可以达到screen的部分效果，但不全面）

## 一、后台连接

1. 输入`screen`（一直空格直至结束）
2. 执行命令，例：`java -jar blw-0.0.1-SNAPSHOT.war`
3. 按下Ctrl+a+d，得到进程号，该进程将被保留
4. 随意进行其余操作，包括关闭Putty。

## 二、再次连接

1. `screen -ls`，显示所有screen进程（假设进程号为1920）。
2. `screen -r 1920`，恢复原有界面。
3. 同初次连接。

## 三、断开连接
1. `sudo kill -9 1920`.
2. `screen -wipe`
3. 再次查看：`screen -ls` 可以发现进程消失无法连接。

## 四、详细表格

| 命令     |  说明    |
| ---- | ---- |
| -c file |使用配置文件file，而不使用默认的$HOME/.screenrc |
| -d\|-D [pid.tty.host] |不开启新的screen会话，而是断开其他正在运行的screen会话|
| -h num	  |  指定历史回滚缓冲区大小为num行|
|-list\|-ls |  列出现有screen会话，格式为pid.tty.host|
|-d -m	 |  启动一个开始就处于断开模式的会话|
|-r sessionowner/ [pid.tty.host] |  重新连接一个断开的会话。多用户模式下连接到其他用户screen会话需要指定sessionowner，需要setuid-root权限|
|-S sessionname |  创建screen会话时为会话指定一个名字|
|-v	 |  显示screen版本信息|
|-wipe [match] |  同-list，但删掉那些无法连接的会话|
