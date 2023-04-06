const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const singleton = require('./Server-Singleton');
//const singleton_db = require('./DB-Singleton');

const express = require('express');
const login = require('./routes/Login');
const signup = require('./routes/Signup');
const order = require('./routes/Order');

const app = singleton.getInstance();
//const db = singleton_db.getInstance();

app.use(express.json());

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

//Hello World
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Please send your Login Information!')
})

// Define the login endpoint
app.post('/login', login.login);

app.get('/signup', (req, res) => {
  res.send('Please send your Signup Information!')
})

// Define the sign up endpoint
app.post('/signup', signup.signup);

// 404 Not Found

app.get('*', (req, res) =>{
  res.send('404');
})

// ORDER POST
app.post('/order', order.order);


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
