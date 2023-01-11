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
      },
      placeholder: {
        type: String
      },
      ntvalue: {
        type: Object,
        twoWay: true
      },
      ntkey: {
        type: String
      },
      nttype: {
        type: String,
        default: 'text'
      },
      readonly: {
        type: Boolean,
        default: true,
        twoWay: true
      }
    }, _this.watch = {}, _this.components = {}, _this.data = {}, _this.methods = {
      bindInput: function bindInput(e) {
        this.ntvalue[this.ntkey] = e.detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fnav, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.$apply();
    }
  }]);

  return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50aXRlbS5qcyJdLCJuYW1lcyI6WyJGbmF2IiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJwbGFjZWhvbGRlciIsIm50dmFsdWUiLCJPYmplY3QiLCJ0d29XYXkiLCJudGtleSIsIm50dHlwZSIsImRlZmF1bHQiLCJyZWFkb25seSIsIkJvb2xlYW4iLCJ3YXRjaCIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImJpbmRJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImV2ZW50cyIsIm9wdGlvbnMiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDakJDLEssR0FBUTtBQUNOQyxhQUFNO0FBQ0pDLGNBQUtDO0FBREQsT0FEQTtBQUlOQyxtQkFBWTtBQUNWRixjQUFLQztBQURLLE9BSk47QUFPTkUsZUFBUTtBQUNOSCxjQUFLSSxNQURDO0FBRU5DLGdCQUFPO0FBRkQsT0FQRjtBQVdOQyxhQUFNO0FBQ0pOLGNBQUtDO0FBREQsT0FYQTtBQWNOTSxjQUFPO0FBQ0xQLGNBQUtDLE1BREE7QUFFTE8saUJBQVE7QUFGSCxPQWREO0FBa0JOQyxnQkFBUztBQUNQVCxjQUFLVSxPQURFO0FBRVBGLGlCQUFRLElBRkQ7QUFHUEgsZ0JBQU87QUFIQTtBQWxCSCxLLFFBd0JSTSxLLEdBQU0sRSxRQUVOQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNJO0FBQ1YsYUFBS2IsT0FBTCxDQUFhLEtBQUtHLEtBQWxCLElBQXlCVSxFQUFFQyxNQUFGLENBQVNDLEtBQWxDO0FBQ0Q7QUFITyxLLFFBUVZDLE0sR0FBUyxFOzs7OzsyQkFIRkMsTyxFQUFTO0FBQ2QsV0FBS0MsTUFBTDtBQUNEOzs7O0VBckM2QkMsZUFBS0MsUzs7a0JBQWxCMUIsSSIsImZpbGUiOiJudGl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm5hdiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGxhYmVsOntcbiAgICAgICAgdHlwZTpTdHJpbmdcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlcjp7XG4gICAgICAgIHR5cGU6U3RyaW5nXG4gICAgICB9LFxuICAgICAgbnR2YWx1ZTp7XG4gICAgICAgIHR5cGU6T2JqZWN0LFxuICAgICAgICB0d29XYXk6dHJ1ZVxuICAgICAgfSxcbiAgICAgIG50a2V5OntcbiAgICAgICAgdHlwZTpTdHJpbmdcbiAgICAgIH0sXG4gICAgICBudHR5cGU6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgZGVmYXVsdDondGV4dCdcbiAgICAgIH0sXG4gICAgICByZWFkb25seTp7XG4gICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDp0cnVlLFxuICAgICAgICB0d29XYXk6dHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICB3YXRjaD17XG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICBkYXRhID0ge1xuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJpbmRJbnB1dChlKXtcbiAgICAgICAgdGhpcy5udHZhbHVlW3RoaXMubnRrZXldPWUuZGV0YWlsLnZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9O1xufVxuIl19