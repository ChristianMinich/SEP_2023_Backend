const database = require('../DB-Singleton');
exports.settings = function(req, res) {
    //TODO: Validate Request with JWT

    const db = database.getConnection();

    db.then(conn => {
        var query = 'SELECT * FROM Coordinates'; 
        conn.query(query)
        .then(rows => {
            console.log(rows);
            conn.end;
            res.send(JSON.stringify(rows));
        })
    })
};