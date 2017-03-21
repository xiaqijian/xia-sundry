#### 1. <!DOCTYPE html> 的作用是什么？
> 告诉浏览器编写页面所用的标记版本

#### 2.谈谈你对css盒模型的理解？涉及到哪些css属性？
> 标准的盒子模型有这些属性：content、padding、border、margin
> 
> 这些属性，可以把它转移到我们日常生活中的盒子（箱子）上来理解，日常生活中所见的盒子也就是能装东西的一种箱子，也具有这些属性，所以叫它盒子模式。
>
> 那么内容（CONTENT）就是盒子里装的东西
> ；而填充(PADDING)就是怕盒子里装的东西（贵重的）损坏而添加的泡沫或者其它抗震的辅料；边框 (BORDER)就是盒子本身了；至于边界(MARGIN)则说明盒子摆放的时候的不能全部堆在一起，要留一定空隙保持通风，同时也为了方便取出。

### 3.阅读以下CSS代码
```
#box{  
    width:200px;  
    height:200px;  
    padding：10px;  
    border:5px solid black;
    margin:20px 5px; 
    
}

```
该元素盒模型在W3C标准模式下，实际占用宽度为_______，实际占用高度为_______；
在IE怪异盒模型下，实际占用宽度为_______，实际占用高度为_______。
> 这两者的关键差别就在于：
- W3C盒子模型——属性高（height）和属性宽（width）这两个值不包含 填充（padding）和边框（border）
- IE盒子模型——属性高（height）和属性宽（width）这两个值包含 填充（padding）和边框（border）

我们在编写页面代码的时候应该尽量使用标准的W3C盒子模型（需要在页面中声明DOCTYPE类型）。
   
各浏览器盒模型的组成结构是一致的，区别只是在"怪异模式"下宽度和高度的计算方式，而“标准模式”下则没有区别。组成结构以宽度为例：

总宽度=marginLeft+borderLeft+paddingLeft+contentWidth+paddingRight+borderRight+marginRight（==W3C标准盒子模型==）。页面在“怪异模式”下，css中为元素的width和height设置的值在标准浏览器和ie系列(ie9除外)里的代表的含义是不同的（IE盒子模型）。 

   因而解决兼容型为题最简洁和值得推荐的方式是：下述的第一条。 
一、将页面设为“标准模式”。
```
<!DOCTYPE html>
```
二、也可以利用hack/wrapper解决兼容性问题

hack
在css后面填写!important; // ie9,ff,chrome,opera这样的标准浏览器

wrapper
```
<div class="wrapper">  
    <div id="box"></div>  
    <div style="clear:both"></div>  
</div>  
// 利用外套一个盒子设置padding 内容
```
这个来自[解决盒子模型兼容性](http://blog.csdn.net/xujie_0311/article/details/42372871)

### 4.用css写一个三角形(写代码)
> 写三角形就是利用css3
> 利用改变border
```
<div id="arrow-top"></div>

<style>
    #arrow-top {
			width:0;
			height: 0;
			border-left: 100px solid transparent;
			border-right: 100px solid transparent;
			border-bottom: 100px solid red;
		}
</style>
```
css3画三角形链接[教程](http://jingyan.baidu.com/article/a65957f4ec03d224e77f9b72.html)

### 5.为什么需要重置CSS样式？
1. 首先每个浏览器对html标签都有自己的默认样式，用来保证在没有自定义样式的情况下也能被有据可循的渲染，然而各厂商都有自己的风格，需求也不同，需要自己的样式不被默认样式影响，就要清除加设置默认样式。

2. 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
各大浏览器不同样式[http://developer.doyoe.com/default-style/](http://developer.doyoe.com/default-style/)
### 6.说说你知道的html、css兼容问题？问题如何解决？（至少4种）
1. 居中问题

> div里的内容，IE默认为居中，而FF默认为左对齐，可以尝试增加代码margin: 0 auto;

2. 高度问题

>两上下排列或嵌套的div，上面的div设置高度(height)，如果div里的实际内容大于所设高度，在FF中会出现两个div重叠的现象；但在IE中，下面的div会自动给上面的div让出空间所以为避免出现层的重叠，高度一定要控制恰当，或者干脆不写高度，让他自动调节，比较好的方法是 height:100%;但当这个div里面一级的元素都float了的时候，则需要在div块的最后，闭和前加一个沉底的空div，对应CSS是：
```
.float_bottom {
    clear:both;
    height:0px;
    font-size:0px;
    padding:0;
    margin:0;
    border:0;
    line-height:0px;
    overflow:hidden;
    
}
```
3. clear:both;

> 不想受到float浮动的，就在div中写入clear:both;

4. IE浮动 margin产生的双倍距离
```
#box {
    float:left;
    width:100px;
    margin:0 0 0 100px; //这种情况之下IE会产生200px的距离
    display:inline; //使浮动忽略
}
```
