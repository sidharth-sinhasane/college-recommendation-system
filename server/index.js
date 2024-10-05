const express=require("express")
const app=express()


app.get("/",function(req,res){
    res.sendFile(__dirname+"/../client/index.html")
})
app.post("/login",function(req,res){

})

app.listen(3000)