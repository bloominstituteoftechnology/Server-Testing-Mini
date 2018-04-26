const mongoose = require("mongoose");
const chai = require("chai");
const chaiHTTP = require("chai-http");

const expect = chai.expect;
chai.use(chaiHTTP);

const server = require("./server");
const shopkin = "./shopkin";

before(done => {
  mongoose.connect("mongodb://localhost/test", {}, err => {
    if (err) return console.log(err);
    console.log("Test DB Connection");
  });
  done();
});
after(done => {
  mongoose.connection.close();
  done();
});

describe("Shopkins", () => {
  let shopkinId;

  beforeEach(done => {
    const newShopkin = new Shopkin({
      name: "Apple Blossom",
      genre: "Apple"
    });
    newShopkin
      .save()
      .then(savedShopkin => {
        shopkinId = savedShopkin._id.toString();
      })
      .catch(err => {
        console.log(err);
      });
    done();
  });

  afterEach(done => {
    Shopkin.remove({ name: "Apple Blossom" })
      .then(res => {
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });

  describe(`[GET] /api/shopkins`, () => {
    it("should get a list of all the shopkins in db", done => {
      chai
        .request(server)
        .get("/api/shopkins")
        .then(res => {
          expect(res).to.be.status(201);
        })
        .catch(err => console.log(err));
      done();
    });
  });

  describe(`[GET] /api/shopkins`, () => {
      it('should be an array of shopkin objects', done => {
          chai
            .request(server)
            .get('/api/shopkins')
            .then(res => {
                expect(res.body).to.be.an('array').with.length(1)
            })
            .catch(err => console.log(err))
                done()
            })
      })

    describe(`[Get] /api/shopkins`, () => {
        it('should contain propert: _id, name, genre', done => {
            chai
                .request(server)
                .get('/api/shopkins')
                .then(res => {
                    const {_id, name, genre } = res.body[0]
                    expect(_id).to.be.a('string').to.equal(schoolId)
                    expect(name).to.be.a('string').and.equal('Apple Blossom')
                    expect(genre).to.be.a('string').and.equal('apple')
                })
                .catch(err => console.log(err))
                done()
        })
    })
  })

