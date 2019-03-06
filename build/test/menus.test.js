"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var should = _chai.default.should(); // Test /Get route


describe('/Get menu', function () {
  it('get menu', function (done) {
    _chai.default.request(_app.default).get('/api/v1/menus').end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Test /Post route

describe('/POST menu', function () {
  it('post menu', function (done) {
    var menu = [{
      name: 'fruit',
      size: 'large',
      price: 500
    }, {
      name: 'egg',
      size: 'small',
      price: 50
    }];

    _chai.default.request(_app.default).post('/api/v1/menus').send(menu).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // Update menu test

describe('/PUT/:id menu', function () {
  it('update menu by id', function (done) {
    var menu = {
      name: 'egg',
      size: 'small',
      price: 50
    };

    _chai.default.request(_app.default).put("/api/v1/menus/ ".concat(3)).send(menu).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
}); // delete menus test api

describe('/DELETE/:id menus', function () {
  it('delete menus by id', function (done) {
    _chai.default.request(_app.default).delete("/api/v1/menus/ ".concat(3)).end(function (err, res) {
      res.should.have.property('status', 200);
      res.body.should.be.a('object');
      console.log(res.body);
      done();
    });
  });
});
//# sourceMappingURL=menus.test.js.map