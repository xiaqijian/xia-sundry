php数组
--
1. 创建数组
> 利用Array()
```
<?php

$arr = Array(1,2,3,4,5,5);
echo $arr


?>
```
相关方法
--
- 获得数组的长度 - count() 函数
```
<?php
$cars=array("Volvo","BMW","SAAB");
echo count($cars);
?>
```
- 遍历索引数组
```
<?php
$cars=array("Volvo","BMW","SAAB");
$arrlength=count($cars);

for($x=0;$x<$arrlength;$x++) {
  echo $cars[$x];
  echo "<br>";
}
?>
```
PHP 关联数组
--
关联数组是使用您分配给数组的指定键的数组。

有两种创建关联数组的方法：

```
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
```
或者

```
$age['Peter']="35";
$age['Ben']="37";
$age['Joe']="43";
```
> 使用

```
<?php
$age=array("Bill"=>"35","Steve"=>"37","Peter"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
?>
```
遍历关联数组
--
如需遍历并输出关联数组的所有值，您可以使用 foreach 循环，就像这样：
```
<?php
$age=array("Bill"=>"35","Steve"=>"37","Peter"=>"43");

foreach($age as $x=>$x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>
```
