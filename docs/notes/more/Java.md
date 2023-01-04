# Java

## IDEA

安装:

tomcat
JDK
## 问题汇总
1. tomcat配置
```
参考：https://blog.csdn.net/shengshengshiwo/article/details/82995774
```
2. tomcat输出乱码
```
解决：
乱码的根本原因：Windows系统的cmd是GBK编码的，所以IDEA的下方log输出的部分的编码也是GBK的，然而Tomcat 9.0 版本默认log输出是UTF-8编码的，采用了两种不同的编码方式就会导致乱码。
方法1：修改Tomcat 日志输出为GBK编码
方法2：修改IDEA为UTF-8编码
```