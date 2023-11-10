const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, "public")))
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}));

let posts = [
    {
        id: uuidv4(),
        username : "vignesh",
        content : "hey am vignesh dsffdsafafs",
    },
    {
        id:uuidv4(),
        username : "vignesh",
        content : "hey am vignesh",
    }
    ,    {
        id:uuidv4(),
        username : "vignesh",
        content : "hey am vignesh",
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
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/");

})


app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("post",{post});
})


app.delete("/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/");
})


app.get("/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit",{post});
})

app.patch("/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    console.log(id);
    post.content = newContent
    res.render("/");
})