const { model, Schema } = require('mongoose')

const Collab = new Schema({
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
    lang: {
        type: String,
        required: true,
        message: 'Please list languages'

    },
    devHist: {
        type: String,
        required: true
    },
    { timestamps: true })



module.exports = model('Collab', Collab)
    
