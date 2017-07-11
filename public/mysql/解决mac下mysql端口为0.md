登录MySQL之后查看端口号
```mysql
mysql> show global variables like 'port';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| port          | 3306  |
+---------------+-------+
1 row in set (0.00 sec)
```

关闭mysql`sudo /usr/local/mysql/support-files/mysql.server stop`

解决方案如下：
1. 在`/Library/LaunchDaemons`文件下
```
cd /Library/LaunchDaemons
```
2. 编辑
```
$ sudo vim com.oracle.oss.mysql.mysqld.plist
```
3. 添加`<string>--port=3307</string>改为 <string>--port=3306</string>`

保存退出，启动MySQL`sudo /usr/local/MySQL/support-files/mysql.server start
`

重启MySQL`sudo /Library/StartupItems/MySQLCOM/MySQLCOM restart`
