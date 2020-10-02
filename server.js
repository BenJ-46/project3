// require('dotenv').config()
const express = require('express')
const { join } = require('path')

// // bring in passport
// const passport = require('passport')
// // bring in possport local strategy 'propt' 
// const { Strategy } = require('passport-local')
// // Need Strategy and Extract of JWT
// const { Strategy: JWTStrategy, ExtractJwt} = require('passport-jwt')
// // bring in user model from models folder
// const { User } = require('./models')

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'client', 'build')))
}

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// PASSPORT MIDDLE WARE //
// app.use(passport.initialize())
// app.use(passport.session())
// rules of Passport itself && use auth off of User Model
// passport.use(new Strategy(User.authenticate()))
// Serialize && Deserialize 1 USER
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

// passport.use(new JWTStrategy({
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.SECRET
// }, ({ id }, cb) => User.findById(id)
// .then(user => cb(null, user))
// .catch(err => cb(err))
// ))

app.use(require('./routes'))

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
  })
}

require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))


  