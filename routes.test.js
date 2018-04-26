const server = require('./server')
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHTTP = require('chai-http')
const School = require('./School')

const expect = chai.expect
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
    newSchool
      .save()
      .then(savedSchool => {
        schoolId = savedSchool._id.toString()
      })
      .catch(err => {
        console.log(err)
      })
    done()
  })

  afterEach(done => {
    School.remove({ name: 'Lambda' }).then(res => {}).catch(err => {
      console.log(err)
    })
    done()
  })

  // end((err, res) => {
  //   if (err) {
  //     console.log(err)
  //     done()
  //   }
  //   expect(res.status).to.equal(201)
  //   done()
  // })

  describe(`[GET] /api/schools`, () => {
    it('should get status 201', done => {
      chai
        .request(server)
        .get('/api/schools')
        .then(res => {
          expect(res).to.be.status(201)
        })
        .catch(err => console.log(err))
      done()
    })
  })

  describe(`[GET] /api/schools`, () => {
    it('should get an array of school objects', done => {
      chai
        .request(server)
        .get('/api/schools')
        .then(res => {
          expect(res.body).to.be.an('array').with.length(1)
        })
        .catch(err => console.log(err))
      done()
    })
  })

  describe(`[GET] /api/schools`, () => {
    it('should contain property: _id, name, rating', done => {
      chai
        .request(server)
        .get('/api/schools')
        .then(res => {
          const { _id, name, rating } = res.body[0]
          expect(_id).to.be.a('string').to.equal(schoolId)
          expect(name).to.be.a('string').and.equal('Lambda')
          expect(rating).to.be.a('string').and.equal('9')
        })
        .catch(err => console.log(err))
      done()
    })
  })
})
