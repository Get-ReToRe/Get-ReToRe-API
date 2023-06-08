let dummy = require('./dummy');

const getRecommendation = (req, res) => {
  const { budget } = req.body;

  if(!budget){
    return res.status(400).json({
      success : false,
      message: "please provide budget"
    })
  }

  res.status(200).send(dummy.map( (place) => {
    if(place.Price < budget)return place;
  }))
}

module.exports = {
  getRecommendation
}