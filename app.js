const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/roomsDB", {useNewUrlParser: true, useUnifiedTopology: true});



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


// Room Schema
const roomSchema = new mongoose.Schema({
    name: String,
    floor: String,
    building: String
});

// Building Schema
const buildingSchema = new mongoose.Schema({
    buildingName: String,
    rooms: [roomSchema]
})

const Room = mongoose.model('Room', roomSchema);
const Building = mongoose.model('Building', buildingSchema);


const room1 = new Room({
    name: 'The Beach',
    floor: '1F',
    building: 'Central Building'
});

const room2 = new Room({
    name: 'Corridor Flats',
    floor: '2F',
    building: 'Left Wing'
});

const room3 = new Room({
    name: 'Command Studio',
    floor: '3F',
    building: 'Right Wing'
});

const room4 = new Room({
    name: 'The Rainfall',
    floor: '4F',
    building: 'Sky Tower'
});

const defaultRooms = [room1, room2, room3, room4];

const building = new Building({
    buildingName: 'Main Building',
    rooms: defaultRooms
});

Building.find({}, function (err, foundBuilding) {

    if (!foundBuilding) {
        building.save();
        res.redirect('/');
    };
});


// Find rooms in database and push to database if none found
app.get('/', function (req, res) {

    Room.find({}, function (err, foundRooms) {
        
        if (foundRooms.length === 0) {
           
            Room.insertMany(defaultRooms, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Saved defaultRooms to database!');
                }
            });
            res.redirect('/');
        } else {
            res.render('building', {buildingTitle: "Main building", roomList: defaultRooms });
        };
    });
});

app.post('/', function(req, res) {

    //const roomName = req.body.room;

});

let port = process.env.PORT;

// Server listening on port 3000
if (port == null || port == '') {
    port = 3000;
};


app.listen(port, function () {
console.log('Server running on port: 3000');
});

// const loginForm = document.getElementById('login-form');
// const userLoginInput = document.getElementById('user-login');
// const userPasswordInput = document.getElementById('user-password');
// const loginBtn = document.querySelector('.login-btn');

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
