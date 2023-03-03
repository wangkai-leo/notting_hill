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
      user_act: null
    }, _this.watch = {
      is_request: function is_request() {
        if (this.is_request) {
          var user_act = this.user_act = _wepy2.default.getStorageSync('user');
          if (user_act.is_sale) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzYWxlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJvcmRlcl9kYXRlX3N0YXJ0IiwidHlwZSIsIlN0cmluZyIsIm9yZGVyX2RhdGVfZW5kIiwiaXNfcmVxdWVzdCIsIkJvb2xlYW4iLCJ0d29XYXkiLCJkYXRhIiwicGFnZV9vbGRfZGF0YSIsInBhZ2VfZGF0YSIsImVtcGxveWVlX2xpc3QiLCJkZXBhcnRtZW50IiwiZW1wbG95ZWVfY2hlY2tfaW5kZXgiLCJwYWdlX3N1Y2Nlc3NfZGF0YSIsInRhYl9pbmRleCIsInVzZXJfYWN0Iiwid2F0Y2giLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19zYWxlIiwiZ2V0RGF0YVN0YXRpc3RpY3MiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJudGlubGluZXBpY2tlcmIiLCJudGlubGluZXBpY2tlciIsIm50aW5saW5lcGlja2VyYyIsIm1ldGhvZHMiLCJoYW5kbGVCZWdpbkNoYW5nZSIsImRhdGUiLCJoYW5kbGVFbmRDaGFuZ2UiLCJuYXZpQ2hhbmdlRHVyYXRpb24iLCJlIiwicGF5IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzdGFydCIsImVuZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuYXZpTWlzc0NvdW50IiwibWFwIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hdmlUb0xpc3QiLCJzdGFydF9kYXRlIiwidGhhdCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwic3VjY2VzcyIsInJxIiwiZ2V0IiwiaGlkZUxvYWRpbmciLCJyZXN1bHQiLCIkYXBwbHkiLCJlbmRfZGF0ZSIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJjb3VudF9kYXkiLCJnZXREYXRlIiwiZHQiLCJkYXRlRm9ybWF0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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cEI0QixhQUFLM0IsaUJBQUw7QUFDRDtBQUNGOzs7O0VBeEdnQ0gsZUFBS21ELFM7O2tCQUFuQnRFLEsiLCJmaWxlIjoic3RhdGlzdGljc3NhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgcnEgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IGR0IGZyb20gJy4uL2NvbW1vbi91dGlscy9kYXRlJztcbmltcG9ydCBudGlubGluZXBpY2tlciBmcm9tICcuL2NvbW1vbi9udGlubGluZXBpY2tlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgb3JkZXJfZGF0ZV9zdGFydDoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBvcmRlcl9kYXRlX2VuZDoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBpc19yZXF1ZXN0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIHBhZ2Vfb2xkX2RhdGE6IG51bGwsXG4gICAgcGFnZV9kYXRhOiBudWxsLFxuICAgIGVtcGxveWVlX2xpc3Q6IG51bGwsXG4gICAgZGVwYXJ0bWVudDogJycsXG4gICAgb3JkZXJfZGF0ZV9zdGFydDogJycsXG4gICAgb3JkZXJfZGF0ZV9lbmQ6ICcnLFxuICAgIGVtcGxveWVlX2NoZWNrX2luZGV4OiAwLFxuICAgIHBhZ2Vfc3VjY2Vzc19kYXRhOiBudWxsLFxuICAgIHRhYl9pbmRleDogMCxcbiAgICB1c2VyX2FjdDogbnVsbFxuICB9XG4gIHdhdGNoID0ge1xuICAgIGlzX3JlcXVlc3QoKSB7XG4gICAgICBpZiAodGhpcy5pc19yZXF1ZXN0KSB7XG4gICAgICAgIGxldCB1c2VyX2FjdCA9IHRoaXMudXNlcl9hY3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgICAgIGlmICh1c2VyX2FjdC5pc19zYWxlKSB7XG4gICAgICAgICAgdGhpcy5nZXREYXRhU3RhdGlzdGljcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfZW5kXCIsXCJudHBpY2tlcnR5cGVcIjpcImRhdGVcIn0sXCJudGlubGluZXBpY2tlcmNcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2hlY2tlZF9uYW1lLnN5bmNcIjpcIm9yZGVyX2RhdGVfc3RhcnRcIixcIm50cGlja2VydHlwZVwiOlwiZGF0ZVwifX07XHJcbiRldmVudHMgPSB7XCJudGlubGluZXBpY2tlcmJcIjp7XCJ2LW9uOmNoYW5nZVwiOlwiaGFuZGxlRW5kQ2hhbmdlXCJ9LFwibnRpbmxpbmVwaWNrZXJjXCI6e1widi1vbjpjaGFuZ2VcIjpcImhhbmRsZUJlZ2luQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgbnRpbmxpbmVwaWNrZXJiOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmM6IG50aW5saW5lcGlja2VyLFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlQmVnaW5DaGFuZ2UoZGF0ZSkge1xuICAgICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ID0gZGF0ZTtcbiAgICAgIHRoaXMuZ2V0RGF0YVN0YXRpc3RpY3MoKTtcbiAgICB9LFxuICAgIGhhbmRsZUVuZENoYW5nZShkYXRlKSB7XG4gICAgICB0aGlzLm9yZGVyX2RhdGVfZW5kID0gZGF0ZTtcbiAgICAgIHRoaXMuZ2V0RGF0YVN0YXRpc3RpY3MoKTtcbiAgICB9LFxuICAgIG5hdmlDaGFuZ2VEdXJhdGlvbihlKSB7XG4gICAgICBsZXQgcGF5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF5O1xuICAgICAgbGV0IHN0YXJ0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3RhcnQ7XG4gICAgICBsZXQgZW5kID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZW5kO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL21hcnJ5L3N0YWR1cmF0aW9uP3N0YXJ0X2RhdGU9JyArIHN0YXJ0ICsgJyZlbmRfZGF0ZT0nICsgZW5kICsgJyZwYXk9JyArIHBheVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBuYXZpTWlzc0NvdW50KGUpIHtcbiAgICAgIGxldCBtYXAgPSBKU09OLnN0cmluZ2lmeShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tYXApO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL21hcnJ5L21pc3Njb3VudD9tYXA9JyArIG1hcFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBuYXZpVG9MaXN0KGUpIHtcbiAgICAgIGxldCBtYXAgPSBKU09OLnN0cmluZ2lmeShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tYXApO1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbW1vbi9zdGF0aXN0aWNzY3VzdG9tZXJsaXN0c2FsZT9tYXA9JyArIG1hcCArICcmc3RhcnRfZGF0ZT0nICsgdGhpcy5zdGFydF9kYXRlICsgJyZlbmRfZGF0ZT0nICsgdGhpcy5vcmRlcl9kYXRlX2VuZFxuICAgICAgfSk7XG4gICAgfSxcbiAgfVxuICBnZXREYXRhU3RhdGlzdGljcygpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcbiAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxuICAgICAgc3VjY2VzczogcmVzID0+IHsgfVxuICAgIH0pO1xuICAgIHJxLmdldChcImdldERhdGFTdGF0aXN0aWNzXCIsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xuICAgICAgICB0aGF0LnBhZ2VfZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgc3RhcnRfZGF0ZTogdGhhdC5vcmRlcl9kYXRlX3N0YXJ0LFxuICAgICAgZW5kX2RhdGU6IHRoYXQub3JkZXJfZGF0ZV9lbmRcbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IGNvdW50X2RheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKSk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgY291bnRfZGF5IC0gMSkpO1xuICAgIGxldCB1c2VyX2FjdCA9IHRoaXMudXNlcl9hY3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgaWYgKHVzZXJfYWN0LmlzX3NhbGUpIHtcbiAgICAgIHRoYXQuZ2V0RGF0YVN0YXRpc3RpY3MoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==