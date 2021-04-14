const express = require('express');
const { Worker } = require('webworker-threads');

// Using WebWorker
  const app = express();

  app.get('/', (req, res) => {
      // Function keyword because we'll be using /this/
      const worker = new Worker(function() {
          // This function is essentially going to 
          // get stringified so it won't really have
          // access to stuff outside its scope
          this.onmessage = function () {
            let counter = 0;

            // simple loop simulation
            while (counter < 1e9) {
                counter += 1;
            }

            postMessage(counter);
          }
      });

      worker.onmessage = function (message) {
        res.send(''+message.data);
      };

    worker.postMessage();
  });

  app.get('/fast', (req, res) => {
    res.send('That was fast!');
  });

  app.listen(3000);
}
