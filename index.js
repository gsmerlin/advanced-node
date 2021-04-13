const cluster = require('cluster');
const express = require('express');
const crypto = require('crypto');

// First time we execute,
// is the file being executed in parent mode?
if (cluster.isMaster) {
  // Cause index.js to be executed again
  // but in child mode
  cluster.fork();
} else {
  // I'm a child, I'll act like a server
  // and nothing else
  const app = express();

  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('Hi there');
    });
  });

  app.get('/fast', (req, res) => {
    res.send('That was fast!');
  });

  app.listen(3000);
}
