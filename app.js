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

app.get('/', 'home', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.use('/public', express.static(path.join(__dirname, 'public')));


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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});