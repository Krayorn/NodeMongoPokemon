const mongoose = require('mongoose')
const app = require('./server')

const port = 3001

app.set('ip', 'localhost')
app.set('port', 3001)


mongoose.Promise = global.Promise

const startApp = app => {
    return new Promise((resolve, reject) => {
        const server = app.listen(app.get('port'), app.get('ip'), () => {
            console.log(`Api: ready`.blue)
            return resolve()
        })
        server.on('error', reject)
    })
}

mongoose.connect('mongodb://localhost/pokemons', {useMongoClient:true})
    .then(() => console.log(`MongoDB: ready`.blue))
    .then(() => startApp(app))
    .then(() => console.log(`App running on ${app.get('ip')}:${app.get('port')}`.yellow))
    .catch( err => console.log(err.message.bgRed.yellow))

