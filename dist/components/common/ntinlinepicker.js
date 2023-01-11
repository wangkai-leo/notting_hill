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
      ntpickertype: {
        type: String,
        twoWay: true
      },
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
      ntrange: {
        type: Array,
        default: false,
        twoWay: true
      }

    }, _this.watch = {}, _this.components = {}, _this.data = {}, _this.methods = {
      bindDateChange: function bindDateChange(e) {
        this.checked_name = e.detail.value;
        this.$emit('change', this.checked_name);
      },
      bindChange: function bindChange(e) {
        this.checked_index = e.detail.value;
        this.checked_name = this.ntrange[this.checked_index][this.ntkey];
        this.$emit('change', this.checked_index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50aW5saW5lcGlja2VyLmpzIl0sIm5hbWVzIjpbIkZuYXYiLCJwcm9wcyIsIm50cGlja2VydHlwZSIsInR5cGUiLCJTdHJpbmciLCJ0d29XYXkiLCJyZWFkb25seSIsIkJvb2xlYW4iLCJjaGVja2VkX2luZGV4IiwiTnVtYmVyIiwiY2hlY2tlZF9uYW1lIiwiZGVmYXVsdCIsIm50a2V5IiwibnRyYW5nZSIsIkFycmF5Iiwid2F0Y2giLCJjb21wb25lbnRzIiwiZGF0YSIsIm1ldGhvZHMiLCJiaW5kRGF0ZUNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRlbWl0IiwiYmluZENoYW5nZSIsImV2ZW50cyIsIm9wdGlvbnMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxvQkFBYTtBQUNYQyxjQUFNQyxNQURLO0FBRVhDLGdCQUFRO0FBRkcsT0FEUDtBQUtOQyxnQkFBVTtBQUNSSCxjQUFNSSxPQURFO0FBRVJGLGdCQUFRO0FBRkEsT0FMSjtBQVNORyxxQkFBZTtBQUNiTCxjQUFNTSxNQURPO0FBRWJKLGdCQUFRO0FBRkssT0FUVDtBQWFOSyxvQkFBYztBQUNaUCxjQUFNQyxNQURNO0FBRVpPLGlCQUFTO0FBRkcsT0FiUjtBQWlCTkMsYUFBTztBQUNMVCxjQUFNQztBQURELE9BakJEO0FBb0JOUyxlQUFTO0FBQ1BWLGNBQU1XLEtBREM7QUFFUEgsaUJBQVMsS0FGRjtBQUdQTixnQkFBUTtBQUhEOztBQXBCSCxLLFFBMkJSVSxLLEdBQVEsRSxRQUdSQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVU7QUFDUkMsb0JBRFEsMEJBQ09DLENBRFAsRUFDUztBQUNmLGFBQUtWLFlBQUwsR0FBb0JVLEVBQUVDLE1BQUYsQ0FBU0MsS0FBN0I7QUFDQSxhQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFvQixLQUFLYixZQUF6QjtBQUNELE9BSk87QUFLUmMsZ0JBTFEsc0JBS0dKLENBTEgsRUFLTTtBQUNaLGFBQUtaLGFBQUwsR0FBcUJZLEVBQUVDLE1BQUYsQ0FBU0MsS0FBOUI7QUFDQSxhQUFLWixZQUFMLEdBQW9CLEtBQUtHLE9BQUwsQ0FBYSxLQUFLTCxhQUFsQixFQUFpQyxLQUFLSSxLQUF0QyxDQUFwQjtBQUNBLGFBQUtXLEtBQUwsQ0FBVyxRQUFYLEVBQW9CLEtBQUtmLGFBQXpCO0FBQ0Q7QUFUTyxLLFFBYVZpQixNLEdBQVMsRTs7Ozs7MkJBRkZDLE8sRUFBUyxDQUNmOzs7O0VBOUMrQkMsZUFBS0MsUzs7a0JBQWxCNUIsSSIsImZpbGUiOiJudGlubGluZXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbmF2IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBudHBpY2tlcnR5cGU6e1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgY2hlY2tlZF9pbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBjaGVja2VkX25hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBudGtleToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBudHJhbmdlOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcblxuICB9XG4gIHdhdGNoID0ge1xuXG4gIH1cbiAgY29tcG9uZW50cyA9IHt9O1xuICBkYXRhID0ge1xuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGJpbmREYXRlQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5jaGVja2VkX25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsdGhpcy5jaGVja2VkX25hbWUpO1xuICAgIH0sXG4gICAgYmluZENoYW5nZShlKSB7XG4gICAgICB0aGlzLmNoZWNrZWRfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMuY2hlY2tlZF9uYW1lID0gdGhpcy5udHJhbmdlW3RoaXMuY2hlY2tlZF9pbmRleF1bdGhpcy5udGtleV07XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLHRoaXMuY2hlY2tlZF9pbmRleCk7XG4gICAgfSxcbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgfVxuICBldmVudHMgPSB7XG4gIH07XG59XG4iXX0=