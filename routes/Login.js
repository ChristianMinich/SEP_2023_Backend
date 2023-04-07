const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//TODO: DB Implementation 

exports.login = function(req, res) {

    const users = [
        {
          id: 1,
          username: 'johndoe',
          password: '$2a$10$5ll5d5RlKjDp1Ih20/P8f.WPm9XN7fsfjKzhlF8yv1cz6.1e6j/0W'
        }
      ];

    // Define a secret for signing the JWT
    const JWT_SECRET = 'secret';

    const { username, password } = req.body;

  console.log(username);
  //console.log(bcrypt.decodeBase64(users[0].password).pop);

  // Find the user with the given username
  const user = users.find(u => u.username === username);

  // If the user doesn't exist or the password is incorrect, return a 401 unauthorized status
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }

  // Generate a JWT and return it in the response
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
}