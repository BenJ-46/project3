const router = require('express').Router()
const { Lang } = require('../models')


// Get All langs
router.get('/lang', (req, res) => {
  Lang.find()
    .then(lang => res.json(lang))
    .catch(err => console.error(err))
})

// Create One Collab
// router.post('/langs', (req, res) => {
//     lang.find(lang: req.params.lang)
//       .then(lang => res.json(lang))
//       .catch(err => console.error(err))
//   })

module.exports = router