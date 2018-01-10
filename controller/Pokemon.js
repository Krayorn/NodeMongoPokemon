const Pokemon = require('../models/Pokemon')

/*
    GET /api/pokemons
    Renvoie la liste de tous les pokemons en base
*/
exports.findAll = (req, res) => {
    Pokemon.find().then(pokemonsList => {
        res.json(pokemonsList)
    })
    .catch(err => res.status(500).send(err.message))
}

/*
    GET /api/pokemon/:name
    Renvoie le pokémon ayant pour nom le parametre passé en url
*/
exports.findByName = (req, res) => {
    Pokemon.find({ name: req.params.name})
    .then(pokemon => res.json(pokemon))
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


