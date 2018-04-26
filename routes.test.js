const server = require('./server')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHTTP = require('chai-http')
const School = require('./School')

const expect = chai.expect
const should = chai.should()

chai.use(chaiHTTP)

before(done => {
  mongoose.connect('mongodb://localhost/test', {}, err => {
    if (err) return console.log(err)
    console.log('Test Database connected')
  })
  done()
})

after(done => {
  mongoose.connection.close()
  done()
})

describe('Schools', () => {
  let schoolId
  beforeEach(done => {
    const newSchool = new School({
      name: 'Lambda',
      rating: '9'
    })
    newSchool.save((err, savedSchool) => {
      if (err) {
        console.log(err)
        done()
      }
      schoolId = savedSchool._id.toString()
      done()
    })
  })

  afterEach(done => {
    School.remove({}, err => {
      if (err) console.log(err)
      done()
    })
  })

  describe(`[GET] /api/schools`, () => {
    it('should get status 200', done => {
      chai.request(server).get('/api/schools').end((err, res) => {
        if (err) {
          console.log(err)
          return done()
        }
        expect(res).to.be.status(200)
        return done()
      })
    })
  })

  describe(`[GET] /api/schools`, () => {
    it('should get an array of school objects', done => {
      chai.request(server).get('/api/schools').end((err, res) => {
        if (err) {
          console.log(err)
          done()
        }
        expect(res.body).to.be.an('array').with.length(1)
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
        expect(_id).to.be.a('string').to.equal(schoolId)
        expect(name).to.be.a('string').and.equal('Lambda')
        expect(rating).to.be.a('string').and.equal('9')
        done()
      })
    })
  })

  describe(`[POST] /api/schools`, () => {
    it('should save a document to the db', done => {
      chai
        .request(server)
        .post('/api/schools')
        .send({ name: 'Berkeley', rating: '10' })
        .end((err, res) => {
          if (err) {
            console.log(err)
            done()
          }
          expect(res.body).to.be.an('array').and.length(2)
          done()
        })
    })
  })

  describe(`[PUT] /api/schools/:id`, () => {
    it('should update a document in the db', done => {
      chai
        .request(server)
        .put(`/api/schools/${schoolId}`)
        .send({ name: 'Berkeley', rating: '10' })
        .end((err, res) => {
          if (err) {
            console.log(err)
            done()
          }
          const { ok, nModified } = res.body
          expect(ok).to.equal(1)
          expect(nModified).to.equal(1)
          done()
        })
    })
  })
})
