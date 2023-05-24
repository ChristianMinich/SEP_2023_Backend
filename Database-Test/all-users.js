const database = require("../Database");
exports.user = function (req, res) {
    const db = database.getConnection();

    db.then((conn) => {
        conn.query("SELECT * FROM USER").then((rows) => {
        //console.log(rows);
            res.status(200).json(rows);
        });
    });
};
