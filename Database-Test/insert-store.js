const database = require("../Database");
const bcrypt = require("bcryptjs");

exports.store = function (req, res) {
  let hashedpassword;

  var { store_id, store_name, logo, phone_number, password } = req.body;

  const db = database.getConnection();
  /*
    bcrypt.genSalt(10)
    .then(salt => {
        return bcrypt.hash(password, salt);
    })
    .then(hash => {
        hashedpassword = hash;
        return hashedpassword;
    })
    .catch(err => {
        console.error(err);
    });
    
    console.log(typeof hashedpassword);
    console.log(hash); 
    
    {"store_id":"51463","store_name":"buschi","logo":"ifasa","phone_number":"246246","password":"dibnsdgg"}
    */

  db.then((conn) => {
    const res = conn
      .query("INSERT INTO STORE VALUES (?, ?, ?, ?, ?)", [
        store_id,
        store_name,
        logo,
        phone_number,
        String(hashedpassword),
      ])
      .then((response) => {
        //console.log(response);
      });

    //console.log(res);
    conn.end;
  });

  //console.log(res);

  res.status(200);
};
