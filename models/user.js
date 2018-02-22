const mongoose = require('mongoose')
const Schema = require('../db/schema')

// convert schema into mongoose model and export
const MeatUser = mongoose.model('meatUser', Schema)

module.exports = MeatUser
