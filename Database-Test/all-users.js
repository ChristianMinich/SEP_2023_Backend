const database = require("../Database");
/**
 * Function that returns all Data from USER in a JSON Format.
 * @param {*} req
 * @param {*} res
 */
function user(req, res) {
    const db = database.getConnection();

    db.then((conn) => {
        conn.query("SELECT * FROM USER").then((rows) => {
            // console.log(rows);
            res.status(200).json(rows);
        });
    });
}

module.exports = { user };
