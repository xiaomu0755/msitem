//设置美食杰web服务器
//node.js语言，引入express第三方框架；命令为npm install express;会自动保存在node_modules文件夹中;
//web服务器
const express=require("express");
//跨域
const cors=require("cors");
//session配置
const session = require("express-session");
//进行post请求body中间件引入
const bodyParser = require("body-parser");
//引入数据库连接池
const pool=require('./pool.js');
//设置服务器变量
var server=express();
//使用body-parser中间件
server.use(bodyParser.urlencoded({extended:false}));
//跨域基本设置
server.use(cors({
    //允许跨域访问程序地址列表
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true //请求验证
 }))
 //4:配置session模块
 server.use(session({
   secret:"128位字符串 ",//字符串属性，进行加密，加密字符串,可以随便写
   resave:true,//每次用户发出请求都要更新数据
   saveUninitialized:true//保存初始化数据
 
 }))
 //启动监听
 server.listen(3000);
/*
************************************************************************************请求代码编写区
*/
server.get("/product",(req,res)=>{
    var p=req.query.pno;
    var ps=req.query.pageSize;//模拟查询1、4
    if(!p){p=1};//默认第一页
    if(!ps){ps=4};
    //sql页码公式
    var offset=(p-1)*ps;
    ps=parseInt(ps);
    var sql="select lid,price,lname";
    sql+=",img_url from xz_laptop";
    sql+=" limit ?,?";
    //连接池进行发送sql语句
    pool.query(sql,[offset,ps],(err,result)=>{
      if(err)throw err;
      //返回结果验证
      if(result.length!=0){
        res.send({code:1,msg:"查询成功",data:result});
      }
    });
  })



/*
************************************************************************************请求代码编写区
*/
 //进行public文件配置
 server.use(express.static("public"));
 console.log("服务器启动成功");