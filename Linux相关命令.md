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

#### [linux](http://www.runoob.com/linux/linux-command-manual.html) 


### 查看centos服务器配置
```
# uname -a   # 查看内核/操作系统/CPU信息 
# cat /etc/issue 
# cat /etc/redhat-release # 查看操作系统版本 
# cat /proc/cpuinfo  # 查看CPU信息 
# grep MemTotal /proc/meminfo # 查看内存总量
# hostname   # 查看计算机名 
# lspci -tv   # 列出所有PCI设备 
# lsusb -tv   # 列出所有USB设备 
# lsmod    # 列出加载的内核模块 
# env    # 查看环境变量
```
退出命令
--
:q!

不保存退出

:wq

保存退出







