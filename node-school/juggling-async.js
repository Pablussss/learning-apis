const http = require('http');
const bl = require('bl');

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

function getData (url) {
    http.get(url, (req) => {
        req.setEncoding('utf8')
        req.pipe(bl ((err, data) => {
            if (err) return err;
            console.log(data.toString())
        }))
    })
}

function printData () {
    let urlQuantity = process.argv.length - 2;
    return new Promise(resolve => {
        for (let i = 0; i < urlQuantity; i++) {
            getData(process.argv[i + 2])
        }
    })
}
printData()