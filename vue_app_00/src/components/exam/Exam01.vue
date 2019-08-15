<!--template组件模板:保存标签-->
<template>
  <!--模板要求:必须有一个根标签-->
  <div>
    <h1>Exam01.vue</h1>
    <!--添加一个按钮,当用户点击按钮时-->
    <!--显示短消息提示框-->
    <button @click="openToast">显示短消息</button>
    <!--创建三个按钮:显示交互组件-->
    <button @click="openAlert">简写提示框</button>
    <hr />
    <button @click="openConfirm">确认提示框</button> 
    <hr />
    <button @click="openPrompt">输入确认</button>   
  </div>
</template>
<script>
 //vue 组件:导出默认对象
export default {
   data(){ //当前组件共享数据,模块直接读取
     return {}//默认返回空对象(没数据)
   },
   methods:{
     openPrompt(){
       this.$messagebox
       .prompt("请输入年龄") //输入框
       .then((value)=>{//回调函数
         console.log(value); //输入数值
       }).catch(err=>{ //取消函数
         console.log(err)//取消
       });
     },
     openConfirm(){
       //功能:显示确认消息框
      this.$messagebox
      .confirm("是否删除指定数据")//消息内容
      .then(action=>{//用户选择确认回调函数
         console.log("确认")
      })
      .catch(err=>{//用户选择取消回调函数
         console.log("取消")
      })
     },
     openAlert(){
       //交互提示框
       //1:标准方式显示提示框
       //this.$messagebox({
       //  title:"消息",           //标题
       //  message:"执行操作成功"   //内容
       //});
       //
       //简写               标题 内容
       this.$messagebox("","执行成功");
     },
     openToast(){
      //console.log(123); 
      //功能:此函数完成显示mint-ui短消息
      //提示框
      this.$toast({
      message:"操作成功", //提示文字
      position:"top",    //提示文字位置顶端
      duration:5000,      //持续时间5秒
      //使用字体名称       图标名称(首页)
      iconClass:"iconfont icon-home"
      });
     }
   }
}
</script>
<style>
 /*当前组件专有样式内容*/
</style>

