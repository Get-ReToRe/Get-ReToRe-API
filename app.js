const express = require('express');

const app = express();

// router
const helloRouter = require('./routes/helloRoute');


app.use(helloRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening port ${port}...`)
})