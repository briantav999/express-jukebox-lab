const mongoose = require('mongoose')

const trackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type:String, 
        required: true
    }
})

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;