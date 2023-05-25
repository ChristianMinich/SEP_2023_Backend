const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const database = require("../Database");


/**
 * This Function is being accessed by sending a POST request to '/login' it needs the parameters
 * and uses the Username and Password to verify, whether or not a user login is valid
 * @param {*} req.username
 * @param {*} req.password
 *
 * @return {jwt, *, String}
 */
exports.login = function (req, res) {
    const db = database.getConnection();

    // Define a secret String for signing the JWT
    const JWT_SECRET = "Lingen_Liefert_liefert_keine_Waffen_an_die_Ukraine";

    /**
   * Save Json-Variables inside local JS-variables
   */
    const { username, password } = req.body;

    /**
   * If the User doesn't exist or the entered password is wrong
   * @return {*, String} Status(401) and an error message 'Invalid username or password' as a Json.
   */
    /* if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({ message: 'Invalid username or password' });
  } */

    let store_id;
    let store_name;
    let pw;

    db.then((conn) => {
        conn
            .query(
                "SELECT STORE_ID, STORE_NAME, PASSWORD FROM STORE WHERE STORE_NAME = ? AND PASSWORD = ?",
                [username, password]
            )
            .then((rows) => {
                try {
                    if (rows.length !== 0) {
                        store_id = rows[0].STORE_ID;
                        store_name = rows[0].STORE_NAME;
                        pw = rows[0].PASSWORD;
                        if (store_name === username && pw === password) {
                            const token = jwt.sign({ id: store_id }, JWT_SECRET, {
                                expiresIn: "1h",
                            });
                            res.status(200).send({ token });
                        }
                        else {
                            res.status(401).send({ message: "Invalid username or password" });
                        }
                    }
                    else {
                        res.status(401).send({ message: "Invalid username or password" });
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(401).send({ message: "Invalid username or password" });
                }
            });
    });
    // console.log(rows.STORE_NAME);

    /**
   * If the Login was successful return a JsonWebToken containing the parameters
   * @param {Integer} user.id
   * @param {String} JWT_SECRET
   * @param {String} expiresIn
   */
    /* const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.send({ token }); */
};
