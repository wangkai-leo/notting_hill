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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3NzY2hlbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRhdGEiLCJwYWdlX29sZF9kYXRhIiwicGFnZV9kYXRhIiwiZW1wbG95ZWVfbGlzdCIsImRlcGFydG1lbnQiLCJvcmRlcl9kYXRlX3N0YXJ0Iiwib3JkZXJfZGF0ZV9lbmQiLCJlbXBsb3llZV9jaGVja19pbmRleCIsInBhZ2Vfc3VjY2Vzc19kYXRhIiwidGFiX2luZGV4Iiwid2F0Y2giLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50cyIsIm50aW5saW5lcGlja2VyYiIsIm50aW5saW5lcGlja2VyIiwibnRpbmxpbmVwaWNrZXJjIiwibnRpbmxpbmVwaWNrZXJhIiwibnRpbmxpbmVwaWNrZXJkIiwibWV0aG9kcyIsIm5hdmlUb0xpc3QiLCJlIiwidmlld190eXBlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ2aWV3IiwiY2hhbm5lbCIsImNvdW50IiwicGFyYW1zIiwiZW1wbG95ZWVfaWQiLCJ3ZXB5Iiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGhhdCIsInN0YXJ0X3RpbWUiLCJlbmRfdGltZSIsInJxIiwiZ2V0IiwicmVzdWx0IiwiJGFwcGx5IiwiY2hhbm5lbF9zdWNjZXNzX3ByZW50X2xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNoYW5uZWxfbmFtZSIsInJlcGxhY2UiLCJjaGFubmVsX3N1Y2Nlc3NfbGlzdCIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJjb3VudF9kYXkiLCJnZXREYXRlIiwiZHQiLCJkYXRlRm9ybWF0IiwidXNlcl9hY3QiLCJnZXRTdG9yYWdlU3luYyIsImlzX3NhbGUiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFD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RDtBQUNGOzs7O0VBcEdnQ3dCLGVBQUtnQyxTOztrQkFBbkJoRSxLIiwiZmlsZSI6InN0YXRpc3RpY3NzY2hlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgcnEgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IGR0IGZyb20gJy4uL2NvbW1vbi91dGlscy9kYXRlJztcbmltcG9ydCBudGlubGluZXBpY2tlciBmcm9tICcuL2NvbW1vbi9udGlubGluZXBpY2tlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgcGFnZV9vbGRfZGF0YTogbnVsbCxcbiAgICBwYWdlX2RhdGE6IG51bGwsXG4gICAgZW1wbG95ZWVfbGlzdDogbnVsbCxcbiAgICBkZXBhcnRtZW50OiAnJyxcbiAgICBvcmRlcl9kYXRlX3N0YXJ0OiAnJyxcbiAgICBvcmRlcl9kYXRlX2VuZDogJycsXG4gICAgZW1wbG95ZWVfY2hlY2tfaW5kZXg6IDAsXG4gICAgcGFnZV9zdWNjZXNzX2RhdGE6IG51bGwsXG4gICAgdGFiX2luZGV4OiAwXG4gIH1cbiAgd2F0Y2ggPSB7XG4gICAgb3JkZXJfZGF0ZV9zdGFydCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwcHBwJylcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgICBudGlubGluZXBpY2tlcmI6IG50aW5saW5lcGlja2VyLFxuICAgIG50aW5saW5lcGlja2VyYzogbnRpbmxpbmVwaWNrZXIsXG4gICAgbnRpbmxpbmVwaWNrZXJhOiBudGlubGluZXBpY2tlcixcbiAgICBudGlubGluZXBpY2tlcmQ6IG50aW5saW5lcGlja2VyLFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbmF2aVRvTGlzdChlKSB7XG4gICAgICBsZXQgdmlld190eXBlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmlldztcbiAgICAgIGxldCBjaGFubmVsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2hhbm5lbDtcbiAgICAgIGxldCBjb3VudCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvdW50O1xuICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHBhcmFtcyA9ICdzdGFydF90aW1lPScgKyB0aGlzLm9yZGVyX2RhdGVfc3RhcnQgKyAnJmVuZF90aW1lPScgKyB0aGlzLm9yZGVyX2RhdGVfZW5kO1xuICAgICAgaWYgKHRoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXggIT0gMCkge1xuICAgICAgICBwYXJhbXMgKz0gJyZlbXBsb3llZV9pZD0nICsgdGhpcy5lbXBsb3llZV9saXN0W3RoaXMuZW1wbG95ZWVfY2hlY2tfaW5kZXhdLmVtcGxveWVlX2lkXG4gICAgICB9XG4gICAgICBpZiAodmlld190eXBlKSB7XG4gICAgICAgIHBhcmFtcyArPSAnJnZpZXdfdHlwZT0nICsgdmlld190eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY2hhbm5lbCcsIGNoYW5uZWwpXG4gICAgICB9XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvY29tbW9uL3N0YXRpc3RpY3NjdXN0b21lcj8nICsgcGFyYW1zXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBnZXRTZXJ2ZXJEYXRhTGlzdCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIHN0YXJ0X3RpbWU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgIGVuZF90aW1lOiB0aGF0Lm9yZGVyX2RhdGVfZW5kXG4gICAgfVxuICAgIGlmICh0aGF0LmVtcGxveWVlX2NoZWNrX2luZGV4ICE9IDApIHtcbiAgICAgIHBhcmFtc1snZW1wbG95ZWVfaWQnXSA9IHRoaXMuZW1wbG95ZWVfbGlzdFt0aGlzLmVtcGxveWVlX2NoZWNrX2luZGV4XS5lbXBsb3llZV9pZFxuICAgIH1cbiAgICBycS5nZXQoJ2dldFNlcnZlckRhdGFMaXN0Jywge1xuICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICB0aGF0LnBhZ2Vfb2xkX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKTtcbiAgICBycS5nZXQoJ2dldFNlcnZlclN1Y2Nlc3NEYXRhTGlzdCcsIHtcbiAgICAgIDIwMDogcmVzdWx0ID0+IHtcbiAgICAgICAgdGhhdC5wYWdlX2RhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsX3N1Y2Nlc3NfcHJlbnRfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2hhbm5lbF9uYW1lID0gZWxlbWVudC5jaGFubmVsX25hbWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LnBhZ2VfZGF0YS5jaGFubmVsX3N1Y2Nlc3NfbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2hhbm5lbF9uYW1lID0gZWxlbWVudC5jaGFubmVsX25hbWUucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LmVtcGxveWVlX2xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLmVtcGxveWVlX2xpc3Q7XG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICB9XG4gICAgfSwgcGFyYW1zKVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdD10aGlzO1xuICAgIFxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IGNvdW50X2RheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX3N0YXJ0ID0gZHQuZGF0ZUZvcm1hdCgneXl5eS1NTS1kZCcsIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKSk7XG4gICAgdGhpcy5vcmRlcl9kYXRlX2VuZCA9IGR0LmRhdGVGb3JtYXQoJ3l5eXktTU0tZGQnLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgY291bnRfZGF5IC0gMSkpO1xuICAgIGxldCB1c2VyX2FjdD13ZXB5LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XG4gICAgY29uc29sZS5sb2coJz8/Pz8/JylcbiAgICBjb25zb2xlLmxvZyh1c2VyX2FjdClcbiAgICBpZih1c2VyX2FjdC5pc19zYWxlKXtcbiAgICAgIHJxLmdldChcImdldERhdGFTdGF0aXN0aWNzXCIsIHtcbiAgICAgICAgMjAwOiByZXN1bHQgPT4ge1xuICAgICAgICAgIHRoYXQucGFnZV9kYXRhID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHN0YXJ0X2RhdGU6IHRoYXQub3JkZXJfZGF0ZV9zdGFydCxcbiAgICAgICAgZW5kX2RhdGU6IHRoYXQub3JkZXJfZGF0ZV9lbmRcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=