/**/
require('./server.js').listen(process.env.PORT || 80);


/*
var server = require('./server.js');
var https = require('https');
var fs = require('fs');

https.createServer({
    key: fs.readFileSync('ssl-key.pem'),
    cert: fs.readFileSync('ssl-cert.pem')
}, server).listen(process.env.PORT || 80);
*/