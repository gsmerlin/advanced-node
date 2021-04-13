const https = require('https');

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

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
