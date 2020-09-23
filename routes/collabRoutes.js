const router = require('express').Router()
const { Collab } = require('../models')

// Get All Collabs
router.get('/collabs/:id', (req, res) => {
  Collab.findById(req.params.id)
    .then(collab => res.json(collab))
    .catch(err => console.error(err))
})

// Get All Collabs - Username
router.get('/collabs/un/:username', (req, res) => {
  Collab.find({ username: req.params.username })
    .then(collabs => res.json(collabs[0]))
    .catch(err => console.error(err))
})

// Create One Collab
router.post('/collabs', (req, res) => {
  Collab.create(req.body)
    .then(collab => res.json(collab))
    .catch(err => console.error(err))
})

module.exports = router