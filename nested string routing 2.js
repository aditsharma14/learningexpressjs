import express from "express";
const app=express();
app.get("/products/product/product-details",(res,rep)=>{
    rep.send("/products/product/product-details");
})
app.listen(3000,()=>console.log("hello"));