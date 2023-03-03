'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../../../common/utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _date = require('./../../../common/utils/date.js');

var _date2 = _interopRequireDefault(_date);

var _ntinlinepicker = require('./../ntinlinepicker.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRhdGEiLCJwYWdlX29sZF9kYXRhIiwicGFnZV9kYXRhIiwiZW1wbG95ZWVfbGlzdCIsImRlcGFydG1lbnQiLCJvcmRlcl9kYXRlX3N0YXJ0Iiwib3JkZXJfZGF0ZV9lbmQiLCJlbXBsb3llZV9jaGVja19pbmRleCIsInBhZ2Vfc3VjY2Vzc19kYXRhIiwidGFiX2luZGV4Iiwid2F0Y2giLCJjb25zb2xlIiwibG9nIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnRpbmxpbmVwaWNrZXJiIiwibnRpbmxpbmVwaWNrZXIiLCJudGlubGluZXBpY2tlcmMiLCJudGlubGluZXBpY2tlcmEiLCJudGlubGluZXBpY2tlcmQiLCJtZXRob2RzIiwidG9nZ2xlVGFiIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJoYW5kbGVCZWdpbkNoYW5nZSIsImRhdGUiLCJnZXRTZXJ2ZXJEYXRhTGlzdCIsImhhbmRsZUVuZENoYW5nZSIsImhhbmRsZUNoYW5nZSIsIm5hdmlUb0xpc3QiLCJ2aWV3X3R5cGUiLCJ2aWV3IiwiY2hhbm5lbCIsImNvdW50IiwicGFyYW1zIiwiZW1wbG95ZWVfaWQiLCJ3ZXB5Iiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGhhdCIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5IiwiY2hhbm5lbF9zdWNjZXNzX3ByZW50X2xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNoYW5uZWxfbmFtZSIsInJlcGxhY2UiLCJjaGFubmVsX3N1Y2Nlc3NfbGlzdCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJjb3VudF9kYXkiLCJnZXREYXRlIiwiZHQiLCJkYXRlRm9ybWF0IiwidXNlciIsImdldFN0b3Jh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akQsSUFBUCxDQUFZQSxJQUFaLENBQWlCRyxhQUF0QztBQUNBeUMsZUFBS00sTUFBTDtBQUNEO0FBZGdDLE9BQW5DLEVBZUdaLE1BZkg7QUFnQkQ7Ozs2QkFDUTtBQUNQLFVBQUlNLE9BQU8sSUFBWDtBQUNBLFVBQUlhLFFBQVEsSUFBSUMsSUFBSixFQUFaO0FBQ0EsVUFBSUMsT0FBT0YsTUFBTUcsV0FBTixFQUFYO0FBQ0EsVUFBSUMsUUFBUUosTUFBTUssUUFBTixFQUFaO0FBQ0EsVUFBSUMsWUFBWSxJQUFJTCxJQUFKLENBQVNDLElBQVQsRUFBZUUsS0FBZixFQUFzQixDQUF0QixFQUF5QkcsT0FBekIsRUFBaEI7O0FBRUEsV0FBSzNELGdCQUFMLEdBQXdCNEQsZUFBR0MsVUFBSCxDQUFjLFlBQWQsRUFBNEIsSUFBSVIsSUFBSixDQUFTQyxJQUFULEVBQWVFLEtBQWYsRUFBc0IsQ0FBdEIsQ0FBNUIsQ0FBeEI7QUFDQSxXQUFLdkQsY0FBTCxHQUFzQjJELGVBQUdDLFVBQUgsQ0FBYyxZQUFkLEVBQTRCLElBQUlSLElBQUosQ0FBU0MsSUFBVCxFQUFlRSxLQUFmLEVBQXNCRSxZQUFZLENBQWxDLENBQTVCLENBQXRCOztBQUVBLFVBQU1JLE9BQUszQixlQUFLNEIsY0FBTCxDQUFvQixNQUFwQixDQUFYO0FBQ0EsVUFBR0QsS0FBS0UsU0FBTCxJQUFnQkYsS0FBS0csaUJBQXhCLEVBQTBDO0FBQ3hDLGFBQUt4QyxpQkFBTDtBQUNEO0FBQ0Y7Ozs7RUF4SGdDVSxlQUFLK0IsUzs7a0JBQW5CekUsSyIsImZpbGUiOiJzdGF0aXN0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHJxIGZyb20gJy4uLy4uLy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBkdCBmcm9tICcuLi8uLi8uLi9jb21tb24vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgbnRpbmxpbmVwaWNrZXIgZnJvbSAnLi4vbnRpbmxpbmVwaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgcGFnZV9vbGRfZGF0YTpudWxsLFxuICAgIHBhZ2VfZGF0YTogbnVsbCxcbiAgICBlbXBsb3llZV9saXN0OiBudWxsLFxuXG4gICAgZGVwYXJ0bWVudDogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuXG4gICAgZW1wbG95ZWVfY2hlY2tfaW5kZXg6IDAsXG5cbiAgICBwYWdlX3N1Y2Nlc3NfZGF0YTpudWxsLFxuXG4gICAgdGFiX2luZGV4OjBcbiAgfVxuICB3YXRjaCA9IHtcbiAgICBvcmRlcl9kYXRlX3N0YXJ0KCl7XG4gICAgICBjb25zb2xlLmxvZygncHBwcCcpXG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfZW5kXCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGlubGluZXBpY2tlcmNcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfc3RhcnRcIixcIm50cGlja2VydHlwZVwiOlwiZGF0ZVwifSxcIm50aW5saW5lcGlja2VyYVwiOntcInYtYmluZDpudHJhbmdlLnN5bmNcIjpcImVtcGxveWVlX2xpc3RcIixcIm50a2V5XCI6XCJlbXBsb3llZV9uYW1lXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9pbmRleC5zeW5jXCI6XCJlbXBsb3llZV9jaGVja19pbmRleFwifX07XHJcbiRldmVudHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiaGFuZGxlRW5kQ2hhbmdlXCJ9LFwibnRpbmxpbmVwaWNrZXJjXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUJlZ2luQ2hhbmdlXCJ9LFwibnRpbmxpbmVwaWNrZXJhXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUNoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50aW5saW5lcGlja2VyYjogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJjOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmE6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyZDogbnRpbmxpbmVwaWNrZXIsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0b2dnbGVUYWIoZSkge1xuICAgICAgdGhpcy50YWJfaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICB9LFxuICAgIGhhbmRsZUJlZ2luQ2hhbmdlKGRhdGUpe1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0PWRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVFbmRDaGFuZ2UoZGF0ZSl7XG4gICAgICB0aGlzLm9yZGVyX2RhdGVfZW5kPWRhdGU7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfSxcbiAgICBoYW5kbGVDaGFuZ2UoaW5kZXgpe1xuICAgICAgdGhpcy5lbXBsb3llZV9jaGVja19pbmRleD1pbmRleDtcbiAgICAgIHRoaXMuZ2V0U2VydmVyRGF0YUxpc3QoKTtcbiAgICB9LFxuXG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgdmlld190eXBlPWUuY3VycmVudFRhcmdldC5kYXRhc2V0LnZpZXc7XG4gICAgICBsZXQgY2hhbm5lbD1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jaGFubmVsO1xuICAgICAgbGV0IGNvdW50PWUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvdW50O1xuICAgICAgaWYoY291bnQ9PTApe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgcGFyYW1zPSdzdGFydF90aW1lPScrdGhpcy5vcmRlcl9kYXRlX3N0YXJ0KycmZW5kX3RpbWU9Jyt0aGlzLm9yZGVyX2RhdGVfZW5kO1xuICAgICAgaWYodGhpcy5lbXBsb3llZV9jaGVja19pbmRleCE9MCl7XG4gICAgICAgIHBhcmFtcys9JyZlbXBsb3llZV9pZD0nK3RoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgICAgfVxuICAgICAgaWYodmlld190eXBlKXtcbiAgICAgICAgcGFyYW1zKz0nJnZpZXdfdHlwZT0nK3ZpZXdfdHlwZTtcbiAgICAgIH1lbHNle1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjaGFubmVsJywgY2hhbm5lbClcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVybGlzdHNlcnZlcj8nK3BhcmFtc1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZ2V0U2VydmVyRGF0YUxpc3QoKXtcbiAgICBsZXQgdGhhdD10aGlzO1xuICAgIGxldCBwYXJhbXM9e1xuICAgICAgc3RhcnRfdGltZTp0aGF0Lm9yZGVyX2RhdGVfc3RhcnQsXG4gICAgICBlbmRfdGltZTp0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgfVxuICAgIGlmKHRoYXQuZW1wbG95ZWVfY2hlY2tfaW5kZXghPTApe1xuICAgICAgcGFyYW1zWydlbXBsb3llZV9pZCddPXRoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgIH1cblxuICAgIHJxLmdldCgnZ2V0U2VydmVyRGF0YUxpc3QnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQucGFnZV9vbGRfZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuZW1wbG95ZWVfbGlzdCA9IHJlc3VsdC5kYXRhLmRhdGEuZW1wbG95ZWVfbGlzdDtcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgIH1cbiAgICB9LCBwYXJhbXMpO1xuXG4gICAgcnEuZ2V0KCdnZXRTZXJ2ZXJTdWNjZXNzRGF0YUxpc3QnLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHRoYXQucGFnZV9kYXRhPXJlc3VsdC5kYXRhLmRhdGE7XG5cbiAgICAgICAgdGhhdC5wYWdlX2RhdGEuY2hhbm5lbF9zdWNjZXNzX3ByZW50X2xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNoYW5uZWxfbmFtZT1lbGVtZW50LmNoYW5uZWxfbmFtZS5yZXBsYWNlKC9cXFxcbi9nLCdcXG4nKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoYXQucGFnZV9kYXRhLmNoYW5uZWxfc3VjY2Vzc19saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jaGFubmVsX25hbWU9ZWxlbWVudC5jaGFubmVsX25hbWUucmVwbGFjZSgvXFxcXG4vZywnXFxuJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhhdC5lbXBsb3llZV9saXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5lbXBsb3llZV9saXN0O1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHBhcmFtcylcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IGNvdW50X2RheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG5cbiAgICB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIDEpKTtcbiAgICB0aGlzLm9yZGVyX2RhdGVfZW5kID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBjb3VudF9kYXkgLSAxKSk7XG5cbiAgICBjb25zdCB1c2VyPXdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKTtcbiAgICBpZih1c2VyLmlzX3NlcnZlcnx8dXNlci5pc19zZXJ2ZXJfb2ZmbGluZSl7XG4gICAgICB0aGlzLmdldFNlcnZlckRhdGFMaXN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=