import Vue from 'vue'
import App from './App.vue'
import router from './router'


//引入第三方组件库 mint ui
//1:完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//2:单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui注册vue实例中
Vue.use(MintUI)
//4:将字体图标引入到当前项目中
import "./font/iconfont.css"
//5:引入axios第三方ajax模块
import axios from "axios"
//6:配置axios基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//7：配置axios保存session信息(用于判断状态)
axios.defaults.withCredentials=true
//8：将axios注册vue实列中   因为axios不支持使用USE进行注册，所以用原型对象赋值的方式进行注册添加
Vue.prototype.axios=axios;
//引入Vuex第三方模块
import Vuex from "vuex"
//引入后创建Vuex存储实列对象
//注册Vuex
Vue.use(Vuex)
//先注册再将实类对象添加到Vue中
var store=new Vuex.Store({
  state:{cartCount:0},//共享数据
  mutations:{
    increment(state){//购物车数量+1
      state.cartCount++;
    },
    clear(state){//清空购物车
      state.cartCount=0;
    }
  },//添加修改数据函数
  getters:{
    getCartCount(state){
      return state.cartCount;
    }
  },//添加获取共享数据函数
  actions:{
    modifyCount(context){
      //等待500毫秒再调用clear函数
      setTimeout(()=>{
        
      },500)
  }
  }//添加异步操作数据的函数
  //某些用户需要不是立即执行的操作，需要进异步操作；那么可以用异步进行解决，等待数据加载成功后
  //比如;context上下文对象=>$store对象
 
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store//将Vuex实类对象添加到Vue中
}).$mount('#app')
