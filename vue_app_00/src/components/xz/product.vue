<template>
    <div class="product-app">
        <!-- 访问路径/product -->
        <!-- 创建成功时就发aJAX请求 -->
       <div class="
       goods-item" v-for="(item,i) of list" :key="i">
       <img :src="`http://127.0.0.1:3000/${item.img_url}`" alt="" style="width:168px">
       <h4 v-html="item.lname"></h4>
       <div class="info" v-html="`￥${item.price}`">
       </div>
       <mt-button  type="primary" size="large" @click="addCart" :data-lid="item.lid" :data-price="item.price" :data-lname="item.lname" :data-img_url="item.img_url">预约陪玩</mt-button>
       </div>
       <mt-button type="primary" size="large" @click="loadMore">加载更多</mt-button>
       <mt-button @click="jumpCart" class="cart" type="danger">查看购物车</mt-button>

    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],//商品列表数组
            pno:0,//页码(第几页)
            
        }
    },
    methods: {
        jumpCart(){
            this.$router.push("/cart");//跳转到购物车函数
        },
        addCart(e){
            //console.log("点击测试");
            //console.log(e.target.dataset.lid);事件对象，获取子定义属性值
            var lid=e.target.dataset.lid;
            var price=e.target.dataset.price;
            var lname=e.target.dataset.lname;
            var img=e.target.dataset.img_url;
            //console.log(lid,price,lname);
            var url="addcart";
            var obj={lid:lid,lname:lname,price:price,img:img};//将参数封装到对象中
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==-1){
                  this.$toast({message:"购物车添加失败,您未登陆,请登陆您的账号!"});
              } else{
                  this.$toast('宝贝添加到购物车成功');
              }
            })
        },
        loadMore(){
            //用于在created生命周期调用此函数，这个函数进行设置，目的为了获取分页数据
            //返回结果要进行保存，重点内容
            var url="product";
            this.pno++;//每次调用都页码加1
            var obj={pno:this.pno};
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res.data.data);
                //1页。concat(2页)
                //this.list=res.data.data;//将响应回来的值保存到data当中
                var rows=this.list.concat(res.data.data);//用于数组拼接，这样就可以加载时显示多产品
                this.list=rows;
            })
        }
    },
    created() {
        this.loadMore();
        console.log({code:1,msg:"组件创建成功"});
    },
}
</script>
<style scoped>
    /*最外层布局*/
    .product-app{
        display: flex;/*移动端首选弹性布局*/
        flex-wrap: wrap;/*指定子元素换行*/
        /*指定子元素两端对齐*/
        justify-content: space-between;
        /*商品之间有间距*/
        padding: 4px;
    }
    /*修饰商品样式*/
    .goods-item{
        width: 49% !important;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 2px 0;
        padding:2px;
        box-sizing: border-box;/*盒子模型*/
        display: flex;/*弹性*/
        flex-direction: column;/*指定子元素进行列排列*/
        min-height: 247px;/*设置最小高度*/

    }
    .goods-item>img{
        width: 100% !important;
        border-radius: 5px;
    }
    .info{
        text-align: center;
        
    }
    .goods-item>h4{
       text-align: center; 
    }
    button.cart{
        position: fixed; 
        bottom: 47%;
    }
    
    /*修饰商品中国的样式*/
</style>
