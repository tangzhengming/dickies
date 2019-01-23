const pool=require("../pool.js");
const express=require('express');
var router=express.Router();
router.get("/",(req,res)=>{
   
    res.send();
    console.log(200)
})
//导出路由器
module.exports=router;