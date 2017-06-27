Node有两个全局对象
--
__filename: 当前文件的名称

__dirname：当前文件路径

全局global对象现在不是window

**module.exports vs exports**
--

如果想不借助global，在不同模块之间共享代码，就需要用到exports属性。令人有些迷惑的是，在node.js里，还有另外一个属性，是module.exports。
一般情况下，这2个属性的作用是一致的，但是如果对exports或者module.exports赋值的话，又会呈现出令人奇怪的结果。

首先，exports和module.exports都是某个对象的引用（reference），初始情况下，它们指向同一个object，
如果不修改module.exports的引用的话，这个object稍后会被导出。
