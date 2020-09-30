const router = require('express').Router()
const { User } = require('../models')

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

// router.get('/users/un/:username', (req, res) => {
//   User.find({ username: req.params.username })
//     .then(users => res.json(users[0]))
//     .catch(err => console.error(err))
// })

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

