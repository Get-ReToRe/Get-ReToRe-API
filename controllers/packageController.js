let dummy = require('./paketdummy');

module.exports = {
  getAllPackage : (req, res) => {
    const city = req.query.city
    
    if(city){
      dummy = dummy.filter( (package) => {
        return package.City.toLowerCase().includes(city.toLowerCase())
      })
    }
    res.send(dummy)
  },

  getPackageById : (req,res) => {
    const id = req.params.id

    if(id<=0 || id>dummy.length){
      return res.send({success: false, message: "id not found"})
    }

    

    res.send(dummy[id-1])
  }


}