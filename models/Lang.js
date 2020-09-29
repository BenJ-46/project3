const { model, Schema } = require('mongoose')

const Lang = new Schema({
    
    language: {
        type: String,
        required: true,
    }

},{ timestamps: true })



module.exports = model('Lang', Lang)