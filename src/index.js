const express = require('express')
const bodyParser = require('body-parser')

const {
  connectToDb
} = require('./db/connect')

var tanks = require('./routes/tanks');

const app = express()
const port = 3000

app.use(express.json());

connectToDb()

app.get('/', (req, res) => {
  res.send('Hello World Tad!')
})

app.use('/tanks', tanks)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})