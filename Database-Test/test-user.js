const database = require("../Database");

/**
 * Function that inserts a single User into the Database
 * with his name contained inside the req.body.
 * @param {*} req
 * @param {*} res
 */
function test(req, res) {
    const { name } = req.body;

    const db = database.getConnection();

    db.then((conn) => {
        conn
            .query("INSERT INTO USER (name) VALUES(?)", [name])
            .then((rows) => {
                console.log("INSERTED: " + rows);
                res.status(200).send("Success");
            })
            .catch(error => {
                console.log(error);
            });
    });
}

module.exports = { test };