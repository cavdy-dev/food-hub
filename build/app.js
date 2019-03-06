"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _verifyToken = _interopRequireDefault(require("./middleware/verifyToken"));

var _Login = _interopRequireDefault(require("./routes/Login"));

var _Meal = _interopRequireDefault(require("./routes/Meal"));

var _Order = _interopRequireDefault(require("./routes/Order"));

var _Menu = _interopRequireDefault(require("./routes/Menu"));

var _Register = _interopRequireDefault(require("./routes/Register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// body parser to read the data
// instantiate expressjs
var app = (0, _express.default)();
var PORT = process.env.PORT || 5900;
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.engine('handlebars', (0, _expressHandlebars.default)({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
  res.render('index');
}); // creating the api version route

app.use('/api/login', _Login.default);
app.use('/api/v1/meals', _Meal.default);
app.use('/api/v1/menus', _Menu.default);
app.use('/api/v1/orders', _verifyToken.default, _Order.default);
app.use('/api/register', _Register.default); // listening to our port

app.listen(PORT, function () {
  console.log('server running on port');
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map