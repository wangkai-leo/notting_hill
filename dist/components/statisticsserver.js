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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImlzX3JlcXVlc3QiLCJ0eXBlIiwiQm9vbGVhbiIsInR3b1dheSIsImRhdGEiLCJwYWdlX29sZF9kYXRhIiwicGFnZV9kYXRhIiwiZW1wbG95ZWVfbGlzdCIsImRlcGFydG1lbnQiLCJvcmRlcl9kYXRlX3N0YXJ0Iiwib3JkZXJfZGF0ZV9lbmQiLCJlbXBsb3llZV9jaGVja19pbmRleCIsInBhZ2Vfc3VjY2Vzc19kYXRhIiwidGFiX2luZGV4IiwidXNlcl9hY3QiLCJ3YXRjaCIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NlcnZlciIsImlzX3NlcnZlcl9vZmZsaW5lIiwiZ2V0U2VydmVyRGF0YUxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJudGlubGluZXBpY2tlcmIiLCJudGlubGluZXBpY2tlciIsIm50aW5saW5lcGlja2VyYyIsIm50aW5saW5lcGlja2VyYSIsIm1ldGhvZHMiLCJ0b2dnbGVUYWIiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImhhbmRsZUJlZ2luQ2hhbmdlIiwiZGF0ZSIsImhhbmRsZUVuZENoYW5nZSIsImhhbmRsZUNoYW5nZSIsIm5hdmlUb0xpc3QiLCJ2aWV3X3R5cGUiLCJ2aWV3IiwiY2hhbm5lbCIsImNvdW50IiwicGFyYW1zIiwiZW1wbG95ZWVfaWQiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0aGF0Iiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwicnEiLCJnZXQiLCJoaWRlTG9hZGluZyIsInJlc3VsdCIsIiRhcHBseSIsImNoYW5uZWxfc3VjY2Vzc19wcmVudF9saXN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjaGFubmVsX25hbWUiLCJyZXBsYWNlIiwiY2hhbm5lbF9zdWNjZXNzX2xpc3QiLCJ0b2RheSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiY291bnRfZGF5IiwiZ2V0RGF0ZSIsImR0IiwiZGF0ZUZvcm1hdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFDVkMsY0FBTUMsT0FESTtBQUVWQyxnQkFBUTtBQUZFO0FBRE4sSyxRQU1SQyxJLEdBQU87QUFDTEMscUJBQWUsSUFEVjtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLHFCQUFlLElBSFY7QUFJTEMsa0JBQVksRUFKUDtBQUtMQyx3QkFBa0IsRUFMYjtBQU1MQyxzQkFBZ0IsRUFOWDtBQU9MQyw0QkFBc0IsQ0FQakI7QUFRTEMseUJBQW1CLElBUmQ7QUFTTEMsaUJBQVcsQ0FUTjtBQVVMQyxnQkFBVTtBQVZMLEssUUFZUEMsSyxHQUFRO0FBQ05mLGdCQURNLHdCQUNPO0FBQ1gsWUFBSSxLQUFLQSxVQUFULEVBQXFCO0FBQ25CLGNBQUljLFdBQVcsS0FBS0EsUUFBTCxHQUFnQkUsZUFBS0MsY0FBTCxDQUFvQixNQUFwQixDQUEvQjtBQUNBLGNBQUlILFNBQVNJLFNBQVQsSUFBc0JKLFNBQVNLLGlCQUFuQyxFQUFzRDtBQUNwRCxpQkFBS0MsaUJBQUw7QUFDRDtBQUNGO0FBQ0Y7QUFSSyxLLFFBVVRDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLG1CQUFrQixFQUFDLDRCQUEyQixnQkFBNUIsRUFBNkMsZ0JBQWUsTUFBNUQsRUFBbkIsRUFBdUYsbUJBQWtCLEVBQUMsY0FBYSxFQUFkLEVBQWlCLGdCQUFlLEVBQWhDLEVBQW1DLDRCQUEyQixrQkFBOUQsRUFBaUYsZ0JBQWUsTUFBaEcsRUFBekcsRUFBaU4sbUJBQWtCLEVBQUMsdUJBQXNCLGVBQXZCLEVBQXVDLFNBQVEsZUFBL0MsRUFBK0Qs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NUIsQ0FBdEI7O0FBRUEsVUFBSTNELFdBQVcsS0FBS0EsUUFBTCxHQUFnQkUsZUFBS0MsY0FBTCxDQUFvQixNQUFwQixDQUEvQjtBQUNBLFVBQUlILFNBQVNJLFNBQVQsSUFBc0JKLFNBQVNLLGlCQUFuQyxFQUFzRDtBQUNwRCxhQUFLQyxpQkFBTDtBQUNEO0FBQ0Y7Ozs7RUEvSGdDSixlQUFLNkQsUzs7a0JBQW5CL0UsSyIsImZpbGUiOiJzdGF0aXN0aWNzc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBkdCBmcm9tICcuLi9jb21tb24vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgbnRpbmxpbmVwaWNrZXIgZnJvbSAnLi9jb21tb24vbnRpbmxpbmVwaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGlzX3JlcXVlc3Q6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgcGFnZV9vbGRfZGF0YTogbnVsbCxcbiAgICBwYWdlX2RhdGE6IG51bGwsXG4gICAgZW1wbG95ZWVfbGlzdDogbnVsbCxcbiAgICBkZXBhcnRtZW50OiAnJyxcbiAgICBvcmRlcl9kYXRlX3N0YXJ0OiAnJyxcbiAgICBvcmRlcl9kYXRlX2VuZDogJycsXG4gICAgZW1wbG95ZWVfY2hlY2tfaW5kZXg6IDAsXG4gICAgcGFnZV9zdWNjZXNzX2RhdGE6IG51bGwsXG4gICAgdGFiX2luZGV4OiAwLFxuICAgIHVzZXJfYWN0OiBudWxsXG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgaXNfcmVxdWVzdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzX3JlcXVlc3QpIHtcbiAgICAgICAgbGV0IHVzZXJfYWN0ID0gdGhpcy51c2VyX2FjdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICAgICAgaWYgKHVzZXJfYWN0LmlzX3NlcnZlciB8fCB1c2VyX2FjdC5pc19zZXJ2ZXJfb2ZmbGluZSkge1xuICAgICAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibnRpbmxpbmVwaWNrZXJiXCI6e1widi1iaW5kOmNoZWNrZWRfbmFtZS5zeW5jXCI6XCJvcmRlcl9kYXRlX2VuZFwiLFwibnRwaWNrZXJ0eXBlXCI6XCJkYXRlXCJ9LFwibnRpbmxpbmVwaWNrZXJjXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNoZWNrZWRfbmFtZS5zeW5jXCI6XCJvcmRlcl9kYXRlX3N0YXJ0XCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGlubGluZXBpY2tlcmFcIjp7XCJ2LWJpbmQ6bnRyYW5nZS5zeW5jXCI6XCJlbXBsb3llZV9saXN0XCIsXCJudGtleVwiOlwiZW1wbG95ZWVfbmFtZVwiLFwidi1iaW5kOmNoZWNrZWRfaW5kZXguc3luY1wiOlwiZW1wbG95ZWVfY2hlY2tfaW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge1wibnRpbmxpbmVwaWNrZXJiXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUVuZENoYW5nZVwifSxcIm50aW5saW5lcGlja2VyY1wiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVCZWdpbkNoYW5nZVwifSxcIm50aW5saW5lcGlja2VyYVwiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVDaGFuZ2VcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBudGlubGluZXBpY2tlcmI6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyYzogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJhOiBudGlubGluZXBpY2tlcixcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRvZ2dsZVRhYihlKSB7XG4gICAgICB0aGlzLnRhYl9pbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgIH0sXG4gICAgaGFuZGxlQmVnaW5DaGFuZ2UoZGF0ZSkge1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ID0gZGF0ZTtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuICAgIGhhbmRsZUVuZENoYW5nZShkYXRlKSB7XG4gICAgICB0aGlzLm9yZGVyX2RhdGVfZW5kID0gZGF0ZTtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuICAgIGhhbmRsZUNoYW5nZShpbmRleCkge1xuICAgICAgdGhpcy5lbXBsb3llZV9jaGVja19pbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5nZXRTZXJ2ZXJEYXRhTGlzdCgpO1xuICAgIH0sXG5cbiAgICBuYXZpVG9MaXN0KGUpIHtcbiAgICAgIGxldCB2aWV3X3R5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC52aWV3O1xuICAgICAgbGV0IGNoYW5uZWwgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jaGFubmVsO1xuICAgICAgbGV0IGNvdW50ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY291bnQ7XG4gICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgcGFyYW1zID0gJ3N0YXJ0X3RpbWU9JyArIHRoaXMub3JkZXJfZGF0ZV9zdGFydCArICcmZW5kX3RpbWU9JyArIHRoaXMub3JkZXJfZGF0ZV9lbmQ7XG4gICAgICBpZiAodGhpcy5lbXBsb3llZV9jaGVja19pbmRleCAhPSAwKSB7XG4gICAgICAgIHBhcmFtcyArPSAnJmVtcGxveWVlX2lkPScgKyB0aGlzLmVtcGxveWVlX2xpc3RbdGhpcy5lbXBsb3llZV9jaGVja19pbmRleF0uZW1wbG95ZWVfaWRcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3X3R5cGUpIHtcbiAgICAgICAgcGFyYW1zICs9ICcmdmlld190eXBlPScgKyB2aWV3X3R5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjaGFubmVsJywgY2hhbm5lbClcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVybGlzdHNlcnZlcj8nICsgcGFyYW1zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXRTZXJ2ZXJEYXRhTGlzdCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0X3RpbWU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF90aW1lOiB0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgfVxuICAgIGlmICh0aGF0LmVtcGxveWVlX2NoZWNrX2luZGV4ICE9IDApIHtcbiAgICAgIHBhcmFtc1snZW1wbG95ZWVfaWQnXSA9IHRoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgIH1cbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAnTG9hZGluZy4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXG4gICAgICBzdWNjZXNzOiByZXMgPT4geyB9XG4gICAgfSk7XG4gICAgcnEuZ2V0KCdnZXRTZXJ2ZXJEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICB0aGF0LnBhZ2Vfb2xkX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKTtcbiAgICBycS5nZXQoJ2dldFNlcnZlclN1Y2Nlc3NEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuXG4gICAgICAgIHRoYXQucGFnZV9kYXRhLmNoYW5uZWxfc3VjY2Vzc19wcmVudF9saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jaGFubmVsX25hbWUgPSBlbGVtZW50LmNoYW5uZWxfbmFtZS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhhdC5wYWdlX2RhdGEuY2hhbm5lbF9zdWNjZXNzX2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNoYW5uZWxfbmFtZSA9IGVsZW1lbnQuY2hhbm5lbF9uYW1lLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICBsZXQgY291bnRfZGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIDEpKTtcbiAgICB0aGlzLm9yZGVyX2RhdGVfZW5kID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBjb3VudF9kYXkgLSAxKSk7XG5cbiAgICBsZXQgdXNlcl9hY3QgPSB0aGlzLnVzZXJfYWN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGlmICh1c2VyX2FjdC5pc19zZXJ2ZXIgfHwgdXNlcl9hY3QuaXNfc2VydmVyX29mZmxpbmUpIHtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==