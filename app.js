const express = require('express');

const app = express();

// router
const helloRouter = require('./routes/helloRoute');
const recommendation = require('./routes/recommendationRoute');
const placeRoute = require("./routes/placeRoute")
const packageRoute = require('./routes/packageRoute')

app.use(express.json());

app.use(helloRouter);
app.use(recommendation);
app.use(packageRoute)

app.use("/places",placeRoute);

app.get('*', function(req, res){
  res.status(404).send({message:"not found ges"})
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening port ${port}...`)
})