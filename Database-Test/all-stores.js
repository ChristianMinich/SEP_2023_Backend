const database = require('../DB-Singleton');
exports.store = function(req, res) {
    const db = database.getConnection();

    db.then(conn => {
        conn.query('SELECT * FROM STORE').then(rows => {
            console.log(rows);
            conn.end;
            res.status(200).json(rows);
        })
    });
}