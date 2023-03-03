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

      var user = _wepy2.default.getStorageSync('user');
      if (user.is_server || user.is_server_offline) {
        this.getServerDataList();
      }
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlcnN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRhdGEiLCJwYWdlX29sZF9kYXRhIiwicGFnZV9kYXRhIiwiZW1wbG95ZWVfbGlzdCIsImRlcGFydG1lbnQiLCJvcmRlcl9kYXRlX3N0YXJ0Iiwib3JkZXJfZGF0ZV9lbmQiLCJlbXBsb3llZV9jaGVja19pbmRleCIsInBhZ2Vfc3VjY2Vzc19kYXRhIiwidGFiX2luZGV4Iiwid2F0Y2giLCJjb25zb2xlIiwibG9nIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRpbmxpbmVwaWNrZXJiIiwibnRpbmxpbmVwaWNrZXIiLCJudGlubGluZXBpY2tlcmMiLCJudGlubGluZXBpY2tlcmEiLCJudGlubGluZXBpY2tlcmQiLCJtZXRob2RzIiwidG9nZ2xlVGFiIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJoYW5kbGVCZWdpbkNoYW5nZSIsImRhdGUiLCJnZXRTZXJ2ZXJEYXRhTGlzdCIsImhhbmRsZUVuZENoYW5nZSIsImhhbmRsZUNoYW5nZSIsIm5hdmlUb0xpc3QiLCJ2aWV3X3R5cGUiLCJ2aWV3IiwiY2hhbm5lbCIsImNvdW50IiwicGFyYW1zIiwiZW1wbG95ZWVfaWQiLCJ3ZXB5Iiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGhhdCIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5IiwiY2hhbm5lbF9zdWNjZXNzX3ByZW50X2xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNoYW5uZWxfbmFtZSIsInJlcGxhY2UiLCJjaGFubmVsX3N1Y2Nlc3NfbGlzdCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJjb3VudF9kYXkiLCJnZXREYXRlIiwiZHQiLCJkYXRlRm9ybWF0IiwidXNlciIsImdl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QU9qRCxJQUFQLENBQVlBLElBQVosQ0FBaUJHLGFBQXRDO0FBQ0F5QyxlQUFLTSxNQUFMO0FBQ0Q7QUFkZ0MsT0FBbkMsRUFlR1osTUFmSDtBQWdCRDs7OzZCQUNRO0FBQ1AsVUFBSU0sT0FBTyxJQUFYO0FBQ0EsVUFBSWEsUUFBUSxJQUFJQyxJQUFKLEVBQVo7QUFDQSxVQUFJQyxPQUFPRixNQUFNRyxXQUFOLEVBQVg7QUFDQSxVQUFJQyxRQUFRSixNQUFNSyxRQUFOLEVBQVo7QUFDQSxVQUFJQyxZQUFZLElBQUlMLElBQUosQ0FBU0MsSUFBVCxFQUFlRSxLQUFmLEVBQXNCLENBQXRCLEVBQXlCRyxPQUF6QixFQUFoQjs7QUFFQSxXQUFLM0QsZ0JBQUwsR0FBd0I0RCxlQUFHQyxVQUFILENBQWMsWUFBZCxFQUE0QixJQUFJUixJQUFKLENBQVNDLElBQVQsRUFBZUUsS0FBZixFQUFzQixDQUF0QixDQUE1QixDQUF4QjtBQUNBLFdBQUt2RCxjQUFMLEdBQXNCMkQsZUFBR0MsVUFBSCxDQUFjLFlBQWQsRUFBNEIsSUFBSVIsSUFBSixDQUFTQyxJQUFULEVBQWVFLEtBQWYsRUFBc0JFLFlBQVksQ0FBbEMsQ0FBNUIsQ0FBdEI7O0FBRUEsVUFBTUksT0FBSzNCLGVBQUs0QixjQUFMLENBQW9CLE1BQXBCLENBQVg7QUFDQSxVQUFHRCxLQUFLRSxTQUFMLElBQWdCRixLQUFLRyxpQkFBeEIsRUFBMEM7QUFDeEMsYUFBS3hDLGlCQUFMO0FBQ0Q7QUFDRjs7OztFQXBIZ0NVLGVBQUsrQixTOztrQkFBbkJ6RSxLIiwiZmlsZSI6InNlcnZlcnN0YXRpc3RpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgcnEgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IGR0IGZyb20gJy4uL2NvbW1vbi91dGlscy9kYXRlJztcbmltcG9ydCBudGlubGluZXBpY2tlciBmcm9tICcuL2NvbW1vbi9udGlubGluZXBpY2tlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG5cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBwYWdlX29sZF9kYXRhOm51bGwsXG4gICAgcGFnZV9kYXRhOiBudWxsLFxuICAgIGVtcGxveWVlX2xpc3Q6IG51bGwsXG4gICAgZGVwYXJ0bWVudDogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuICAgIGVtcGxveWVlX2NoZWNrX2luZGV4OiAwLFxuICAgIHBhZ2Vfc3VjY2Vzc19kYXRhOm51bGwsXG4gICAgdGFiX2luZGV4OjBcbiAgfVxuICB3YXRjaCA9IHtcbiAgICBvcmRlcl9kYXRlX3N0YXJ0KCl7XG4gICAgICBjb25zb2xlLmxvZygncHBwcCcpXG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfZW5kXCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGlubGluZXBpY2tlcmNcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfc3RhcnRcIixcIm50cGlja2VydHlwZVwiOlwiZGF0ZVwifSxcIm50aW5saW5lcGlja2VyYVwiOntcInYtYmluZDpudHJhbmdlLnN5bmNcIjpcImVtcGxveWVlX2xpc3RcIixcIm50a2V5XCI6XCJlbXBsb3llZV9uYW1lXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJlbXBsb3llZV9jaGVja19pbmRleFwifX07XHJcbiRldmVudHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiaGFuZGxlRW5kQ2hhbmdlXCJ9LFwibnRpbmxpbmVwaWNrZXJjXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUJlZ2luQ2hhbmdlXCJ9LFwibnRpbmxpbmVwaWNrZXJhXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUNoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50aW5saW5lcGlja2VyYjogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJjOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmE6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyZDogbnRpbmxpbmVwaWNrZXIsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB9LFxuICAgIGhhbmRsZUJlZ2luQ2hhbmdlKGRhdGUpe1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0PWRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVFbmRDaGFuZ2UoZGF0ZSl7XG4gICAgICB0aGlzLm9yZGVyX2RhdGVfZW5kPWRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVDaGFuZ2UoaW5kZXgpe1xuICAgICAgdGhpcy5lbXBsb3llZV9jaGVja19pbmRleD1pbmRleDtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuXG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgdmlld190eXBlPWUuY3VycmVudFRhcmdldC5kYXRhc2V0LnZpZXc7XG4gICAgICBsZXQgY2hhbm5lbD1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jaGFubmVsO1xuICAgICAgbGV0IGNvdW50PWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvdW50O1xuICAgICAgaWYoY291bnQ9PTApe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgcGFyYW1zPSdzdGFydF90aW1lPScrdGhpcy5vcmRlcl9kYXRlX3N0YXJ0KycmZW5kX3RpbWU9Jyt0aGlzLm9yZGVyX2RhdGVfZW5kO1xuICAgICAgaWYodGhpcy5lbXBsb3llZV9jaGVja19pbmRleCE9MCl7XG4gICAgICAgIHBhcmFtcys9JyZlbXBsb3llZV9pZD0nK3RoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgICAgfVxuICAgICAgaWYodmlld190eXBlKXtcbiAgICAgICAgcGFyYW1zKz0nJnZpZXdfdHlwZT0nK3ZpZXdfdHlwZTtcbiAgICAgIH1lbHNle1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjaGFubmVsJywgY2hhbm5lbClcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVyPycrcGFyYW1zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXRTZXJ2ZXJEYXRhTGlzdCgpe1xuICAgIGxldCB0aGF0PXRoaXM7XG4gICAgbGV0IHBhcmFtcz17XG4gICAgICBzdGFydF90aW1lOnRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF90aW1lOnRoYXQub3JkZXJfZGF0ZV9lbmRcbiAgICB9XG4gICAgaWYodGhhdC5lbXBsb3llZV9jaGVja19pbmRleCE9MCl7XG4gICAgICBwYXJhbXNbJ2VtcGxveWVlX2lkJ109dGhpcy5lbXBsb3llZV9saXN0W3RoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXhdLmVtcGxveWVlX2lkXG4gICAgfVxuXG4gICAgcnEuZ2V0KCdnZXRTZXJ2ZXJEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX29sZF9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC5lbXBsb3llZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHBhcmFtcyk7XG5cbiAgICBycS5nZXQoJ2dldFNlcnZlclN1Y2Nlc3NEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGE9cmVzdWx0LmRhdGEuZGF0YTtcblxuICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsX3N1Y2Nlc3NfcHJlbnRfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2hhbm5lbF9uYW1lPWVsZW1lbnQuY2hhbm5lbF9uYW1lLnJlcGxhY2UoL1xcXFxuL2csJ1xcbicpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEuY2hhbm5lbF9zdWNjZXNzX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNoYW5uZWxfbmFtZT1lbGVtZW50LmNoYW5uZWxfbmFtZS5yZXBsYWNlKC9cXFxcbi9nLCdcXG4nKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBsZXQgY291bnRfZGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcblxuICAgIHRoaXMub3JkZXJfZGF0ZV9zdGFydCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkpO1xuICAgIHRoaXMub3JkZXJfZGF0ZV9lbmQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIGNvdW50X2RheSAtIDEpKTtcblxuICAgIGNvbnN0IHVzZXI9d2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGlmKHVzZXIuaXNfc2VydmVyfHx1c2VyLmlzX3NlcnZlcl9vZmZsaW5lKXtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==