const pool=require("../pool.js");
const express=require('express');
var router=express.Router();
router.get("/",(req,res)=>{//127.0.0.1:3001/user/
    
    res.send();//把数据发到前端
    console.log(200)
})
//导出路由器
module.exports=router;