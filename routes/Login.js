const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//TODO: DB Implementation 

/**
 * This Function is being Accessed by sending a POST Request to '/login' it needs the Parameters
 * @param {*} req.username and
 * @param {*} req.password to validate the Login Request.
 * 
 * @param {Integer} user.id
 * @param {String} JWT_SECRET
 * @param {String} expiresIn
 * 
 * @return {jwt, *, String} if Login Valid return jwt else return HTTP Statuscode and Error-Message
 * 
 * 
 */
exports.login = function(req, res) {

    /**
     * Provisional Database
     */
    const users = [
        {
          id: 1,
          username: 'johndoe',
          password: '$2a$10$5ll5d5RlKjDp1Ih20/P8f.WPm9XN7fsfjKzhlF8yv1cz6.1e6j/0W'
        },
        {
          id: 2,
          username: 'buschermoehle',
          password: '$2a$12$e39JUMVKh8/yiQP0UaiCw.9wtq7U2sPnotG.QtF0vh12femKWigqS'
          /* {"username":"buschermoehle", "password": "despg"} */
        },
        {
          id: 2,
          username: 'ryba',
          password: '$2a$12$kpj43oOoBzvjuK6223S0wuYkCRhWbN4F1BSIqB/tZPSaR1hsU6stK'
          /* {"username":"ryba", "password": "uml"} */
        }
      ];

  // Define a secret String for signing the JWT
  const JWT_SECRET = 'SE2_kriegen_wir_in_einer_Woche_wieder';

  /**
   * Save Json-Variables inside Local JS-Variables
   */
  const { username, password } = req.body;

  /**
   * Find the user with the given username
   * TODO: Replace with SQL Query
   */
  const user = users.find(u => u.username === username);

  /**
   * If the User doesn't exist or the entered Password is wrong
   * return Status(401) and an Error Message 'Invalid username or password' as a Json.
   * @return {String} 
   */
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }

  /**
   * If the Login was Successful return a JsonWebToken containing the Parameters
   * @param {Integer} user.id
   * @param {String} JWT_SECRET
   * @param {String} expiresIn
   */
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
}