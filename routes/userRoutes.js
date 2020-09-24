const router = require('express').Router()
const { User } = require('../models')

router.get('/users', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

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


module.exports = router

// Update One
// router.put('/users/:id', (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => res.sendStatus(200))
//     .catch(err => console.error(err))
// })

// SHOULD WE USE THESE ROUTES INSTEAD ///
// const router = require('express').Router()
// const { Item } = require('../models')

// router.get('/items', (req, res) => {
//   Item.find()
//     .then(items => res.json(items))
//     .catch(err => console.error(err))
// })

// router.post('/items', (req, res) => {
//   Item.create(req.body)
//     .then(item => res.json(item))
//     .catch(err => console.error(err))
// })

// router.put('/items/:id', (req, res) => {
//   Item.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => res.sendStatus(200))
//     .catch(err => console.error(err))
// })

// router.delete('/items/:id', (req, res) => {
//   Item.findByIdAndDelete(req.params.id)
//     .then(() => res.sendStatus(200))
//     .catch(err => console.error(err))
// })

// module.exports = router