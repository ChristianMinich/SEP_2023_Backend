const database = require("../Database");
/**
 * Function that returns all Data from STORE in a JSON Format.
 * @param {*} req
 * @param {*} res
 */
function store(req, res) {
    const db = database.getConnection();

    db.then((conn) => {
        conn.query("SELECT * FROM STORE").then((rows) => {
            // console.log(rows);
            res.status(200).json(rows);
        });
    });
}

module.exports = { store };
