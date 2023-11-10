const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view enginer","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));

let posts = [
    {
        id:1,
        username : "vignesh",
        content : "hey am vignesh",
        profile : ""
    },
    {
        id:2,
        username : "vignesh",
        content : "hey am vignesh",
        profile : ""
    }
    ,    {
        id:3,
        username : "vignesh",
        content : "hey am vignesh",
        profile : ""
    }
]


app.listen(port,()=>{
    console.log("listening to port 3000");
})


app.get("/",(req,res)=>{
    res.render("home.ejs",{posts});
})


app.get("/posts",(req,res)=>{
    res.render("form.ejs")
})


app.post("/posts",(req,res)=>{
    let {username,content,profile} = req.body;
    posts.push({username,content,profile});
    res.redirect("/");

})