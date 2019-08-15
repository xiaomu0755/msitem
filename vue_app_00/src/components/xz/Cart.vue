<template>
    <div class="cart">
        <!-- <h4>购物车列表</h4> -->
        <div class="selectAll">
            全选<input type="checkbox" @change="selectAll">
        </div>
        <!-- 购物车商品信息 -->
        <div class="cart-item" v-for="(item,i) of list" :key="i"> 
            <div class="leftImgText" >
                <input type="checkbox" v-model="item.cb">
                <!-- 每个复选框都有个状态 -->
                <img :src="`http://127.0.0.1:3000/${item.img_url}`" alt="">
                <div class="lname" v-html="item.lname"></div>
                <div class="price" v-html="`￥${item.price}`"></div>
                <div v-html="item.count"></div>
            </div>
            <mt-button class="car-item-list-delete" @click="delItem" :data-id="item.id">
                删除
            </mt-button>
        </div>
        <!-- 删除商部分 -->
        <div>
            购物车数量:<span>{{$store.getters.getCartCount}}</span>
            <mt-button @click="delMitem">
                删除选中商品
            </mt-button>
            小计:<span></span>
        </div>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],

        }
    },
    methods: {
        selectAll(e){
            var cb=e.target.checked;
            console.log(cb);
            for(var item of this.list){
                item.cb=cb;
            }
        },
        delMitem(){
            //删除多个购物车中的指定商品
            var str="";
            for(var item of this.list){
                if(item.cb){//现在状态为true;
                    str+=item.id+",";
                    //console.log(item.cb,str);//为2,1,  所以要去掉最后的,不是想要的
                }
            }
            //进行选中判断，没选中就进行提示，“请选择要删除的产品”
            if(str.length==0){
                this.$messagebox("请选中要删除的商品");
                return;//停止执行
            }
            str=str.substring(0,str.length-1);
            console.log(str);
            this.$messagebox.confirm("是否删除已选中商品")
            .then(res=>{
                var url="delM";
                var ids={ids:str};//把拼接的字符串赋值过来
                this.axios.get(url,{params:ids}).then(res=>{
                    this.$toast("删除成功");
                    this.loadMore();
                })
            })
            .catch(err=>{
                console.log(err);
            })

        },
        delItem(e){
            //获取购物车对应的id
            var id=e.target.dataset.id;
            console.log(id);
            //进行提示交互
            this.$messagebox.confirm("是否删除已选商品")
            .then(res=>{
                var url="del";
                var obj={id:id};
                this.axios.get(url,{params:obj}).then(
                    res=>{
                        if(res.data.code>0){
                            this.$toast("删除成功");//交互提示
                            //再刷新页面
                            this.loadMore();
                        }
                    }
                )
            })
            .catch(err=>{
                //取消，则什么都不做
            })
        },
        loadMore(){
            //加载购物车的数据，当组件创建成功后
            var url="cart"
            this.axios.get(url).then(res=>{
                if(res.data.code==-1){//没登陆进行，登陆提示，确定进行登录跳转
                    this.$messagebox("消息","请登陆账号").then(
                        res=>{
                            this.$router.push("/login");
                            return;//用于防止往后执行
                        }
                    )   
                } else{
                    var list=res.data.data;
                    //console.log(list);//查看下数据
                    //创建循环遍历数组被并且为每个元素添加cb属性，，再赋值给list,为数组的每个对象都添加子属性
                    //可以写入加载前先清空用Vuex函数
                     this.$store.commit("clear");
                    for(var item of list){//list[]
                        item.cb=false;
                        //利用Vuex修改购物车中的数量值
                        this.$store.commit("increment");
                    }
                    this.list=list;//保存数据
                    //console.log()
                }
            })
        }
    },
    created() {//生命周期的成功创建阶段调用一个函数
        this.loadMore();
    },
}
</script>
<style scoped>
/*商品项目元素*/
    .cart-item{
        display: flex;/*弹*/
        justify-content: space-between;
        align-items: center;/*垂直居中*/
        border-bottom: 1px solid #ccc;/*下边框颜色*/
        padding: 0px 5px 0px 5px;
    }
    /*.cart-item img{
        width: 50%;
    }*/
    .leftImgText{
        display: flex;/*子元素水平对齐*/
        align-items: center;
    }
    .leftImgText img{
        width: 50px;
    }
    .price{
       margin-left: 25px;
       color: #f00; 
       margin-right:10px; 
    }
    .car-item-list-delete{
        font-size: 10px;
        text-align: center;
    }
/*左侧图片与文字*/
/*单独修改*/
</style>
