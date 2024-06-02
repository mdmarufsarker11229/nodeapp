const express=require('express');
const app=express();
const cors=require('cors');
const userrouter=require("./routes/routes")
require("./config/db");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use("/api/",userrouter);



app.get("/",(req,res)=>{

    res.status(200).sendFile(__dirname+"/views/index.html");

})








// route not found 
app.use("*",(req,res)=>{
    res.status(404).send("<h1>404    url not found </h1>");
})

// // handle server error 
// app.use((err,req,res,next)=>{
//     res.status(500).send("<h1>something broke</h1>")
// })




module.exports=app;
