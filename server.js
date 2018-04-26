const express = require('express')
const logger = require('morgan')
const School = require('./School')

const server = express()

server.use(logger('dev'))
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Work complete!' })
})

server.get('/api/schools', (req, res) => {
  School.find({}, (err, schools) => {
    if (err) {
      res.status(500).json({ error: 'Cannot find your school' })
    }
    res.status(200).json(schools)
  })
})

module.exports = server
