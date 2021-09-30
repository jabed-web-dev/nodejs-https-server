# nodejs-https-server
Enable https in localhost with OpenSSL for a NodeJS server

### Commands to generate certificate with OpenSSL
`openssl genrsa -out key.pem`\
`openssl req -new -key key.pem -out csr.pem`\
`openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem`\
`rm csr.pem`

**server run:** `npm start`

**Type in Browser:** `thisisunsafe`
    
chrome://flags\
    search flags: allow invalid certificates    (Enabled)
    
