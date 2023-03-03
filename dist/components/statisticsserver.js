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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      is_request: {
        type: Boolean,
        twoWay: true
      }
    }, _this.data = {
      page_old_data: null,
      page_data: null,
      employee_list: null,
      department: '',
      order_date_start: '',
      order_date_end: '',
      employee_check_index: 0,
      page_success_data: null,
      tab_index: 0,
      user_act: null
    }, _this.watch = {
      is_request: function is_request() {
        if (this.is_request) {
          var user_act = this.user_act = _wepy2.default.getStorageSync('user');
          if (user_act.is_server || user_act.is_server_offline) {
            this.getServerDataList();
          }
        }
      }
    }, _this.$repeat = {}, _this.$props = { "ntinlinepickerb": { "v-bind:checked_name.sync": "order_date_end", "ntpickertype": "date" }, "ntinlinepickerc": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:checked_name.sync": "order_date_start", "ntpickertype": "date" }, "ntinlinepickera": { "v-bind:ntrange.sync": "employee_list", "ntkey": "employee_name", "v-bind:checked_index.sync": "employee_check_index" } }, _this.$events = { "ntinlinepickerb": { "v-on:change": "handleEndChange" }, "ntinlinepickerc": { "v-on:change": "handleBeginChange" }, "ntinlinepickera": { "v-on:change": "handleChange" } }, _this.components = {
      ntinlinepickerb: _ntinlinepicker2.default,
      ntinlinepickerc: _ntinlinepicker2.default,
      ntinlinepickera: _ntinlinepicker2.default
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
          url: '/pages/common/statisticscustomerlistserver?' + params
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
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: function success(res) {}
      });
      _request2.default.get('getServerDataList', {
        200: function _(result) {
          _wepy2.default.hideLoading();
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
      if (user_act.is_server || user_act.is_server_offline) {
        this.getServerDataList();
      }
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImlzX3JlcXVlc3QiLCJ0eXBlIiwiQm9vbGVhbiIsInR3b1dheSIsImRhdGEiLCJwYWdlX29sZF9kYXRhIiwicGFnZV9kYXRhIiwiZW1wbG95ZWVfbGlzdCIsImRlcGFydG1lbnQiLCJvcmRlcl9kYXRlX3N0YXJ0Iiwib3JkZXJfZGF0ZV9lbmQiLCJlbXBsb3llZV9jaGVja19pbmRleCIsInBhZ2Vfc3VjY2Vzc19kYXRhIiwidGFiX2luZGV4IiwidXNlcl9hY3QiLCJ3YXRjaCIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NlcnZlciIsImlzX3NlcnZlcl9vZmZsaW5lIiwiZ2V0U2VydmVyRGF0YUxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJudGlubGluZXBpY2tlcmIiLCJudGlubGluZXBpY2tlciIsIm50aW5saW5lcGlja2VyYyIsIm50aW5saW5lcGlja2VyYSIsIm1ldGhvZHMiLCJ0b2dnbGVUYWIiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImhhbmRsZUJlZ2luQ2hhbmdlIiwiZGF0ZSIsImhhbmRsZUVuZENoYW5nZSIsImhhbmRsZUNoYW5nZSIsIm5hdmlUb0xpc3QiLCJ2aWV3X3R5cGUiLCJ2aWV3IiwiY2hhbm5lbCIsImNvdW50IiwicGFyYW1zIiwiZW1wbG95ZWVfaWQiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aGF0Iiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwicnEiLCJnZXQiLCJoaWRlTG9hZGluZyIsInJlc3VsdCIsIiRhcHBseSIsImNoYW5uZWxfc3VjY2Vzc19wcmVudF9saXN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjaGFubmVsX25hbWUiLCJyZXBsYWNlIiwiY2hhbm5lbF9zdWNjZXNzX2xpc3QiLCJ0b2RheSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiY291bnRfZGF5IiwiZ2V0RGF0ZSIsImR0IiwiZGF0ZUZvcm1hdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVc7QUFDVEMsY0FBS0MsT0FESTtBQUVUQyxnQkFBTztBQUZFO0FBREwsSyxRQU1SQyxJLEdBQU87QUFDTEMscUJBQWUsSUFEVjtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLHFCQUFlLElBSFY7QUFJTEMsa0JBQVksRUFKUDtBQUtMQyx3QkFBa0IsRUFMYjtBQU1MQyxzQkFBZ0IsRUFOWDtBQU9MQyw0QkFBc0IsQ0FQakI7QUFRTEMseUJBQW1CLElBUmQ7QUFTTEMsaUJBQVcsQ0FUTjtBQVVMQyxnQkFBUztBQVZKLEssUUFZUEMsSyxHQUFRO0FBQ05mLGdCQURNLHdCQUNPO0FBQ1gsWUFBRyxLQUFLQSxVQUFSLEVBQW1CO0FBQ2pCLGNBQUljLFdBQVUsS0FBS0EsUUFBTCxHQUFlRSxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQTdCO0FBQ0EsY0FBSUgsU0FBU0ksU0FBVCxJQUFvQkosU0FBU0ssaUJBQWpDLEVBQW9EO0FBQ2xELGlCQUFLQyxpQkFBTDtBQUNEO0FBQ0Y7QUFDRjtBQVJLLEssUUFVVEMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsbUJBQWtCLEVBQUMsNEJBQTJCLGdCQUE1QixFQUE2QyxnQkFBZSxNQUE1RCxFQUFuQixFQUF1RixtQkFBa0IsRUFBQyxjQUFhLEVBQWQsRUFBaUIsZ0JBQWUsRUFBaEMsRUFBbUMsNEJBQTJCLGtCQUE5RCxFQUFpRixnQkFBZSxNQUFoRyxFQUF6RyxFQUFpTixtQkFBa0IsRUFBQyx1QkFBc0IsZUFBdkIsRUFBdUMsU0FBUSxlQUEvQyxFQUErRCw2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QixDQUF0Qjs7QUFFQSxVQUFJM0QsV0FBVSxLQUFLQSxRQUFMLEdBQWVFLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBN0I7QUFDQSxVQUFJSCxTQUFTSSxTQUFULElBQW9CSixTQUFTSyxpQkFBakMsRUFBb0Q7QUFDbEQsYUFBS0MsaUJBQUw7QUFDRDtBQUNGOzs7O0VBL0hnQ0osZUFBSzZELFM7O2tCQUFuQi9FLEsiLCJmaWxlIjoic3RhdGlzdGljc3NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBycSBmcm9tICcuLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgZHQgZnJvbSAnLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IG50aW5saW5lcGlja2VyIGZyb20gJy4vY29tbW9uL250aW5saW5lcGlja2VyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBpc19yZXF1ZXN0OntcbiAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgIHR3b1dheTp0cnVlXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIHBhZ2Vfb2xkX2RhdGE6IG51bGwsXG4gICAgcGFnZV9kYXRhOiBudWxsLFxuICAgIGVtcGxveWVlX2xpc3Q6IG51bGwsXG4gICAgZGVwYXJ0bWVudDogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuICAgIGVtcGxveWVlX2NoZWNrX2luZGV4OiAwLFxuICAgIHBhZ2Vfc3VjY2Vzc19kYXRhOiBudWxsLFxuICAgIHRhYl9pbmRleDogMCxcbiAgICB1c2VyX2FjdDpudWxsXG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgaXNfcmVxdWVzdCgpIHtcbiAgICAgIGlmKHRoaXMuaXNfcmVxdWVzdCl7XG4gICAgICAgIGxldCB1c2VyX2FjdCA9dGhpcy51c2VyX2FjdD0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgICAgICBpZiAodXNlcl9hY3QuaXNfc2VydmVyfHx1c2VyX2FjdC5pc19zZXJ2ZXJfb2ZmbGluZSkge1xuICAgICAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibnRpbmxpbmVwaWNrZXJiXCI6e1widi1iaW5kOmNoZWNrZWRfbmFtZS5zeW5jXCI6XCJvcmRlcl9kYXRlX2VuZFwiLFwibnRwaWNrZXJ0eXBlXCI6XCJkYXRlXCJ9LFwibnRpbmxpbmVwaWNrZXJjXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNoZWNrZWRfbmFtZS5zeW5jXCI6XCJvcmRlcl9kYXRlX3N0YXJ0XCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGlubGluZXBpY2tlcmFcIjp7XCJ2LWJpbmQ6bnRyYW5nZS5zeW5jXCI6XCJlbXBsb3llZV9saXN0XCIsXCJudGtleVwiOlwiZW1wbG95ZWVfbmFtZVwiLFwidi1iaW5kOmNoZWNrZWRfaW5kZXguc3luY1wiOlwiZW1wbG95ZWVfY2hlY2tfaW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge1wibnRpbmxpbmVwaWNrZXJiXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUVuZENoYW5nZVwifSxcIm50aW5saW5lcGlja2VyY1wiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVCZWdpbkNoYW5nZVwifSxcIm50aW5saW5lcGlja2VyYVwiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBudGlubGluZXBpY2tlcmI6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyYzogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJhOiBudGlubGluZXBpY2tlcixcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRvZ2dsZVRhYihlKSB7XG4gICAgICB0aGlzLnRhYl9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgIH0sXG4gICAgaGFuZGxlQmVnaW5DaGFuZ2UoZGF0ZSkge1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ID0gZGF0ZTtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuICAgIGhhbmRsZUVuZENoYW5nZShkYXRlKSB7XG4gICAgICB0aGlzLm9yZGVyX2RhdGVfZW5kID0gZGF0ZTtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuICAgIGhhbmRsZUNoYW5nZShpbmRleCkge1xuICAgICAgdGhpcy5lbXBsb3llZV9jaGVja19pbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5nZXRTZXJ2ZXJEYXRhTGlzdCgpO1xuICAgIH0sXG5cbiAgICBuYXZpVG9MaXN0KGUpIHtcbiAgICAgIGxldCB2aWV3X3R5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC52aWV3O1xuICAgICAgbGV0IGNoYW5uZWwgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jaGFubmVsO1xuICAgICAgbGV0IGNvdW50ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY291bnQ7XG4gICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgcGFyYW1zID0gJ3N0YXJ0X3RpbWU9JyArIHRoaXMub3JkZXJfZGF0ZV9zdGFydCArICcmZW5kX3RpbWU9JyArIHRoaXMub3JkZXJfZGF0ZV9lbmQ7XG4gICAgICBpZiAodGhpcy5lbXBsb3llZV9jaGVja19pbmRleCAhPSAwKSB7XG4gICAgICAgIHBhcmFtcyArPSAnJmVtcGxveWVlX2lkPScgKyB0aGlzLmVtcGxveWVlX2xpc3RbdGhpcy5lbXBsb3llZV9jaGVja19pbmRleF0uZW1wbG95ZWVfaWRcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3X3R5cGUpIHtcbiAgICAgICAgcGFyYW1zICs9ICcmdmlld190eXBlPScgKyB2aWV3X3R5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjaGFubmVsJywgY2hhbm5lbClcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVybGlzdHNlcnZlcj8nICsgcGFyYW1zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXRTZXJ2ZXJEYXRhTGlzdCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0X3RpbWU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF90aW1lOiB0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgfVxuICAgIGlmICh0aGF0LmVtcGxveWVlX2NoZWNrX2luZGV4ICE9IDApIHtcbiAgICAgIHBhcmFtc1snZW1wbG95ZWVfaWQnXSA9IHRoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgIH1cbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgfSk7XG4gICAgcnEuZ2V0KCdnZXRTZXJ2ZXJEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICB0aGF0LnBhZ2Vfb2xkX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKTtcbiAgICBycS5nZXQoJ2dldFNlcnZlclN1Y2Nlc3NEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuXG4gICAgICAgIHRoYXQucGFnZV9kYXRhLmNoYW5uZWxfc3VjY2Vzc19wcmVudF9saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jaGFubmVsX25hbWUgPSBlbGVtZW50LmNoYW5uZWxfbmFtZS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhhdC5wYWdlX2RhdGEuY2hhbm5lbF9zdWNjZXNzX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNoYW5uZWxfbmFtZSA9IGVsZW1lbnQuY2hhbm5lbF9uYW1lLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBsZXQgY291bnRfZGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIDEpKTtcbiAgICB0aGlzLm9yZGVyX2RhdGVfZW5kID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBjb3VudF9kYXkgLSAxKSk7XG5cbiAgICBsZXQgdXNlcl9hY3QgPXRoaXMudXNlcl9hY3Q9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBpZiAodXNlcl9hY3QuaXNfc2VydmVyfHx1c2VyX2FjdC5pc19zZXJ2ZXJfb2ZmbGluZSkge1xuICAgICAgdGhpcy5nZXRTZXJ2ZXJEYXRhTGlzdCgpO1xuICAgIH1cbiAgfVxufVxuIl19