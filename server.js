const express= require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();
//db config

const db=require('./config/keys').mongoURI;
const {router:product}=require('./routes/api/create');

mongoose
    .connect(db,{useNewUrlParser: true})
    .then(()=>{
        console.log(`Db connected successfully.`);
    }).catch(err=>console.log(`Error occured at Db connect ${err}`));

const PORT= process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/product',product);

app.listen(PORT,()=>{console.log('App started on Port: ', PORT)});