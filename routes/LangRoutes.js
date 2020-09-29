const router = require('express').Router()
const { Lang } = require('../models')

router.get('/users/:lang', (req, res) => {
    User.find({lang: req.params.lang})
      .then(user => res.json(user))
      .catch(err => console.error(err))
  })

// // Get All Collabs
// router.get('/collabs/', (req, res) => {
//   Collab.findById(req.params.id)
//     .then(collab => res.json(collab))
//     .catch(err => console.error(err))
// })

// // Get All Collabs - Username
// router.get('/collabs/un/:username', (req, res) => {
//   Collab.find({ username: req.params.username })
//     .then(collabs => res.json(collabs[0]))
//     .catch(err => console.error(err))
// })

// // Create One Collab
// router.post('/collabs', (req, res) => {
//   Collab.create(req.body)
//     .then(collab => res.json(collab))
//     .catch(err => console.error(err))
// })

module.exports = router