const chai = require('chai')
let chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised')
const { postsFixture } = require('./posts.fixture')
const POSTS_PATH = '/api/v1/posts'
chai.use(chaiAsPromised)
const server = require('../index');
chai.use(chaiHttp);
let should = chai.should();

describe('Get Posts Service', () => {
    describe('getPosts', () => {
        it('should return list of posts', (done) => {
            chai.request(server)
                .get(POSTS_PATH)
                .send(postsFixture)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('result');
                    done();
                });
        })
    })
})