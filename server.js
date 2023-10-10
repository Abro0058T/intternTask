const app= require("./api/index.js")

const PORT=process.env.PORT||8000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("Server is listening to port :800")
})

