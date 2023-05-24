const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//
// Not necessary
//
exports.signup = function (req, res) {
    const users = [
        {
            id: 1,
            username: "johndoe",
            password: "$2a$10$5ll5d5RlKjDp1Ih20/P8f.WPm9XN7fsfjKzhlF8yv1cz6.1e6j/0W",
        },
    ];

    // Define a secret for signing the JWT
    const JWT_SECRET = "secret";

    const { username, password } = req.body;

    // Check if the username already exists
    if (users.some((u) => u.username === username)) {
        return res.status(400).send({ message: "Username already exists" });
    }

    // Hash the password using bcrypt
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Add the new user to the users array (this should be stored in a database)
    const user = { id: users.length + 1, username, password: hashedPassword };
    users.push(user);

    // Generate a JWT and return it in the response
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    res.send({ token });
};
