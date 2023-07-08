# VS Code运行Python

------

## 安装

VS Code下载地址：https://code.visualstudio.com/

![image-20230413092727882](https://cloud.zengweihao.cn/typora/2023-04-13/20230413092746.png)

## 界面

![image-20230413092904709](https://cloud.zengweihao.cn/typora/2023-04-13/20230413092906.png)

## 扩展

在这里可以找到一些小工具，比如：中文包、内置浏览器...

![image-20230413093052279](https://cloud.zengweihao.cn/typora/2023-04-13/20230413093054.png)

- 安装中文包：**Chinese**，作用：界面中文化

![image-20230413093429021](https://cloud.zengweihao.cn/typora/2023-04-13/20230413093431.png)

- 安装 **Code Runner**，作用：支持运行各类语言

![image-20230413093621951](https://cloud.zengweihao.cn/typora/2023-04-13/20230413093623.png)



## 运行Python

![image-20230413094145500](https://cloud.zengweihao.cn/typora/2023-04-13/20230413094147.png)

安装完**Code Runner**后，打开一个文件夹，新建一个`test.py`文件，输入：

```python
print('hello python')
```

输入完后，有2种方式运行。1：点击右侧运行按钮；2：鼠标右键显示菜单，点击`Run Code`

![image-20230413094357028](https://cloud.zengweihao.cn/typora/2023-04-13/20230413094358.png)

如下图所示，显示终端，输出`hello python`

![image-20230413094536964](https://cloud.zengweihao.cn/typora/2023-04-13/20230413094538.png)

## 安装Python依赖

命令如下（xxx指依赖的名称）：

```shell
pip install xxx
```

