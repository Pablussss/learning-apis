const express = require('express');
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const api = express.Router();
const auth = require('../middlewares/auth')

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

// Registro usuario
api.post('/signup', userCtrl.signUp)
//Login usuario
api.post('/login', userCtrl.signIn)

// Privado
api.get('/private', auth, (req, res) => {
    res.status(200).send( { message: 'Acceso concedido' })
})

module.exports = api;