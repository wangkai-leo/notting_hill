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
    }, _this.watch = {}, _this.components = {
      ntinlinepickerb: _ntinlinepicker2.default,
      ntinlinepickerc: _ntinlinepicker2.default,
      ntinlinepickera: _ntinlinepicker2.default,
      ntinlinepickerd: _ntinlinepicker2.default
    }, _this.methods = {
      naviToSchemeList: function naviToSchemeList(e) {
        var parm = 'order_date_start=' + this.order_date_start + '&order_date_end=' + this.order_date_end + '&pay_date_start=' + this.pay_date_start + '&pay_date_end=' + this.pay_date_end + '&data_type=' + e.currentTarget.dataset.type;
        _wepy2.default.navigateTo({
          url: '/pages/common/searchcustomerlistsale?' + parm
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
      var user_act = this.user_act = _wepy2.default.getStorageSync('user');
      if (user_act.is_scheme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NjaGVtZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZGF0YSIsInBhZ2Vfb2xkX2RhdGEiLCJwYWdlX2RhdGEiLCJlbXBsb3llZV9saXN0IiwiZGVwYXJ0bWVudCIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsImVtcGxveWVlX2NoZWNrX2luZGV4IiwicGFnZV9zdWNjZXNzX2RhdGEiLCJ0YWJfaW5kZXgiLCJ3YXRjaCIsImNvbXBvbmVudHMiLCJudGlubGluZXBpY2tlcmIiLCJudGlubGluZXBpY2tlciIsIm50aW5saW5lcGlja2VyYyIsIm50aW5saW5lcGlja2VyYSIsIm50aW5saW5lcGlja2VyZCIsIm1ldGhvZHMiLCJuYXZpVG9TY2hlbWVMaXN0IiwiZSIsInBhcm0iLCJwYXlfZGF0ZV9zdGFydCIsInBheV9kYXRlX2VuZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidHlwZSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGhhdCIsInBhcmFtcyIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsImVtcGxveWVlX2lkIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJjaGFubmVsX3N1Y2Nlc3NfcHJlbnRfbGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwiY2hhbm5lbF9uYW1lIiwicmVwbGFjZSIsImNoYW5uZWxfc3VjY2Vzc19saXN0IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImNvdW50X2RheSIsImdldERhdGUiLCJkdCIsImRhdGVGb3JtYXQiLCJ1c2VyX2FjdCIsImdldFN0b3JhZ2VTeW5jIiwiaXNfc2NoZW1lIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7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QyxJQUFULEVBQWVFLEtBQWYsRUFBc0IsQ0FBdEIsQ0FBNUIsQ0FBeEI7QUFDQSxXQUFLMUMsY0FBTCxHQUFzQjhDLGVBQUdDLFVBQUgsQ0FBYyxZQUFkLEVBQTRCLElBQUlSLElBQUosQ0FBU0MsSUFBVCxFQUFlRSxLQUFmLEVBQXNCRSxZQUFZLENBQWxDLENBQTVCLENBQXRCO0FBQ0EsVUFBSUksV0FBVSxLQUFLQSxRQUFMLEdBQWM1QixlQUFLNkIsY0FBTCxDQUFvQixNQUFwQixDQUE1QjtBQUNBLFVBQUdELFNBQVNFLFNBQVosRUFBc0I7QUFDcEJ0QiwwQkFBR0MsR0FBSCxDQUFPLG1CQUFQLEVBQTRCO0FBQzFCLGVBQUssbUJBQVU7QUFDYk4saUJBQUszQixTQUFMLEdBQWlCa0MsT0FBT3BDLElBQVAsQ0FBWUEsSUFBN0I7QUFDQTZCLGlCQUFLUSxNQUFMO0FBQ0Q7QUFKeUIsU0FBNUIsRUFLRztBQUNEb0Isc0JBQVk1QixLQUFLeEIsZ0JBRGhCO0FBRURxRCxvQkFBVTdCLEtBQUt2QjtBQUZkLFNBTEg7QUFTRDtBQUNGOzs7O0VBckZnQ29CLGVBQUtpQyxTOztrQkFBbkI3RCxLIiwiZmlsZSI6InN0YXRpc3RpY3NjaGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBycSBmcm9tICcuLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgZHQgZnJvbSAnLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IG50aW5saW5lcGlja2VyIGZyb20gJy4vY29tbW9uL250aW5saW5lcGlja2VyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBwYWdlX29sZF9kYXRhOiBudWxsLFxuICAgIHBhZ2VfZGF0YTogbnVsbCxcbiAgICBlbXBsb3llZV9saXN0OiBudWxsLFxuICAgIGRlcGFydG1lbnQ6ICcnLFxuICAgIG9yZGVyX2RhdGVfc3RhcnQ6ICcnLFxuICAgIG9yZGVyX2RhdGVfZW5kOiAnJyxcbiAgICBlbXBsb3llZV9jaGVja19pbmRleDogMCxcbiAgICBwYWdlX3N1Y2Nlc3NfZGF0YTogbnVsbCxcbiAgICB0YWJfaW5kZXg6IDBcbiAgfVxuICB3YXRjaCA9IHtcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIG50aW5saW5lcGlja2VyYjogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJjOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmE6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyZDogbnRpbmxpbmVwaWNrZXIsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBuYXZpVG9TY2hlbWVMaXN0KGUpIHtcbiAgICAgIGxldCBwYXJtID0gJ29yZGVyX2RhdGVfc3RhcnQ9JyArIHRoaXMub3JkZXJfZGF0ZV9zdGFydCArXG4gICAgICAgICcmb3JkZXJfZGF0ZV9lbmQ9JyArIHRoaXMub3JkZXJfZGF0ZV9lbmQgK1xuICAgICAgICAnJnBheV9kYXRlX3N0YXJ0PScgKyB0aGlzLnBheV9kYXRlX3N0YXJ0ICtcbiAgICAgICAgJyZwYXlfZGF0ZV9lbmQ9JyArIHRoaXMucGF5X2RhdGVfZW5kICtcbiAgICAgICAgJyZkYXRhX3R5cGU9JyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3NlYXJjaGN1c3RvbWVybGlzdHNhbGU/JyArIHBhcm1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXRTZXJ2ZXJEYXRhTGlzdCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0X3RpbWU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF90aW1lOiB0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgfVxuICAgIGlmICh0aGF0LmVtcGxveWVlX2NoZWNrX2luZGV4ICE9IDApIHtcbiAgICAgIHBhcmFtc1snZW1wbG95ZWVfaWQnXSA9IHRoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgIH1cbiAgICBycS5nZXQoJ2dldFNlcnZlckRhdGFMaXN0Jywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnBhZ2Vfb2xkX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKTtcbiAgICBycS5nZXQoJ2dldFNlcnZlclN1Y2Nlc3NEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsX3N1Y2Nlc3NfcHJlbnRfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2hhbm5lbF9uYW1lID0gZWxlbWVudC5jaGFubmVsX25hbWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsX3N1Y2Nlc3NfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2hhbm5lbF9uYW1lID0gZWxlbWVudC5jaGFubmVsX25hbWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdD10aGlzO1xuICAgIFxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IGNvdW50X2RheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKSk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgY291bnRfZGF5IC0gMSkpO1xuICAgIGxldCB1c2VyX2FjdCA9dGhpcy51c2VyX2FjdD13ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgaWYodXNlcl9hY3QuaXNfc2NoZW1lKXtcbiAgICAgIHJxLmdldChcImdldERhdGFTdGF0aXN0aWNzXCIsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQucGFnZV9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHN0YXJ0X2RhdGU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgICAgZW5kX2RhdGU6IHRoYXQub3JkZXJfZGF0ZV9lbmRcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=