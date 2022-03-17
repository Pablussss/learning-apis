const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productCtrl = require('./controllers/product')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// req = peticion
// res = respuesta.

//Simulacion api ecommerce
app.get('/api/product' , productCtrl.getProducts)
// Consultar producto por ID
app.get('/api/product/:productId', productCtrl.getProduct)
// Crear
app.post('/api/product', productCtrl.saveProduct)
//Actualizar
app.put('/api/product/:productId', productCtrl.updateProduct)
// Eliminar 
app.delete('/api/product/:productId', productCtrl.deleteProduct)

module.exports = app;