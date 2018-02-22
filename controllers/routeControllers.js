const express = require('express')
const router = express.Router()
const MeatUser = require('../models/user')

// INDEX
router.get('/', (req, res) => {
    // get all meat users
    MeatUser.find().then((attendee) => {
        // send all meat users to homepage
        console.log('working!')
        res.render('views/index', {
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
    const newMeatUser = new MeatUser({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        hobbies: req.body.hobbies,
        meat: req.body.meat,
        preparation: req.body.preparation,
        side: req.body.side
    })

    // save the new meat user
    newMeatUser.save().then((savedMeatUser) => {

        // redirect to the new meat user page
        res.redirect(`/user/${savedMeatUser._id}`)
    })
})

// SHOW
router.get('/:id', (req, res) => {

    // find a single meat user
    MeatUser.findById(req.params.id).then((attendee) => {

        // render that into a handlebars view and pass the company from our db into hbs
        res.render('user/show', {
            attendee: attendee
        })
    })
})

