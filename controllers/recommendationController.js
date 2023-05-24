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
		data : [
		   {
          place_id: 1,
          name: 'Malboro1',
          price: 1000,
          image_url: 'ppp'
       },
		   {
          place_id: 2,
          name: 'Malboro2',
          price: 2000,
          image_url: 'ppp'
      },
      {
          place_id: 3,
          name: 'Malboro3',
          price: 3000,
          image_url: 'ppp'
      },
		]
  })
}

module.exports = {
  getRecommendation
}