const singleton = require('./Server-Singleton');
const singleton_db = require('./DB-Singleton');

const express = require('express');
const login = require('./routes/Login');
//const signup = require('./routes/Signup');
const order = require('./routes/Order');
const details = require('./routes/Store-Details');
const getSettings = require('./routes/GetSettings');
const setSettings = require('./routes/SetSettings');

/**
 * Creating a single instance of the express class
 */
const app = singleton.getInstance();

/**
 * Using Middleware
 */
app.use(express.json());


/**
 * Login
 */

app.post('/login', login.login);


/**
 * Signup
 
app.get('/signup', (req, res) => {
  res.send('Please send your Signup Information!')
})

app.post('/signup', signup.signup);

*/


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
app.get('./routes/Settings.js', getSettings.settings);

app.post('./routes/setSettings.js', setSettings.settings);

/**
 * Default Setting
 */
app.get('*', (req, res) =>{
  res.send('404');
})

/**
 * Starting Express Rest-API
 */
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
