const router = require('express').Router()
const { User } = require('../models')

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.get('/users/un/:username', (req, res) => {
  User.find({ username: req.params.username })
    .then(users => res.json(users[0]))
    .catch(err => console.error(err))
})

router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $push : { items: req.body } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
