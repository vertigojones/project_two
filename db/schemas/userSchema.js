const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const meatUserSchema = new Schema ({
    image: String,
    name: String,
    gender: String,
    age: Number,
    hobbies: String,
    meat: [ meatSchema ],
    preparation: String,
    side: String
})

module.exports = meatUserSchema