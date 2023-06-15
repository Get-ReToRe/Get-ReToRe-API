const connection = require('./database')

const placeList = async (req, res) => {
    connection.query('SELECT * FROM tourism', function (error, results, fields) {
        if (error){
            return res.send(error)
        }
        data =  results;
        const {search, limit} = req.query;
        let message = "Place list returned";
        if(search) {
            data = data.filter((place) => {
                return place.Place_Name.toLowerCase().includes(search.toLowerCase());
            
            })
            message += `, query search = ${search}`
        }
        if(limit) {
            data = data.slice(0,limit)
            message += `, limit = ${limit}`
        }
    
        return res.status(200).send(data)
    })
}

const placeFromId = (req, res) => {
    const {id} = req.params;
    connection.query('SELECT * FROM tourism', function (error, results, fields){
        if(error){
            return res.send(error);
        }
        return res.status(200).send([results[id-1]])
    })
}

module.exports = {
    placeList, placeFromId
}