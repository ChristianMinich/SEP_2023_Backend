const jwt = require("jsonwebtoken");

/**
 * Function that returns the decoded contents of a JWT.
 * @param {*} req
 * @param {*} res
 */
function decoder(req, res) {
    const { token } = req.body;
    console.log(jwt.verify(token, "Lingen_Liefert_liefert_keine_Waffen_an_die_Ukraine"));
    res.status(200).send(jwt.decode(token));
}

module.exports = { decoder };
