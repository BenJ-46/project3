const { model, Schema } = require('mongoose')

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    bio:
    {
        type: String,
        required: true
    },
    devHist: {
        type: String,
        required: true
    },
    language: {
        // type Array on mongoDB
        type: String,
        required: true,
        // message: 'Please list languages'
    },
    collabList: { type: Array, "default": [2] }

}, { timestamps: true })


User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)


    
