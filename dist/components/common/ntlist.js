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
      ntindex: {
        type: Number,
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
      ntkey: function ntkey() {
        // 如果销售不是当前用户,隐藏客资界面手机号前面部分
        if (this.user.id != this.ntvalue.submit_id && this.user.id != this.ntvalue.sales_id && this.readonly) {
          if (this.ntkey == 'user_mobile') {
            this.ntvalue[this.ntkey] = this.ntvalue[this.ntkey].substring(0, 3) + '****' + this.ntvalue[this.ntkey].substring(7, 11);
          } else if (this.ntkey == 'wechat_id') {
            this.ntvalue[this.ntkey] = '****' + this.ntvalue[this.ntkey].substring(4);
          }
        }
      }
    }, _this.components = {}, _this.data = {
      user: null
    }, _this.methods = {
      bindChange: function bindChange(e) {
        this.$emit('pickerValueChange', e.detail.value);
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50bGlzdC5qcyJdLCJuYW1lcyI6WyJGbmF2IiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJwbGFjZWhvbGRlciIsIm50a2V5IiwibnRyYW5nZXBya2V5IiwibnRyYW5nZWNpa2V5IiwibnRyYW5nZWFya2V5IiwibnR2YWx1ZSIsIk9iamVjdCIsInR3b1dheSIsIm50aW5kZXgiLCJOdW1iZXIiLCJudHR5cGUiLCJkZWZhdWx0IiwicGlja2VydHlwZSIsInJlYWRvbmx5IiwiQm9vbGVhbiIsIndhdGNoIiwidXNlciIsImlkIiwic3VibWl0X2lkIiwic2FsZXNfaWQiLCJzdWJzdHJpbmciLCJjb21wb25lbnRzIiwiZGF0YSIsIm1ldGhvZHMiLCJiaW5kQ2hhbmdlIiwiZSIsIiRlbWl0IiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kUmVnaW9uQ2hhbmdlIiwidmFsdWVzIiwiYmluZERhdGVDaGFuZ2UiLCJiaW5kSW5wdXQiLCJldmVudHMiLCJvcHRpb25zIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DO0FBREQsT0FERDtBQUlOQyxtQkFBYTtBQUNYRixjQUFNQztBQURLLE9BSlA7QUFPTkUsYUFBTztBQUNMSCxjQUFNQztBQURELE9BUEQ7QUFVTkcsb0JBQWM7QUFDWkosY0FBTUM7QUFETSxPQVZSO0FBYU5JLG9CQUFjO0FBQ1pMLGNBQU1DO0FBRE0sT0FiUjtBQWdCTkssb0JBQWM7QUFDWk4sY0FBTUM7QUFETSxPQWhCUjtBQW1CTk0sZUFBUztBQUNQUCxjQUFNUSxNQURDO0FBRVBDLGdCQUFRO0FBRkQsT0FuQkg7QUF1Qk5DLGVBQVM7QUFDUFYsY0FBTVcsTUFEQztBQUVQRixnQkFBUTtBQUZELE9BdkJIO0FBMkJORyxjQUFRO0FBQ05aLGNBQU1DLE1BREE7QUFFTlksaUJBQVM7QUFGSCxPQTNCRjtBQStCTkMsa0JBQVk7QUFDVmQsY0FBTUMsTUFESTtBQUVWWSxpQkFBUztBQUZDLE9BL0JOO0FBbUNORSxnQkFBVTtBQUNSZixjQUFNZ0IsT0FERTtBQUVSSCxpQkFBUyxJQUZEO0FBR1JKLGdCQUFRO0FBSEE7QUFuQ0osSyxRQXlDUlEsSyxHQUFRO0FBQ05kLFdBRE0sbUJBQ0U7QUFDTjtBQUNBLFlBQUssS0FBS2UsSUFBTCxDQUFVQyxFQUFWLElBQWdCLEtBQUtaLE9BQUwsQ0FBYWEsU0FBOUIsSUFBNkMsS0FBS0YsSUFBTCxDQUFVQyxFQUFWLElBQWdCLEtBQUtaLE9BQUwsQ0FBYWMsUUFBMUUsSUFBdUYsS0FBS04sUUFBaEcsRUFBMEc7QUFDeEcsY0FBSSxLQUFLWixLQUFMLElBQWMsYUFBbEIsRUFBaUM7QUFDL0IsaUJBQUtJLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixJQUEyQixLQUFLSSxPQUFMLENBQWEsS0FBS0osS0FBbEIsRUFBeUJtQixTQUF6QixDQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxJQUEyQyxNQUEzQyxHQUFvRCxLQUFLZixPQUFMLENBQWEsS0FBS0osS0FBbEIsRUFBeUJtQixTQUF6QixDQUFtQyxDQUFuQyxFQUFzQyxFQUF0QyxDQUEvRTtBQUNELFdBRkQsTUFFTyxJQUFJLEtBQUtuQixLQUFMLElBQWMsV0FBbEIsRUFBK0I7QUFDcEMsaUJBQUtJLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixJQUEyQixTQUFTLEtBQUtJLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixFQUF5Qm1CLFNBQXpCLENBQW1DLENBQW5DLENBQXBDO0FBQ0Q7QUFDRjtBQUNGO0FBVkssSyxRQVlSQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTE4sWUFBTTtBQURELEssUUFHUE8sTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ0s7QUFDWCxhQUFLQyxLQUFMLENBQVcsbUJBQVgsRUFBK0JELEVBQUVFLE1BQUYsQ0FBU0MsS0FBeEM7QUFDRCxPQUhPO0FBSVJDLHNCQUpRLDRCQUlTSixDQUpULEVBSVk7QUFDbEIsWUFBSUssU0FBU0wsRUFBRUUsTUFBRixDQUFTQyxLQUF0QjtBQUNBLGFBQUt2QixPQUFMLENBQWEsS0FBS0gsWUFBbEIsSUFBa0M0QixPQUFPLENBQVAsQ0FBbEM7QUFDQSxhQUFLekIsT0FBTCxDQUFhLEtBQUtGLFlBQWxCLElBQWtDMkIsT0FBTyxDQUFQLENBQWxDO0FBQ0EsYUFBS3pCLE9BQUwsQ0FBYSxLQUFLRCxZQUFsQixJQUFrQzBCLE9BQU8sQ0FBUCxDQUFsQztBQUNELE9BVE87QUFVUkMsb0JBVlEsMEJBVU9OLENBVlAsRUFVVTtBQUNoQixhQUFLcEIsT0FBTCxDQUFhLEtBQUtKLEtBQWxCLElBQTJCd0IsRUFBRUUsTUFBRixDQUFTQyxLQUFwQztBQUNELE9BWk87QUFhUkksZUFiUSxxQkFhRVAsQ0FiRixFQWFLO0FBQ1gsYUFBS3BCLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixJQUEyQndCLEVBQUVFLE1BQUYsQ0FBU0MsS0FBcEM7QUFDRDtBQWZPLEssUUFvQlZLLE0sR0FBUyxFOzs7OzsyQkFIRkMsTyxFQUFTO0FBQ2QsV0FBS2xCLElBQUwsR0FBWW1CLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBWjtBQUNEOzs7O0VBN0UrQkQsZUFBS0UsUzs7a0JBQWxCMUMsSSIsImZpbGUiOiJudGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm5hdiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbnRrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbnRyYW5nZXBya2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIG50cmFuZ2VjaWtleToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBudHJhbmdlYXJrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbnR2YWx1ZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBudGluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIG50dHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgfSxcbiAgICBwaWNrZXJ0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgbnRrZXkoKSB7XG4gICAgICAvLyDlpoLmnpzplIDllK7kuI3mmK/lvZPliY3nlKjmiLcs6ZqQ6JeP5a6i6LWE55WM6Z2i5omL5py65Y+35YmN6Z2i6YOo5YiGXG4gICAgICBpZiAoKHRoaXMudXNlci5pZCAhPSB0aGlzLm50dmFsdWUuc3VibWl0X2lkKSAmJiAodGhpcy51c2VyLmlkICE9IHRoaXMubnR2YWx1ZS5zYWxlc19pZCkgJiYgdGhpcy5yZWFkb25seSkge1xuICAgICAgICBpZiAodGhpcy5udGtleSA9PSAndXNlcl9tb2JpbGUnKSB7XG4gICAgICAgICAgdGhpcy5udHZhbHVlW3RoaXMubnRrZXldID0gdGhpcy5udHZhbHVlW3RoaXMubnRrZXldLnN1YnN0cmluZygwLCAzKSArICcqKioqJyArIHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XS5zdWJzdHJpbmcoNywgMTEpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnRrZXkgPT0gJ3dlY2hhdF9pZCcpIHtcbiAgICAgICAgICB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0gPSAnKioqKicgKyB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0uc3Vic3RyaW5nKDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICB1c2VyOiBudWxsXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZENoYW5nZShlKXtcbiAgICAgIHRoaXMuJGVtaXQoJ3BpY2tlclZhbHVlQ2hhbmdlJyxlLmRldGFpbC52YWx1ZSk7XG4gICAgfSxcbiAgICBiaW5kUmVnaW9uQ2hhbmdlKGUpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50cmFuZ2VwcmtleV0gPSB2YWx1ZXNbMF07XG4gICAgICB0aGlzLm50dmFsdWVbdGhpcy5udHJhbmdlY2lrZXldID0gdmFsdWVzWzFdO1xuICAgICAgdGhpcy5udHZhbHVlW3RoaXMubnRyYW5nZWFya2V5XSA9IHZhbHVlc1syXTtcbiAgICB9LFxuICAgIGJpbmREYXRlQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0KGUpIHtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLnVzZXIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH07XG59XG4iXX0=