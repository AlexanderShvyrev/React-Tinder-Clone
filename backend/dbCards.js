const mongoose = require('mongoose')

const CardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
});

module.exports = mongoose.model('cards', CardSchema)