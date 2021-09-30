const https = require('https')
const fs = require('fs')

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('<h1>Hello World!</h1>');
}

const server = https.createServer(options, requestListener);
server.listen(5050, () => {
    console.log('Server listening on 5050');
});