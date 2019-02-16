const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.post('/',(req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
        });
    var sql="select * from usename where email=? and upwd=?"
    pool.query(sql,[req.body.email,req.body.upwd],(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    })
})
module.exports=router;