const connection = require('./database');

const placeList = (req, res) => {
    if(req.query.search) {
        connection.query(`SELECT * FROM places WHERE Place_Name LIKE '%${req.query.search}%'`,
        function(err,data,fields){
            if(err) throw err;
            res.status(200).json({
                success: true,
                message: `Place list containing ${req.query.search} returned`,
                data,
            });
        });
        return;
    }


    connection.query(`SELECT * FROM places`,
        function(err,data,fields){
            if(err) throw err;
            res.status(200).json({
                success: true,
                message: `Place list returned`,
                data,
            });
        });

}

const placeFromId = (req, res) => {
    const {id} = req.params;
    connection.query(`SELECT * FROM places WHERE Place_Id = ${id}`,
        function(err,data,fields){
            if(err) throw err;
            res.status(200).json({
                success: true,
                message: `Place list from query search: ${id}`,
                data,
            });
        });
}

module.exports = {
    placeList, placeFromId
}