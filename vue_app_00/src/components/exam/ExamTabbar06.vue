<template>
  <div>
    <h3>底部导航条</h3>
    <!--面板-->
     <!--父元素-->
     <mt-tab-container v-model="active">
       <!--子面板1 -->
       <mt-tab-container-item id="tab1">
          首页
       </mt-tab-container-item>
       <!--子面板2-->
       <mt-tab-container-item id="tab2">
           购物车
       </mt-tab-container-item>
       <!--子面板3-->
       <mt-tab-container-item id="tab3">
           美食
       </mt-tab-container-item>
     </mt-tab-container>

    <!--底部导航条父元素-->
    <mt-tabbar v-model="active" fixed>
      <!--按钮-->
       <mt-tab-item id="tab1">
         <!--图片:检查图片正确01.png-->
         <img slot="icon" src="../../assets/01.png" />
         <!--文字-->
         首页
       </mt-tab-item>
       <mt-tab-item id="tab2">
         <!--图片:检查图片正确01.png-->
         <img  slot="icon" src="../../assets/02.png" />
         <!--文字-->
         购物车
       </mt-tab-item>       
       <mt-tab-item id="tab3">
         <!--图片:检查图片正确01.png-->
         <img  slot="icon" src="../../assets/03.png" />
         <!--文字 55-->
         美食
       </mt-tab-item>
     </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        //按钮保存id值
        active:"tab1"
      }
    }
  }
</script>
