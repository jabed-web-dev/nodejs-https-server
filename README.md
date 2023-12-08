# nodejs-https-server
Enable https in localhost with OpenSSL for a NodeJS server

### Commands to generate certificate with OpenSSL

```cmd
mkdir cert && cd cert
```
```cmd
openssl genrsa -aes256 -out ca-key.pem 4096
```
```cmd
openssl req -new -x509 -sha256 -days 999 -key ca-key.pem -out ca.pem
```
```cmd
openssl genrsa -out key.pem 4096
```
`CN=localserver | nodeserver`
```cmd
openssl req -new -sha256 -subj "/CN=yourcn" -key key.pem -out cert.csr
```
`Get IPv4: ipconfig`

`DNS:*.my-server.net | node.app.dev`
```cmd
echo "subjectAltName=DNS:your-dns.record,IP:0.0.0.0" >> extfile.cnf
```
```cmd
openssl x509 -req -sha256 -days 999 -in cert.csr -CA ca.pem -CAkey ca-key.pem -out ca-cert.pem -extfile extfile.cnf -CAcreateserial
```
```cmd
cat ca-cert.pem > cert.pem && cat ca.pem >> cert.pem
```
```cmd
Start-Process pwsh.exe "-NoLogo -NoProfile" -Verb RunAs
```
Enter this next line in the Administrator PowerShell ↓
```cmd
Import-Certificate -FilePath "ca.pem" -CertStoreLocation Cert:\LocalMachine\Root
exit
```
```cmd
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
    
