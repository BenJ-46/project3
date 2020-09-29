const router = require('express').Router()
const { Lang } = require('../models')
<<<<<<< HEAD

router.get('/users/:lang', (req, res) => {
    User.find({lang: req.params.lang})
      .then(user => res.json(user))
      .catch(err => console.error(err))
  })
=======
>>>>>>> d8773eb142c8f53e5baac83ebe9a04c227d98141


// Get All langs
router.get('/lang', (req, res) => {
  Lang.find(req.params.lang)
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