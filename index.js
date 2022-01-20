const express=require('express');
const path=require('path');
const timer = require("./middleware/timer");
//initialisation

const app = express();
app.use(timer);
app.use(express.static(path.join(__dirname, 'pages')));

//Home

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'pages','Home.html'))
})

//Contact

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','Contact.html'))
})

//Service

app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','Services.html'))

})

app.listen(5000,(err)=>
{
    err?console.log(err):
    console.log('server is running')
})