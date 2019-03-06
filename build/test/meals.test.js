"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should(); // Test /Get route


describe('/Get meals', function () {
  it('get meals', function (done) {
    _chai.default.request(_app.default).get('/api/v1/meals').end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Test /Post route

describe('/POST meal', function () {
  it('post meal', function (done) {
    var meal = [{
      name: 'fruit',
      size: 'large',
      price: 500
    }, {
      name: 'egg',
      size: 'small',
      price: 50
    }];

    _chai.default.request(_app.default).post('/api/v1/meals').send(meal).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Test /Get:id route

describe('/GET/:id meal', function () {
  it('get meal by id', function (done) {
    _chai.default.request(_app.default).get("/api/v1/meals/ ".concat(2)).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Update meal test

describe('/PUT/:id meal', function () {
  it('update meal by id', function (done) {
    var meal = {
      name: 'egg',
      size: 'small',
      price: 50
    };

    _chai.default.request(_app.default).put("/api/v1/meals/ ".concat(2)).send(meal).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // delete meal test

describe('/DELETE/:id meal', function () {
  it('delete meal by id', function (done) {
    _chai.default.request(_app.default).delete("/api/v1/meals/ ".concat(2)).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=meals.test.js.map