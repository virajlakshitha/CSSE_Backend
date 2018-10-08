process.env.NODE_ENV = 'test'

let mongoose = require('../Model/Site')
let SiteModel = mongoose.model('Site')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()
chai.use(chaiHttp)

describe('Site', () => {
    let server = 'localhost';
    let customer = {
        First_Name: "Dhanushi",
        Last_Name: "Umayangani",
        NIC_Passport_No: "982033314v",
        DateOfBirth: "1996-08-4",
        citizenship: "Sri Lankan",
        Deposit_Amount: 100,
        Username: "dhanu",
        Password: "123",
        Security_Question: "what is your name",
        Security_Answer: "dhanushi",
        Email_Address: "dumayangani@gmail.com",
        Address: "malabe",
        Mobile: "0777791154"
    }


    it('GET', done => {
        chai.request(server).get('/customer')
            .end((error, res) => {
                res.should.have.status(204)
                done()
            })
    })

    it('POST', done => {
        chai.request(server).post('/customer/')
            .set('content-type', 'application/json')
            .send(user)
            .end((error, res) => {
                res.should.have.status(201)
                res.body.should.have.be.a('object')
                done()
            })
    })

    it('POST', done => {
        customer.Username = undefined
        chai.request(server).post('/customer')
            .set('content-type', 'application/json')
            .send()
            .end((error, res) => {
                res.should.have.status(400)
                res.body.should.have.be.a('object')
                done()
            })
    })

    it('GET', done => {
        chai.request(server).get('/customer')
            .end((error, res) => {
                res.should.have.status(200)
                res.body.should.have.be.a('array')
                res.body.length.should.be.eql(1)
                done()
            })
    })
})