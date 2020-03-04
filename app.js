const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const loginForm = document.getElementById('login-form');
const userLoginInput = document.getElementById('user-login');
const userPasswordInput = document.getElementById('user-password');
const loginBtn = document.querySelector('.login-btn');
const mongoose = require('');

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

app.get('/', function (req, res) {

    res.render('list', {buildingTitle: 'Building', roomList: rooms })
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
