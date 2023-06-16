const connection = require('./database');

module.exports = {
  getAllPackage : (req, res) => {
    const city = req.query.city
    connection.query('SELECT * FROM package_tourism', function (error, results, fields){
      if(error){
        return res.send(error);
      }
      let data = results;
      // return res.status(200).send([results[id-1]])
      if(city){
        data  = data.filter( (package) => {
          return package.City.toLowerCase().includes(city.toLowerCase())
        })
      }
      res.send(data)
    })
  },

  getPackageById : (req,res) => {
    const id = req.params.id
    connection.query('SELECT * FROM package_tourism', function (error, results, fields){
      if(error){
          return res.send(error);
      }
      let data = results;
      if(id<=0 || id>data.length){
        return res.send({success: false, message: `package with id ${id} not found`})
      }
      res.send([data[id-1]])
    })
  }


}