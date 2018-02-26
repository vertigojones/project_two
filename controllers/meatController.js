const express = require('express')
const router = express.Router({ mergeParams: true })
const MeatUser = require('../models/user')
const Meat = require('../models/meat')

// INDEX
router.get('/', (req, res) => {

    // find the meat user by route params defined in app.js
    MeatUser.findById(req.params.userId).then((attendee) => {

        // pass all meats and meat users to a view specifically for showing all meats
        const meats = attendee.meat
        res.render('meat/index', {
            attendee: attendee,
            meats: meats
        })
    })
})

// NEW
router.get('/new', (req, res) => {

    // pass the meat user id to this new view
    res.render('meat/new', {
        userId: req.params.userId
    })
})

// CREATE
router.post('/', (req, res) => {

    // get meat user we need to save meat to
    MeatUser.findById(req.params.userId).then((attendee) => {

        // once we have the meat user, take req.body and make a new Meat
        const newMeat = new Meat({
            image: req.body.image,
            name: req.body.name,
            species: req.body.species,
            classification: req.body.class,
            type: req.body.type
        })

        // push Meat to attendee.meats
        attendee.meat.push(newMeat)

        // save MeatUser
        return attendee.save()
    }).then((updatedMeatUser) => {

        // redirect to all meats
        res.redirect(`/users/${req.params.userId}/meats`)
    })
})

// SHOW
router.get('/:id', (req, res) => {

    // find meat user from userId route param
    MeatUser.findById(req.params.userId).then((attendee) => {

        // Use the .id method to extract a single meat from attendee.meats
        const meat = attendee.meat.id(req.params.id)

        // connect it to a meat/show view
        res.render('meat/show', {
            userId: req.params.userId,
            meat: meat
        })
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {

    // 
    MeatUser.findById(req.params.userId).then((attendee) => {
        const meat = attendee.meat.id(req.params.id)
        res.render('meat/edit', {
            userId: req.params.userId,
            meat: meat
        })
    })
})

// UPDATE
router.patch('/:id', (req, res) => {
    MeatUser.findById(req.params.userId).then((attendee) => {

        const meat = attendee.meat.id(req.params.id)
            image = req.body.image,
            name = req.body.name,
            species = req.body.species,
            classification = req.body.class,
            type = req.body.type

        // then save the meat user
        return attendee.save()
    }).then((updatedMeatUser) => {
        res.redirect(`/users/${updatedMeatUser._id}/meat/${req.params.id}`)
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    MeatUser.findById(req.params.userId).then((attendee) => {
        const meat = attendee.meat.id(req.params.id)
        meat.remove()
        return attendee.save()
    }).then(() => {
        res.redirect(`/users/${req.params.userId}/meats`)
    })
})


module.exports = router
