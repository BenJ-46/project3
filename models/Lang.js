const { model, Schema } = require('mongoose')

const Lang = new Schema({
    
    lang: {
        type: Array,
        required: true,
    }

},{ timestamps: true })



module.exports = model('Lang', Lang)