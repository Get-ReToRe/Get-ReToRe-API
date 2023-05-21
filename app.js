const express = require('express');

const server = express();

server.get('/hello', (req, res) => {
  res.json({
    "hello" : "world",
  })
})


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is listening port ${port}...`)
})