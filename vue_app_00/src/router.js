import Vue from 'vue'//必须项
import Router from 'vue-router'//必须项
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
/*
***************************************************************************************组件设置区
*/
import Index from "./components/a_meishijie/index.vue"//引入index组件


/*	***************************************************************************************
组件设置区
*/

/*
              原先实验代码
//#为Exam01.vue 组件指定访问路径
//1:在router.js 引入组件
import Exam01 from "./components/exam/Exam01.vue"
//2:为组件指定访问路径 /Exam01
import Exam02 from
"./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import ExamContainer04 from "./components/exam/ExamContainer04.vue"
import ExamContainer05 from "./components/exam/ExamContainer05.vue"
import ExamTabbar06 from "./components/exam/ExamTabbar06.vue"
import Fa08 from "./components/exam/Fa08.vue"
//微信消息列表组件
import Home3 from "./components/message/Home.vue"
import MessageList from "./components/message/common/MessageList.vue"
import XzLogin from "./components/xz/Login.vue"
import XzProduct from "./components/xz/product.vue"
import XzCart from "./components/xz/Cart.vue"
*/

Vue.use(Router)
export default new Router({
  routes: [
    //组件访问路径15    组件名  /MessageList
    /*{path:'/MessageList',component:MessageList},
    {path:'/Home3',component:Home3},
    {path:'/Fa08',component:Fa08},
    {path:'/ExamTabbar06',component:ExamTabbar06},
    {path:'/ExamContainer05',component:ExamContainer05},
    {path:'/ExamContainer04',component:ExamContainer04},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam02',component:Exam02},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
    {path:'/login',component:XzLogin},//引入学子登录模块。并且设置路径
    {path:'/product',component:XzProduct},//引入学产品模块。并且设置路径
    {path:'/cart',component:XzCart}//引入学子购物车模块。并且设置路径
	*/
	/*
	***************************************************************************************
	模块路径设置区
	*/
	{path:'/Home',component:Home},//设置原始页面
	{path:'/index',component:Index}
	
	/*
	***************************************************************************************
	模块路径设置区
	*/
  ]
})
