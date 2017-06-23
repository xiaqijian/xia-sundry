NodeAPI
--

### 文件

> 需要模块fs
```
const fs = require('fs');
fs.readFile('index.txt',function(error,data){
    
    if(error) {
      console.log(error)
    }else{
      console.log(data);
    }
})
```
