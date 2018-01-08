require('colors')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon')

mongoose.connect('mongodb://localhost/pokemons')

const app = express()

app.use(helmet())
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))

app.get('/api/pokemons', (req, res) => {
    Pokemon.find({}, (err, data) => {
        if (err) res.send(err)
        return res.send(data)
    })
})

app.get('/api/pokemon/:name', (req, res) => {
    Pokemon.find({ name: req.params.name}, (err, data) => {
        if (err) res.send(err)
        return res.send(data)
    })
})

module.exports = app
