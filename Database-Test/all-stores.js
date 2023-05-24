const database = require("../Database");
exports.store = function (req, res) {
  const db = database.getConnection();

  let orders;

  db.then((conn) => {
    conn.query("SELECT * FROM STORE").then((rows) => {
      //console.log(rows);
      res.status(200).json(rows);
    });
  });
};
