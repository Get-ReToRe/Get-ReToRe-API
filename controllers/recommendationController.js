const axios = require('axios');

const listedCity = ['Bandung', 'Jakarta', 'Yogyakarta', 'Semarang', 'Surabaya']
const listedCategory = ['Budaya', 'Taman Hiburan', 'Tempat Ibadah', 'Cagar Alam', 'Bahari', 'Pusat Perbelanjaan']

const getRecommendation = (req, res) => {
  const { budget, lat, lon, city, category } = req.body;
  
  if(!budget){
    return res.status(400).json({
      success : false,
      message: "please provide budget"
    })
  }

  if(!lat || !lon){
    return res.status(400).json({
      success : false,
      message: "please provide both latitude and longitude information "
    })
  }

  let bodyReq = {
    budget: budget,
    lat:lat,
    lon:lon
  }

  if(city ){
    if(!listedCity.includes(city)){
      return res.status(400).json({
        success : false,
        message: `please use one of this city : ${listedCity}`
      })
    }

    bodyReq = {...bodyReq, city:city}
  }

  if(category){
    if(!listedCategory.includes(category)){
      return res.status(400).json({
        success : false,
        message: `please use one of this category : ${listedCategory}`
      })
    }

    bodyReq = {...bodyReq, category:category}
  }

  axios.post('https://model-api-ukc47aryda-et.a.run.app/recommendation',bodyReq)
    .then((response)=>{
      res.status(200).send(response.data)
    })
    .catch((err)=>{
      res.send(err)
    })

  
}

module.exports = {
  getRecommendation
}