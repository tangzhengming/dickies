const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.get("/",(req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
        });
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno){ pno=0 };
    if(!pageSize){ pageSize=12 }
    var sql="SELECT id,uid,title,price,small_url,big_url FROM details LIMIT ?,?"
    var offset=pno*pageSize;
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    })
})
router.get("/index",(req,res)=>{
	res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
        });
    var id=req.query.id;
    var sql="SELECT * FROM details WHERE id=?"
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    })
})
module.exports=router;