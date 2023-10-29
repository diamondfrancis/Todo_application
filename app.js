const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the home page
app.get('/', (req, res) => {
  res.render('home', { title: 'Todo App - Homepage' });
});

app.get('/home', (req, res) => {
  const data = {
    title: "Todo App - Home"
  };
  res.render('home', data);
});

// Serve the login form page
app.get('/login', (req, res) => {
  const data = {
    title: "Todo App - Login"
  };
  res.render('login', data);
});

// Serve the register form page
app.get('/register', (req, res) => {
  const data = {
    title: "Todo App - Register"
  };
  res.render('register', data);
});

// Serve the tasklist page
app.get('/tasklist', (req, res) => {
  const data = {
    title: "Todo App - Task List"
  };
  res.render('tasklist', data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});