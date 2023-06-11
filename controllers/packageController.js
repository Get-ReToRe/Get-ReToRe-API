const dummy = require('./paketdummy');

module.exports = {
  getAllPackage : (req, res) => {
    const city = req.query.city
    let data = dummy;
    if(city){
      data  = data.filter( (package) => {
        return package.City.toLowerCase().includes(city.toLowerCase())
      })
    }
    res.send(data)
  },

  getPackageById : (req,res) => {
    const id = req.params.id

    if(id<=0 || id>dummy.length){
      return res.send({success: false, message: `package with id ${id} not found`})
    }

    
  
    res.send([dummy[id-1]])
  }


}