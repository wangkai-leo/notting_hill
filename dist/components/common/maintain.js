'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
      label: {
        type: String
      },
      ntvalue: {
        type: Object,
        twoWay: true
      },
      ntkey: {
        type: String
      }
    }, _this.watch = {}, _this.components = {}, _this.data = {
      user: null,
      department: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.user = _wepy2.default.getStorageSync('user');
      this.department = _wepy2.default.getStorageSync('office_line');
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50YWluLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJudHZhbHVlIiwiT2JqZWN0IiwidHdvV2F5IiwibnRrZXkiLCJ3YXRjaCIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlciIsImRlcGFydG1lbnQiLCJtZXRob2RzIiwib3B0aW9ucyIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQztBQURELE9BREQ7QUFJTkMsZUFBUztBQUNQRixjQUFNRyxNQURDO0FBRVBDLGdCQUFRO0FBRkQsT0FKSDtBQVFOQyxhQUFPO0FBQ0xMLGNBQU1DO0FBREQ7QUFSRCxLLFFBWVJLLEssR0FBUSxFLFFBRVJDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxZQUFLLElBREE7QUFFTEMsa0JBQVc7QUFGTixLLFFBSVBDLE8sR0FBVSxFOzs7OzsyQkFFSEMsTyxFQUFTO0FBQ2QsV0FBS0gsSUFBTCxHQUFZSSxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQSxXQUFLSixVQUFMLEdBQWdCRyxlQUFLQyxjQUFMLENBQW9CLGFBQXBCLENBQWhCO0FBQ0Q7Ozs2QkFDUSxDQUNSOzs7O0VBNUJnQ0QsZUFBS0UsUzs7a0JBQW5CbEIsSyIsImZpbGUiOiJtYWludGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbnR2YWx1ZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBudGtleToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgfVxuICB3YXRjaCA9IHtcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICB9O1xuICBkYXRhID0ge1xuICAgIHVzZXI6bnVsbCxcbiAgICBkZXBhcnRtZW50OicnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHRoaXMuZGVwYXJ0bWVudD13ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpXG4gIH1cbiAgb25TaG93KCkge1xuICB9XG59XG4iXX0=