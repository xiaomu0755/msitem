<template>
  <div>
    <h3>父组件</h3>
    <!--父组件:调用子组件并且传递参数-->
    <!--(1)引入子组件-->
    <!--(2)注子子组件-->
    <!--(3)调用子组件-->
    <sub07 msg="微信(11)"></sub07>
    <!--(4)为父组件指定访问路径 /Fa08-->
  </div>
</template>
<script>
//1:(1)引入子组件
import Sub07 from "./Sub07"
export default {
  data(){
    return {}
  },
  components:{//(2)注册子组件
     "sub07":Sub07
  }
}
</script>

