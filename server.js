require('colors')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const Pokemon = require('./controller/Pokemon')

const app = express()

app.use(helmet())
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
app.use(express.urlencoded({ extended: false }))

app.get('/api/pokemons', Pokemon.findAll)

app.get('/api/pokemons/:id', Pokemon.findById)

app.delete('/api/pokemons/:id', Pokemon.deleteById)

app.get('/api/pokemon/:name', Pokemon.findByName)

app.delete('/api/pokemon/:name', Pokemon.deleteByName)

app.post('/api/pokemon', Pokemon.createOne)

module.exports = app
