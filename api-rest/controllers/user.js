const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp (req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
    });

    user.save((err) => {
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err.message}`});

        return res.status(200).send({token: service.CreateToken(user)})
    })
}

function signIn (req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) res.status(500).send({message: `Error encontrando al usuario: ${user}` })
        if(!user) return res.status(404).send({ message: `No existe el usuario: ${user}` })
        
        req.user = user;
        res.status(200).send({ 
            message: `Te has logueado correctamente`,
            token: service.CreateToken(user)
        })
    })
}

module.exports = {
    signUp,
    signIn
}