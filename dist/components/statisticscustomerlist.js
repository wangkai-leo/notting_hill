'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Array,
        twoWay: true
      }
    }, _this.data = {}, _this.watch = {}, _this.methods = {
      goToDetail: function goToDetail(e) {
        var id = e.currentTarget.dataset.id;
        _wepy2.default.navigateTo({ url: '/pages/common/server/customer?id=' + id });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjdXN0b21lcmxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJ0d29XYXkiLCJkYXRhIiwid2F0Y2giLCJtZXRob2RzIiwiZ29Ub0RldGFpbCIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsS0FERjtBQUVKQyxnQkFBUTtBQUZKO0FBREEsSyxRQU1SQyxJLEdBQU8sRSxRQUVQQyxLLEdBQVEsRSxRQUVSQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDSztBQUNYLFlBQUlDLEtBQUdELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixFQUEvQjtBQUNBRyx1QkFBS0MsVUFBTCxDQUFnQixFQUFDQyxLQUFJLHNDQUFvQ0wsRUFBekMsRUFBaEI7QUFDRDtBQUpPLEs7Ozs7OzZCQU1ELENBRVI7Ozs2QkFDUSxDQUVSOzs7O0VBdEJnQ0csZUFBS0csUzs7a0JBQW5CakIsSyIsImZpbGUiOiJzdGF0aXN0aWNzY3VzdG9tZXJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICB9O1xuICB3YXRjaCA9IHtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGdvVG9EZXRhaWwoZSl7XG4gICAgICBsZXQgaWQ9ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe3VybDonL3BhZ2VzL2NvbW1vbi9zZXJ2ZXIvY3VzdG9tZXI/aWQ9JytpZH0pO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIFxuICB9XG4gIG9uU2hvdygpIHtcblxuICB9XG59XG4iXX0=