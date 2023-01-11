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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      module_item: [],
      department: ''
    }, _this.methods = {
      goTo: function goTo(url) {
        _wepy2.default.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      var user = this.user = _wepy2.default.getStorageSync('user');
      that.department = _wepy2.default.getStorageSync('office_line');
      _request2.default.get('getMyInfo', {
        200: function _(result) {
          that.module_item = [];
          result.data.data.wxapp_module.forEach(function (element) {
            if (element == 'save_apply') {
              that.module_item.push({
                url: '/pages/common/execute/depotlist',
                label: '礼品存放申请'
              });
            } else if (element == 'try_dishes_apply') {
              that.module_item.push({
                url: '/pages/common/execute/trydishlist',
                label: '试菜申请'
              });
            }
            if (element == 'data_statistics') {
              //空页面
              that.module_item.push({
                url: '/pages/common/sale/nav/admin/statistics',
                label: '数据统计'
              });
            }
            if (element == 'team_manager') {
              that.module_item.push({
                url: '/pages/common/sale/nav/admin/team',
                label: '团队管理'
              });
            }
            if (element == 'business_audit') {
              that.module_item.push({
                url: '/pages/common/sale/nav/admin/audit',
                label: '业务审核'
              });
            }
            if (element == 'customer_audit') {
              that.module_item.push({
                url: '/pages/common/sale/nav/admin/unsubscribe',
                label: '客资审核'
              });
            }
            if (element == 'receive_order') {
              that.module_item.push({
                url: '/pages/common/sale/nav/takeorders',
                label: '接单'
              });
            }
            if (element == 'finished_order') {
              that.module_item.push({
                url: '/pages/common/sale/ordercomplete',
                label: '成交订单'
              });
            }

            if (element == 'opeartion_review') {
              that.module_item.push({
                url: '/pages/artcenter/scheme/admin/audit',
                label: '试菜/任务单审核'
              });
            }
            if (element == 'search_user') {
              that.module_item.push({
                url: '/pages/common/customerlist?is_search=true',
                label: '信息检索'
              });
            }
            if (element == 'server_data_statistics') {
              that.module_item.push({
                url: '/pages/artcenter/server/statistics',
                label: '客服数据统计'
              });
            }
            if (element == 'request_review' && that.department == 'marry') {
              that.module_item.push({
                url: '/pages/artcenter/scheme/reqauditlist',
                label: '请款审核'
              });
            }
            if (element == 'return_order') {
              //
              that.module_item.push({
                url: '/pages/common/sale/nav/admin/reject',
                label: '驳回信息'
              });
            }
          });
          that.$apply();
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hiYW9yZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbXBvbmVudHMiLCJkYXRhIiwibW9kdWxlX2l0ZW0iLCJkZXBhcnRtZW50IiwibWV0aG9kcyIsImdvVG8iLCJ1cmwiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsIm9wdGlvbnMiLCJ0aGF0IiwidXNlciIsImdldFN0b3JhZ2VTeW5jIiwicnEiLCJnZXQiLCJyZXN1bHQiLCJ3eGFwcF9tb2R1bGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsInB1c2giLCJsYWJlbCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxrQkFBVztBQUZOLEssUUFJUEMsTyxHQUFVO0FBQ1JDLFVBRFEsZ0JBQ0hDLEdBREcsRUFDRTtBQUNSQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkRixlQUFLQTtBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7OzsyQkFPSEcsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsT0FBTyxLQUFLQSxJQUFMLEdBQVlKLGVBQUtLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBdkI7QUFDQUYsV0FBS1AsVUFBTCxHQUFnQkksZUFBS0ssY0FBTCxDQUFvQixhQUFwQixDQUFoQjtBQUNBQyx3QkFBR0MsR0FBSCxDQUFPLFdBQVAsRUFBb0I7QUFDbEIsYUFBSyxtQkFBVTtBQUNiSixlQUFLUixXQUFMLEdBQW1CLEVBQW5CO0FBQ0FhLGlCQUFPZCxJQUFQLENBQVlBLElBQVosQ0FBaUJlLFlBQWpCLENBQThCQyxPQUE5QixDQUFzQyxtQkFBVztBQUMvQyxnQkFBSUMsV0FBVyxZQUFmLEVBQTZCO0FBQzNCUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxpQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlELGFBTEQsTUFLTyxJQUFJRixXQUFXLGtCQUFmLEVBQW1DO0FBQ3hDUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxtQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsaUJBQWYsRUFBa0M7QUFDaEM7QUFDQVIsbUJBQUtSLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFzQjtBQUNwQmIscUJBQUsseUNBRGU7QUFFcEJjLHVCQUFPO0FBRmEsZUFBdEI7QUFJRDtBQUNELGdCQUFJRixXQUFXLGNBQWYsRUFBK0I7QUFDN0JSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLG1DQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7QUFDRCxnQkFBSUYsV0FBVyxnQkFBZixFQUFpQztBQUMvQlIsbUJBQUtSLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFzQjtBQUNwQmIscUJBQUssb0NBRGU7QUFFcEJjLHVCQUFPO0FBRmEsZUFBdEI7QUFJRDtBQUNELGdCQUFJRixXQUFXLGdCQUFmLEVBQWlDO0FBQy9CUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSywwQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsZUFBZixFQUFnQztBQUM5QlIsbUJBQUtSLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFzQjtBQUNwQmIscUJBQUssbUNBRGU7QUFFcEJjLHVCQUFPO0FBRmEsZUFBdEI7QUFJRDtBQUNELGdCQUFJRixXQUFXLGdCQUFmLEVBQWlDO0FBQy9CUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxrQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEOztBQUVELGdCQUFJRixXQUFXLGtCQUFmLEVBQW1DO0FBQ2pDUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxxQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsYUFBZixFQUE4QjtBQUM1QlIsbUJBQUtSLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFzQjtBQUNwQmIscUJBQUssMkNBRGU7QUFFcEJjLHVCQUFPO0FBRmEsZUFBdEI7QUFJRDtBQUNELGdCQUFJRixXQUFXLHdCQUFmLEVBQXlDO0FBQ3ZDUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxvQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsZ0JBQVgsSUFBK0JSLEtBQUtQLFVBQUwsSUFBaUIsT0FBcEQsRUFBNkQ7QUFDM0RPLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLHNDQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7QUFDRCxnQkFBSUYsV0FBVyxjQUFmLEVBQStCO0FBQUU7QUFDL0JSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLHFDQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7QUFDRixXQWhGRDtBQWlGQVYsZUFBS1csTUFBTDtBQUNEO0FBckZpQixPQUFwQjtBQXVGRDs7OzZCQUNRLENBQUc7Ozs7RUExR3FCZCxlQUFLZSxJOztrQkFBbkJ2QixLIiwiZmlsZSI6ImRhc2hiYW9yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgcnEgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb21wb25lbnRzID0ge1xuICB9O1xuICBkYXRhID0ge1xuICAgIG1vZHVsZV9pdGVtOiBbXSxcbiAgICBkZXBhcnRtZW50OicnXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgZ29Ubyh1cmwpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogdXJsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB1c2VyID0gdGhpcy51c2VyID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIHRoYXQuZGVwYXJ0bWVudD13ZXB5LmdldFN0b3JhZ2VTeW5jKCdvZmZpY2VfbGluZScpO1xuICAgIHJxLmdldCgnZ2V0TXlJbmZvJywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtID0gW107XG4gICAgICAgIHJlc3VsdC5kYXRhLmRhdGEud3hhcHBfbW9kdWxlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ3NhdmVfYXBwbHknKSB7XG4gICAgICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtLnB1c2goe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL2V4ZWN1dGUvZGVwb3RsaXN0JyxcbiAgICAgICAgICAgICAgbGFiZWw6ICfnpLzlk4HlrZjmlL7nlLPor7cnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50ID09ICd0cnlfZGlzaGVzX2FwcGx5Jykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9leGVjdXRlL3RyeWRpc2hsaXN0JyxcbiAgICAgICAgICAgICAgbGFiZWw6ICfor5Xoj5znlLPor7cnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdkYXRhX3N0YXRpc3RpY3MnKSB7XG4gICAgICAgICAgICAvL+epuumhtemdolxuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9zdGF0aXN0aWNzJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICfmlbDmja7nu5/orqEnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICd0ZWFtX21hbmFnZXInKSB7XG4gICAgICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtLnB1c2goe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3RlYW0nLFxuICAgICAgICAgICAgICBsYWJlbDogJ+WboumYn+euoeeQhicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ2J1c2luZXNzX2F1ZGl0Jykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9hdWRpdCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAn5Lia5Yqh5a6h5qC4JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCA9PSAnY3VzdG9tZXJfYXVkaXQnKSB7XG4gICAgICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtLnB1c2goe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvbmF2L2FkbWluL3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICflrqLotYTlrqHmoLgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdyZWNlaXZlX29yZGVyJykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL25hdi90YWtlb3JkZXJzJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICfmjqXljZUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdmaW5pc2hlZF9vcmRlcicpIHtcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9vcmRlcmNvbXBsZXRlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICfmiJDkuqTorqLljZUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ29wZWFydGlvbl9yZXZpZXcnKSB7XG4gICAgICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtLnB1c2goe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9hZG1pbi9hdWRpdCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAn6K+V6I+cL+S7u+WKoeWNleWuoeaguCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ3NlYXJjaF91c2VyJykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9jdXN0b21lcmxpc3Q/aXNfc2VhcmNoPXRydWUnLFxuICAgICAgICAgICAgICBsYWJlbDogJ+S/oeaBr+ajgOe0oicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ3NlcnZlcl9kYXRhX3N0YXRpc3RpY3MnKSB7XG4gICAgICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtLnB1c2goe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXJ0Y2VudGVyL3NlcnZlci9zdGF0aXN0aWNzJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICflrqLmnI3mlbDmja7nu5/orqEnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdyZXF1ZXN0X3JldmlldycgJiYgdGhhdC5kZXBhcnRtZW50PT0nbWFycnknKSB7XG4gICAgICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtLnB1c2goe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXJ0Y2VudGVyL3NjaGVtZS9yZXFhdWRpdGxpc3QnLFxuICAgICAgICAgICAgICBsYWJlbDogJ+ivt+asvuWuoeaguCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ3JldHVybl9vcmRlcicpIHsgLy9cbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vcmVqZWN0JyxcbiAgICAgICAgICAgICAgbGFiZWw6ICfpqbPlm57kv6Hmga8nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHsgfVxufVxuIl19