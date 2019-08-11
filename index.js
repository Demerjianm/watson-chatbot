// index.js
require('dotenv').config()
const express = require('express')

const bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000

const bodyParserJsonConfig = () => ({
  parameterLimit: DEFAULT_PARAMETER_LIMIT,
  limit: DEFAULT_BODY_SIZE_LIMIT
})

const app = express()
const ask = require('./controller').ask

app.use(bodyParser.json(bodyParserJsonConfig()))

app.get('/', (req, res) => res.send('Hola Greg!'))
app.post('/ask', ask)

// this starts the sever for us. this will

app.listen(3000, () => console.log(`🚀 Server ready at ${3000}`))
