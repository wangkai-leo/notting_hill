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
      },
      is_search: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    }, _this.watch = {
      ntvalue: function ntvalue() {
        // console.log('***************')
        // console.log(this.readonly)
        // console.log(this.ntvalue.sales_id)
        // console.log(this.user.id)
        // 如果销售不是当前用户,隐藏客资界面手机号前面部分
        if (this.user.id != this.ntvalue.submit_id && this.user.id != this.ntvalue.sales_id && this.readonly || this.is_search) {
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
    value: function onLoad() {
      this.user = _wepy2.default.getStorageSync('user');
    }
  }]);

  return Fnav;
}(_wepy2.default.component);

exports.default = Fnav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50bGlzdC5qcyJdLCJuYW1lcyI6WyJGbmF2IiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJTdHJpbmciLCJwbGFjZWhvbGRlciIsIm50a2V5IiwibnRyYW5nZXBya2V5IiwibnRyYW5nZWNpa2V5IiwibnRyYW5nZWFya2V5IiwibnR2YWx1ZSIsIk9iamVjdCIsInR3b1dheSIsIm50aW5kZXgiLCJOdW1iZXIiLCJudHR5cGUiLCJkZWZhdWx0IiwicGlja2VydHlwZSIsInJlYWRvbmx5IiwiQm9vbGVhbiIsImlzX3NlYXJjaCIsIndhdGNoIiwidXNlciIsImlkIiwic3VibWl0X2lkIiwic2FsZXNfaWQiLCJzdWJzdHJpbmciLCJjb21wb25lbnRzIiwiZGF0YSIsIm1ldGhvZHMiLCJiaW5kQ2hhbmdlIiwiZSIsIiRlbWl0IiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kUmVnaW9uQ2hhbmdlIiwidmFsdWVzIiwiYmluZERhdGVDaGFuZ2UiLCJiaW5kSW5wdXQiLCJldmVudHMiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUM7QUFERCxPQUREO0FBSU5DLG1CQUFhO0FBQ1hGLGNBQU1DO0FBREssT0FKUDtBQU9ORSxhQUFPO0FBQ0xILGNBQU1DO0FBREQsT0FQRDtBQVVORyxvQkFBYztBQUNaSixjQUFNQztBQURNLE9BVlI7QUFhTkksb0JBQWM7QUFDWkwsY0FBTUM7QUFETSxPQWJSO0FBZ0JOSyxvQkFBYztBQUNaTixjQUFNQztBQURNLE9BaEJSO0FBbUJOTSxlQUFTO0FBQ1BQLGNBQU1RLE1BREM7QUFFUEMsZ0JBQVE7QUFGRCxPQW5CSDtBQXVCTkMsZUFBUztBQUNQVixjQUFNVyxNQURDO0FBRVBGLGdCQUFRO0FBRkQsT0F2Qkg7QUEyQk5HLGNBQVE7QUFDTlosY0FBTUMsTUFEQTtBQUVOWSxpQkFBUztBQUZILE9BM0JGO0FBK0JOQyxrQkFBWTtBQUNWZCxjQUFNQyxNQURJO0FBRVZZLGlCQUFTO0FBRkMsT0EvQk47QUFtQ05FLGdCQUFVO0FBQ1JmLGNBQU1nQixPQURFO0FBRVJILGlCQUFTLElBRkQ7QUFHUkosZ0JBQVE7QUFIQSxPQW5DSjtBQXdDTlEsaUJBQVc7QUFDVGpCLGNBQU1nQixPQURHO0FBRVRILGlCQUFTLEtBRkE7QUFHVEosZ0JBQVE7QUFIQztBQXhDTCxLLFFBOENSUyxLLEdBQVE7QUFDTlgsYUFETSxxQkFDSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFNLEtBQUtZLElBQUwsQ0FBVUMsRUFBVixJQUFnQixLQUFLYixPQUFMLENBQWFjLFNBQTlCLElBQ0QsS0FBS0YsSUFBTCxDQUFVQyxFQUFWLElBQWdCLEtBQUtiLE9BQUwsQ0FBYWUsUUFENUIsSUFFRixLQUFLUCxRQUZKLElBRWUsS0FBS0UsU0FGeEIsRUFFbUM7QUFDakMsY0FBSSxLQUFLZCxLQUFMLElBQWMsYUFBbEIsRUFBaUM7QUFDL0IsaUJBQUtJLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixJQUEyQixLQUFLSSxPQUFMLENBQWEsS0FBS0osS0FBbEIsRUFBeUJvQixTQUF6QixDQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxJQUEyQyxNQUEzQyxHQUFvRCxLQUFLaEIsT0FBTCxDQUFhLEtBQUtKLEtBQWxCLEVBQXlCb0IsU0FBekIsQ0FBbUMsQ0FBbkMsRUFBc0MsRUFBdEMsQ0FBL0U7QUFDRCxXQUZELE1BRU8sSUFBSSxLQUFLcEIsS0FBTCxJQUFjLFdBQWxCLEVBQStCO0FBQ3BDLGlCQUFLSSxPQUFMLENBQWEsS0FBS0osS0FBbEIsSUFBMkIsU0FBUyxLQUFLSSxPQUFMLENBQWEsS0FBS0osS0FBbEIsRUFBeUJvQixTQUF6QixDQUFtQyxDQUFuQyxDQUFwQztBQUNEO0FBQ0Y7QUFDRjtBQWhCSyxLLFFBa0JSQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTE4sWUFBTTtBQURELEssUUFHUE8sTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixhQUFLQyxLQUFMLENBQVcsbUJBQVgsRUFBZ0NELEVBQUVFLE1BQUYsQ0FBU0MsS0FBekM7QUFDRCxPQUhPO0FBSVJDLHNCQUpRLDRCQUlTSixDQUpULEVBSVk7QUFDbEIsWUFBSUssU0FBU0wsRUFBRUUsTUFBRixDQUFTQyxLQUF0QjtBQUNBLGFBQUt4QixPQUFMLENBQWEsS0FBS0gsWUFBbEIsSUFBa0M2QixPQUFPLENBQVAsQ0FBbEM7QUFDQSxhQUFLMUIsT0FBTCxDQUFhLEtBQUtGLFlBQWxCLElBQWtDNEIsT0FBTyxDQUFQLENBQWxDO0FBQ0EsYUFBSzFCLE9BQUwsQ0FBYSxLQUFLRCxZQUFsQixJQUFrQzJCLE9BQU8sQ0FBUCxDQUFsQztBQUNELE9BVE87QUFVUkMsb0JBVlEsMEJBVU9OLENBVlAsRUFVVTtBQUNoQixhQUFLckIsT0FBTCxDQUFhLEtBQUtKLEtBQWxCLElBQTJCeUIsRUFBRUUsTUFBRixDQUFTQyxLQUFwQztBQUNELE9BWk87QUFhUkksZUFiUSxxQkFhRVAsQ0FiRixFQWFLO0FBQ1gsYUFBS3JCLE9BQUwsQ0FBYSxLQUFLSixLQUFsQixJQUEyQnlCLEVBQUVFLE1BQUYsQ0FBU0MsS0FBcEM7QUFDRDtBQWZPLEssUUFvQlZLLE0sR0FBUyxFOzs7Ozs2QkFIQTtBQUNQLFdBQUtqQixJQUFMLEdBQVlrQixlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDRDs7OztFQXhGK0JELGVBQUtFLFM7O2tCQUFsQjFDLEkiLCJmaWxlIjoibnRsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZuYXYgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIG50a2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIG50cmFuZ2VwcmtleToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBudHJhbmdlY2lrZXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbnRyYW5nZWFya2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIG50dmFsdWU6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG4gICAgbnRpbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBudHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgIH0sXG4gICAgcGlja2VydHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuICAgIGlzX3NlYXJjaDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9XG4gIHdhdGNoID0ge1xuICAgIG50dmFsdWUoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqJylcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVhZG9ubHkpXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm50dmFsdWUuc2FsZXNfaWQpXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnVzZXIuaWQpXG4gICAgICAvLyDlpoLmnpzplIDllK7kuI3mmK/lvZPliY3nlKjmiLcs6ZqQ6JeP5a6i6LWE55WM6Z2i5omL5py65Y+35YmN6Z2i6YOo5YiGXG4gICAgICBpZiAoKCh0aGlzLnVzZXIuaWQgIT0gdGhpcy5udHZhbHVlLnN1Ym1pdF9pZCkgXG4gICAgICAmJiAodGhpcy51c2VyLmlkICE9IHRoaXMubnR2YWx1ZS5zYWxlc19pZCkgXG4gICAgICAmJiB0aGlzLnJlYWRvbmx5KXx8dGhpcy5pc19zZWFyY2gpIHtcbiAgICAgICAgaWYgKHRoaXMubnRrZXkgPT0gJ3VzZXJfbW9iaWxlJykge1xuICAgICAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XSA9IHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XS5zdWJzdHJpbmcoMCwgMykgKyAnKioqKicgKyB0aGlzLm50dmFsdWVbdGhpcy5udGtleV0uc3Vic3RyaW5nKDcsIDExKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm50a2V5ID09ICd3ZWNoYXRfaWQnKSB7XG4gICAgICAgICAgdGhpcy5udHZhbHVlW3RoaXMubnRrZXldID0gJyoqKionICsgdGhpcy5udHZhbHVlW3RoaXMubnRrZXldLnN1YnN0cmluZyg0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgdXNlcjogbnVsbFxuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGJpbmRDaGFuZ2UoZSkge1xuICAgICAgdGhpcy4kZW1pdCgncGlja2VyVmFsdWVDaGFuZ2UnLCBlLmRldGFpbC52YWx1ZSk7XG4gICAgfSxcbiAgICBiaW5kUmVnaW9uQ2hhbmdlKGUpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50cmFuZ2VwcmtleV0gPSB2YWx1ZXNbMF07XG4gICAgICB0aGlzLm50dmFsdWVbdGhpcy5udHJhbmdlY2lrZXldID0gdmFsdWVzWzFdO1xuICAgICAgdGhpcy5udHZhbHVlW3RoaXMubnRyYW5nZWFya2V5XSA9IHZhbHVlc1syXTtcbiAgICB9LFxuICAgIGJpbmREYXRlQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0KGUpIHtcbiAgICAgIHRoaXMubnR2YWx1ZVt0aGlzLm50a2V5XSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH1cbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfTtcbn1cbiJdfQ==