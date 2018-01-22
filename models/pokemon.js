const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    _id : { type: Number, required: true },
    name : { type: String, required: true },
    pv : { type: Number, required: true },
    level : { type: Number, required: true },
    type : { type: String, required: true },
    attack : { type: Number, required: true },
    defense : { type: Number, required: true }
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
