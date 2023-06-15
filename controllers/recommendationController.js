const axios = require('axios');
const connection = require('./database');

const listedCity = ['Bandung', 'Jakarta', 'Yogyakarta', 'Semarang', 'Surabaya']
const listedCategory = ['Bahari', 'Budaya', 'Cagar Alam', 'Pusat Perbelanjaan',  'Taman Hiburan', 'Tempat Ibadah']

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

const getPrediction = async (req, res) => {
  try {
    const imageFile = req.file;
    // Convert the Buffer to a Blob
    const blobData = new Blob([imageFile.buffer], { type: imageFile.mimetype });
    const formData = new FormData();
    formData.append('file', blobData, imageFile.originalname);
    const predictionResponse = await axios.post('https://model-api-ukc47aryda-et.a.run.app/predict', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    const predictionResult = listedCategory[predictionResponse.data.result];

    console.log(predictionResult);

    connection.query('SELECT * FROM tourism', function (error, results, fields){
      if(error){
          return res.send(error);
      }
      let data = results;
      data = data.filter((place)=>{
        return place.Category == predictionResult
      })
      res.send(data.map( (place) => {
        return {
          "Place_Id": place.Place_Id,
          "Place_Name": place.Place_Name,
          "Category": place.Category,
          "City": place.City,
          "Price": place.Price,
          "Image": place.Image
        }
      }))
    })
  } catch (error) {
    res.status(500).send({ error: 'Failed to process prediction', detail: error.message });
  }
}

module.exports = {
  getRecommendation,
  getPrediction
}