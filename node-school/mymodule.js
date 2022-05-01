const fs = require('fs');

module.exports = function (basename, extension, callback) {

    fs.readdir(basename, function (err, data) {
    if (err) {return callback(err);}
    
    const list = [];
    for (let i = 0; i < data.length; i++) {
        let newData = data[i].split('.')
            if (newData[1] === extension) {
                list.push(newData.join('.'));
            } 
    }

    callback(null, list);
    })
}
