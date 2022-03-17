const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken (user) {
    const payload = {
        sub: user._id,
        // crea el token al momento
        iat: moment().unix(),
        // caduca en 14 dias
        exp: moment().add(14, 'days').unix(),
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

module.exports = createToken;