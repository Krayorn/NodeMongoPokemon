const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    _id : Number,
    name : String,
    pv : Number,
    level : Number,
    type : String,
    attack : Number,
    defense : Number
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
