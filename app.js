const express = require('express');

const app = express();

// router
const helloRouter = require('./routes/helloRoute');
const recommendation = require('./routes/recommendationRoute');

app.use(express.json());

app.use(helloRouter);
app.use(recommendation);

const placeRoute = require("./routes/placeRoute")
app.use("/places",placeRoute);

app.get('*', function(req, res){
  res.status(404).send({message:"not found ges"})
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening port ${port}...`)
})