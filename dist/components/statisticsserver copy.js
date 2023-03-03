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
    }, _this.$repeat = {}, _this.$props = { "ntinlinepickerb": { "v-bind:checked_name.sync": "order_date_end", "ntpickertype": "date" }, "ntinlinepickerc": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:checked_name.sync": "order_date_start", "ntpickertype": "date" }, "ntinlinepickera": { "v-bind:ntrange.sync": "employee_list", "ntkey": "employee_name", "v-bind:checked_index.sync": "employee_check_index" } }, _this.$events = { "ntinlinepickerb": { "v-on:change": "handleEndChange" }, "ntinlinepickerc": { "v-on:change": "handleBeginChange" }, "ntinlinepickera": { "v-on:change": "handleChange" } }, _this.components = {
      ntinlinepickerb: _ntinlinepicker2.default,
      ntinlinepickerc: _ntinlinepicker2.default,
      ntinlinepickera: _ntinlinepicker2.default,
      ntinlinepickerd: _ntinlinepicker2.default
    }, _this.methods = {
      toggleTab: function toggleTab(e) {
        this.tab_index = e.currentTarget.dataset.index;
      },
      handleBeginChange: function handleBeginChange(date) {
        this.order_date_start = date;
        this.getServerDataList();
      },
      handleEndChange: function handleEndChange(date) {
        this.order_date_end = date;
        this.getServerDataList();
      },
      handleChange: function handleChange(index) {
        this.employee_check_index = index;
        this.getServerDataList();
      },
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
      this.getServerDataList();
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzZXJ2ZXIgY29weS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZGF0YSIsInBhZ2Vfb2xkX2RhdGEiLCJwYWdlX2RhdGEiLCJlbXBsb3llZV9saXN0IiwiZGVwYXJ0bWVudCIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsImVtcGxveWVlX2NoZWNrX2luZGV4IiwicGFnZV9zdWNjZXNzX2RhdGEiLCJ0YWJfaW5kZXgiLCJ3YXRjaCIsImNvbnNvbGUiLCJsb2ciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJudGlubGluZXBpY2tlcmIiLCJudGlubGluZXBpY2tlciIsIm50aW5saW5lcGlja2VyYyIsIm50aW5saW5lcGlja2VyYSIsIm50aW5saW5lcGlja2VyZCIsIm1ldGhvZHMiLCJ0b2dnbGVUYWIiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImhhbmRsZUJlZ2luQ2hhbmdlIiwiZGF0ZSIsImdldFNlcnZlckRhdGFMaXN0IiwiaGFuZGxlRW5kQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwibmF2aVRvTGlzdCIsInZpZXdfdHlwZSIsInZpZXciLCJjaGFubmVsIiwiY291bnQiLCJwYXJhbXMiLCJlbXBsb3llZV9pZCIsIndlcHkiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aGF0Iiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwicnEiLCJnZXQiLCJyZXN1bHQiLCIkYXBwbHkiLCJjaGFubmVsX3N1Y2Nlc3NfcHJlbnRfbGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwiY2hhbm5lbF9uYW1lIiwicmVwbGFjZSIsImNoYW5uZWxfc3VjY2Vzc19saXN0IiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImNvdW50X2RheSIsImdldERhdGUiLCJkdCIsImRhdGVGb3JtYXQiLCJjb21w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TUFBTDtBQUNEO0FBZGdDLE9BQW5DLEVBZUdaLE1BZkg7QUFnQkQ7Ozs2QkFDUTtBQUNQLFVBQUlNLE9BQU8sSUFBWDtBQUNBLFVBQUlhLFFBQVEsSUFBSUMsSUFBSixFQUFaO0FBQ0EsVUFBSUMsT0FBT0YsTUFBTUcsV0FBTixFQUFYO0FBQ0EsVUFBSUMsUUFBUUosTUFBTUssUUFBTixFQUFaO0FBQ0EsVUFBSUMsWUFBWSxJQUFJTCxJQUFKLENBQVNDLElBQVQsRUFBZUUsS0FBZixFQUFzQixDQUF0QixFQUF5QkcsT0FBekIsRUFBaEI7QUFDQSxXQUFLM0QsZ0JBQUwsR0FBd0I0RCxlQUFHQyxVQUFILENBQWMsWUFBZCxFQUE0QixJQUFJUixJQUFKLENBQVNDLElBQVQsRUFBZUUsS0FBZixFQUFzQixDQUF0QixDQUE1QixDQUF4QjtBQUNBLFdBQUt2RCxjQUFMLEdBQXNCMkQsZUFBR0MsVUFBSCxDQUFjLFlBQWQsRUFBNEIsSUFBSVIsSUFBSixDQUFTQyxJQUFULEVBQWVFLEtBQWYsRUFBc0JFLFlBQVksQ0FBbEMsQ0FBNUIsQ0FBdEI7QUFDQSxXQUFLakMsaUJBQUw7QUFDRDs7OztFQTlHZ0NVLGVBQUsyQixTOztrQkFBbkJyRSxLIiwiZmlsZSI6InN0YXRpc3RpY3NzZXJ2ZXIgY29weS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBycSBmcm9tICcuLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgZHQgZnJvbSAnLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IG50aW5saW5lcGlja2VyIGZyb20gJy4vY29tbW9uL250aW5saW5lcGlja2VyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcblxuICB9O1xuICBkYXRhID0ge1xuICAgIHBhZ2Vfb2xkX2RhdGE6IG51bGwsXG4gICAgcGFnZV9kYXRhOiBudWxsLFxuICAgIGVtcGxveWVlX2xpc3Q6IG51bGwsXG4gICAgZGVwYXJ0bWVudDogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuICAgIGVtcGxveWVlX2NoZWNrX2luZGV4OiAwLFxuICAgIHBhZ2Vfc3VjY2Vzc19kYXRhOiBudWxsLFxuICAgIHRhYl9pbmRleDogMFxuICB9XG4gIHdhdGNoID0ge1xuICAgIG9yZGVyX2RhdGVfc3RhcnQoKSB7XG4gICAgICBjb25zb2xlLmxvZygncHBwcCcpXG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfZW5kXCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGlubGluZXBpY2tlcmNcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfc3RhcnRcIixcIm50cGlja2VydHlwZVwiOlwiZGF0ZVwifSxcIm50aW5saW5lcGlja2VyYVwiOntcInYtYmluZDpudHJhbmdlLnN5bmNcIjpcImVtcGxveWVlX2xpc3RcIixcIm50a2V5XCI6XCJlbXBsb3llZV9uYW1lXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJlbXBsb3llZV9jaGVja19pbmRleFwifX07XHJcbiRldmVudHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiaGFuZGxlRW5kQ2hhbmdlXCJ9LFwibnRpbmxpbmVwaWNrZXJjXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUJlZ2luQ2hhbmdlXCJ9LFwibnRpbmxpbmVwaWNrZXJhXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUNoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50aW5saW5lcGlja2VyYjogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJjOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmE6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyZDogbnRpbmxpbmVwaWNrZXIsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB9LFxuICAgIGhhbmRsZUJlZ2luQ2hhbmdlKGRhdGUpIHtcbiAgICAgIHRoaXMub3JkZXJfZGF0ZV9zdGFydCA9IGRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVFbmRDaGFuZ2UoZGF0ZSkge1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVDaGFuZ2UoaW5kZXgpIHtcbiAgICAgIHRoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuXG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgdmlld190eXBlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmlldztcbiAgICAgIGxldCBjaGFubmVsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2hhbm5lbDtcbiAgICAgIGxldCBjb3VudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvdW50O1xuICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHBhcmFtcyA9ICdzdGFydF90aW1lPScgKyB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgKyAnJmVuZF90aW1lPScgKyB0aGlzLm9yZGVyX2RhdGVfZW5kO1xuICAgICAgaWYgKHRoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXggIT0gMCkge1xuICAgICAgICBwYXJhbXMgKz0gJyZlbXBsb3llZV9pZD0nICsgdGhpcy5lbXBsb3llZV9saXN0W3RoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXhdLmVtcGxveWVlX2lkXG4gICAgICB9XG4gICAgICBpZiAodmlld190eXBlKSB7XG4gICAgICAgIHBhcmFtcyArPSAnJnZpZXdfdHlwZT0nICsgdmlld190eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2hhbm5lbCcsIGNoYW5uZWwpXG4gICAgICB9XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3N0YXRpc3RpY3NjdXN0b21lcj8nICsgcGFyYW1zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXRTZXJ2ZXJEYXRhTGlzdCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0X3RpbWU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF90aW1lOiB0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgfVxuICAgIGlmICh0aGF0LmVtcGxveWVlX2NoZWNrX2luZGV4ICE9IDApIHtcbiAgICAgIHBhcmFtc1snZW1wbG95ZWVfaWQnXSA9IHRoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgIH1cbiAgICBycS5nZXQoJ2dldFNlcnZlckRhdGFMaXN0Jywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnBhZ2Vfb2xkX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKTtcblxuICAgIHJxLmdldCgnZ2V0U2VydmVyU3VjY2Vzc0RhdGFMaXN0Jywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnBhZ2VfZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cbiAgICAgICAgdGhhdC5wYWdlX2RhdGEuY2hhbm5lbF9zdWNjZXNzX3ByZW50X2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNoYW5uZWxfbmFtZSA9IGVsZW1lbnQuY2hhbm5lbF9uYW1lLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsX3N1Y2Nlc3NfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2hhbm5lbF9uYW1lID0gZWxlbWVudC5jaGFubmVsX25hbWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoYXQuZW1wbG95ZWVfbGlzdCA9IHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCBwYXJhbXMpXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpO1xuICAgIGxldCBjb3VudF9kYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIHRoaXMub3JkZXJfZGF0ZV9zdGFydCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkpO1xuICAgIHRoaXMub3JkZXJfZGF0ZV9lbmQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIGNvdW50X2RheSAtIDEpKTtcbiAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gIH1cbn1cbiJdfQ==