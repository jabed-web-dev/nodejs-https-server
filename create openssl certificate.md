```cmd
mkdir cert && cd cert
openssl genrsa -aes256 -out ca-key.pem 4096
openssl req -new -x509 -sha256 -days 999 -key ca-key.pem -out ca.pem
openssl genrsa -out key.pem 4096
openssl req -new -sha256 -subj "/CN=yourcn" -key key.pem -out cert.csr
echo "subjectAltName=DNS:your-dns.record,IP:0.0.0.0" >> extfile.cnf
openssl x509 -req -sha256 -days 999 -in cert.csr -CA ca.pem -CAkey ca-key.pem -out ca-cert.pem -extfile extfile.cnf -CAcreateserial
cat ca-cert.pem > cert.pem && cat ca.pem >> cert.pem
Start-Process pwsh.exe "-NoLogo -NoProfile -Command `"Import-Certificate -FilePath ca.pem -CertStoreLocation Cert:\LocalMachine\Root`"" -Verb RunAs -Wait
rm.exe ca.pem ca.srl ca-cert.pem ca-key.pem cert.csr extfile.cnf
ls
cd ..
```
