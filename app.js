const express =require("express");

const app = express();

const PORT =3000;

app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));



app.get("/",(req,res)=>{
    const title ="Главная страница";
        res.render(__dirname + "/views/index.ejs",{title:title});

});

app.get("/about",(req,res)=>{
    const title ="О приложении";
        res.render(__dirname + "/views/about.ejs",{title:title});
});

app.get("/contacts",(req,res)=>{
    const title ="Страница контактов";
 const data = ['email: ducha2112@yandex.ru','tel.: +7 (985) 922-89-70','telegram: @ducha2112' ]
        res.render(__dirname + "/views/contacts.ejs",{title:title,data:data});
     
});

app.listen(PORT,'localhost',()=>{

	console.log("Listening PORT 3000");

});

