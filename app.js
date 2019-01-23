const express=require("express");
const bodyParser=require("body-parser");
const user=require('./router/user.js');
//创建web服务器
var server=express();
server.listen(3001);
//托管静态资源
server.use(express.static("dickies"));
//使用body-parser中间件将post请求数据解析为对象
server.use(bodyParser.urlencoded({
    extended:false
}));
server.use('/user',user);
//127.0.0.1:3000/user