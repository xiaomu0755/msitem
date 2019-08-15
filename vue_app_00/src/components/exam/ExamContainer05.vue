<!--ExamContainer05.vue-->
<template>
   <div>
     <h3>面板练习</h3>
     <!--添加三个按钮-->
     <mt-button @click="handle1" data-id="tab1">美食</mt-button>
     <mt-button @click="handle2" data-id="tab2">购物</mt-button>
     <mt-button @click="handle3" data-id="tab3">休闲</mt-button>
     <!--添加父元素与三个子面板-->
     <div>
       <!--父元素-->
       <mt-tab-container v-model="active">
         <!--子面板-->
         <mt-tab-container-item id="tab1">
            美食面板
         </mt-tab-container-item>
         <mt-tab-container-item  id="tab2">
            购物面板
         </mt-tab-container-item>
         <mt-tab-container-item  id="tab3">
            休闲面板
         </mt-tab-container-item>
       </mt-tab-container>
     </div>
   </div>
</template>
<script>
export default {
  data(){
    return {
      active:"tab1"//保存显示子面板id
    }
  },
  methods:{
    handle1(e){
      //在事件处理函数中获取自定义属性
      //data-id
      //(1)为函数添加参数    e事件对象
      //(2)获取e.target属性  触发事件对象
      //   target==<mt-button>
      //(3)e.target.dataset 
      //所有自定义属性
      //都保存在dataset 属性
      //console.log(e.target.dataset.id);
      var id = e.target.dataset.id;
      //将获取id赋值active
      this.active = id;
    },
    handle2(e){
       //获取当前按钮id属性
       var id = e.target.dataset.id;
       //将id赋值active
       this.active = id;
    },
    handle3(e){
       var id = e.target.dataset.id;
       this.active = id;
    }
  }
}
</script>

