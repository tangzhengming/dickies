const express = require("express");
const bodyParser = require("body-parser");
const user = require('./router/user.js');
const login = require('./router/login.js');
const shouye = require('./router/shouye.js');
const details = require('./router/details.js');
const card = require('./router/card.js');
const session=require("express-session");
//创建web服务器
var server=express();
server.listen(3001,function(){
    console.log("开启")
});
server.use(session({
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*120*120
    }
}))
//托管静态资源
server.use(express.static("../dickies"));
//使用body-parser中间件将post请求数据解析为对象
server.use(bodyParser.urlencoded({
    extended:false
}));
//路由托管
server.use('/zhuce',user);
server.use('/login',login);
server.use('/shouye',shouye);
server.use('/details',details);
server.use('/card',card);
//127.0.0.1:3000/zhuce