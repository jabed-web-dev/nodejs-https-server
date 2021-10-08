# nodejs-https-server
Enable https in localhost with OpenSSL for a NodeJS server

### Commands to generate certificate with OpenSSL
```cmd
mkdir cert
cd cert
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

**run server:** `npm start`

**Type in Browser:** `thisisunsafe`\
&emsp; &emsp; **_or_**\
chrome://flags\
edge://flags\
    search flags: allow invalid certificates    (Enabled)
    
