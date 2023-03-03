'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ntitem from "./common/ntitem";


var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      // ntitema:ntitem
    }, _this.props = {}, _this.data = {
      readonly: false,
      filter_option: {
        order_id_str: '', //option for salesman filter
        user_mobile: '', //option for salesman filter
        wechat_id: '' //option for salesman filter
      }
    }, _this.watch = {}, _this.methods = {
      approvalSearch: function approvalSearch() {
        var that = this;
        if (!that.filter_option.order_id_str && !that.filter_option.user_mobile && !that.filter_option.wechat_id) {
          _wepy2.default.showToast({
            title: '请输入至少一项', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: function success(res) {}
          });
          return false;
        }
        _request2.default.get('searchAllUser', {
          200: function _(result) {
            that.$emit('search', result.data.data, result.data.is_old);
            that.$apply();
          }
        }, {
          order_id_str: that.filter_option.order_id_str,
          user_mobile: that.filter_option.user_mobile,
          wechat_id: that.filter_option.wechat_id
        });
      },
      bindInputOrderIdStr: function bindInputOrderIdStr(e) {
        this.filter_option.order_id_str = e.detail.value;
      },
      bindInputMobile: function bindInputMobile(e) {
        this.filter_option.user_mobile = e.detail.value;
      },
      bindInputwechat: function bindInputwechat(e) {
        this.filter_option.wechat_id = e.detail.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVybGlzdGZpbHRlci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJyZWFkb25seSIsImZpbHRlcl9vcHRpb24iLCJvcmRlcl9pZF9zdHIiLCJ1c2VyX21vYmlsZSIsIndlY2hhdF9pZCIsIndhdGNoIiwibWV0aG9kcyIsImFwcHJvdmFsU2VhcmNoIiwidGhhdCIsIndlcHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIm1hc2siLCJzdWNjZXNzIiwicnEiLCJnZXQiLCIkZW1pdCIsInJlc3VsdCIsImlzX29sZCIsIiRhcHBseSIsImJpbmRJbnB1dE9yZGVySWRTdHIiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRNb2JpbGUiLCJiaW5kSW5wdXR3ZWNoYXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxVLEdBQWE7QUFDWDtBQURXLEssUUFHYkMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEtBREw7QUFFTEMscUJBQWU7QUFDYkMsc0JBQWMsRUFERCxFQUNLO0FBQ2xCQyxxQkFBYSxFQUZBLEVBRUk7QUFDakJDLG1CQUFXLEVBSEUsQ0FHRTtBQUhGO0FBRlYsSyxRQVFQQyxLLEdBQVEsRSxRQUVSQyxPLEdBQVU7QUFDUkMsb0JBRFEsNEJBQ1M7QUFDZixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJLENBQUNBLEtBQUtQLGFBQUwsQ0FBbUJDLFlBQXBCLElBQW9DLENBQUNNLEtBQUtQLGFBQUwsQ0FBbUJFLFdBQXhELElBQXVFLENBQUNLLEtBQUtQLGFBQUwsQ0FBbUJHLFNBQS9GLEVBQTBHO0FBQ3hHSyx5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLFNBRE0sRUFDSztBQUNsQkMsa0JBQU0sTUFGTyxFQUVDO0FBQ2RDLHNCQUFVLElBSEcsRUFHRztBQUNoQkMsa0JBQU0sSUFKTyxFQUlEO0FBQ1pDLHFCQUFTLHNCQUFPLENBQUc7QUFMTixXQUFmO0FBT0EsaUJBQU8sS0FBUDtBQUNEO0FBQ0RDLDBCQUFHQyxHQUFILENBQU8sZUFBUCxFQUF3QjtBQUN0QixlQUFLLG1CQUFVO0FBQ2JULGlCQUFLVSxLQUFMLENBQVcsUUFBWCxFQUFxQkMsT0FBT3BCLElBQVAsQ0FBWUEsSUFBakMsRUFBdUNvQixPQUFPcEIsSUFBUCxDQUFZcUIsTUFBbkQ7QUFDQVosaUJBQUthLE1BQUw7QUFDRDtBQUpxQixTQUF4QixFQUtHO0FBQ0RuQix3QkFBY00sS0FBS1AsYUFBTCxDQUFtQkMsWUFEaEM7QUFFREMsdUJBQWFLLEtBQUtQLGFBQUwsQ0FBbUJFLFdBRi9CO0FBR0RDLHFCQUFXSSxLQUFLUCxhQUFMLENBQW1CRztBQUg3QixTQUxIO0FBVUQsT0F2Qk87QUF3QlJrQix5QkF4QlEsK0JBd0JZQyxDQXhCWixFQXdCZTtBQUNyQixhQUFLdEIsYUFBTCxDQUFtQkMsWUFBbkIsR0FBa0NxQixFQUFFQyxNQUFGLENBQVNDLEtBQTNDO0FBQ0QsT0ExQk87QUEyQlJDLHFCQTNCUSwyQkEyQlFILENBM0JSLEVBMkJXO0FBQ2pCLGFBQUt0QixhQUFMLENBQW1CRSxXQUFuQixHQUFpQ29CLEVBQUVDLE1BQUYsQ0FBU0MsS0FBMUM7QUFDRCxPQTdCTztBQThCUkUscUJBOUJRLDJCQThCUUosQ0E5QlIsRUE4Qlc7QUFDakIsYUFBS3RCLGFBQUwsQ0FBbUJHLFNBQW5CLEdBQStCbUIsRUFBRUMsTUFBRixDQUFTQyxLQUF4QztBQUNEO0FBaENPLEs7Ozs7OzZCQWtDRCxDQUVSOzs7NkJBQ1EsQ0FDUjs7OztFQXREZ0NoQixlQUFLbUIsUzs7a0JBQW5CaEMsSyIsImZpbGUiOiJjdXN0b21lcmxpc3RmaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuLy8gaW1wb3J0IG50aXRlbSBmcm9tIFwiLi9jb21tb24vbnRpdGVtXCI7XG5pbXBvcnQgcnEgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICAvLyBudGl0ZW1hOm50aXRlbVxuICB9XG4gIHByb3BzID0ge1xuICB9XG4gIGRhdGEgPSB7XG4gICAgcmVhZG9ubHk6IGZhbHNlLFxuICAgIGZpbHRlcl9vcHRpb246IHtcbiAgICAgIG9yZGVyX2lkX3N0cjogJycsIC8vb3B0aW9uIGZvciBzYWxlc21hbiBmaWx0ZXJcbiAgICAgIHVzZXJfbW9iaWxlOiAnJywgLy9vcHRpb24gZm9yIHNhbGVzbWFuIGZpbHRlclxuICAgICAgd2VjaGF0X2lkOiAnJywgLy9vcHRpb24gZm9yIHNhbGVzbWFuIGZpbHRlclxuICAgIH0sXG4gIH07XG4gIHdhdGNoID0ge1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXBwcm92YWxTZWFyY2goKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBpZiAoIXRoYXQuZmlsdGVyX29wdGlvbi5vcmRlcl9pZF9zdHIgJiYgIXRoYXQuZmlsdGVyX29wdGlvbi51c2VyX21vYmlsZSAmJiAhdGhhdC5maWx0ZXJfb3B0aW9uLndlY2hhdF9pZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXoh7PlsJHkuIDpobknLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLCAvL+W7tui/n+aXtumXtCxcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBycS5nZXQoJ3NlYXJjaEFsbFVzZXInLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LiRlbWl0KCdzZWFyY2gnLCByZXN1bHQuZGF0YS5kYXRhLCByZXN1bHQuZGF0YS5pc19vbGQpXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBvcmRlcl9pZF9zdHI6IHRoYXQuZmlsdGVyX29wdGlvbi5vcmRlcl9pZF9zdHIsXG4gICAgICAgIHVzZXJfbW9iaWxlOiB0aGF0LmZpbHRlcl9vcHRpb24udXNlcl9tb2JpbGUsXG4gICAgICAgIHdlY2hhdF9pZDogdGhhdC5maWx0ZXJfb3B0aW9uLndlY2hhdF9pZFxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRJbnB1dE9yZGVySWRTdHIoZSkge1xuICAgICAgdGhpcy5maWx0ZXJfb3B0aW9uLm9yZGVyX2lkX3N0ciA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0TW9iaWxlKGUpIHtcbiAgICAgIHRoaXMuZmlsdGVyX29wdGlvbi51c2VyX21vYmlsZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgYmluZElucHV0d2VjaGF0KGUpIHtcbiAgICAgIHRoaXMuZmlsdGVyX29wdGlvbi53ZWNoYXRfaWQgPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZCgpIHtcblxuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxufVxuIl19