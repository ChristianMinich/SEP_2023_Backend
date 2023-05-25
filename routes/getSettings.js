const database = require("../Database");
/**
 * Function that returns all Data from the Users Settings in a JSON Format.
 * @param {*} req
 * @param {*} res
 */
function settings(req, res) {
    // TODO: Validate Request with JWT

    const db = database.getConnection();

    db.then((conn) => {
        const query = "SELECT * FROM Coordinates";
        conn.query(query).then((rows) => {
            console.log(rows);
            conn.end;
            res.send(JSON.stringify(rows));
        });
    });
}


module.exports = { settings };