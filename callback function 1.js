import express from "express";
const app=express();
app.get("/single-cb",(req,res,next)=>{
    console.log("first callback");
    next();
},
(req,res)=>
res.send("second callback"));
app.listen(8000,()=>console.log("server up"));
