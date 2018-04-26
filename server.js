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

server.post('/api/schools', (req, res) => {
  const { name, rating } = req.body
  const newSchool = new School({ name, rating })
  newSchool
    .save()
    .then(savedSchool => {
      School.find()
        .then(schools => {
          res.status(200).json(schools)
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

server.put('/api/schools/:id', (req, res) => {
  const { _id } = req.params
  const { name, rating } = req.body

  School.update(_id, { name, rating })
    .then(updateData => {
      // console.log(updateData)
      res.status(200).json(updateData)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})
module.exports = server
