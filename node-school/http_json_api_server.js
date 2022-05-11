const express = require('express');
const app = express();
const moment = require('moment');

const port = process.argv[2];

const ISO = {
    "hour": Number,
    "minute": Number,
    "second": Number
}

const UNIX = {
    "unixtime": Number
}

function parseTime (iso) {
    let hour = moment(iso).hour()
    let minute = moment(iso).minute()
    let second = moment(iso).second()
    ISO.hour = hour;
    ISO.minute = minute;
    ISO.second = second;
}

app.get('/api/parsetime', (req, res) => {
    let iso = req.query.iso;
    parseTime(iso)
    res.status(200).send(ISO)
})

app.get('/api/unixtime', (req, res) => {
    let iso = req.query.iso;
    let parsed = moment(iso).valueOf();
    UNIX.unixtime = parsed
    console.log(parsed)
    res.status(200).send(UNIX)
})

app.listen(port)
