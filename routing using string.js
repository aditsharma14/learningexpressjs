import express from "express";
const app=express();
//using string path /fd?er then this will only work when the user contains fer or fder or fder
app.get("/ab?qe",(req,res)=>{
    res.send("working");
});
app.listen(8000,()=>console.log("good to go"));