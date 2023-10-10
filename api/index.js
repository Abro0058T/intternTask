const express=require("express")
const app=express();

const route=require("../Routes/route")

app.use("/api",route)


module.exports=app;