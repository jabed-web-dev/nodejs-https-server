const https = require('https')
const fs = require('fs')

const options = {
    key: fs.readFileSync('cert/key.pem'),
    cert: fs.readFileSync('cert/cert.pem')
}

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('<h1>Hello World!</h1>');
}
// port: http = 80 | https = 443
const server = https.createServer(options, requestListener);
server.listen(5050, () => {
    console.log('Server listening on 5050');
});
