const express=require('express');
const pool=require("../pool.js");
var router=express.Router();
router.post("/",(req,res)=>{//127.0.0.1:3001/user/
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
        });
    var sql="select * from usename where email=?"
    pool.query(sql,[req.body.email],(err,result)=>{
        if(err) throw err
        if(result.length>0){
            res.write(JSON.stringify("该账号已经被注册"));
            res.end()
        }else{
            var sqlin="INSERT INTO usename VALUES (NULL,?,?,?,?,?,NULL)"
            pool.query(sqlin,[req.body.uname,req.body.email,req.body.puwd,req.body.phone,req.body.sex],(err,result2)=>{
                if(result2.affectedRows>0){
                    res.write(JSON.stringify("注册成功"));
                    res.end()
                }else{
                    res.write(JSON.stringify("注册失败"));
                    res.end()
                }
            })

        }
    })

    
})
//导出路由器
module.exports=router;