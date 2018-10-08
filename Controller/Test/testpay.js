process.env.NODE_ENV = 'test'

let mongoose = require('../Model/Site')
let SiteModel = mongoose.model('Site')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()
chai.use(chaiHttp)

describe('Site', () => {
    let server = 'localhost';
    let user = {
        Username: "batman",
        busRoute: 177,
        start: "kaduwela",
        end: "kollupitiya",
        fare: "Sri Lankan",
        date: 100,
    }


    it('GET', done => {
        chai.request(server).get('/payment')
            .end((error, res) => {
                res.should.have.status(204)
                done()
            })
    })

    it('POST', done => {
        chai.request(server).post('/payment/')
            .set('content-type', 'application/json')
            .send(user)
            .end((error, res) => {
                res.should.have.status(201)
                res.body.should.have.be.a('object')
                done()
            })
    })

    it('POST', done => {
        user.Username = undefined
        chai.request(server).post('/payment')
            .set('content-type', 'application/json')
            .send()
            .end((error, res) => {
                res.should.have.status(400)
                res.body.should.have.be.a('object')
                done()
            })
    })

    it('GET', done => {
        chai.request(server).get('/payment')
            .end((error, res) => {
                res.should.have.status(200)
                res.body.should.have.be.a('array')
                res.body.length.should.be.eql(1)
                done()
            })
    })
})