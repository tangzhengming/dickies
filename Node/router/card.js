const express = require("express");
const pool = require("../pool.js");
var router = express.Router();
router.get("/",(req,res)=>{
	res.writeHead(200,{
        "Access-Control-Allow-Origin":"*"
      });
        var uid =req.session.uid;
        if(uid == undefined){
        	res.write(JSON.stringify({code:0,msg:"未登录请先登录"}));
        	res.end();
        	return;
        }
      var id = req.query.id;
  	  var count = parseInt(req.query.count);
	  var price = parseInt(req.query.price);
	  var img = req.query.img;
	  var title = req.query.title;
	  var color = req.query.color;
		var size = req.query.size;
	  var sql1 =" SELECT * FROM card";
				sql1 += " WHERE uid = ? AND id = ? AND color = ? AND size = ?";
	  pool.query(sql1,[uid,id,color,size],(err,result)=>{
	    if(err)throw err; 
	    if(result.length==0){
	     var sql2 = " INSERT INTO card(pid,id,uid,price,title,count,color,size,img)";
			 sql2 +=" VALUES (null,?,?,?,?,?,?,?,?) ";
			 pool.query(sql2,[id,uid,price,title,count,color,size,img],(err,result)=>{
	      if(err)throw err;
	      if(result.affectedRows > 0){
	        res.write(JSON.stringify({code:1,msg:"添加成功"}));
	        res.end();
	      }else{
	        res.write(JSON.stringify({code:-1,msg:"失败"}));
	        res.end();
	      }
	    })
	    }else{
	      var sql3 ="  UPDATE card ";
	      sql3 +=" SET count=count+? WHERE id = ? ";
				sql3 +=" AND uid = ? AND color = ? AND size = ? ";
				pool.query(sql3,[count,id,uid,color,size],(err,result)=>{
					if(err)throw err;
					if(result.affectedRows > 0){
						res.write(JSON.stringify({code:1,msg:"添加成功"}));
						res.end();
					}else{
						res.write(JSON.stringify({code:-1,msg:"失败"}));
						res.end();
					}
				})
	    }
	  })
})
router.get("/details",(req,res)=>{
	var uid = req.session.uid;
	if(uid == undefined){
		res.write(JSON.stringify(""))
		res.end()
		return;
	}
	var sql = "SELECT * FROM card";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.write(JSON.stringify(result))
		res.end()
	})
})
router.get("/remove",(req,res)=>{
	var pid = req.query.pid;
	var sql = "DELETE FROM card WHERE pid=?"
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		res.write(JSON.stringify({code:1,msg:"删除成功"}));
		res.end();
	})
})
module.exports=router;