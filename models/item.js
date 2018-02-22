const express = require('express')
const router = express.Router()
const MeatUser = require('../models/user')

/* GET home page. */
router.get('/', (req, res) => {
  // get all meat users
  MeatUser.find().then((attendee) => {
      // send all meat users to homepage
      console.log('working!')
      res.render('index', {
          attendee: attendee
      })
  })
})

module.exports = router