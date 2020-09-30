const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
// 
// Create One user to Register
router.post('/users/register', (req, res) => {
  const { name, username, email, bio, devHist, language, password } = req.body
  User.register(new User({ name, username, email, bio, devHist, language }), password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// User Login Route w/ Authorization
router.post('/users/login', (req, res) => {
  const { username, password } = req.body
  User.authenticate()(username, password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

// this gives the jsonWebToken
router.get('/users/posts', passport.authenticate('jwt'), (req, res) => {
  res.sendStatus(200)
  res.json(req.user)
})

// CodeIn ROUTES
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
// POST one User
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

