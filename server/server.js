require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

const searchRouter = require('./routes/searchRouter')

/** ---- MIDDLEWARE ---- */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //needed for angular requests
app.use(express.static('build'))

/** ---- ROUTES ---- */
app.use('/search', searchRouter)

/** ---- START SERVER ---- */
app.listen(port, function() {
    console.log('listening on port: ', port)
})