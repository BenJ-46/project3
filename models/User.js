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
    lang: {
        // type Array on mongoDB
        type: Array,
        required: true,
        // message: 'Please list languages'
    },

}, { timestamps: true })


module.exports = model('User', User)


    
