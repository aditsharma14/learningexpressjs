import express from "express";
const app=express();
//using regex /x/ will only show the output when q is there for eg localhost:8000/helloq
app.get(/q/,(req,res)=>{
    res.send("this will only we working when letter q is included");
});
app.listen(8000,()=>console.log("server up"));