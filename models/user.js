const mongoose = require('mongoose')
const Schema = require('../db/schemas/userSchema')

// convert schema into mongoose model and export
const MeatUser = mongoose.model('meatUser', meatSchema)

module.exports = MeatUser
