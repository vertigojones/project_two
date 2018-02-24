const express = require('express')
const router = express.Router({ mergeParams: true })
const MeatUser = require('../models/user')
const Meat = require('../models/meat')

// INDEX
router.get('/', (req, res) => {

    // find the meat user by route params defined in app.js
    MeatUser.findById(req.params.userId).then((attendee) => {

        // pass all meats and meat users to a view specifically for showing all meats
        const meats = attendee.meats
        res.render('meats/index', {
            attendee: attendee,
            meats: meats
        })
    })
})

// NEW
router.get('/new', (req, res) => {

    // pass the meat user ID to this new view
    res.render('meats/new', {
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
            class: req.body.class,
            type: req.body.type
        })

        // push Meat to attendee.meats
        attendee.meats.push(newMeat)

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
        const meat = attendee.meats.id(req.params.id)

        // connect it to a soda/show view
        res.render('meats/show', {
            userId: req.params.userId,
            meat: meat
        })
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {

    // 
    MeatUser.findById(req.params.userId).then((attendee) => {
        const meat = attendee.meats.id(req.params.id)
        res.render('meats/edit', {
            userId: req.params.userId,
            soda: soda
        })
    })
})

// UPDATE
router.patch('/:id', (req, res) => {
    Company.findById(req.params.companyId).then((company) => {

        // We don't have a nice method like findByIdAndUpdate here
        // so instead we need to manually change the sodas values
        const soda = company.sodas.id(req.params.id)
        soda.name = req.body.name
        soda.price = req.body.price
        soda.packaging = req.body.packaging
        soda.quantitySold = req.body.quantitySold

        // Then Save the company
        return company.save()
    }).then((updatedCompany) => {
        res.redirect(`/companies/${updatedCompany._id}/sodas/${req.params.id}`)
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    Company.findById(req.params.companyId).then((company) => {
        const soda = company.sodas.id(req.params.id)
        soda.remove()
        return company.save()
    }).then(() => {
        res.redirect(`/companies/${req.params.companyId}/sodas`)
    })
})


module.exports = router
