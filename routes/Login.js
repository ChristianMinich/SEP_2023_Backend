const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//TODO: DB Implementation 

/**
 * This Function is being accessed by sending a POST request to '/login' it needs the parameters
 * @param {*} req.username and
 * @param {*} req.password to validate the Login request.
 * 
 * @param {Integer} user.id
 * @param {String} JWT_SECRET
 * @param {String} expiresIn
 * 
 * @return {jwt, *, String} if Login valid return jwt else return HTTP statuscode and error-message
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
  const JWT_SECRET = 'Lingen_Liefert_liefert_keine_Waffen_an_die_Ukraine';

  /**
   * Save Json-Variables inside local JS-variables
   */
  const { username, password } = req.body;

  /**
   * Find the user with the given username
   * TODO: Replace with SQL Query
   */
  const user = users.find(u => u.username === username);

  /**
   * If the User doesn't exist or the entered password is wrong
   * @return {String} Status(401) and an error message 'Invalid username or password' as a Json.
   */
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }

  /**
   * If the Login was successful return a JsonWebToken containing the parameters
   * @param {Integer} user.id
   * @param {String} JWT_SECRET
   * @param {String} expiresIn
   */
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
}