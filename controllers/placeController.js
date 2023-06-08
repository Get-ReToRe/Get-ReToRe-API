let dummy = require('./dummy');
// console.log(dummy);

const placeList = (req, res) => {
    const {search, limit} = req.query;
    let data = dummy;
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

}

const placeFromId = (req, res) => {
    const {id} = req.params;
    return res.status(200).send([dummy[id]])
}

module.exports = {
    placeList, placeFromId
}