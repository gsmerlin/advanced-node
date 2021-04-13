const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

const start = Date.now();

const benchmark = () => Date.now() - start;

const doRequest = () => {
  https.request('https://www.google.com', (res) => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(benchmark());
    });
  }).end();
};

const doHash = () => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash: ', benchmark());
  });
};

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS: ', benchmark());
});

doHash();
doHash();
doHash();
doHash();
