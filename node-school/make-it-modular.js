const mymodule = require('./mymodule');

const basename = process.argv[2];
const extension = process.argv[3];


mymodule(basename, extension, function (err,data) {
    if (err) console.error(err);

    data.forEach(function (file) {
        console.log(file);
    })
    
});