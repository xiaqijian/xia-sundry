vue提供过渡组件


transition
--
单个组件的使用：
```
/* 可以设置不同的进入和离开动画 */
		/* 设置持续时间和动画函数 */
		.slide-fade-enter-active {
		  transition: all .3s ease;
		}
		.slide-fade-leave-active {
		  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter, .slide-fade-leave-active {
		  transform: translateX(10px);
		  opacity: 0;
		}
```


```
<div id="example-1">
	  <button @click="toggle">
	    Toggle render
	  </button>
	  <transition name="slide-fade">
	    <!-- <p v-if="show">hello</p> -->
	    <div class="redBox" v-if="hide"></div>
	  </transition>
	</div>
  
```

```
new Vue({
		  el: '#example-1',
		  data: {
		    // show: true,
		    hide:true
		  },
		  methods: {
		  	toggle: function () {
		  		// this.show = !this.show;
		  		this.hide = !this.hide
		  	}
		  }
		})
```
