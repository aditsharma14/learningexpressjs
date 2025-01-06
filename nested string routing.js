import express from "express";
const app=express();
app.get("/products/iphone",(rep,res)=>{
    res.send("this will only work when we have given /products/iphone");
});
app.listen(8000,()=>console.log("nice to go"));