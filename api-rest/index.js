'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');
const product = require('./models/product');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// req = peticion
// res = respuesta.
app.get('/hola/:name', (req,res) =>{
    res.send({ message: `Hello ${req.params.name}!`})
})

//Simulacion api ecommerce
app.get('/api/product' , (req,res) => {
    Product.find({}, (err,products) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion ${err.message}`})
        if (!products) return res.status(404).send({message: `No existen productos`})

        res.status(200).send({ products })
    })
})

// Consultar producto por ID
app.get('/api/product/:productId', (req,res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!product) return res.status(404).send({message: `El producto ${product} no existe`})

        res.status(200).send({ product: product })
    })
})

// Crear nuevo producto
app.post('/api/product', (req,res) => {
    console.log('POST /api/product')
    console.log(req.body);

    let product = new Product();
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la BBDD: ${err}`})

        res.status(200).send({product: productStored})
    })
})

app.put('/api/products/:productId', (req, res) => {
    let productId = req.params.productId;
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar ${err}`})
        res.status(200).send({ product: productUpdated })
    })
})

// Eliminar objeto
app.delete('/api/product/:productId', (req,res) => {
    let productId = req.params.productId;

    Product.findByIdAndDelete(productId, (err) => {
        if (err) res.status(500).send({message: `Error al eliminar el producto: ${err}`})
        res.status(200).send({message: `Producto eliminado con exito`})
       
    })
})


mongoose.connect('mongodb://localhost:27017/shop', (err ,res) => {
    if (err) {
        return console.log(`Error al conectar a la bbdd: ${err}`);
    }
    console.log('Conexion a la bbdd establecida');

    app.listen(port, () => {
        console.log(`API REST funcionando en http://localhost:${port}`)
    })

})