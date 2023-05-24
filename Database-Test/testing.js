const bcrypt = require("bcrypt");
let hashedpassword;
const password = "mypassword"; // Define and assign a value to the password variable

bcrypt
  .genSalt(10)
  .then((salt) => {
    return bcrypt.hash(password, salt);
  })
  .then((hash) => {
    hashedpassword = hash;
    console.log(`Hashed password: ${hashedpassword}`);
    console.log(typeof hashedpassword);
    return hashedpassword;
  })
  .catch((err) => {
    console.error(err);
  });

// Code that uses the hashedPassword variable outside of the Promise chain
console.log(`Hashed password stored locally: ${hashedpassword}`);
console.log(typeof hashedpassword);
