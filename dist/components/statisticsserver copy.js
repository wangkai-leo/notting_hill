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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzZXJ2ZXIgY29weS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiaXNfcmVxdWVzdCIsInR5cGUiLCJCb29sZWFuIiwidHdvV2F5IiwiZGF0YSIsInBhZ2Vfb2xkX2RhdGEiLCJwYWdlX2RhdGEiLCJlbXBsb3llZV9saXN0IiwiZGVwYXJ0bWVudCIsIm9yZGVyX2RhdGVfc3RhcnQiLCJvcmRlcl9kYXRlX2VuZCIsImVtcGxveWVlX2NoZWNrX2luZGV4IiwicGFnZV9zdWNjZXNzX2RhdGEiLCJ0YWJfaW5kZXgiLCJ1c2VyX2FjdCIsIndhdGNoIiwid2VweSIsImdldFN0b3JhZ2VTeW5jIiwiaXNfc2VydmVyIiwiaXNfc2VydmVyX29mZmxpbmUiLCJnZXRTZXJ2ZXJEYXRhTGlzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm50aW5saW5lcGlja2VyYiIsIm50aW5saW5lcGlja2VyIiwibnRpbmxpbmVwaWNrZXJjIiwibnRpbmxpbmVwaWNrZXJhIiwibWV0aG9kcyIsInRvZ2dsZVRhYiIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiaGFuZGxlQmVnaW5DaGFuZ2UiLCJkYXRlIiwiaGFuZGxlRW5kQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwibmF2aVRvTGlzdCIsInZpZXdfdHlwZSIsInZpZXciLCJjaGFubmVsIiwiY291bnQiLCJwYXJhbXMiLCJlbXBsb3llZV9pZCIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVUbyIsInVybCIsInRoYXQiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInN1Y2Nlc3MiLCJycSIsImdldCIsImhpZGVMb2FkaW5nIiwicmVzdWx0IiwiJGFwcGx5IiwiY2hhbm5lbF9zdWNjZXNzX3ByZW50X2xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNoYW5uZWxfbmFtZSIsInJlcGxhY2UiLCJjaGFubmVsX3N1Y2Nlc3NfbGlzdCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJjb3VudF9kYXkiLCJnZXREYXRlIiwiZHQiLCJkYXRlRm9ybWF0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxjQUFNQyxPQURJO0FBRVZDLGdCQUFRO0FBRkU7QUFETixLLFFBTVJDLEksR0FBTztBQUNMQyxxQkFBZSxJQURWO0FBRUxDLGlCQUFXLElBRk47QUFHTEMscUJBQWUsSUFIVjtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLHdCQUFrQixFQUxiO0FBTUxDLHNCQUFnQixFQU5YO0FBT0xDLDRCQUFzQixDQVBqQjtBQVFMQyx5QkFBbUIsSUFSZDtBQVNMQyxpQkFBVyxDQVROO0FBVUxDLGdCQUFVO0FBVkwsSyxRQVlQQyxLLEdBQVE7QUFDTmYsZ0JBRE0sd0JBQ087QUFDWCxZQUFJLEtBQUtBLFVBQVQsRUFBcUI7QUFDbkIsY0FBSWMsV0FBVyxLQUFLQSxRQUFMLEdBQWdCRSxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQS9CO0FBQ0EsY0FBSUgsU0FBU0ksU0FBVCxJQUFzQkosU0FBU0ssaUJBQW5DLEVBQXNEO0FBQ3BELGlCQUFLQyxpQkFBTDtBQUNEO0FBQ0Y7QUFDRjtBQVJLLEssUUFVVEMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsbUJBQWtCLEVBQUMsNEJBQTJCLGdCQUE1QixFQUE2QyxnQkFBZSxNQUE1RCxFQUFuQixFQUF1RixtQkFBa0IsRUFBQyxjQUFhLEVBQWQsRUFBaUIsZ0JBQWUsRUFBaEMsRUFBbUMsNEJBQTJCLGtCQUE5RCxFQUFpRixnQkFBZSxNQUFoRyxFQUF6RyxFQUFpTixtQkFBa0IsRUFBQyx1QkFBc0IsZUFBdkIsRUFBdUMsU0FBUSxlQUEvQyxF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QyxDQUE1QixDQUF0Qjs7QUFFQSxVQUFJM0QsV0FBVyxLQUFLQSxRQUFMLEdBQWdCRSxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQS9CO0FBQ0EsVUFBSUgsU0FBU0ksU0FBVCxJQUFzQkosU0FBU0ssaUJBQW5DLEVBQXNEO0FBQ3BELGFBQUtDLGlCQUFMO0FBQ0Q7QUFDRjs7OztFQS9IZ0NKLGVBQUs2RCxTOztrQkFBbkIvRSxLIiwiZmlsZSI6InN0YXRpc3RpY3NzZXJ2ZXIgY29weS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBycSBmcm9tICcuLi9jb21tb24vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgZHQgZnJvbSAnLi4vY29tbW9uL3V0aWxzL2RhdGUnO1xuaW1wb3J0IG50aW5saW5lcGlja2VyIGZyb20gJy4vY29tbW9uL250aW5saW5lcGlja2VyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBpc19yZXF1ZXN0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIHBhZ2Vfb2xkX2RhdGE6IG51bGwsXG4gICAgcGFnZV9kYXRhOiBudWxsLFxuICAgIGVtcGxveWVlX2xpc3Q6IG51bGwsXG4gICAgZGVwYXJ0bWVudDogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuICAgIGVtcGxveWVlX2NoZWNrX2luZGV4OiAwLFxuICAgIHBhZ2Vfc3VjY2Vzc19kYXRhOiBudWxsLFxuICAgIHRhYl9pbmRleDogMCxcbiAgICB1c2VyX2FjdDogbnVsbFxuICB9XG4gIHdhdGNoID0ge1xuICAgIGlzX3JlcXVlc3QoKSB7XG4gICAgICBpZiAodGhpcy5pc19yZXF1ZXN0KSB7XG4gICAgICAgIGxldCB1c2VyX2FjdCA9IHRoaXMudXNlcl9hY3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIGlmICh1c2VyX2FjdC5pc19zZXJ2ZXIgfHwgdXNlcl9hY3QuaXNfc2VydmVyX29mZmxpbmUpIHtcbiAgICAgICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm50aW5saW5lcGlja2VyYlwiOntcInYtYmluZDpjaGVja2VkX25hbWUuc3luY1wiOlwib3JkZXJfZGF0ZV9lbmRcIixcIm50cGlja2VydHlwZVwiOlwiZGF0ZVwifSxcIm50aW5saW5lcGlja2VyY1wiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjaGVja2VkX25hbWUuc3luY1wiOlwib3JkZXJfZGF0ZV9zdGFydFwiLFwibnRwaWNrZXJ0eXBlXCI6XCJkYXRlXCJ9LFwibnRpbmxpbmVwaWNrZXJhXCI6e1widi1iaW5kOm50cmFuZ2Uuc3luY1wiOlwiZW1wbG95ZWVfbGlzdFwiLFwibnRrZXlcIjpcImVtcGxveWVlX25hbWVcIixcInYtYmluZDpjaGVja2VkX2luZGV4LnN5bmNcIjpcImVtcGxveWVlX2NoZWNrX2luZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHtcIm50aW5saW5lcGlja2VyYlwiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVFbmRDaGFuZ2VcIn0sXCJudGlubGluZXBpY2tlcmNcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiaGFuZGxlQmVnaW5DaGFuZ2VcIn0sXCJudGlubGluZXBpY2tlcmFcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiaGFuZGxlQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgbnRpbmxpbmVwaWNrZXJiOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmM6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyYTogbnRpbmxpbmVwaWNrZXIsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB9LFxuICAgIGhhbmRsZUJlZ2luQ2hhbmdlKGRhdGUpIHtcbiAgICAgIHRoaXMub3JkZXJfZGF0ZV9zdGFydCA9IGRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVFbmRDaGFuZ2UoZGF0ZSkge1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVDaGFuZ2UoaW5kZXgpIHtcbiAgICAgIHRoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuXG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgdmlld190eXBlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmlldztcbiAgICAgIGxldCBjaGFubmVsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2hhbm5lbDtcbiAgICAgIGxldCBjb3VudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvdW50O1xuICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHBhcmFtcyA9ICdzdGFydF90aW1lPScgKyB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgKyAnJmVuZF90aW1lPScgKyB0aGlzLm9yZGVyX2RhdGVfZW5kO1xuICAgICAgaWYgKHRoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXggIT0gMCkge1xuICAgICAgICBwYXJhbXMgKz0gJyZlbXBsb3llZV9pZD0nICsgdGhpcy5lbXBsb3llZV9saXN0W3RoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXhdLmVtcGxveWVlX2lkXG4gICAgICB9XG4gICAgICBpZiAodmlld190eXBlKSB7XG4gICAgICAgIHBhcmFtcyArPSAnJnZpZXdfdHlwZT0nICsgdmlld190eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2hhbm5lbCcsIGNoYW5uZWwpXG4gICAgICB9XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3N0YXRpc3RpY3NjdXN0b21lcmxpc3RzZXJ2ZXI/JyArIHBhcmFtc1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZ2V0U2VydmVyRGF0YUxpc3QoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBzdGFydF90aW1lOiB0aGF0Lm9yZGVyX2RhdGVfc3RhcnQsXG4gICAgICBlbmRfdGltZTogdGhhdC5vcmRlcl9kYXRlX2VuZFxuICAgIH1cbiAgICBpZiAodGhhdC5lbXBsb3llZV9jaGVja19pbmRleCAhPSAwKSB7XG4gICAgICBwYXJhbXNbJ2VtcGxveWVlX2lkJ10gPSB0aGlzLmVtcGxveWVlX2xpc3RbdGhpcy5lbXBsb3llZV9jaGVja19pbmRleF0uZW1wbG95ZWVfaWRcbiAgICB9XG4gICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgIH0pO1xuICAgIHJxLmdldCgnZ2V0U2VydmVyRGF0YUxpc3QnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgdGhhdC5wYWdlX29sZF9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgdGhhdC5lbXBsb3llZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHBhcmFtcyk7XG4gICAgcnEuZ2V0KCdnZXRTZXJ2ZXJTdWNjZXNzRGF0YUxpc3QnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQucGFnZV9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcblxuICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsX3N1Y2Nlc3NfcHJlbnRfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2hhbm5lbF9uYW1lID0gZWxlbWVudC5jaGFubmVsX25hbWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoYXQucGFnZV9kYXRhLmNoYW5uZWxfc3VjY2Vzc19saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jaGFubmVsX25hbWUgPSBlbGVtZW50LmNoYW5uZWxfbmFtZS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhhdC5lbXBsb3llZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHBhcmFtcylcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IGNvdW50X2RheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKSk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgY291bnRfZGF5IC0gMSkpO1xuXG4gICAgbGV0IHVzZXJfYWN0ID0gdGhpcy51c2VyX2FjdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBpZiAodXNlcl9hY3QuaXNfc2VydmVyIHx8IHVzZXJfYWN0LmlzX3NlcnZlcl9vZmZsaW5lKSB7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=