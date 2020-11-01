const chai = require('chai'), chaiHttp = require('chai-http');
const assert = require('chai').assert;

chai.use(chaiHttp);
chai.should();

var API = require('../index.js').server;

describe('Test', () => {
    after(() => {
        API.close();
    });

    it('getCounter', (done) => {
        chai.request(API)
            .get('/counter')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it('getCounter_value_check', (done) => {
        chai.request(API)
            .get('/counter')
            .end((err, res) => {
                res.should.have.status(200);
                assert.propertyVal(res.body, 'counter', 2);
                done();
            });
    });
});

