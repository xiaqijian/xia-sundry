> 基于Mac电脑下操作

MySQL下载安装 [下载](https://dev.mysql.com/downloads/mysql/)  

MySQL数据管理工具：sequelpro  [下载](http://sequelpro.com/) 

## MAC下修改mysql初始密码

### 1. 停止mysql服务

在修改偏好设置里面停止mysql服务

### 2. 在终端修改安全级别

```


$ cd /usr/local/mysql/bin


$ sudo ./mysqld_safe --skip-grant-tables

```
输入电脑系统密码

### 3. 新建终端，修改密码

```

$ cd /usr/local/mysql/bin 

$ ./mysql -u root 

$mysql> FLUSH PRIVILEGES;

$mysql> ALTER USER 'root'@'localhost' IDENTIFIED by '你的新密码'; 

$mysql> EXIT

```

### 4. 重启mysql就可以啦

