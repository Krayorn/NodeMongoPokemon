const app = require('./server')

const port = 3001

app.listen(port, () => {
  console.log(`api running on port ${port}`.blue) // eslint-disable-line
})
