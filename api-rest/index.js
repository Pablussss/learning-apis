const mongoose = require('mongoose');
const app = require('./app')
const port = process.env.PORT || 3001;


mongoose.connect('mongodb://localhost:27017/shop', (err ,res) => {
    if (err) {
        return console.log(`Error al conectar a la bbdd: ${err}`);
    }
    console.log('Conexion a la bbdd establecida');

    app.listen(port, () => {
        console.log(`API REST funcionando en http://localhost:${port}`)
    })
})