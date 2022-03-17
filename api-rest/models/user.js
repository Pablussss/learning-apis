const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')


const UserSchema = Schema({

})


module.exports = mongoose.model('User', UserSchema)