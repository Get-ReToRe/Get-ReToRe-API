const express = require('express');

const app = express();

// router
const helloRouter = require('./routes/helloRoute');
const recommendation = require('./routes/recommendationRoute');

app.use(express.json());

app.use(helloRouter);
app.use(recommendation);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening port ${port}...`)
})