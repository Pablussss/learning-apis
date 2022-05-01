const fs = require('fs');

const basename = process.argv[2];
const extension = process.argv[3];


fs.readdir(basename, "utf8", directory)

function directory (err, data) {
    if (err) return console.log(err);
    for (let i = 0; i < data.length; i++) {
        let newData = data[i].split('.')
        if (newData[1] === extension) {
        console.log(newData.join('.'));
        }
    }

}
