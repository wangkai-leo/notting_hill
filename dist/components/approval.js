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
                url: '/pages/common/searchcustomerlistsale',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmFsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29tcG9uZW50cyIsImRhdGEiLCJtb2R1bGVfaXRlbSIsImRlcGFydG1lbnQiLCJtZXRob2RzIiwiZ29UbyIsInVybCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwib3B0aW9ucyIsInRoYXQiLCJ1c2VyIiwiZ2V0U3RvcmFnZVN5bmMiLCJycSIsImdldCIsInJlc3VsdCIsInd4YXBwX21vZHVsZSIsImZvckVhY2giLCJlbGVtZW50IiwicHVzaCIsImxhYmVsIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxtQkFBYSxFQURSO0FBRUxDLGtCQUFXO0FBRk4sSyxRQUlQQyxPLEdBQVU7QUFDUkMsVUFEUSxnQkFDSEMsR0FERyxFQUNFO0FBQ1JDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RGLGVBQUtBO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzJCQU9IRyxPLEVBQVM7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxPQUFPLEtBQUtBLElBQUwsR0FBWUosZUFBS0ssY0FBTCxDQUFvQixNQUFwQixDQUF2QjtBQUNBRixXQUFLUCxVQUFMLEdBQWdCSSxlQUFLSyxjQUFMLENBQW9CLGFBQXBCLENBQWhCO0FBQ0FDLHdCQUFHQyxHQUFILENBQU8sV0FBUCxFQUFvQjtBQUNsQixhQUFLLG1CQUFVO0FBQ2JKLGVBQUtSLFdBQUwsR0FBbUIsRUFBbkI7QUFDQWEsaUJBQU9kLElBQVAsQ0FBWUEsSUFBWixDQUFpQmUsWUFBakIsQ0FBOEJDLE9BQTlCLENBQXNDLG1CQUFXO0FBQy9DLGdCQUFJQyxXQUFXLFlBQWYsRUFBNkI7QUFDM0JSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLGlDQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQsYUFMRCxNQUtPLElBQUlGLFdBQVcsa0JBQWYsRUFBbUM7QUFDeENSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLG1DQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7QUFDRCxnQkFBSUYsV0FBVyxpQkFBZixFQUFrQztBQUNoQztBQUNBUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyx5Q0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsY0FBZixFQUErQjtBQUM3QlIsbUJBQUtSLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFzQjtBQUNwQmIscUJBQUssbUNBRGU7QUFFcEJjLHVCQUFPO0FBRmEsZUFBdEI7QUFJRDtBQUNELGdCQUFJRixXQUFXLGdCQUFmLEVBQWlDO0FBQy9CUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxvQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsZ0JBQWYsRUFBaUM7QUFDL0JSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLDBDQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7QUFDRCxnQkFBSUYsV0FBVyxlQUFmLEVBQWdDO0FBQzlCUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxtQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsZ0JBQWYsRUFBaUM7QUFDL0JSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLGtDQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7O0FBRUQsZ0JBQUlGLFdBQVcsa0JBQWYsRUFBbUM7QUFDakNSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLHFDQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7QUFDRCxnQkFBSUYsV0FBVyxhQUFmLEVBQThCO0FBQzVCUixtQkFBS1IsV0FBTCxDQUFpQmlCLElBQWpCLENBQXNCO0FBQ3BCYixxQkFBSyxzQ0FEZTtBQUVwQmMsdUJBQU87QUFGYSxlQUF0QjtBQUlEO0FBQ0QsZ0JBQUlGLFdBQVcsd0JBQWYsRUFBeUM7QUFDdkNSLG1CQUFLUixXQUFMLENBQWlCaUIsSUFBakIsQ0FBc0I7QUFDcEJiLHFCQUFLLG9DQURlO0FBRXBCYyx1QkFBTztBQUZhLGVBQXRCO0FBSUQ7QUFDRCxnQkFBSUYsV0FBVyxnQkFBWCxJQUErQlIsS0FBS1AsVUFBTCxJQUFpQixPQUFwRCxFQUE2RDtBQUMzRE8sbUJBQUtSLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFzQjtBQUNwQmIscUJBQUssc0NBRGU7QUFFcEJjLHVCQUFPO0FBRmEsZUFBdEI7QUFJRDtBQUNELGdCQUFJRixXQUFXLGNBQWYsRUFBK0I7QUFBRTtBQUMvQlIsbUJBQUtSLFdBQUwsQ0FBaUJpQixJQUFqQixDQUFzQjtBQUNwQmIscUJBQUsscUNBRGU7QUFFcEJjLHVCQUFPO0FBRmEsZUFBdEI7QUFJRDtBQUNGLFdBaEZEO0FBaUZBVixlQUFLVyxNQUFMO0FBQ0Q7QUFyRmlCLE9BQXBCO0FBdUZEOzs7NkJBQ1EsQ0FBRzs7OztFQTFHcUJkLGVBQUtlLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoiYXBwcm92YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29tcG9uZW50cyA9IHtcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBtb2R1bGVfaXRlbTogW10sXG4gICAgZGVwYXJ0bWVudDonJ1xuICB9O1xuICBtZXRob2RzID0ge1xuICAgIGdvVG8odXJsKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IHVybFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlciA9IHRoaXMudXNlciA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICB0aGF0LmRlcGFydG1lbnQ9d2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcbiAgICBycS5nZXQoJ2dldE15SW5mbycsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5tb2R1bGVfaXRlbSA9IFtdO1xuICAgICAgICByZXN1bHQuZGF0YS5kYXRhLnd4YXBwX21vZHVsZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdzYXZlX2FwcGx5Jykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9leGVjdXRlL2RlcG90bGlzdCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAn56S85ZOB5a2Y5pS+55Sz6K+3JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PSAndHJ5X2Rpc2hlc19hcHBseScpIHtcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vZXhlY3V0ZS90cnlkaXNobGlzdCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAn6K+V6I+c55Sz6K+3JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCA9PSAnZGF0YV9zdGF0aXN0aWNzJykge1xuICAgICAgICAgICAgLy/nqbrpobXpnaJcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vc3RhdGlzdGljcycsXG4gICAgICAgICAgICAgIGxhYmVsOiAn5pWw5o2u57uf6K6hJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCA9PSAndGVhbV9tYW5hZ2VyJykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi90ZWFtJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICflm6LpmJ/nrqHnkIYnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdidXNpbmVzc19hdWRpdCcpIHtcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9uYXYvYWRtaW4vYXVkaXQnLFxuICAgICAgICAgICAgICBsYWJlbDogJ+S4muWKoeWuoeaguCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ2N1c3RvbWVyX2F1ZGl0Jykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi91bnN1YnNjcmliZScsXG4gICAgICAgICAgICAgIGxhYmVsOiAn5a6i6LWE5a6h5qC4JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCA9PSAncmVjZWl2ZV9vcmRlcicpIHtcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2FsZS9uYXYvdGFrZW9yZGVycycsXG4gICAgICAgICAgICAgIGxhYmVsOiAn5o6l5Y2VJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCA9PSAnZmluaXNoZWRfb3JkZXInKSB7XG4gICAgICAgICAgICB0aGF0Lm1vZHVsZV9pdGVtLnB1c2goe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NhbGUvb3JkZXJjb21wbGV0ZScsXG4gICAgICAgICAgICAgIGxhYmVsOiAn5oiQ5Lqk6K6i5Y2VJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdvcGVhcnRpb25fcmV2aWV3Jykge1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2FydGNlbnRlci9zY2hlbWUvYWRtaW4vYXVkaXQnLFxuICAgICAgICAgICAgICBsYWJlbDogJ+ivleiPnC/ku7vliqHljZXlrqHmoLgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50ID09ICdzZWFyY2hfdXNlcicpIHtcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc2VhcmNoY3VzdG9tZXJsaXN0c2FsZScsXG4gICAgICAgICAgICAgIGxhYmVsOiAn5L+h5oGv5qOA57SiJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCA9PSAnc2VydmVyX2RhdGFfc3RhdGlzdGljcycpIHtcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hcnRjZW50ZXIvc2VydmVyL3N0YXRpc3RpY3MnLFxuICAgICAgICAgICAgICBsYWJlbDogJ+WuouacjeaVsOaNrue7n+iuoScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsZW1lbnQgPT0gJ3JlcXVlc3RfcmV2aWV3JyAmJiB0aGF0LmRlcGFydG1lbnQ9PSdtYXJyeScpIHtcbiAgICAgICAgICAgIHRoYXQubW9kdWxlX2l0ZW0ucHVzaCh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9hcnRjZW50ZXIvc2NoZW1lL3JlcWF1ZGl0bGlzdCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAn6K+35qy+5a6h5qC4JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudCA9PSAncmV0dXJuX29yZGVyJykgeyAvL1xuICAgICAgICAgICAgdGhhdC5tb2R1bGVfaXRlbS5wdXNoKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zYWxlL25hdi9hZG1pbi9yZWplY3QnLFxuICAgICAgICAgICAgICBsYWJlbDogJ+mps+WbnuS/oeaBrycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkgeyB9XG59XG4iXX0=