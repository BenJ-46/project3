const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  const { name, email, username, password } = req.body
  User.register(new User({ name, email, username }), password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/users/login', (req, res) => {
  const { username, password } = req.body
  User.authenticate()(username, password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

// router.get('/users/items', passport.authenticate('jwt'), (req, res) => {
//   res.json(req.user)
// })

router.get('/users', (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

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

