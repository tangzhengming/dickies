const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.get("/",(req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
        });
    var sql="SELECT * FROM Main";
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.write(JSON.stringify(result))
        res.end();
    })
})
module.exports=router;