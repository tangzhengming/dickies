const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.post('/',(req,res)=>{
    console.log(1111);
    res.send("56151")
})
module.exports=router;