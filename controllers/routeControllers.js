const express = require('express')
const router = express.Router()
const MeatUser = require('../models/user')

// INDEX
router.get('/', (req, res) => {
    // get all meat users
    MeatUser.find().then((attendee) => {
        // send all meat users to homepage
        console.log('working!')
        res.render('user/index', {
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
        image: req.body.image,
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
        console.log(savedMeatUser)
        // redirect to the new meat user page
        res.redirect(`/users/${savedMeatUser._id}`)
    }).catch((err) => {
        console.log(err)
    })
})

// SHOW
router.get('/:id', (req, res) => {

    // find a single meat user
    MeatUser.findById(req.params.id).then((attendee) => {

        // render that into a handlebars view and pass the meast user from our db into hbs
        res.render('user/show', {
            attendee: attendee
        })
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {

    // find a single meat user using the route params above
    MeatUser.findById(req.params.id).then((attendee) => {

        // render into a handlebars view and pass the meat user from our db into hbs
        res.render('user/edit', {
            image: req.body.image,
            name: req.body.name,
            gender: req.body.gender,
            age: req.body.age,
            hobbies: req.body.hobbies,
            meat: req.body.meat,
            preparation: req.body.preparation,
            side: req.body.side,
            attendee: attendee
        })
    })
})

// UPDATE
router.patch('/:id', (req, res) => {

    // use the route params and form data to update the meat user
    MeatUser.findByIdAndUpdate(req.params.id, {
        image: req.body.image,
            name: req.body.name,
            gender: req.body.gender,
            age: req.body.age,
            hobbies: req.body.hobbies,
            meat: req.body.meat,
            preparation: req.body.preparation,
            side: req.body.side
    
        }, { new: true }).then((updatedMeatUser) => {

        // redirect to the show page once it successfully updates
        res.redirect(`/users/${updatedMeatUser._id}`)
    })
})

// DELETE
router.delete('/:id', (req, res) => {

    // use the params id to find and remove the meat user
    MeatUser.findByIdAndRemove(req.params.id).then(() => {
        res.redirect(`/users`)
    })
})

module.exports = router