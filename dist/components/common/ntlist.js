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
      ntkey: {
        type: String
      },
      ntrangeprkey: {
        type: String
      },
      ntrangecikey: {
        type: String
      },
      ntrangearkey: {
        type: String
      },
      ntvalue: {
        type: Object,
        twoWay: true
      },
      nttype: {
        type: String,
        default: 'text'
      },
      pickertype: {
        type: String,
        default: 'text'
      },
      readonly: {
        type: Boolean,
        default: true,
        twoWay: true
      }
    }, _this.watch = {
      ntvalue: function ntvalue() {
        //如果销售不是当前用户隐藏客资界面手机号前面部分
        if (this.user.id != this.ntvalue.submit_id && this.user.id != this.ntvalue.sales_id) {
          if (this.ntkey == 'user_mobile' && this.ntvalue[this.ntkey]) {
            this.ntvalue[this.ntkey] = this.ntvalue[this.ntkey].substring(0, 3) + '****' + this.ntvalue[this.ntkey].substring(7, 11);
          } else if (this.ntkey == 'wechat_id' && this.ntvalue[this.ntkey]) {
            this.ntvalue[this.ntkey] = '****' + this.ntvalue[this.ntkey].substring(4);
          }
        }
      }
    }, _this.components = {}, _this.data = {
      user: null
    }, _this.methods = {
      bindRegionChange: function bindRegionChange(e) {
        var values = e.detail.value;
        this.ntvalue[this.ntrangeprkey] = values[0];
        this.ntvalue[this.ntrangecikey] = values[1];
        this.ntvalue[this.ntrangearkey] = values[2];
      },
      bindDateChange: function bindDateChange(e) {
        this.ntvalue[this.ntkey] = e.detail.value;
      },
      bindInput: function bindInput(e) {
        this.ntvalue[this.ntkey] = e.detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fnav, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.user = _wepy2.default.getStorageSync('user');
    }
  }]);

  return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50bGlzdC5qcyJdLCJuYW1lcyI6WyJGbmF2IiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJwbGFjZWhvbGRlciIsIm50a2V5IiwibnRyYW5nZXBya2V5IiwibnRyYW5nZWNpa2V5IiwibnRyYW5nZWFya2V5IiwibnR2YWx1ZSIsIk9iamVjdCIsInR3b1dheSIsIm50dHlwZSIsImRlZmF1bHQiLCJwaWNrZXJ0eXBlIiwicmVhZG9ubHkiLCJCb29sZWFuIiwid2F0Y2giLCJ1c2VyIiwiaWQiLCJzdWJtaXRfaWQiLCJzYWxlc19pZCIsInN1YnN0cmluZyIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImJpbmRSZWdpb25DaGFuZ2UiLCJlIiwidmFsdWVzIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kRGF0ZUNoYW5nZSIsImJpbmRJbnB1dCIsImV2ZW50cyIsIm9wdGlvbnMiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUM7QUFERCxPQUREO0FBSU5DLG1CQUFhO0FBQ1hGLGNBQU1DO0FBREssT0FKUDtBQU9ORSxhQUFPO0FBQ0xILGNBQU1DO0FBREQsT0FQRDtBQVVORyxvQkFBYztBQUNaSixjQUFNQztBQURNLE9BVlI7QUFhTkksb0JBQWM7QUFDWkwsY0FBTUM7QUFETSxPQWJSO0FBZ0JOSyxvQkFBYztBQUNaTixjQUFNQztBQURNLE9BaEJSO0FBbUJOTSxlQUFTO0FBQ1BQLGNBQU1RLE1BREM7QUFFUEMsZ0JBQVE7QUFGRCxPQW5CSDtBQXVCTkMsY0FBUTtBQUNOVixjQUFNQyxNQURBO0FBRU5VLGlCQUFTO0FBRkgsT0F2QkY7QUEyQk5DLGtCQUFZO0FBQ1ZaLGNBQU1DLE1BREk7QUFFVlUsaUJBQVM7QUFGQyxPQTNCTjtBQStCTkUsZ0JBQVU7QUFDUmIsY0FBTWMsT0FERTtBQUVSSCxpQkFBUyxJQUZEO0FBR1JGLGdCQUFRO0FBSEE7QUEvQkosSyxRQXFDUk0sSyxHQUFRO0FBQ05SLGFBRE0scUJBQ0k7QUFDUjtBQUNBLFlBQUssS0FBS1MsSUFBTCxDQUFVQyxFQUFWLElBQWMsS0FBS1YsT0FBTCxDQUFhVyxTQUE1QixJQUEyQyxLQUFLRixJQUFMLENBQVVDLEVBQVYsSUFBZSxLQUFLVixPQUFMLENBQWFZLFFBQTNFLEVBQXNGO0FBQ3BGLGNBQUksS0FBS2hCLEtBQUwsSUFBYyxhQUFkLElBQStCLEtBQUtJLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixDQUFuQyxFQUE2RDtBQUMzRCxpQkFBS0ksT0FBTCxDQUFhLEtBQUtKLEtBQWxCLElBQTJCLEtBQUtJLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixFQUF5QmlCLFNBQXpCLENBQW1DLENBQW5DLEVBQXNDLENBQXRDLElBQTJDLE1BQTNDLEdBQW9ELEtBQUtiLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixFQUF5QmlCLFNBQXpCLENBQW1DLENBQW5DLEVBQXNDLEVBQXRDLENBQS9FO0FBQ0QsV0FGRCxNQUVPLElBQUksS0FBS2pCLEtBQUwsSUFBYyxXQUFkLElBQTZCLEtBQUtJLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixDQUFqQyxFQUEyRDtBQUNoRSxpQkFBS0ksT0FBTCxDQUFhLEtBQUtKLEtBQWxCLElBQTJCLFNBQVMsS0FBS0ksT0FBTCxDQUFhLEtBQUtKLEtBQWxCLEVBQXlCaUIsU0FBekIsQ0FBbUMsQ0FBbkMsQ0FBcEM7QUFDRDtBQUNGO0FBQ0Y7QUFWSyxLLFFBWVJDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMTixZQUFNO0FBREQsSyxRQUdQTyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1NDLENBRFQsRUFDWTtBQUNsQixZQUFJQyxTQUFTRCxFQUFFRSxNQUFGLENBQVNDLEtBQXRCO0FBQ0EsYUFBS3JCLE9BQUwsQ0FBYSxLQUFLSCxZQUFsQixJQUFrQ3NCLE9BQU8sQ0FBUCxDQUFsQztBQUNBLGFBQUtuQixPQUFMLENBQWEsS0FBS0YsWUFBbEIsSUFBa0NxQixPQUFPLENBQVAsQ0FBbEM7QUFDQSxhQUFLbkIsT0FBTCxDQUFhLEtBQUtELFlBQWxCLElBQWtDb0IsT0FBTyxDQUFQLENBQWxDO0FBQ0QsT0FOTztBQU9SRyxvQkFQUSwwQkFPT0osQ0FQUCxFQU9VO0FBQ2hCLGFBQUtsQixPQUFMLENBQWEsS0FBS0osS0FBbEIsSUFBMkJzQixFQUFFRSxNQUFGLENBQVNDLEtBQXBDO0FBQ0QsT0FUTztBQVVSRSxlQVZRLHFCQVVFTCxDQVZGLEVBVUs7QUFDWCxhQUFLbEIsT0FBTCxDQUFhLEtBQUtKLEtBQWxCLElBQTJCc0IsRUFBRUUsTUFBRixDQUFTQyxLQUFwQztBQUNEO0FBWk8sSyxRQWlCVkcsTSxHQUFTLEU7Ozs7OzJCQUhGQyxPLEVBQVM7QUFDZCxXQUFLaEIsSUFBTCxHQUFZaUIsZUFBS0MsY0FBTCxDQUFvQixNQUFwQixDQUFaO0FBQ0Q7Ozs7RUF0RStCRCxlQUFLRSxTOztrQkFBbEJ0QyxJIiwiZmlsZSI6Im50bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbmF2IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBudGtleToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBudHJhbmdlcHJrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbnRyYW5nZWNpa2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIG50cmFuZ2VhcmtleToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBudHZhbHVlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIG50dHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgfSxcbiAgICBwaWNrZXJ0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgbnR2YWx1ZSgpIHtcbiAgICAgIC8v5aaC5p6c6ZSA5ZSu5LiN5piv5b2T5YmN55So5oi36ZqQ6JeP5a6i6LWE55WM6Z2i5omL5py65Y+35YmN6Z2i6YOo5YiGXG4gICAgICBpZiAoKHRoaXMudXNlci5pZCE9dGhpcy5udHZhbHVlLnN1Ym1pdF9pZCkgJiYgKHRoaXMudXNlci5pZCE9IHRoaXMubnR2YWx1ZS5zYWxlc19pZCkpIHtcbiAgICAgICAgaWYgKHRoaXMubnRrZXkgPT0gJ3VzZXJfbW9iaWxlJyAmJiB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0pIHtcbiAgICAgICAgICB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0gPSB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0uc3Vic3RyaW5nKDAsIDMpICsgJyoqKionICsgdGhpcy5udHZhbHVlW3RoaXMubnRrZXldLnN1YnN0cmluZyg3LCAxMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udGtleSA9PSAnd2VjaGF0X2lkJyAmJiB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0pIHtcbiAgICAgICAgICB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0gPSAnKioqKicgKyB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0uc3Vic3RyaW5nKDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICB1c2VyOiBudWxsXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZFJlZ2lvbkNoYW5nZShlKSB7XG4gICAgICBsZXQgdmFsdWVzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB0aGlzLm50dmFsdWVbdGhpcy5udHJhbmdlcHJrZXldID0gdmFsdWVzWzBdO1xuICAgICAgdGhpcy5udHZhbHVlW3RoaXMubnRyYW5nZWNpa2V5XSA9IHZhbHVlc1sxXTtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50cmFuZ2VhcmtleV0gPSB2YWx1ZXNbMl07XG4gICAgfSxcbiAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuICAgIGJpbmRJbnB1dChlKSB7XG4gICAgICB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0gPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9O1xufVxuIl19