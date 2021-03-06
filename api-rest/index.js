const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err ,res) => {
    if (err) {
        return console.log(`Error al conectar a la bbdd: ${err}`);
    }
    console.log('Conexion a la bbdd establecida');

    app.listen(config.port, () => {
        console.log(`API REST funcionando en http://localhost:${config.port}`)
    })
})