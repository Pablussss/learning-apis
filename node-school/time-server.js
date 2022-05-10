const moment = require('moment');
const net = require('net');
const port = process.argv[2];
const server = net.createServer((socket) => {
    const day = moment().format("YYYY-MM-DD hh:mm")
    socket.write(day)
    socket.write("\n")
    socket.end()
})

server.listen(port)


