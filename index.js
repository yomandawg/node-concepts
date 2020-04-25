const express = require('express');
const app = express();

function doWork(duration) {
  const start = Date.now();
  while(Date.now() - start < duration) {
    
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);