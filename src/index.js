const express = require('express')
const { connectToDb } = require('./db/connect')
const { authenticateToken } = require('./middleware')
const tanks = require('./routes/tanks');
const accounts = require('./routes/accounts');

// --- --- --- --- --- --- --- --- --- 

const app = express()
const port = 3000

app.use(express.json());

connectToDb()

app.get('/', (req, res) => {
  res.send('OK')
})

app.use('/tanks', authenticateToken, tanks)
app.use('/accounts', accounts)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})