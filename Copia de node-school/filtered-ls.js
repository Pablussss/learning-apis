const fs = require('fs');
const path = require('path');

const basename = process.argv[2];
const extension = basename.split('.')

fs.readdir(basename, "utf8", directory)

function directory (err, data) {
    if (err) return console.log(err);
    console.log(data)
}

// console.log(path.basename(basename))
// console.log(extension[1])