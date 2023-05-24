const placeList = (req, res) => {

    if(req.query.search) {
        res.status(200).json({
            success: true,
            message: `Place list from query search: ${req.query.search}`
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: `Place list returned`
    });

}

const placeFromId = (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        success: true,
        message: `Place detail from id: ${id}`

    });
}

module.exports = {
    placeList, placeFromId
}