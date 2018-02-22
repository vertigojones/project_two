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
    name: 'Murphy Potts',
    gender: 'Male',
    age: 25,
    hobbies: 'Watching the Dawgs, cooking and eating meat, hiking',
    meat: 'Grilled chicken',
    preparation: 'Rosemary and garlic',
    side: 'none'
})

const cameron = new MeatUser({
    name: 'Cameron Gunter',
    gender: 'Male',
    age: 25,
    hobbies: 'Playing guitar, drinking, causing general debauchery',
    meat: 'Chicken Kabobs',
    preparation: 'Marinaded in lemon juice, corriander, mint, and black pepper',
    side: 'none'
})

const sweety = new MeatUser({
    name: 'Sweety James',
    gender: 'Female',
    age: 32,
    hobbies: 'Singing, dancing, being a muppet',
    meat: 'Lamb chops',
    preparation: 'Dusted with mint and sprinkled with lime juice',
    side: 'none'
})

const farrukh = new MeatUser({
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


