PHP常量
--
定义常量用define()

> define(常量名称,常量值,是否对大小写敏感)
- 默认是对大小写敏感的，false

大小写敏感
```
<?php
define("GREETING", "Welcome to W3School.com.cn!");
echo GREETING;
?>
```

大小写不敏感
```
<?php
define("GREETING", "Welcome to W3School.com.cn!", true);
echo greeting;
?>

```
