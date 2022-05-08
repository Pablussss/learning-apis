const http = require('http');

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

http.get(url1, url2, url3, (req) => {
    req.setEncoding('utf8')
    req.on('data', (data) => {
        console.log(data)
    }
})