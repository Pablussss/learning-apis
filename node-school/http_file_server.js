const fs = require('fs')
const http = require('http')

const port = process.argv[2]
const path = process.argv[3]

const server = http.createServer((req, res) => {
    let readStream = fs.createReadStream(path)

    readStream.on('open', () => {
        readStream.pipe(res)
    })

    readStream.on('error', (err) => {
        res.end(err)
    })
})

server.listen(port, () => {
    console.log("Server running")
})