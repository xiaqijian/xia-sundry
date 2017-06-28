Promise
--
Promise是异步编程解决方案

有三个状态
1. Pending(正在进行)
2. resolved(完成)
3. rejected(已经失败)

### 如何使用Promise
```
var promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

```
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
