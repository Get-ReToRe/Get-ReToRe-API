let dummy = require('./dummy');
dummy = dummy.map( (place) => {
    place = {...place, Image:"https://storage.googleapis.com/tourism-image-bucket/picture.png"};
    return place
})
// console.log(dummy);

const placeList = (req, res) => {
    const {search} = req.query;
    let data =[]
    if(search) {
        dummy.forEach( (place) => {
            if(place.Place_Name.toLowerCase().includes(search.toLowerCase())){
                data.push(place);
            }
        })
        let message = data.length > 0 ? `Place list containing ${search} returned` : "no result";

        return res.status(200).json({
            success: true,
            message: message,
            data,
        })
    }

    return res.status(200).json({
        success: true,
        message: "Place list returned",
        data: dummy
    })

}

const placeFromId = (req, res) => {
    const {id} = req.params;
    return res.status(200).json({
        success: true,
        message: "Place list returned",
        data: dummy[id]
    })
}

module.exports = {
    placeList, placeFromId
}