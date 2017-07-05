- visibilitychange

[https://www.baidu.com/s?ie=UTF-8&wd=visibilitychange](https://www.baidu.com/s?ie=UTF-8&wd=visibilitychange)

[Page Visibility(页面可见性) API介绍、微拓展](http://www.zhangxinxu.com/wordpress/2012/11/page-visibility-api-introduction-extend/)
> 当用户切换到别的窗口修改当前窗口标题
```
<script>
(function() {
    var OriginTitile = document.title, titleTime;
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '死鬼去哪里了！';
            clearTimeout(titleTime);
        } else {
            document.title = '(つェ⊂)咦!又好了!';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            },2000);
        }
    });
})();
</script>
```
