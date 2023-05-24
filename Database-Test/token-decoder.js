const jwt = require("jsonwebtoken");

exports.decoder = function (req, res) {
  const { token } = req.body;
  console.log(
    jwt.verify(token, "Lingen_Liefert_liefert_keine_Waffen_an_die_Ukraine")
  );
  res.status(200).send(jwt.decode(token));
};
