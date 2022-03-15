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


var user_id = '622fe95cce65db3482fd3fd1';
product.findByIdAndUpdate(user_id, { name: 'MacbookPro 15 2022' }, {new: true},
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});


mongoose.connect('mongodb://localhost:27017/shop', (err ,res) => {
    if (err) {
        return console.log(`Error al conectar a la bbdd: ${err}`);
    }
    console.log('Conexion a la bbdd establecida');

    app.listen(port, () => {
        console.log(`API REST funcionando en http://localhost:${port}`)
    })

})