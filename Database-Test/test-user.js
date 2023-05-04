const database = require('../DB-Singleton');

exports.test = function(req, res) {
    const { name } = req.body; 

    const db = database.getConnection();

    db.then(conn => {
        conn.query('INSERT INTO USER (name) VALUES(?)', [name])
        .then(rows => {
            res.status(200).send('Success');
        })
    })
}