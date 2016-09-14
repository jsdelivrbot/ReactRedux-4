var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var data = {}
console.log(__dirname)
express()
    .use(express.static(path.resolve(__dirname + '/../build')))
    .use(bodyParser.json())

    .get('api/data', (req, res) => res.json(data))
    .post('api/data', (req, res) => res.json(data = req.body))
    .get('*', (req, res) => res.sendFile(path.resolve(__dirname + '/../build/index.html')))
    .listen(3333)