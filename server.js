const express=require('express')
const app=express()
const path=require('path')
const session=require('express-session')
const{v4:uuidv4}=require('uuid')
const router =require('./router')
const nocache = require("nocache");

app.use(nocache());
const Port=process.env.PORT || 3001
app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// load static assets--------------------
app.use(express.static(path.join(__dirname, 'public')));

//session-------
app.use(session({
    secret:uuidv4(),
    resave:'false',
    saveUninitialized:true
}))
app.use('/',router)

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
})
