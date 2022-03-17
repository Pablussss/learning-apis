const express = require('express');
const api = express.Router();
const productCtrl = require('../controllers/product')

//Simulacion api ecommerce
api.get('/product' , productCtrl.getProducts)
// Consultar producto por ID
api.get('/product/:productId', productCtrl.getProduct)
// Crear
api.post('/product', productCtrl.saveProduct)
//Actualizar
api.put('/product/:productId', productCtrl.updateProduct)
// Eliminar 
api.delete('/product/:productId', productCtrl.deleteProduct)


module.exports = api;