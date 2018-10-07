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
        First_Name: "Kaveen",
        Last_Name: "Abeywansa",
        NIC_Passport_No: "952033310v",
        DateOfBirth: "1995-07-21",
        citizenship: "Sri Lankan",
        Deposit_Amount: 100,
        Username: "batman",
        Password: "ironmansucks",
        Security_Question: "what is your name",
        Security_Answer: "batman",
        Email_Address: "kaveenmobi@gmail.com",
        Address: "Dehiwala",
        Mobile: "0777791160"
    }


    it('GET', done => {
        chai.request(server).get('/user')
            .end((error, res) => {
                res.should.have.status(204)
                done()
            })
    })

    it('POST', done => {
        chai.request(server).post('/user/')
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
        chai.request(server).post('/user')
            .set('content-type', 'application/json')
            .send()
            .end((error, res) => {
                res.should.have.status(400)
                res.body.should.have.be.a('object')
                done()
            })
    })

    it('GET', done => {
        chai.request(server).get('/user')
            .end((error, res) => {
                res.should.have.status(200)
                res.body.should.have.be.a('array')
                res.body.length.should.be.eql(1)
                done()
            })
    })
})