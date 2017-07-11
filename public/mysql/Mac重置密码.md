到我们在mac利用`mysql -uroot -p`登录发现我们的密码给忘记了，我们可以利用一下步骤重设密码

1. 在系统偏好中停止MySQL

2. 打开终端命令行输入一下命名
```
$ sudo su  // 获取当前用户权限，会让你输入mac密码
```
然后再输入

```
$ mysqld_safe --skip-grant-tables --skip-networking &
```

#### 然后打开*新*得终端
1. 输入`mysql -uroot -p`

2. 输入
```
$ UPDATE mysql.user SET authentication_string=PASSWORD('新密码') WHERE User='root';
```
3. 输入`FLUSH PRIVILEGES;`

4. 输入`\q`即可退出mysql
