const mongoose = require('mongoose')
const meatSchema = require('../db/schemas/meatSchema')

// convert schema into mongoose model and export
const Meat = mongoose.model('Meat', meatSchema)

module.exports = Meat
