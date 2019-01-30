const express=require('express');
const pool=require("../pool.js");
var router=express.Router();
router.post("/",(req,res)=>{//127.0.0.1:3001/user/
   /* res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
    })*/
    var sql="select * from usename where uname=?"
    pool.query(sql,[req.body.uname],(err,result)=>{
        if(err) throw err
        if(result.length>0){
            res.send("该账号已经被注册");
        }else{
            var sqlin="INSERT INTO usename VALUES (NULL,?,?,?,?,?,NULL)"
            pool.query(sqlin,[req.body.uname,req.body.semail,req.body.spuwd,req.body.phone,req.body.sex],(err,result2)=>{
                console.log(req.body.uname,req.body.semail,req.body.spuwd,req.body.phone)
                console.log(result2)
                if(result2.affectedRows>0){
                    res.send("注册成功")
                }else{
                    res.send("注册失败")
                }
            })

        }
    })

    
})
//导出路由器
module.exports=router;