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
        schoolId = savedSchool._id
        done()
      })
      .catch(err => {
        console.log(err)
        done()
      })
  })

  afterEach(done => {
    School.remove({ name: 'Lambda' })
      .then(res => {
        done()
      })
      .catch(err => {
        console.log(err)
        done()
      })
  })

  describe(`[GET] /api/schools`, () => {
    it('should get status 201', done => {
      chai.request(server).get('/api/schools').end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        console.log(res)
        expect(res.status).to.equal(201)
        done()
      })
    })
  })

  describe(`[GET] /api/schools`, () => {
    it('should get an array of schools', done => {
      chai.request(server).get('/api/schools').end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        console.log(res)
        expect(res.body).to.be.an('array')
        done()
      })
    })
  })

  describe(`[GET] /api/schools`, () => {
    it('should contain property: _id, name, rating', done => {
      chai.request(server).get('/api/schools').end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        const { _id, name, rating } = res.body[0]

        expect(_id).to.be.a('string')
        expect(name).to.be.a('string').and.equal('Lambda')
        expect(rating).to.be.a('string').and.equal('9')
        done()
      })
    })
  })
})
