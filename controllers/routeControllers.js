const express = require('express')
const router = express.Router()
const MeatUser = require('../models/user')

// INDEX
router.get('/', (req, res) => {
    // get all meat users
    MeatUser.find().then((attendee) => {
        // send all meat users to homepage
        res.render('../views/index', {
            attendee: attendee
        })
    })
})

// NEW 
router.get('/new', (req, res) => {
    res.render('user/new')
})

// CREATE
router.post('/', (req, res) => {
    const newMeatUser= new MeatUser({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      hobbies: req.body.hobbies,
      meat: req.body.meat,
      preparation: req.body.preparation,
      side: req.body.side
    })
  
    // save the new company
    newMeatUser.save().then((savedMeatUser) => {
  
      // redirect to the new companies page
      res.redirect(`/user/${savedMeatUser._id}`)
    })
  })


