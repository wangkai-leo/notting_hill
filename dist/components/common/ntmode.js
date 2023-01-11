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

var Fnav = function (_wepy$component) {
  _inherits(Fnav, _wepy$component);

  function Fnav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fnav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fnav.__proto__ || Object.getPrototypeOf(Fnav)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      label: {
        type: String
      }
    }, _this.watch = {}, _this.components = {}, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fnav, [{
    key: 'onLoad',
    value: function onLoad(options) {}
  }]);

  return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50bW9kZS5qcyJdLCJuYW1lcyI6WyJGbmF2IiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJ3YXRjaCIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImV2ZW50cyIsIm9wdGlvbnMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDakJDLEssR0FBUTtBQUNOQyxhQUFNO0FBQ0pDLGNBQUtDO0FBREQ7QUFEQSxLLFFBS1JDLEssR0FBTSxFLFFBRU5DLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBRVBDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7OzsyQkFGRkMsTyxFQUFTLENBQ2Y7Ozs7RUFkNkJDLGVBQUtDLFM7O2tCQUFsQlosSSIsImZpbGUiOiJudG1vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm5hdiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGxhYmVsOntcbiAgICAgICAgdHlwZTpTdHJpbmdcbiAgICAgIH0sXG4gICAgfVxuICAgIHdhdGNoPXtcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9O1xuICAgIGRhdGEgPSB7XG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgIH07XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuICAgIH07XG59XG4iXX0=