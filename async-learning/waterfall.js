const http = require('http');
const fs = require('fs');

const path = process.argv[2];

function handleFile (err, file) {
  if (err) return console.log(err);

  http.get(file, (req) => {
    req.setEncoding('utf8')
    req.on('data', (data) => {
        console.log(data)
    })
  })
}

fs.readFile(path, "utf8", handleFile);