///// setting server
const express = require('express')
const { createServer } = require('http')
const app = express()
const jsonParser = express.json()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// process.env.PORT
app.listen(process.env.PORT, function () {
  console.log(`server is up. port: ${process.env.PORT}`)
})


app.get('/', function (req, res) {
  app.use(express.static('front-build'))
  res.sendFile(__dirname + "/front-build/index.html")
})