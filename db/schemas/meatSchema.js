const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const meatSchema = new Schema ({
    image: String,
    name: String,
    species: String,
    class: String,
    type: String
})

module.exports = meatSchema
