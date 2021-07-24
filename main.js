const express = require('express');
const { request } = require('http');
const path = require('path');
const logger = require('./logger/logger');
const app = express();



const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(logger);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
app.post('/url', function(req, res) {
    request.post({url:'https://api.ttr3.tk/api/url/shorten', 'longUrl':params}, function(err,httpResponse,body){
    var resBody = JSON.parse(body)
    console.log(resBody);
})
});