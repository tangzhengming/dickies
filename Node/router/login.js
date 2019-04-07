const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.post('/',(req,res)=>{
    var email=req.body.email;
    var upwd=req.body.upwd;
    res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
        });
    var sql="select * from usename where email=? and upwd=?"
    pool.query(sql,[email,upwd],(err,result)=>{
    	if(err) throw err;
    	if(result == ""){
    		res.write(JSON.stringify(""));
        	res.end();
    	}else{
        var uid=result[0].uid
        req.session.uid=uid;
        res.write(JSON.stringify(result));
        res.end();
       }
    })

})
module.exports=router;