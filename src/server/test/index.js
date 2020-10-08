const chai = require('chai')
let chaiHttp = require('chai-http');
const { postsFixture } = require('./posts.fixture')
const POSTS_PATH = '/api/v1/posts'
chai.use(chaiHttp);
const server = require('../index');
let should = chai.should();

describe('Get Posts Service', () => {
    describe('getPosts', () => {
        it('should return list of posts', (done) => {
            chai.request(server)
                .get(POSTS_PATH)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('result');
                    done();
                });
        })
    })
})