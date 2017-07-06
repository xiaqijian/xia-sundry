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
点击 Esc 键，Vim 进入命令模式。然后输入：
```
:q  ——退出（这是 :quit 的缩写）
:q! ——不保存退出（这是  :quit! 的缩写）
:wq ——写入文件并退出；（这是 :writequit 的缩写）
:wq! ——（如果文件只有读权限）写入并退出（如果文件没有写权限，强制写）
:x ——类似于 :wq，如果文件无变动，那就不写入
:qa ——退出全部（这是 :quitall 的缩写）
```
其实 Vim 有很详细的帮助，进入命令模式后，输入 help 然后回车。

下载文件
--
```
$ wget 下载地址
```





