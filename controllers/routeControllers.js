const express = require('express')
const router = express.Router()
const Company = require('../models/user')

// GET
router.get('/', (req, res) => {
    // test connection
    res.send('welcome to my page')
})
