<template>
    <div class="app-login">
        <mt-field :placeholder="unameholder" v-model="uname" label="账号"></mt-field>
        <mt-field :placeholder="upwdholder" v-model="upwd" type="password" label="密码"></mt-field>
        <mt-button size="large" type="primary" @click="login">登录</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            unameholder:"请输入用户名",
            upwdholder:"请输入密码",
            uname:"",
            upwd:""
        }
    },
    methods: {
        login(){
            //console.log("123");
            var u=this.uname;
            var p=this.upwd;
            var reg=/^[a-z0-9]{3,12}$/i;
            if(!reg.test(u)){
                this.$toast("输入的用户名格式有误");
                return;
            };
            if(!reg.test(p)){
                this.$toast("输入的密码格式有误");
                return;
            }
            var url="login";
            var obj={uname:u,upwd:p}
            this.axios.get(url,{params:obj}).then
            (res=>{
              if(res.data.code==-1){
                  this.$toast({ message:"您输入的账号和密码有误，请重新输入!",position:'top'});
              } else{
                  this.$router.push('/product');//调用vue跳转网页组件进行网页跳转
              }
            })
        }
    },
}
</script>
<style>

</style>
