const singleton = require('./Server-Singleton');
const singleton_db = require('./DB-Singleton');

const express = require('express');
const login = require('./routes/Login');
//const signup = require('./routes/Signup');
const order = require('./routes/Order');
const details = require('./routes/Store-Details');
const { settings } = require('./routes/Settings');

const app = singleton.getInstance();

/**
 * Using Middleware
 */
app.use(express.json());


/**
 * Login
 */
app.get('/login', (req, res) => {
  res.send('Please send your Login Information!')
})

// Define the login endpoint
app.post('/login', login.login);


/**
 * Signup
 
app.get('/signup', (req, res) => {
  res.send('Please send your Signup Information!')
})

app.post('/signup', signup.signup);

*/


/**
 * Default Setting
 */
app.get('*', (req, res) =>{
  res.send('404');
})


//
// ORDER POST
//

/**
 * Post Request to Order
 */
app.post('/order', order.order);


/**
 * Store-Details
 */
app.get('/store-details', details.store_details);

/**
 * Settings
 */
//app.get('./routes/Settings.js', settings.settings);

/**
 * Starting Express Rest-API
 */
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
