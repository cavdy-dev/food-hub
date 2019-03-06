"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should(); // Test /Get route


describe('/Get order', function () {
  it('get orders', function (done) {
    _chai.default.request(_app.default).get('/api/v1/orders').end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Test /Post route

describe('/POST order', function () {
  it('post order', function (done) {
    var order = [{
      name: 'fruit',
      size: 'large',
      price: 500
    }, {
      name: 'egg',
      size: 'small',
      price: 50
    }];

    _chai.default.request(_app.default).post('/api/v1/orders').send(order).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // // Test /Get:id route

describe('/GET/:id order', function () {
  it('get order by id', function (done) {
    _chai.default.request(_app.default).get("/api/v1/orders/ ".concat(3)).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Update Order test

describe('/PUT/:id order', function () {
  it('update order by id', function (done) {
    var order = {
      name: 'egg',
      size: 'small',
      price: 50
    };

    _chai.default.request(_app.default).put("/api/v1/orders/ ".concat(3)).send(order).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // delete order test api

describe('/DELETE/:id order', function () {
  it('delete order by id', function (done) {
    _chai.default.request(_app.default).delete("/api/v1/orders/ ".concat(3)).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=orders.test.js.map