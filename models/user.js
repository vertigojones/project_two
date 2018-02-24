const mongoose = require('mongoose')
const userSchema = require('../db/schemas/userSchema')

// convert schema into mongoose model and export
const MeatUser = mongoose.model('meatUser', userSchema)

module.exports = MeatUser
