# nodejs-https-server
Enable https in localhost with OpenSSL for a NodeJS server

### Commands to generate a certificate with OpenSSL

`Get IPv4: ipconfig`\
`DNS:*.my-server.net`

```cmd
mkdir cert && cd cert
openssl genrsa -aes256 -out ca-key.pem 4096
openssl req -new -x509 -sha256 -days 999 -key ca-key.pem -out ca.pem -subj "/CN=NodeAppDevCA"
openssl genrsa -out key.pem 4096
openssl req -new -sha256 -subj "/CN=node.app.dev" -key key.pem -out cert.csr
echo "subjectAltName=DNS:node.app.dev,IP:127.0.0.1" >> extfile.cnf
openssl x509 -req -sha256 -days 999 -in cert.csr -CA ca.pem -CAkey ca-key.pem -out ca-cert.pem -extfile extfile.cnf -CAcreateserial
cat ca-cert.pem > cert.pem && cat ca.pem >> cert.pem
```

```cmd
Start-Process pwsh.exe "-NoLogo -NoProfile -Command `"Import-Certificate -FilePath ca.pem -CertStoreLocation Cert:\LocalMachine\Root`"" -Verb RunAs -Wait
rm.exe ca.pem ca.srl ca-cert.pem ca-key.pem cert.csr extfile.cnf
ls
cd ..
```

Files:\
    `cert/cert.pem`\
    `cert/key.pem`

**run server:** `npm start`

**Type in Browser:** `thisisunsafe`\
&emsp; &emsp; **_or_**\
chrome://flags\
edge://flags\
    search flags: webtransport-developer-mode (Enabled)
    
