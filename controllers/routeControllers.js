const express = require('express')
const router = express.Router()
const MeatUser = require('../models/user')

// INDEX
// GET
router.get('/', (req, res) => {
    // get all meat users
    MeatUser.find().then((attendees => {
        // send all meat users to homepage
        res.render('../views/index', {
            attendee: attendee
        })
    })
})

// NEW 
router.get('/new', (req, res) => {

})
