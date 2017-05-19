## 添加用户
```
adduser xiaqijian  // xiaqijian为用户名称
passwd  xiaqijian  // 给xiaqijan用户添加密码
```

## 给用户添加root权限
```

Linux命令，绿色为添加的内容
首先，创建一个用户，没有密码
adduser work
其次，用root用户，修改一下文件
 /etc/sudoers 文件，找到下面一行，在root下面添加一行，如下所示：
命令是：vim /etc/sudoers
## Allow root to run any commands anywhere
root    ALL=(ALL)     ALL
work   ALL=(ALL)     ALL #添加的这一行内容
保存退出，命令是：:wq!
在命令行执行：su - work

就可以切换到work用户下，可以安装东西了，前提是，安装的东西，必须安装到work目录下面，否则你容易出错。
```

#### Linux命令手册[Linux books](http://man.linuxde.net/)
