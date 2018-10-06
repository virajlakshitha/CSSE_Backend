var expect  = require('chai').expect;
var request = require('request');

it('Node JS Connect', function(done) {
    request('http://localhost:3001' , function(error, response, body) {
        expect(body).to.equal('Backend server running in port 3001');
        done();
    });
});
it('MongoDB Connect', function(done) {
    request('http://localhost:27017/csse' , function(error, response, body) {
        expect(body).to.equal('Connected to MongoDB');
        done();
    });
});
it('Main page status', function(done) {
    request('http://localhost:3001' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('About page content', function(done) {
    request('http://localhost:8080/about' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});