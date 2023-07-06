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
      order_date_start: {
        type: String
      },
      order_date_end: {
        type: String
      },
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
      user_act: null,
      office_line: {}
    }, _this.watch = {
      is_request: function is_request() {
        if (this.is_request) {
          var user_act = this.user_act = _wepy2.default.getStorageSync('user');
          var office_line = this.office_line = _wepy2.default.getStorageSync('office_line');
          if (user_act.is_sale && office_line == 'marry') {
            this.getDataStatistics();
          }
        }
      }
    }, _this.$repeat = {}, _this.$props = { "ntinlinepickerb": { "v-bind:checked_name.sync": "order_date_end", "ntpickertype": "date" }, "ntinlinepickerc": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:checked_name.sync": "order_date_start", "ntpickertype": "date" } }, _this.$events = { "ntinlinepickerb": { "v-on:change": "handleEndChange" }, "ntinlinepickerc": { "v-on:change": "handleBeginChange" } }, _this.components = {
      ntinlinepickerb: _ntinlinepicker2.default,
      ntinlinepickerc: _ntinlinepicker2.default
    }, _this.methods = {
      handleBeginChange: function handleBeginChange(date) {
        this.order_date_start = date;
        this.getDataStatistics();
      },
      handleEndChange: function handleEndChange(date) {
        this.order_date_end = date;
        this.getDataStatistics();
      },
      naviChangeDuration: function naviChangeDuration(e) {
        var pay = e.currentTarget.dataset.pay;
        var start = e.currentTarget.dataset.start;
        var end = e.currentTarget.dataset.end;
        _wepy2.default.navigateTo({
          url: '/pages/marry/staduration?start_date=' + start + '&end_date=' + end + '&pay=' + pay
        });
      },
      naviMissCount: function naviMissCount(e) {
        var map = JSON.stringify(e.currentTarget.dataset.map);
        _wepy2.default.navigateTo({
          url: '/pages/marry/misscount?map=' + map
        });
      },
      naviToList: function naviToList(e) {
        var map = JSON.stringify(e.currentTarget.dataset.map);
        _wepy2.default.navigateTo({
          url: '/pages/common/statisticscustomerlistsale?map=' + map + '&start_date=' + this.start_date + '&end_date=' + this.order_date_end
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getDataStatistics',
    value: function getDataStatistics() {
      var that = this;
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: function success(res) {}
      });
      _request2.default.get("getDataStatistics", {
        200: function _(result) {
          _wepy2.default.hideLoading();
          that.page_data = result.data.data;
          that.$apply();
        }
      }, {
        start_date: that.order_date_start,
        end_date: that.order_date_end
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
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
      if (user_act.is_sale) {
        that.getDataStatistics();
      }
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzYWxlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJvcmRlcl9kYXRlX3N0YXJ0IiwidHlwZSIsIlN0cmluZyIsIm9yZGVyX2RhdGVfZW5kIiwiaXNfcmVxdWVzdCIsIkJvb2xlYW4iLCJ0d29XYXkiLCJkYXRhIiwicGFnZV9vbGRfZGF0YSIsInBhZ2VfZGF0YSIsImVtcGxveWVlX2xpc3QiLCJkZXBhcnRtZW50IiwiZW1wbG95ZWVfY2hlY2tfaW5kZXgiLCJwYWdlX3N1Y2Nlc3NfZGF0YSIsInRhYl9pbmRleCIsInVzZXJfYWN0Iiwib2ZmaWNlX2xpbmUiLCJ3YXRjaCIsIndlcHkiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NhbGUiLCJnZXREYXRhU3RhdGlzdGljcyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm50aW5saW5lcGlja2VyYiIsIm50aW5saW5lcGlja2VyIiwibnRpbmxpbmVwaWNrZXJjIiwibWV0aG9kcyIsImhhbmRsZUJlZ2luQ2hhbmdlIiwiZGF0ZSIsImhhbmRsZUVuZENoYW5nZSIsIm5hdmlDaGFuZ2VEdXJhdGlvbiIsImUiLCJwYXkiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInN0YXJ0IiwiZW5kIiwibmF2aWdhdGVUbyIsInVybCIsIm5hdmlNaXNzQ291bnQiLCJtYXAiLCJKU09OIiwic3RyaW5naWZ5IiwibmF2aVRvTGlzdCIsInN0YXJ0X2RhdGUiLCJ0aGF0Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJzdWNjZXNzIiwicnEiLCJnZXQiLCJoaWRlTG9hZGluZyIsInJlc3VsdCIsIiRhcHBseSIsImVuZF9kYXRlIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImNvdW50X2RheSIsImdldERhdGUiLCJkdCIsImRhdGVGb3JtYXQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNB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QUFsQyxDQUE1QixDQUF0QjtBQUNBLFVBQUlsRCxXQUFXLEtBQUtBLFFBQUwsR0FBZ0JHLGVBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBL0I7QUFDQSxVQUFJSixTQUFTSyxPQUFiLEVBQXNCO0FBQ3BCNEIsYUFBSzNCLGlCQUFMO0FBQ0Q7QUFDRjs7OztFQTFHZ0NILGVBQUttRCxTOztrQkFBbkJ2RSxLIiwiZmlsZSI6InN0YXRpc3RpY3NzYWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHJxIGZyb20gJy4uL2NvbW1vbi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBkdCBmcm9tICcuLi9jb21tb24vdXRpbHMvZGF0ZSc7XG5pbXBvcnQgbnRpbmxpbmVwaWNrZXIgZnJvbSAnLi9jb21tb24vbnRpbmxpbmVwaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIG9yZGVyX2RhdGVfc3RhcnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgb3JkZXJfZGF0ZV9lbmQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgaXNfcmVxdWVzdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBwYWdlX29sZF9kYXRhOiBudWxsLFxuICAgIHBhZ2VfZGF0YTogbnVsbCxcbiAgICBlbXBsb3llZV9saXN0OiBudWxsLFxuICAgIGRlcGFydG1lbnQ6ICcnLFxuICAgIG9yZGVyX2RhdGVfc3RhcnQ6ICcnLFxuICAgIG9yZGVyX2RhdGVfZW5kOiAnJyxcbiAgICBlbXBsb3llZV9jaGVja19pbmRleDogMCxcbiAgICBwYWdlX3N1Y2Nlc3NfZGF0YTogbnVsbCxcbiAgICB0YWJfaW5kZXg6IDAsXG4gICAgdXNlcl9hY3Q6IG51bGwsXG4gICAgb2ZmaWNlX2xpbmU6e31cbiAgfVxuICB3YXRjaCA9IHtcbiAgICBpc19yZXF1ZXN0KCkge1xuICAgICAgaWYgKHRoaXMuaXNfcmVxdWVzdCkge1xuICAgICAgICBsZXQgdXNlcl9hY3QgPSB0aGlzLnVzZXJfYWN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgICAgICBsZXQgb2ZmaWNlX2xpbmUgPSB0aGlzLm9mZmljZV9saW5lID0gd2VweS5nZXRTdG9yYWdlU3luYygnb2ZmaWNlX2xpbmUnKTtcbiAgICAgICAgaWYgKHVzZXJfYWN0LmlzX3NhbGUgJiYgb2ZmaWNlX2xpbmUgPT0gJ21hcnJ5Jykge1xuICAgICAgICAgIHRoaXMuZ2V0RGF0YVN0YXRpc3RpY3MoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibnRpbmxpbmVwaWNrZXJiXCI6e1widi1iaW5kOmNoZWNrZWRfbmFtZS5zeW5jXCI6XCJvcmRlcl9kYXRlX2VuZFwiLFwibnRwaWNrZXJ0eXBlXCI6XCJkYXRlXCJ9LFwibnRpbmxpbmVwaWNrZXJjXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNoZWNrZWRfbmFtZS5zeW5jXCI6XCJvcmRlcl9kYXRlX3N0YXJ0XCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn19O1xyXG4kZXZlbnRzID0ge1wibnRpbmxpbmVwaWNrZXJiXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUVuZENoYW5nZVwifSxcIm50aW5saW5lcGlja2VyY1wiOntcInYtb246Y2hhbmdlXCI6XCJoYW5kbGVCZWdpbkNoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIG50aW5saW5lcGlja2VyYjogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJjOiBudGlubGluZXBpY2tlcixcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZUJlZ2luQ2hhbmdlKGRhdGUpIHtcbiAgICAgIHRoaXMub3JkZXJfZGF0ZV9zdGFydCA9IGRhdGU7XG4gICAgICB0aGlzLmdldERhdGFTdGF0aXN0aWNzKCk7XG4gICAgfSxcbiAgICBoYW5kbGVFbmRDaGFuZ2UoZGF0ZSkge1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGRhdGU7XG4gICAgICB0aGlzLmdldERhdGFTdGF0aXN0aWNzKCk7XG4gICAgfSxcbiAgICBuYXZpQ2hhbmdlRHVyYXRpb24oZSkge1xuICAgICAgbGV0IHBheSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBheTtcbiAgICAgIGxldCBzdGFydCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnN0YXJ0O1xuICAgICAgbGV0IGVuZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmVuZDtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tYXJyeS9zdGFkdXJhdGlvbj9zdGFydF9kYXRlPScgKyBzdGFydCArICcmZW5kX2RhdGU9JyArIGVuZCArICcmcGF5PScgKyBwYXlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbmF2aU1pc3NDb3VudChlKSB7XG4gICAgICBsZXQgbWFwID0gSlNPTi5zdHJpbmdpZnkoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFwKTtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tYXJyeS9taXNzY291bnQ/bWFwPScgKyBtYXBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgbWFwID0gSlNPTi5zdHJpbmdpZnkoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubWFwKTtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9jb21tb24vc3RhdGlzdGljc2N1c3RvbWVybGlzdHNhbGU/bWFwPScgKyBtYXAgKyAnJnN0YXJ0X2RhdGU9JyArIHRoaXMuc3RhcnRfZGF0ZSArICcmZW5kX2RhdGU9JyArIHRoaXMub3JkZXJfZGF0ZV9lbmRcbiAgICAgIH0pO1xuICAgIH0sXG4gIH1cbiAgZ2V0RGF0YVN0YXRpc3RpY3MoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG4gICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7IH1cbiAgICB9KTtcbiAgICBycS5nZXQoXCJnZXREYXRhU3RhdGlzdGljc1wiLCB7XG4gICAgICAyMDA6IHJlc3VsdCA9PiB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHN0YXJ0X2RhdGU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF9kYXRlOiB0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgfSlcbiAgfVxuICBvblNob3coKSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpO1xuICAgIGxldCBjb3VudF9kYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIHRoaXMub3JkZXJfZGF0ZV9zdGFydCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkpO1xuICAgIHRoaXMub3JkZXJfZGF0ZV9lbmQgPSBkdC5kYXRlRm9ybWF0KCd5eXl5LU1NLWRkJywgbmV3IERhdGUoeWVhciwgbW9udGgsIGNvdW50X2RheSAtIDEpKTtcbiAgICBsZXQgdXNlcl9hY3QgPSB0aGlzLnVzZXJfYWN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcicpO1xuICAgIGlmICh1c2VyX2FjdC5pc19zYWxlKSB7XG4gICAgICB0aGF0LmdldERhdGFTdGF0aXN0aWNzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=