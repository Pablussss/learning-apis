const http = require('http');
const url = process.argv[2]

http.get(url, (req) => {
    req.setEncoding('utf8')
    req.on('data', (data) => {
        console.log(data)
    })
})