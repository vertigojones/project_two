require('dotenv').config()
const mongoose = require('mongoose')

// import models
const MeatUser = require('../models/user')

// enable mongoose
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('open', () => {
    console.log('Successfully connected to mongoDB')
})
db.on('error', (err) => {
    console.log(err)
})

// set up new MeatUsers
const murph = new MeatUser({
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/26961716_10213935554650393_6166632945641644111_o.jpg?oh=8024a2fcdce57e782aab63eb95ca3d41&oe=5AFFA89A",
    name: 'Murphy Potts',
    gender: 'Male',
    age: 25,
    hobbies: 'Watching the Dawgs, cooking and eating meat, hiking',
    meat: 'Grilled chicken',
    preparation: 'Rosemary and garlic',
    side: 'none'
})

const cameron = new MeatUser({
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/14962703_10155539168928636_4733508502386582906_n.jpg?oh=c494c3a2a7781b6c72a36c3624803a7b&oe=5B4C363B",
    name: 'Cameron Gunter',
    gender: 'Male',
    age: 25,
    hobbies: 'Playing guitar, drinking, causing general debauchery',
    meat: 'Chicken Kabobs',
    preparation: 'Marinaded in lemon juice, corriander, mint, and black pepper',
    side: 'none'
})

const sweety = new MeatUser({
    image: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAA3cAAAAJDgyYjMxMTRlLTMyNGEtNGUzZS04ZDMwLTc2NTYxZmQ4ODhmYg.jpg",
    name: 'Sweety James',
    gender: 'Female',
    age: 32,
    hobbies: 'Singing, dancing, being a muppet',
    meat: 'Lamb chops',
    preparation: 'Dusted with mint and sprinkled with lime juice',
    side: 'none'
})

const farrukh = new MeatUser({
    image: "https://media.licdn.com/media/AAMAAgDGAAwAAQAAAAAAAA65AAAAJGI5ZTE1NjBkLTUwOWQtNDkxYi04YzVjLWU3NjBkNmM4NDIyMg.jpg",
    name: 'Farrukh Khalikov',
    gender: 'Male',
    age: 28,
    hobbies: 'Football (soccer), Martial Arts, Formula One',
    meat: 'Sirlion steak',
    preparation: 'Just as is',
    side: 'none'
})

// remove all MeatUsers and save them to database
MeatUser.remove().then(() => {
  return MeatUser.insertMany([ murph, cameron, sweety, farrukh ])
}).then(() => {
  // close the database
  console.log('Saved Successfully')
  db.close()
}).catch((err) => {
  // if there are any errors, log it and then close the db
  console.log(err)
  db.close()
})


