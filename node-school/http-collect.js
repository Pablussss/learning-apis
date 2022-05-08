const http = require('http');
const url = process.argv[2]
const bl = require('bl');

http.get(url, (req) => {
    let caract = 0;
    req.setEncoding('utf8')
    req.on('data', (data) => {
        for (let i=0; i<data.length; i++) {
            caract ++;
        }
    })
    req.pipe(bl ((err, data) => {
        if (err) return err;
        
        console.log(caract)
        console.log(data.toString())
    }))
})