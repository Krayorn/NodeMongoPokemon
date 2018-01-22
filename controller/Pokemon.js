const Pokemon = require('../models/Pokemon')

/*
    GET /api/pokemons
    Renvoie la liste de tous les pokemons en base
*/
exports.findAll = (req, res) => {
    Pokemon.find().then(pokemonsList => res.json(pokemonsList))
    .catch(err => res.status(500).send(err.message))
}

/*
    GET /api/pokemons/:id
    Renvoie le pokémon ayant pour id le numéro passé en paramètre
*/
exports.findById = (req, res) => {
    Pokemon.findById(req.params.id)
    .then(pokemon => {
        if (pokemon === null) return Promise.reject(new Error(`Can't find pokemon with id = ${req.params.id}`))
        res.json(pokemon)
    })
    .catch(err => res.status(500).send(err.message))
}

/*
    DELETE /api/pokemon/:id
    Supprime le pokémon ayant pour id le parametre passé en url
*/
exports.deleteById = (req, res) => {
    Pokemon.deleteOne({ _id: req.params.id })
    .then(pokemonDeleted => res.send(`Pokemon ${req.params.id} deleted`))
    .catch(err => res.status(500).send(err.message))
}

/*
    GET /api/pokemon/:name
    Renvoie le pokémon ayant pour nom le parametre passé en url
*/
exports.findByName = (req, res) => {
    Pokemon.find({ name: req.params.name})
    .then(pokemon => {
        if (pokemon === null) return Promise.reject(new Error(`Can't find pokemon with name = ${req.params.name}`))
        res.json(pokemon)
    })
    .catch(err => res.status(500).send(err.message))
}

/*
    DELETE /api/pokemon/:name
    Supprime le pokémon ayant pour nom le parametre passé en url
*/
exports.deleteByName = (req, res) => {
    Pokemon.deleteOne({name: req.params.name})
    .then(pokemonDeleted => res.send(`Pokemon ${req.params.name} deleted`))
    .catch(err => res.status(500).send(err.message))
}

/*
    POST /api/pokemon
    Crée un Pokémon avec les informations passés via POST
*/
exports.createOne = (req, res) => {
    Pokemon.create(req.body)
    .then(pokemon => res.send(`Pokemon ${req.body.name} created, ${pokemon}`))
    .catch(err => res.status(500).send(err.message))
}

