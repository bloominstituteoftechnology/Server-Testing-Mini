const mongoose = require('mongoose')
const chai = require('chai')
const chaiHTTP = require('chai-http')

mongoose.connect('mongodb://localhost/test', {}, err => {
  if (err) return console.log(err)
  console.log('Test Database connected')
})

const expect = chai.expect
const server = require('./server')
const School = require('./School')
chai.use(chaiHTTP)

describe('Schools', () => {
  let schoolId
  beforeEach(done => {
    const newSchool = new School({
      name: 'Lambda',
      rating: '9'
    })
    newSchool
      .save()
      .then(savedSchool => {
        const schoolId = savedSchool._id
        done()
      })
      .catch(err => {
        console.log(err)
        done()
      })
  })
})

afterEach(done => {
  School.remove({}, err => {
    if (err) console.log(err)
    return done()
  })
})
