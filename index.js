const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view enginer","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));




app.listen(port,()=>{
    console.log("listening to port 3000");
})


app.get("/",(req,res)=>{
    res.render("home.ejs");
})