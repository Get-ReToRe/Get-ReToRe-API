let dummy = require('./dummy');
dummy = dummy.map( (place) => {
  place = {...place, Image:"https://storage.googleapis.com/tourism-image-bucket/picture.png"};
  return place
})

const getRecommendation = (req, res) => {
  const { budget } = req.body;

  if(!budget){
    return res.status(400).json({
      success : false,
      message: "please provide budget"
    })
  }

  res.status(200).json({
    success : true,
		message : "berhasil mendapatkan rekomendasi",
		data : dummy.map( (place) => {
      if(place.Price < budget)return place;
    })
  })
}

module.exports = {
  getRecommendation
}