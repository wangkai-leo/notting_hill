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
      readonly: {
        type: Boolean,
        twoWay: true
      },
      checked_index: {
        type: Number,
        twoWay: true
      },
      checked_name: {
        type: String,
        default: ''
      },
      ntkey: {
        type: String
      },
      label: {
        type: String
      },
      ntrange: {
        type: Array,
        default: false,
        twoWay: true
      }

    }, _this.watch = {
      ntrange: function ntrange() {
        this.checked_name = this.ntrange[0][this.ntkey];
        this.$apply();
      }
    }, _this.components = {}, _this.data = {}, _this.methods = {
      bindChange: function bindChange(e) {
        this.checked_index = e.detail.value;
        this.checked_name = this.ntrange[this.checked_index][this.ntkey];
        this.$emit('change');
        this.$apply();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fnav, [{
    key: 'onLoad',
    value: function onLoad(options) {}
  }]);

  return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50cGlja2VyLmpzIl0sIm5hbWVzIjpbIkZuYXYiLCJwcm9wcyIsInJlYWRvbmx5IiwidHlwZSIsIkJvb2xlYW4iLCJ0d29XYXkiLCJjaGVja2VkX2luZGV4IiwiTnVtYmVyIiwiY2hlY2tlZF9uYW1lIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm50a2V5IiwibGFiZWwiLCJudHJhbmdlIiwiQXJyYXkiLCJ3YXRjaCIsIiRhcHBseSIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImJpbmRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkZW1pdCIsImV2ZW50cyIsIm9wdGlvbnMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxnQkFBVTtBQUNSQyxjQUFNQyxPQURFO0FBRVJDLGdCQUFRO0FBRkEsT0FESjtBQUtOQyxxQkFBZTtBQUNiSCxjQUFNSSxNQURPO0FBRWJGLGdCQUFRO0FBRkssT0FMVDtBQVNORyxvQkFBYztBQUNaTCxjQUFNTSxNQURNO0FBRVpDLGlCQUFRO0FBRkksT0FUUjtBQWFOQyxhQUFPO0FBQ0xSLGNBQU1NO0FBREQsT0FiRDtBQWdCTkcsYUFBTztBQUNMVCxjQUFNTTtBQURELE9BaEJEO0FBbUJOSSxlQUFTO0FBQ1BWLGNBQU1XLEtBREM7QUFFUEosaUJBQVMsS0FGRjtBQUdQTCxnQkFBUTtBQUhEOztBQW5CSCxLLFFBMEJSVSxLLEdBQVE7QUFDTkYsYUFETSxxQkFDSTtBQUNSLGFBQUtMLFlBQUwsR0FBb0IsS0FBS0ssT0FBTCxDQUFhLENBQWIsRUFBZ0IsS0FBS0YsS0FBckIsQ0FBcEI7QUFDQSxhQUFLSyxNQUFMO0FBQ0Q7QUFKSyxLLFFBTVJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osYUFBS2YsYUFBTCxHQUFxQmUsRUFBRUMsTUFBRixDQUFTQyxLQUE5QjtBQUNBLGFBQUtmLFlBQUwsR0FBb0IsS0FBS0ssT0FBTCxDQUFhLEtBQUtQLGFBQWxCLEVBQWlDLEtBQUtLLEtBQXRDLENBQXBCO0FBQ0EsYUFBS2EsS0FBTCxDQUFXLFFBQVg7QUFDQSxhQUFLUixNQUFMO0FBQ0Q7QUFOTyxLLFFBVVZTLE0sR0FBUyxFOzs7OzsyQkFGRkMsTyxFQUFTLENBQ2Y7Ozs7RUE3QytCQyxlQUFLQyxTOztrQkFBbEI1QixJIiwiZmlsZSI6Im50cGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZuYXYgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBjaGVja2VkX2luZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGNoZWNrZWRfbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDonJ1xuICAgIH0sXG4gICAgbnRrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbnRyYW5nZToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG5cbiAgfVxuICB3YXRjaCA9IHtcbiAgICBudHJhbmdlKCkge1xuICAgICAgdGhpcy5jaGVja2VkX25hbWUgPSB0aGlzLm50cmFuZ2VbMF1bdGhpcy5udGtleV07XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZENoYW5nZShlKSB7XG4gICAgICB0aGlzLmNoZWNrZWRfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuY2hlY2tlZF9uYW1lID0gdGhpcy5udHJhbmdlW3RoaXMuY2hlY2tlZF9pbmRleF1bdGhpcy5udGtleV07XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnKVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9LFxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICB9XG4gIGV2ZW50cyA9IHtcbiAgfTtcbn1cbiJdfQ==