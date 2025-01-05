import express from "express";
const app=express();
//this will work with users and 4 digits for eg /users/2345
app.get(/^\/users\/[0-9]{4}$/,(req,res)=>{
    res.send("working");
});
app.listen(8000,()=>console.log("good to go"));