const singleton = require("./Server-Singleton");
const singleton_db = require("./Database");

const express = require("express");
const login = require("./routes/Login");
const signup = require("./routes/Signup");
const order = require("./routes/Order");
const details = require("./routes/Store-Details");
const getSettings = require("./routes/GetSettings");
const setSettings = require("./routes/SetSettings");
const insert_store = require("./Database-Test/insert-store");
const all_stores = require("./Database-Test/all-stores");
const token_decoder = require("./Database-Test/token-decoder");
const user = require("./Database-Test/test-user");
const all_user = require("./Database-Test/all-users");

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

app.post("/login", login.login);

/**
 * Signup
 
app.get('/signup', (req, res) => {
  res.send('Please send your Signup Information!')
})

app.post('/signup', signup.signup);

*/

app.post("/insert-store", insert_store.store);
app.get("/all-stores", all_stores.store);
app.post("/token-decoder", token_decoder.decoder);
app.post("/test-user", user.test);
app.get("/all-users"), all_user.user;
//
// ORDER POST
//

/**
 * Post Request to Order
 */
app.post("/order", order.order);

/**
 * Store-Details
 */
app.get("/store-details", details.store_details);

/**
 * Settings
 */
app.get("/settings", getSettings.settings);

app.post("/setSettings", setSettings.settings);

/**
 * Default Setting
 */
app.get("*", (req, res) => {
  res.send("404");
});

/**
 * Starting Express Rest-API
 */
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
