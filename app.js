const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const User = require ('./src/schemas/User');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itmaster_ecommerce', {useNewUrlParser: true, useUnifiedTopology: true});
const authRouter = require ('./src/routes/auth.js')
const categoriesRouter = require ('./src/routes/categories.js')
const phonesRouter = require ('./src/routes/phones')
const Product = require ('./src/schemas/product')
const cors = require ('cors')



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/auth', authRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/phones', phonesRouter)


//req de request y res de response
app.get('/', function (req, res) {

    res.send('bien venido a backend')
})


app.get ('/products', function (req,res){

    //listado de productos
})



app.get ('/products/create', function (req,res){

    //mostrar formulario de alta de prodcuctos
    res.sendFile(__dirname + '/src/views/products-create.html')
})

app.post ('/products', function (req,res){

    //recibir datos del formulario
    //guardar en la base de datos
    
let schema  = new Product(req.body)

schema.save().then(()=> {
    
    res.status(201).send({message:'Created'})

}).catch(err =>{
    console.log(err)
    res.status(422).send ({message : "error"})

})

})
app.listen(4000)
