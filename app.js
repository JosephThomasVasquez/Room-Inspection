const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// const loginForm = document.getElementById('login-form');
// const userLoginInput = document.getElementById('user-login');
// const userPasswordInput = document.getElementById('user-password');
// const loginBtn = document.querySelector('.login-btn');

const users = [
    {
        name: 'Justin',
        password: 'test'
    },
    {
        name: 'Cindy',
        password: 'boom'
    }
];

const rooms = '2F';

app.get('/', function (req, res) {
    res.render('building', {buildingTitle: 'Building', roomList: rooms })
});

let port = process.env.PORT;

// Server listening on port 3000
if (port == null || port == '') {
    port = 3000;
};


app.listen(port, function () {
console.log('Server running on port: 3000');
});

// loginForm.addEventListener('submit', function(e) {
//     //e.preventDefault();

//     users.forEach(function (user) {

//         if (user.name === userLoginInput.value && user.password === userPasswordInput.value) {
//             console.log(`User: ${user.name} logged in successfully!`);
//             //return true;
//         }else if (!user.name === userLoginInput.value || !user.password === userPasswordInput.value) {
//             console.log('Error logging in!');
//         }; 
//     });
// });
