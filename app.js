const express =require("express");

const app = express();

const PORT =3000;

app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));



app.get("/",(req,res)=>{
        res.render(__dirname + "/views/index.ejs");

});

app.get("/about",(req,res)=>{
        res.render(__dirname + "/views/about.ejs");
});

app.get("/contacts",(req,res)=>{
        res.render(__dirname + "/views/contacts.ejs");
});

app.listen(PORT,'localhost',()=>{

	console.log("Listening PORT 3000");

});

