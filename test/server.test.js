const assert = require('assert');
const request = require('supertest');
let server;

describe('GET /', function() {
  before(function() {
    server = require('../server');
  });

  after(function(done) {
    server.close(done);
  });

  it('responds with Hello remote world!', function(done) {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello remote world!\n', done);
  });
});
