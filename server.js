const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const School = require('./School')
const server = express()

server.use(bodyParser.json())
server.use(morgan('dev'))

server.get('api/schools', (req, res) => {
  School.find({}, (err, schools) => {
    if (err) {
      res.status(500).json({ error: 'Cannot find your school' })
    }
    res.status(schools)
  })
})

module.exports = { server }
