const express = require('express')
const cors = require('cors')
const app = express()
const port = 3020
const configureDB = require('./Config/Database')
const route = require('./Config/Route')


app.use(cors())
app.use(express.json())
app.use(route)

app.listen(port, (req, res) => {
  console.log(`welcome to port ${port}`)
})
configureDB()
