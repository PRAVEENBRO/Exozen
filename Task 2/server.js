const experss = require('express');
const app = experss();
const port = 5000;
var bodyParser = require('body-parser');

const { generateKeyPair } = require('crypto');


app.use("/", (req, res) => {
    generateKeyPair('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    }, (err, publicKey, privateKey) => {
        res.send(publicKey);
    })
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})