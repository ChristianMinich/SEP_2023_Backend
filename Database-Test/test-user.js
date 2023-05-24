const database = require("../Database");

exports.test = function (req, res) {
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
};
