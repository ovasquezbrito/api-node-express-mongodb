const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/product')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}))
app.use(bodyParser.json({limit: '50mb'}))

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1', productRoutes)

module.exports = app