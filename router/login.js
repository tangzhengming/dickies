const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.post('/',(req,res)=>{
    console.log(100)
    var sql="select * from usename where email=? and upwd=?"
    pool.query(sql,[req.body.email,req.body.upwd],(err,result)=>{
        console.log(300)
        if(err) throw err;
        res.send(result)
    })
})
module.exports=router;