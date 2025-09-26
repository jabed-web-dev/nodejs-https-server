import https from 'node:https';
import fs from 'node:fs';

const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem'),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Secure World!\n');
});

const PORT = 443;
const HOST = 'node.app.dev';

server.listen(PORT, HOST, () => {
  console.log(`Server running at https://${HOST}:${PORT}`);
});
