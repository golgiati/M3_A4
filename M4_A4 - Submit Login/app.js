// Gustavo Olgiati

// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const users = [];

// Create an instance of express
const app = express();

// We use 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

function User(username, email, password, confirmPassword) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
}

app.get('/', (req, res) => {
    res.render('login.ejs');
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

// route handler for the form
app.post('/register', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if(password !== confirmPassword) {
        return res.send('Passwords do not match');
    }

    const user = new User(username, email, password, confirmPassword);
    users.push(user);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});