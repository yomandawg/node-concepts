const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker; // experimental thing

app.get('/', (req, res) => {
  // utilize worker threads
  // use the `function` semeantics on purpose, not arrow function
  // to route `this` keyword to the nested function object
  const worker = new Worker(function() {
    // delegate to outside of Node.js process and into the worker threads
    this.onmessage = function() {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      postMessage(counter); // Worker communication interface
    }
  });

  // Worker communication interface
  worker.onmessage = function (message) {
    console.log(message.data); // callback
  }
  worker.postMessage();
});

app.listen(3000);