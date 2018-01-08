const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    name : String,
    pv : Number,
    level : Number,
    type : String,
    attack : Number,
    defense : Number
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
