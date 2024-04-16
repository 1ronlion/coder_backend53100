import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

//middlewares
app.use(express.json());

//settings
app.engine('handlebars',handlebars.engine());
app.set('views','./src/views');
app.set('view engine','handlebars');


app.use(express.static('./src/public'))
//Usuarios en memoria
const users = [];


//view routes
app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.get('/login',(req,res)=>{
    res.render('login')
})

//api routes
app.post('/api/register',(req,res)=>{
    const {name,email,password} = req.body;
    const exists = users.find(user=>user.email===email);
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});
   
    //Creamos el usuario

   
    res.send({status:"success",access_token});

})

app.post('/api/login',(req,res)=>{
    const {email,password} = req.body;
    const user = users.find(user=>user.email===email && user.password === password);
    console.log(user);
    if(!user) return res.status(400).send({status:"error",error:"Invalid credentials"});
   //logica a implemetar

})

app.get('/api/current',(req,res)=>{
    res.send({status:"success",payload:req.user})
})

//Listeners
app.listen(5000, () => console.log("Listening on 5000"));