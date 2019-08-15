 <!--模板:html标签-->
<template>
  <!--div根元素-->
  <div>
    <h1>Exam02.vue</h1>
    <!--调用mint-ui 输入框-->    
    <mt-field label="用户名" 
    placeholder="请输入用户名"
    v-model="uname" :attr="{maxlength:10}">
    </mt-field>
    <!--密码输入框-->
    <mt-field
    label="密码"
    placeholder="请输入密码"
    type="password"
    v-model="upwd">
    </mt-field> 
    <!--年龄输入框-->
    <mt-field
    label="年龄"
    placeholder="请输入年龄"
    type="number"
    v-model="uage">
    </mt-field> 
    <!--注册按钮--> 
    <mt-button size="large" @click="reg">用户注册</mt-button>
  </div>
</template>
<script>
export default {
  data(){      //组件中共享数据
    return {
      uname:"", //双向绑定用户名
      upwd:"",  //双向绑定密码
      uage:""   //双向绑定年龄
    } 
  }
  ,methods:{
    reg(){
      //功能:对表单中每个元素验证
      //验证规则
      //1:创建验证所需正则表达式 用户名/密码
      var ureg = /^[a-z0-9]{3,8}$/i;
      //2:创建验证所有正则表达式 年龄
      var areg = /^[0-9]{2}$/;
      //验证谁
      //3:获取用户名
      var u = this.uname;
      //4:获取密码
      var p = this.upwd;
      //5:获取年龄
      var a = this.uage;

      //验证
      //6:通过正则表达式验证用户名
      if(!ureg.test(u)){
       //7:出错显示交互提示消息
       this.$messagebox("消息","用户名格式不正确");
       //8:程序停止
       return;
      }
      //9:通过正则表达式验证密码
      //10:出错显示交互提示消息
      //11:程序停止
      //12:通过正则表达式验证年龄
      //13:出错显示交互提示消息
      //14:程序停止
      //15:输出验证成功
    }
  }
}
</script>
<style>
</style>


