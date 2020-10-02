const router = require('express').Router()
const { User } = require('../models')

// CodeIn ROUTES //
// GET User
router.get('/users', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => console.error(err))
})
// GET User Name
router.get('/users/:name', (req, res) => {
  User.find({ name: req.params.name })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// POST one User/:name & relation it w/ collabList
router.post('/users/:name', (req, res) => {
  // User.collabList.push(1)
  //   .then(user => res.json(user))
  //   .catch(err => console.error(err))
  console.log(req.body)
  User.updateOne({ name: req.params.name},
    {
      $push: {
        collabList: req.body.name
         
      }
    },function (err)
    {
      if (err) throw err 
    });
})

module.exports = router