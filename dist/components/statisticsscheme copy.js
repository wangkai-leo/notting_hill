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

var _date = require('./../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _ntinlinepicker = require('./common/ntinlinepicker.js');

var _ntinlinepicker2 = _interopRequireDefault(_ntinlinepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      page_old_data: null,
      page_data: null,
      employee_list: null,
      department: '',
      order_date_start: '',
      order_date_end: '',
      employee_check_index: 0,
      page_success_data: null,
      tab_index: 0
    }, _this.watch = {
      order_date_start: function order_date_start() {
        console.log('pppp');
      }
    }, _this.components = {
      ntinlinepickerb: _ntinlinepicker2.default,
      ntinlinepickerc: _ntinlinepicker2.default,
      ntinlinepickera: _ntinlinepicker2.default,
      ntinlinepickerd: _ntinlinepicker2.default
    }, _this.methods = {
      naviToList: function naviToList(e) {
        var view_type = e.currentTarget.dataset.view;
        var channel = e.currentTarget.dataset.channel;
        var count = e.currentTarget.dataset.count;
        if (count == 0) {
          return false;
        }
        var params = 'start_time=' + this.order_date_start + '&end_time=' + this.order_date_end;
        if (this.employee_check_index != 0) {
          params += '&employee_id=' + this.employee_list[this.employee_check_index].employee_id;
        }
        if (view_type) {
          params += '&view_type=' + view_type;
        } else {
          _wepy2.default.setStorageSync('channel', channel);
        }
        _wepy2.default.navigateTo({
          url: '/pages/common/statisticscustomer?' + params
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getServerDataList',
    value: function getServerDataList() {
      var that = this;
      var params = {
        start_time: that.order_date_start,
        end_time: that.order_date_end
      };
      if (that.employee_check_index != 0) {
        params['employee_id'] = this.employee_list[this.employee_check_index].employee_id;
      }
      _request2.default.get('getServerDataList', {
        200: function _(result) {
          that.page_old_data = result.data.data;
          that.employee_list = result.data.data.employee_list;
          that.$apply();
        }
      }, params);
      _request2.default.get('getServerSuccessDataList', {
        200: function _(result) {
          that.page_data = result.data.data;
          that.page_data.channel_success_prent_list.forEach(function (element) {
            element.channel_name = element.channel_name.replace(/\\n/g, '\n');
          });
          that.page_data.channel_success_list.forEach(function (element) {
            element.channel_name = element.channel_name.replace(/\\n/g, '\n');
          });
          that.employee_list = result.data.data.employee_list;
          that.$apply();
        }
      }, params);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;

      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth();
      var count_day = new Date(year, month, 0).getDate();
      this.order_date_start = _date2.default.dateFormat('yyyy-MM-dd', new Date(year, month, 1));
      this.order_date_end = _date2.default.dateFormat('yyyy-MM-dd', new Date(year, month, count_day - 1));
      var user_act = _wepy2.default.getStorageSync('user');
      console.log('?????');
      console.log(user_act);
      if (user_act.is_sale) {
        _request2.default.get("getDataStatistics", {
          200: function _(result) {
            that.page_data = result.data.data;
            that.$apply();
          }
        }, {
          start_date: that.order_date_start,
          end_date: that.order_date_end
        });
      }
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzY2hlbWUgY29weS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZGF0YSIsInBhZ2Vfb2xkX2RhdGEiLCJwYWdlX2RhdGEiLCJlbXBsb3llZV9saXN0IiwiZGVwYXJ0bWVudCIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsImVtcGxveWVlX2NoZWNrX2luZGV4IiwicGFnZV9zdWNjZXNzX2RhdGEiLCJ0YWJfaW5kZXgiLCJ3YXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRzIiwibnRpbmxpbmVwaWNrZXJiIiwibnRpbmxpbmVwaWNrZXIiLCJudGlubGluZXBpY2tlcmMiLCJudGlubGluZXBpY2tlcmEiLCJudGlubGluZXBpY2tlcmQiLCJtZXRob2RzIiwibmF2aVRvTGlzdCIsImUiLCJ2aWV3X3R5cGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZpZXciLCJjaGFubmVsIiwiY291bnQiLCJwYXJhbXMiLCJlbXBsb3llZV9pZCIsIndlcHkiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aGF0Iiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJjaGFubmVsX3N1Y2Nlc3NfcHJlbnRfbGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwiY2hhbm5lbF9uYW1lIiwicmVwbGFjZSIsImNoYW5uZWxfc3VjY2Vzc19saXN0IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImNvdW50X2RheSIsImdldERhdGUiLCJkdCIsImRhdGVGb3JtYXQiLCJ1c2VyX2FjdCIsImdldFN0b3JhZ2VTeW5jIiwiaXNfc2FsZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7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SDtBQVNEO0FBQ0Y7Ozs7RUFwR2dDd0IsZUFBS2dDLFM7O2tCQUFuQmhFLEsiLCJmaWxlIjoic3RhdGlzdGljc3NjaGVtZSBjb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBkdCBmcm9tICcuLi9jb21tb24vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgbnRpbmxpbmVwaWNrZXIgZnJvbSAnLi9jb21tb24vbnRpbmxpbmVwaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICB9O1xuICBkYXRhID0ge1xuICAgIHBhZ2Vfb2xkX2RhdGE6IG51bGwsXG4gICAgcGFnZV9kYXRhOiBudWxsLFxuICAgIGVtcGxveWVlX2xpc3Q6IG51bGwsXG4gICAgZGVwYXJ0bWVudDogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuICAgIGVtcGxveWVlX2NoZWNrX2luZGV4OiAwLFxuICAgIHBhZ2Vfc3VjY2Vzc19kYXRhOiBudWxsLFxuICAgIHRhYl9pbmRleDogMFxuICB9XG4gIHdhdGNoID0ge1xuICAgIG9yZGVyX2RhdGVfc3RhcnQoKSB7XG4gICAgICBjb25zb2xlLmxvZygncHBwcCcpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgbnRpbmxpbmVwaWNrZXJiOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmM6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyYTogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJkOiBudGlubGluZXBpY2tlcixcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG5hdmlUb0xpc3QoZSkge1xuICAgICAgbGV0IHZpZXdfdHlwZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnZpZXc7XG4gICAgICBsZXQgY2hhbm5lbCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNoYW5uZWw7XG4gICAgICBsZXQgY291bnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb3VudDtcbiAgICAgIGlmIChjb3VudCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCBwYXJhbXMgPSAnc3RhcnRfdGltZT0nICsgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ICsgJyZlbmRfdGltZT0nICsgdGhpcy5vcmRlcl9kYXRlX2VuZDtcbiAgICAgIGlmICh0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4ICE9IDApIHtcbiAgICAgICAgcGFyYW1zICs9ICcmZW1wbG95ZWVfaWQ9JyArIHRoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgICAgfVxuICAgICAgaWYgKHZpZXdfdHlwZSkge1xuICAgICAgICBwYXJhbXMgKz0gJyZ2aWV3X3R5cGU9JyArIHZpZXdfdHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2NoYW5uZWwnLCBjaGFubmVsKVxuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zdGF0aXN0aWNzY3VzdG9tZXI/JyArIHBhcmFtc1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZ2V0U2VydmVyRGF0YUxpc3QoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBzdGFydF90aW1lOiB0aGF0Lm9yZGVyX2RhdGVfc3RhcnQsXG4gICAgICBlbmRfdGltZTogdGhhdC5vcmRlcl9kYXRlX2VuZFxuICAgIH1cbiAgICBpZiAodGhhdC5lbXBsb3llZV9jaGVja19pbmRleCAhPSAwKSB7XG4gICAgICBwYXJhbXNbJ2VtcGxveWVlX2lkJ10gPSB0aGlzLmVtcGxveWVlX2xpc3RbdGhpcy5lbXBsb3llZV9jaGVja19pbmRleF0uZW1wbG95ZWVfaWRcbiAgICB9XG4gICAgcnEuZ2V0KCdnZXRTZXJ2ZXJEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX29sZF9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC5lbXBsb3llZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHBhcmFtcyk7XG4gICAgcnEuZ2V0KCdnZXRTZXJ2ZXJTdWNjZXNzRGF0YUxpc3QnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQucGFnZV9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEuY2hhbm5lbF9zdWNjZXNzX3ByZW50X2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNoYW5uZWxfbmFtZSA9IGVsZW1lbnQuY2hhbm5lbF9uYW1lLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEuY2hhbm5lbF9zdWNjZXNzX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNoYW5uZWxfbmFtZSA9IGVsZW1lbnQuY2hhbm5lbF9uYW1lLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC5lbXBsb3llZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHBhcmFtcylcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQ9dGhpcztcbiAgICBcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpO1xuICAgIGxldCBjb3VudF9kYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIHRoaXMub3JkZXJfZGF0ZV9zdGFydCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkpO1xuICAgIHRoaXMub3JkZXJfZGF0ZV9lbmQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIGNvdW50X2RheSAtIDEpKTtcbiAgICBsZXQgdXNlcl9hY3Q9d2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGNvbnNvbGUubG9nKCc/Pz8/PycpXG4gICAgY29uc29sZS5sb2codXNlcl9hY3QpXG4gICAgaWYodXNlcl9hY3QuaXNfc2FsZSl7XG4gICAgICBycS5nZXQoXCJnZXREYXRhU3RhdGlzdGljc1wiLCB7XG4gICAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGF0LnBhZ2VfZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBzdGFydF9kYXRlOiB0aGF0Lm9yZGVyX2RhdGVfc3RhcnQsXG4gICAgICAgIGVuZF9kYXRlOiB0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19